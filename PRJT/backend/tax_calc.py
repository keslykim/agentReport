from pydantic import BaseModel
from typing import List, Dict, Any

# 1. 데이터 모델 정의 (DB에서 넘어오는 데이터 형태)
class Receipt(BaseModel):
    id: int
    store_name: str     # 지출처 (예: 광운문구)
    amount: int         # 금액
    proof_type: str     # 증빙 종류 (신용카드, 간이영수증 등)

class TaxInputData(BaseModel):
    total_revenue: int
    receipts: List[Receipt]
    yellow_umbrella_paid: int # 노란우산공제 기납입액

# 2. 메인 계산 함수
def calculate_estimated_tax(data: TaxInputData) -> Dict[str, Any]:
    """
    매출과 영수증 데이터를 받아 예상 세금과 세복이 챗봇의 피드백을 반환합니다.
    """
    valid_expenses = 0
    seboki_warnings = []
    
    # [Rule B] 필요경비 분석 및 세복이 경고 생성 로직 작성
    # 지출 내역 중 '증빙 종류(proof_type)'가 '세금계산서', '계산서', '신용카드', '현금영수증'인 경우에만 
    # 정상적인 '적격증빙'으로 보아 필요경비에 100% 합산합니다.
    # [중요] 세복이 경고 시스템: 만약 지출 건 중 증빙 종류가 '간이영수증'이거나 '증빙없음'인데 
    # 금액이 30,000원을 초과한다면, 비용 처리가 부인될 위험이 있습니다.
    for receipt in data.receipts:
        pt = receipt.proof_type.strip() if receipt.proof_type else "증빙없음"
        if pt in ["세금계산서", "계산서", "신용카드", "현금영수증"]:
            valid_expenses += receipt.amount
        elif pt in ["간이영수증", "증빙없음"]:
            if receipt.amount > 30000:
                warning_msg = f"앗 사장님! {receipt.store_name}에서 쓰신 {receipt.amount:,}원은 적격증빙이 없어서 비용 처리가 어려울 수 있어요. 다음부턴 꼭 현금영수증이나 카드를 써주세요! 😢"
                seboki_warnings.append(warning_msg)

    # [Rule A] 부가가치세 계산 로직 작성
    # 2026년 기준, 연 매출 1억 400만 원 미만은 '간이과세자', 그 이상은 '일반과세자'로 분류합니다.
    # 일반과세자의 부가세는 (매출액 * 10%) - (적격증빙 매입액 * 10%)로 단순 계산합니다. (MVP 버전 기준)
    if data.total_revenue < 104000000:
        estimated_vat = 0
    else:
        # 일반과세자의 부가세 = (매출액 * 10%) - (적격증빙 매입액 * 10%)
        # 적격증빙 매입액은 valid_expenses 입니다.
        estimated_vat = max(0, int(data.total_revenue * 0.1 - valid_expenses * 0.1))

    # [Rule C] 노란우산공제 한도 계산 로직 작성
    # 사업소득금액 = 매출 - 필요경비
    business_income = data.total_revenue - valid_expenses
    
    if business_income <= 40000000:
        deduction_limit = 5000000
    elif business_income <= 100000000:
        deduction_limit = 3000000
    else:
        deduction_limit = 2000000
        
    yellow_umbrella_deduction = min(data.yellow_umbrella_paid, deduction_limit)

    # 최종 종합소득세 과세표준 로직 작성
    # 과세표준 = 사업소득금액 - 노란우산공제 기납입액(한도 적용)
    taxable_income = max(0, business_income - yellow_umbrella_deduction)

    # 최종 결과 반환 형식
    return {
        "estimated_vat": estimated_vat,
        "valid_expenses_total": valid_expenses,
        "taxable_income": taxable_income,
        "seboki_warnings": seboki_warnings # 프론트엔드로 전달됨
    }
