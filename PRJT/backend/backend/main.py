import os
import sqlite3
import time
import re
from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI

# .env 파일에서 환경변수 로드
load_dotenv()

app = FastAPI(title="소상공인 1초 세금비서 API")

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DB_DIR = os.path.join(BASE_DIR, "db")
os.makedirs(DB_DIR, exist_ok=True)
DB_FILE = os.path.join(DB_DIR, "tax_assistant.db")

# 데이터베이스 초기화 함수
def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    # 지출/소득 장부 테이블
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT NOT NULL,
            summary TEXT NOT NULL,
            amount INTEGER NOT NULL,
            type TEXT NOT NULL, -- 'income'(소득) 또는 'expense'(지출)
            category TEXT NOT NULL, -- 'business'(사업용) 또는 'personal'(개인용)
            proof_type TEXT DEFAULT '신용카드'
        )
    """)
    # 기존 데이터베이스에 proof_type 컬럼이 없는 경우를 위한 마이그레이션
    try:
        cursor.execute("ALTER TABLE transactions ADD COLUMN proof_type TEXT DEFAULT '신용카드'")
    except sqlite3.OperationalError:
        pass

    # 세금 신고 이력 테이블
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS tax_filings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            period TEXT NOT NULL,
            business_name TEXT NOT NULL,
            business_reg_no TEXT NOT NULL,
            representative TEXT NOT NULL,
            revenue INTEGER NOT NULL,
            expense INTEGER NOT NULL,
            calculated_tax INTEGER NOT NULL,
            created_at TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

init_db()

# OpenAI 클라이언트 초기화 (API Key가 있을 경우만)
api_key = os.getenv("OPENAI_API_KEY")
openai_client = OpenAI(api_key=api_key) if api_key and "your_openai_api_key" not in api_key else None

# AI 분류 에이전트 (Tax Expert Agent)
def classify_transaction(summary: str, amount: int) -> str:
    """
    지출 내역의 적요(summary)와 금액을 보고 '사업용' 또는 '개인용'으로 분류합니다.
    OpenAI API Key가 설정되어 있으면 실제 AI 분석을 사용하고, 없으면 단순 규칙 기반으로 분류합니다.
    """
    if openai_client:
        try:
            response = openai_client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": (
                        "너는 소상공인을 돕는 세무 전문 AI 비서 '세복이'다. "
                        "주어진 지출 내역(적요, 금액)을 분석하여, 이 지출이 사업에 필요한 '사업용'(절세 가능) 지출인지, "
                        "아니면 개인적인 용도로 쓰인 '개인용' 지출인지 판단해야 한다.\n"
                        "답변은 반드시 '사업용' 또는 '개인용' 둘 중 하나의 단어로만 대답해라."
                    )},
                    {"role": "user", "content": f"지출 내역: 적요='{summary}', 금액={amount}원"}
                ],
                max_tokens=5,
                temperature=0.0
            )
            result = response.choices[0].message.content.strip()
            if "사업용" in result:
                return "business"
            elif "개인용" in result:
                return "personal"
        except Exception as e:
            print(f"OpenAI API 호출 에러: {e}, 룰 기반 분류로 폴백합니다.")
    
    # 룰 기반 단순 분류 (OpenAI API 미설정 또는 에러 발생 시)
    personal_keywords = ["마트", "백화점", "병원", "약국", "학원", "의류", "뷰티", "네일", "카페", "택시"]
    for kw in personal_keywords:
        if kw in summary:
            return "personal"
    return "business"  # 기본값은 사업용으로 분류하여 최대한 절세를 돕도록 함


# --- API 엔드포인트 ---

@app.get("/api/dashboard")
def get_dashboard():
    """
    메인 대시보드에서 필요로 하는 요약 통계를 제공합니다.
    """
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    # 전체 거래 내역 조회
    cursor.execute("SELECT * FROM transactions")
    rows = cursor.fetchall()
    
    expenses = {"business": 0, "personal": 0}
    incomes_sum = 0
    receipts_list = []
    
    from backend.tax_calc import Receipt, calculate_estimated_tax, TaxInputData
    
    for row in rows:
        if row["type"] == "expense":
            cat = row["category"]
            expenses[cat] = expenses.get(cat, 0) + row["amount"]
            # 세금 계산에는 사업용 지출만 포함시킵니다.
            if cat == "business":
                proof = row["proof_type"] if ("proof_type" in row.keys() and row["proof_type"]) else "신용카드"
                receipts_list.append(Receipt(
                    id=row["id"],
                    store_name=row["summary"],
                    amount=row["amount"],
                    proof_type=proof
                ))
        elif row["type"] == "income":
            incomes_sum += row["amount"]
            
    total_expense = expenses["business"] + expenses["personal"]
    
    # 비율 계산 (지출이 없을 경우 기본값 사업용 75%, 개인용 25% 시연 데이터 사용)
    if total_expense > 0:
        business_ratio = round((expenses["business"] / total_expense) * 100)
        personal_ratio = 100 - business_ratio
    else:
        business_ratio = 75
        personal_ratio = 25
        
    recent_count = len(rows)
    
    # 매출액이 0인 경우 데모를 위해 초기 연 매출 기본값 124,500,000원으로 설정
    total_revenue = incomes_sum if incomes_sum > 0 else 124500000
    
    # 노란우산공제 기납입액 데모 기본값 3,000,000원
    tax_input = TaxInputData(
        total_revenue=total_revenue,
        receipts=receipts_list,
        yellow_umbrella_paid=3000000
    )
    
    tax_result = calculate_estimated_tax(tax_input)
    
    # 예상 세금: 부가세 + 종합소득세(과세표준 * 10% 단순화 적용)
    # 데이터가 아예 없다면 초기 시연값 1,245,000원 출력
    if recent_count == 0:
        expected_tax = 1245000
    else:
        expected_tax = tax_result["estimated_vat"] + int(tax_result["taxable_income"] * 0.1)
        
    conn.close()
    
    return {
        "expected_tax": expected_tax,
        "business_ratio": business_ratio,
        "personal_ratio": personal_ratio,
        "recent_count": recent_count,
        "d_day": "10월 15일",
        "estimated_vat": tax_result["estimated_vat"],
        "valid_expenses_total": tax_result["valid_expenses_total"],
        "taxable_income": tax_result["taxable_income"],
        "seboki_warnings": tax_result["seboki_warnings"]
    }


@app.get("/api/transactions")
def get_transactions():
    """
    전체 장부 내역을 반환합니다.
    """
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM transactions ORDER BY date DESC, id DESC")
    rows = cursor.fetchall()
    conn.close()
    
    return [dict(row) for row in rows]


@app.post("/api/connect-accounts")
def connect_accounts():
    """
    '내 계좌 연결하기' 시뮬레이션 API
    2초 딜레이를 주어 로딩 효과를 주고, 모의 거래 데이터 14건을 삽입합니다.
    """
    time.sleep(2)  # 시연용 2초 대기
    
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    # 기존 데이터 삭제 (시연 리셋)
    cursor.execute("DELETE FROM transactions")
    
    # 모의 거래 내역 14건 삽입 (10건 사업용, 4건 개인용)
    mock_data = [
        ("2026-06-19", "농협하나로마트 식자재", 450000, "expense", "business", "신용카드"),
        ("2026-06-18", "구글 마케팅 광고비", 120000, "expense", "business", "신용카드"),
        ("2026-06-18", "SK에너지 주유소 (배달용)", 75000, "expense", "business", "신용카드"),
        ("2026-06-17", "스타벅스 커피 (개인)", 12500, "expense", "personal", "신용카드"),
        ("2026-06-17", "중부세무서 부가세 납부", 540000, "expense", "business", "세금계산서"),
        ("2026-06-16", "이마트 개인 장보기", 89000, "expense", "personal", "신용카드"),
        ("2026-06-15", "쿠팡비즈 사무실 비품", 45000, "expense", "business", "간이영수증"), # Over 30k -> warning!
        ("2026-06-15", "당근마켓 광고비", 30000, "expense", "business", "신용카드"),
        ("2026-06-14", "김밥천국 점심식사", 9000, "expense", "business", "간이영수증"), # Under 30k -> no warning
        ("2026-06-13", "개인 택시 요금", 18000, "expense", "personal", "신용카드"),
        ("2026-06-12", "가게 월세 (임대료)", 1000000, "expense", "business", "세금계산서"),
        ("2026-06-11", "네이버 스마트스토어 정산", 3500000, "income", "business", "신용카드"),
        ("2026-06-10", "올리브영 화장품", 32000, "expense", "personal", "신용카드"),
        ("2026-06-09", "퀵서비스 오토바이 배송", 25000, "expense", "business", "증빙없음")
    ]
    
    cursor.executemany("""
        INSERT INTO transactions (date, summary, amount, type, category, proof_type)
        VALUES (?, ?, ?, ?, ?, ?)
    """, mock_data)
    
    conn.commit()
    conn.close()
    
    return {"status": "success", "message": "14건의 거래 내역이 연동되었습니다."}


@app.post("/api/upload-receipt")
def upload_receipt(
    file: UploadFile = File(...),
    summary: str = Form("모의 영수증 지출"),
    amount: int = Form(50000)
):
    """
    '종이 영수증 바로 촬영하기' 시뮬레이션 API
    업로드된 파일 이름이나 파라미터를 읽고 AI 에이전트를 통해 지출을 분류한 뒤 DB에 추가합니다.
    """
    # 실제 영수증 업로드 시 파일명 등을 기반으로 적요 파싱하는 척 시뮬레이션
    filename = file.filename
    parsed_summary = summary
    
    # 시연 편의를 위해 파일명에 식자재, 마트 등이 들어있으면 적요로 사용
    if "식자재" in filename or "식재료" in filename:
        parsed_summary = "도소매 식재료 구입"
        amount = 50000
    elif "주유" in filename:
        parsed_summary = "화물차 주유소 지출"
        amount = 65000
    elif "마트" in filename:
        parsed_summary = "홈플러스 개인 마트장보기"
        amount = 42000
        
    # AI 지출 분류 수행
    category = classify_transaction(parsed_summary, amount)
    category_kr = "사업용 (절세 대상)" if category == "business" else "개인용 (공제 제외)"
    
    # 증빙 유형 결정
    proof_type = "신용카드"
    if "간이" in filename or "간이" in parsed_summary:
        proof_type = "간이영수증"
    elif "세금" in filename or "계산서" in filename or "세금" in parsed_summary or "계산서" in parsed_summary:
        proof_type = "세금계산서"
    elif "현금" in filename or "현금" in parsed_summary:
        proof_type = "현금영수증"
    elif "증빙없음" in filename or "무증빙" in filename or "증빙없음" in parsed_summary:
        proof_type = "증빙없음"
        
    # DB 저장
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    today_str = time.strftime("%Y-%m-%d")
    cursor.execute("""
        INSERT INTO transactions (date, summary, amount, type, category, proof_type)
        VALUES (?, ?, ?, 'expense', ?, ?)
    """, (today_str, parsed_summary, amount, category, proof_type))
    conn.commit()
    conn.close()
    
    return {
        "status": "success",
        "summary": parsed_summary,
        "amount": amount,
        "category": category,
        "category_kr": category_kr,
        "message": f"'{parsed_summary}' {amount:,}원이 {category_kr}으로 분류되어 장부에 등록되었습니다!"
    }


@app.delete("/api/transactions/{transaction_id}")
def delete_transaction(transaction_id: int):
    """
    거래 내역 삭제 API
    """
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM transactions WHERE id = ?", (transaction_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="거래 내역을 찾을 수 없습니다.")
    
    cursor.execute("DELETE FROM transactions WHERE id = ?", (transaction_id,))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "거래 내역이 성공적으로 삭제되었습니다."}


import base64
import json
import random

def extract_receipt_details_ocr(file_bytes: bytes) -> dict:
    """
    RapidOCR을 사용하여 영수증 이미지 바이트에서 상호명(사용처)과 금액을 로컬에서 추출합니다.
    """
    try:
        from rapidocr_onnxruntime import RapidOCR
        engine = RapidOCR()
        ocr_result, _ = engine(file_bytes)
        
        if not ocr_result:
            return None
            
        lines = [item[1].strip() for item in ocr_result if item and len(item) > 1]
        if not lines:
            return None
            
        # 1. 금액(Amount) 찾기
        amount = None
        potential_amounts = []
        
        # 총금액/합계 지시 키워드 정의
        total_keywords = ["합계", "결제금액", "합 계", "총금액", "받을금액", "승인금액", "총계", "금액", "원", "total", "amount", "charge", "pay"]
        minus_keywords = ["부가세", "과세", "면세", "할인", "거스름", "받은금액", "과세물품", "세액", "단가", "수량"]

        for idx, line in enumerate(lines):
            # 사업자등록번호, 전화번호, 날짜 등이 포함된 라인은 금액 추출에서 제외
            if re.search(r'\d{3}-\d{2}-\d{5}', line) or "등록번호" in line:
                continue
            if re.search(r'\d{2,4}-\d{3,4}-\d{4}', line) or "전화" in line or "Tel" in line or "T." in line:
                continue
            if re.search(r'\d{4}[-/.]\d{2}[-/.]\d{2}', line) or "대표자" in line:
                continue

            # 해당 라인에서 숫자 패턴 매칭
            numbers = re.findall(r'\d[\d,.\s]*\d|\d', line)
            for num_str in numbers:
                clean_num = int(re.sub(r'[^\d]', '', num_str))
                if 100 <= clean_num <= 10000000:
                    weight = 0
                    # 같은 라인에 total 키워드가 포함된 경우 대폭 우대
                    if any(k in line.lower() for k in total_keywords):
                        weight += 50
                        # 결제에 직결된 키워드는 가중치 최고점 부여
                        if any(k in line.lower() for k in ["합계", "결제", "총금액", "받을금액", "승인금액", "total"]):
                            weight += 50
                    # 주변 라인(바로 이전 라인)에 합계/total 키워드가 있었는지 검사
                    if idx > 0 and any(k in lines[idx-1].lower() for k in ["합계", "결제", "총금액", "받을금액", "승인금액", "total"]):
                        weight += 80
                    
                    # 할인, 부가세, 단가 등 세부 항목 키워드가 섞여 있으면 가중치 감점
                    if any(k in line.lower() for k in minus_keywords):
                        weight -= 30
                        
                    potential_amounts.append((clean_num, weight))
        
        if potential_amounts:
            # 가중치가 높은 순서로 정렬하고, 가중치가 같다면 더 큰 금액을 우선
            potential_amounts.sort(key=lambda x: (x[1], x[0]), reverse=True)
            amount = potential_amounts[0][0]
            
        # 2. 상호명(Store Name) 찾기
        summary = None
        
        # 우선 순위 1: 명시적인 가맹점명/매장명/상호명 패턴 찾기 (첫 15라인 내에서 탐색)
        for line in lines[:15]:
            m = re.search(r'(?:가맹점명|가맹점|매장명|상호명|상호|판매점|업체명)\s*[:\]호]?\s*([^\s].*)', line)
            if m:
                candidate = m.group(1).strip()
                # 불필요한 특수문자 및 괄호쌍 제거 (예: (주)코리아세븐 -> 코리아세븐)
                candidate = re.sub(r'[\(\[\{].*?[\)\]\}]', '', candidate).strip()
                candidate = re.sub(r'[:\]\}\)]', '', candidate).strip()
                if candidate and candidate not in ["영수증", "지출", "신용카드", "승인전표", "매출전표", "고객용"]:
                    summary = candidate
                    break
        
        # 우선 순위 2: 명시적 패턴이 없는 경우, 첫 6라인 중 필터링을 통과한 첫 번째 라인을 상호명으로 간주
        if not summary:
            store_candidates = []
            for line in lines[:6]:
                if re.search(r'\d{3}-\d{2}-\d{5}', line) or "등록번호" in line:
                    continue
                if re.search(r'\d{2,4}-\d{3,4}-\d{4}', line) or "전화" in line or "Tel" in line or "T." in line:
                    continue
                if re.search(r'\d{4}[-/.]\d{2}[-/.]\d{2}', line) or "주소" in line or "대표자" in line or "일자" in line:
                    continue
                if re.match(r'^[\d\s\-,./:]+$', line):
                    continue
                if any(k in line for k in ["단가", "수량", "금액", "품명", "메뉴", "합계", "부가세", "승인"]):
                    continue
                if any(k in line.lower() for k in ["http", "www", ".com", ".co.kr"]):
                    continue
                if any(k in line for k in ["영수증", "신용카드", "승인전표", "매출전표", "고객용", "1등", "감사합니다", "환영합니다", "어서오세요"]):
                    continue
                
                # 불필요한 주식회사 접두사/접미사 등 정제
                cleaned = re.sub(r'[\(\[\{].*?[\)\]\}]', '', line).strip()
                cleaned = re.sub(r'주식회사', '', cleaned).strip()
                if len(cleaned) >= 2:
                    store_candidates.append(cleaned)
                
            if store_candidates:
                summary = store_candidates[0]
            
        return {
            "summary": summary if summary else "영수증 지출",
            "amount": amount if amount else 50000
        }
    except Exception as e:
        print(f"Local OCR 파싱 실패: {e}")
        return None


async def analyze_receipt_image(file: UploadFile) -> dict:
    """
    OpenAI Vision API, 로컬 OCR(RapidOCR) 또는 규칙 기반 폴백을 사용하여 영수증 이미지의 적요와 금액을 스캔합니다.
    """
    filename = file.filename
    file_bytes = await file.read()
    
    # 1. OpenAI Vision API가 설정된 경우 우선 사용
    if openai_client:
        try:
            base64_image = base64.b64encode(file_bytes).decode('utf-8')
            mime_type = "image/jpeg"
            if filename.lower().endswith(".png"):
                mime_type = "image/png"
            elif filename.lower().endswith(".webp"):
                mime_type = "image/webp"
            
            response = openai_client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": (
                                    "Analyze this receipt image. Extract the exact business/store/merchant name (사용처 또는 상호명, e.g., '스타벅스', '이마트', 'SK에너지 주유소'). "
                                    "Do not add any extra words like '지출 증빙' or general descriptions, just output the pure merchant name. "
                                    "Also extract the total payment amount. "
                                    "Also extract the proof type. The possible values are: '세금계산서', '계산서', '신용카드', '현금영수증', '간이영수증', '증빙없음'. "
                                    "Response MUST be strictly a JSON object with keys: {\"summary\": \"상호명\", \"amount\": 금액(숫자), \"proof_type\": \"증빙종류\"}. "
                                    "Do not wrap it in markdown code blocks. Return the raw JSON."
                                )
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": f"data:{mime_type};base64,{base64_image}"
                                }
                            }
                        ]
                    }
                ],
                max_tokens=150,
                temperature=0.0
            )
            result_text = response.choices[0].message.content.strip()
            if result_text.startswith("```"):
                result_text = result_text.split("```")[1]
                if result_text.startswith("json"):
                    result_text = result_text[4:]
            data = json.loads(result_text.strip())
            summary = data.get("summary", "식자재마트")
            amount = int(data.get("amount", 50000))
            proof_type = data.get("proof_type", "신용카드")
            return {"summary": summary, "amount": amount, "proof_type": proof_type}
        except Exception as e:
            print(f"OpenAI Vision API 분석 실패: {e}, 로컬 OCR 분석 진행")
 
    # 2. 로컬 OCR 엔진을 사용하여 실제 영수증 이미지 분석 시도
    ocr_result = extract_receipt_details_ocr(file_bytes)
    if ocr_result and ocr_result["summary"] != "영수증 지출":
        # 파일 이름에 수치가 들어있는 경우 금액 보정
        amount_match = re.search(r'\d+', filename)
        if amount_match and (not ocr_result["amount"] or ocr_result["amount"] == 50000):
            ocr_result["amount"] = int(amount_match.group())
            
        proof_type = "신용카드"
        if "간이" in filename or "간이" in ocr_result["summary"]:
            proof_type = "간이영수증"
        elif "세금" in filename or "계산서" in filename or "세금" in ocr_result["summary"] or "계산서" in ocr_result["summary"]:
            proof_type = "세금계산서"
        elif "현금" in filename or "현금" in ocr_result["summary"]:
            proof_type = "현금영수증"
        elif "증빙없음" in filename or "무증빙" in filename or "증빙없음" in ocr_result["summary"]:
            proof_type = "증빙없음"
            
        ocr_result["proof_type"] = proof_type
        return ocr_result

    # 3. 로컬 OCR 분석이 완벽하지 않거나 실패한 경우의 규칙 기반 폴백
    amount = ocr_result["amount"] if ocr_result and ocr_result["amount"] else None
    
    amount_match = re.search(r'\d+', filename)
    if amount_match and not amount:
        amount = int(amount_match.group())

    clean_name = re.sub(r'[\d_\-\(\)\s\.]+원?', '', filename.split('.')[0]).strip()
    if clean_name and clean_name not in ["영수증", "지출", "신용카드", "현금영수증", "매출전표", "영수증-"]:
        parsed_summary = clean_name
    elif ocr_result and ocr_result["summary"] and ocr_result["summary"] != "영수증 지출":
        parsed_summary = ocr_result["summary"]
    else:
        parsed_summary = "식자재마트"
    
    if "식자재" in filename or "식재료" in filename:
        parsed_summary = "하나로마트 식자재"
        if not amount:
            amount = 58200
    elif "주유" in filename:
        parsed_summary = "SK에너지 주유소"
        if not amount:
            amount = 65000
    elif "마트" in filename:
        parsed_summary = "홈플러스 마트"
        if not amount:
            amount = 42800
        
    if not amount:
        amount = random.choice([12500, 28000, 39500, 84000, 126000])
        
    proof_type = "신용카드"
    if "간이" in filename or "간이" in parsed_summary:
        proof_type = "간이영수증"
    elif "세금" in filename or "계산서" in filename or "세금" in parsed_summary or "계산서" in parsed_summary:
        proof_type = "세금계산서"
    elif "현금" in filename or "현금" in parsed_summary:
        proof_type = "현금영수증"
    elif "증빙없음" in filename or "무증빙" in filename or "증빙없음" in parsed_summary:
        proof_type = "증빙없음"
        
    return {"summary": parsed_summary, "amount": amount, "proof_type": proof_type}


from typing import List

@app.post("/api/upload-receipts")
async def upload_receipts(
    files: List[UploadFile] = File(...)
):
    """
    다중 영수증 업로드 및 AI 분석 API (DB 저장 안 함)
    """
    results = []
    today_str = time.strftime("%Y-%m-%d")
    
    for file in files:
        # 비동기로 이미지 스캔 및 파싱 실행
        analysis = await analyze_receipt_image(file)
        parsed_summary = analysis["summary"]
        amount = analysis["amount"]
        proof_type = analysis.get("proof_type", "신용카드")
            
        category = classify_transaction(parsed_summary, amount)
        category_kr = "사업용 (절세 대상)" if category == "business" else "개인용 (공제 제외)"
        
        results.append({
            "filename": file.filename,
            "date": today_str,
            "summary": parsed_summary,
            "amount": amount,
            "type": "expense",
            "category": category,
            "category_kr": category_kr,
            "proof_type": proof_type
        })
        
    return {
        "status": "success",
        "results": results,
        "message": f"{len(files)}건의 영수증 분석이 완료되었습니다."
    }


class TransactionCreate(BaseModel):
    date: str
    summary: str
    amount: int
    type: str
    category: str
    proof_type: str = "신용카드"

@app.post("/api/transactions/bulk")
def create_transactions_bulk(transactions: List[TransactionCreate]):
    """
    분석 완료된 영수증 내역들을 일괄적으로 DB에 저장합니다.
    """
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    for tx in transactions:
        cursor.execute("""
            INSERT INTO transactions (date, summary, amount, type, category, proof_type)
            VALUES (?, ?, ?, ?, ?, ?)
        """, (tx.date, tx.summary, tx.amount, tx.type, tx.category, tx.proof_type))
    conn.commit()
    conn.close()
    return {"status": "success", "message": f"{len(transactions)}건의 내역이 장부에 성공적으로 저장되었습니다."}


class TaxFilingCreate(BaseModel):
    period: str
    business_name: str
    business_reg_no: str
    representative: str
    revenue: int
    expense: int
    calculated_tax: int


@app.post("/api/tax-filings")
def create_tax_filing(filing: TaxFilingCreate):
    """
    세금 신고 내역을 저장합니다.
    """
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    today_str = time.strftime("%Y-%m-%d %H:%M:%S")
    cursor.execute("""
        INSERT INTO tax_filings (period, business_name, business_reg_no, representative, revenue, expense, calculated_tax, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (filing.period, filing.business_name, filing.business_reg_no, filing.representative, filing.revenue, filing.expense, filing.calculated_tax, today_str))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "세금 신고가 성공적으로 완료되었습니다."}


