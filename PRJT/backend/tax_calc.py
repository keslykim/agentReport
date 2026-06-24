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
    
    # [Rule B] 필요경비 분석 및 세복이 경고 생성 로직
    for receipt in data.receipts:
        pt = receipt.proof_type.strip() if receipt.proof_type else "증빙없음"
        if pt in ["세금계산서", "계산서", "신용카드", "현금영수증"]:
            valid_expenses += receipt.amount
        elif pt in ["간이영수증", "증빙없음"]:
            if receipt.amount > 30000:
                warning_msg = f"앗 사장님! {receipt.store_name}에서 쓰신 {receipt.amount:,}원은 적격증빙이 없어서 비용 처리가 어려울 수 있어요. 다음부턴 꼭 현금영수증이나 카드를 써주세요! 😢"
                seboki_warnings.append(warning_msg)

    # [Rule A] 부가가치세 계산 로직 (세율 10% 일괄 적용)
    estimated_vat = max(0, int(data.total_revenue * 0.1 - valid_expenses * 0.1))

    # [Rule C] 노란우산공제 한도 계산 로직
    business_income = data.total_revenue - valid_expenses
    
    if business_income <= 40000000:
        deduction_limit = 5000000
    elif business_income <= 100000000:
        deduction_limit = 3000000
    else:
        deduction_limit = 2000000
        
    yellow_umbrella_deduction = min(data.yellow_umbrella_paid, deduction_limit)

    # 과세표준 = 사업소득금액 - 노란우산공제 기납입액(한도 적용)
    taxable_income = max(0, business_income - yellow_umbrella_deduction)

    # 💡 [NEW] 종합소득세 산출 (국세청 누진세율 및 누진공제액 적용)
    if taxable_income <= 14000000:
        income_tax = taxable_income * 0.06
    elif taxable_income <= 50000000:
        income_tax = taxable_income * 0.15 - 1260000
    elif taxable_income <= 88000000:
        income_tax = taxable_income * 0.24 - 5760000
    elif taxable_income <= 150000000:
        income_tax = taxable_income * 0.35 - 15440000
    else:
        income_tax = taxable_income * 0.38 - 19940000 # 3억 이하 구간 적용
        
    income_tax = max(0, int(income_tax))

    # 💡 [NEW] 최종 결과 반환 형식 (프론트엔드 모달창에서 쓸 데이터들 추가)
    return {
        "total_revenue": data.total_revenue,               # 전체 매출액
        "valid_expenses_total": valid_expenses,            # 적격증빙 총액
        "estimated_vat": estimated_vat,                    # 예상 부가가치세
        "taxable_income": taxable_income,                  # 예상 과세표준
        "income_tax": income_tax,                          # 예상 종합소득세
        "total_estimated_tax": estimated_vat + income_tax, # 총 예상 세금 합계
        "seboki_warnings": seboki_warnings                 # 세복이 경고 메시지
    }