@app.get("/api/tax-filings")
def get_tax_filings():
    """
    전체 세금 신고 이력을 반환합니다.
    """
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tax_filings ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]


# 프론트엔드 정적 파일 서빙 등록
# html, js, css 등 정적 파일 폴더 서빙
os.makedirs(os.path.join(BASE_DIR, "html"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "js"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "css"), exist_ok=True)

app.mount("/js", StaticFiles(directory=os.path.join(BASE_DIR, "js")), name="js")
app.mount("/css", StaticFiles(directory=os.path.join(BASE_DIR, "css")), name="css")
app.mount("/html", StaticFiles(directory=os.path.join(BASE_DIR, "html")), name="html")

@app.get("/chat_icon.png")
def get_chat_icon():
    """
    챗봇 아이콘 이미지 서빙
    """
    return FileResponse(os.path.join(BASE_DIR, "chat_icon.png"))

@app.get("/seboki_mascot.png")
def get_seboki_mascot():
    """
    세복이 이미지 서빙
    """
    return FileResponse(os.path.join(BASE_DIR, "seboki_mascot.png"))

@app.get("/seboki2.png")
def get_seboki2():
    """
    세복이2 이미지 서빙
    """
    return FileResponse(os.path.join(BASE_DIR, "seboki2.png"))

@app.get("/seboki1.png")
def get_seboki1():
    """
    세복이1 이미지 서빙
    """
    return FileResponse(os.path.join(BASE_DIR, "seboki1.png"))

@app.get("/main_icon.png")
def get_main_icon():
    """
    메인 마스코트 아이콘 이미지 서빙
    """
    return FileResponse(os.path.join(BASE_DIR, "main_icon.png"))

class ChatbotQuery(BaseModel):
    message: str

@app.post("/api/chatbot")
def post_chatbot(query: ChatbotQuery):
    """
    키워드 매칭 기반 챗봇 API
    """
    qa_path = os.path.join(BASE_DIR, "db", "chatbot_qa.json")
    if not os.path.exists(qa_path):
        return {"answer": "죄송합니다 사장님, 현재 챗봇 데이터베이스를 불러올 수 없습니다. 😢"}
        
    try:
        with open(qa_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            qa_data = data.get("qa_data", [])
    except Exception as e:
        return {"answer": f"데이터 로드 중 오류가 발생했습니다: {str(e)}"}
        
    user_message = query.message.strip()
    
    # 키워드 매칭
    matched_answer = None
    for item in qa_data:
        keywords = item.get("keywords", [])
        for kw in keywords:
            if kw.lower() in user_message.lower():
                matched_answer = item.get("answer")
                break
        if matched_answer:
            break
            
    if not matched_answer:
        matched_answer = "죄송해요 사장님, 말씀하신 내용에 대한 답변을 찾지 못했어요. '부가세', '절세', '식대', '휴대폰', '종소세' 등 세무 관련 단어로 질문해 주시면 친절히 답변 드릴게요! 😢"
        
    return {"answer": matched_answer}

@app.get("/")
def read_root():
    """
    루트 경로 접속 시 index.html 반환
    """
    return FileResponse(os.path.join(BASE_DIR, "index.html"))

@app.get("/main.html")
def read_main():
    """
    메인 페이지 요청 시 html/main.html 반환
    """
    return FileResponse(os.path.join(BASE_DIR, "html", "main.html"))
