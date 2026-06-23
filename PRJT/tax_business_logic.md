# 🤖 Project: 1초 세금비서 (1-sec-tax-assistant)
## Task: FastAPI 세금 계산 로직 및 세복이 경고 시스템 구현

당신은 최고의 파이썬 백엔드 개발자입니다. `db/tax_assistant.db`에서 불러온 사용자의 매출/지출 데이터를 바탕으로 세금을 계산하는 `logic/tax_calc.py` 파일을 작성해 주세요. 아래의 [비즈니스 룰]을 완벽하게 코드에 반영해야 합니다.

### 1. 세무 비즈니스 룰 (Business Rules)

**Rule A: 부가가치세 (VAT) 룰**
* 2026년 기준, 연 매출 1억 400만 원 미만은 '간이과세자', 그 이상은 '일반과세자'로 분류합니다.
* 일반과세자의 부가세는 `(매출액 * 10%) - (적격증빙 매입액 * 10%)`로 단순 계산합니다. (MVP 버전 기준)

**Rule B: 필요경비 인정 룰 & 세복이 경고 (Seboki Warning)**
* 지출 내역 중 '증빙 종류(proof_type)'가 `세금계산서`, `계산서`, `신용카드`, `현금영수증`인 경우에만 정상적인 '적격증빙'으로 보아 필요경비에 100% 합산합니다.
* **[중요] 세복이 경고 시스템:** 만약 지출 건 중 증빙 종류가 `간이영수증`이거나 `증빙없음`인데 금액이 **30,000원**을 초과한다면, 비용 처리가 부인될 위험이 있습니다. 
* 이때 프론트엔드로 보낼 `seboki_warnings` 배열에 다음과 같은 챗봇용 경고 메시지를 추가하세요:
  > *"앗 사장님! [지출처]에서 쓰신 [금액]원은 적격증빙이 없어서 비용 처리가 어려울 수 있어요. 다음부턴 꼭 현금영수증이나 카드를 써주세요! 😢"*

**Rule C: 노란우산공제 룰**
* 사용자가 입력한 '노란우산공제 납입액'에 대하여 한도를 적용합니다.
* 사업소득금액(매출 - 필요경비)이 4,000만 원 이하인 경우 최대 5,000,000원까지 소득공제로 빼줍니다.
* 4,000만 원 초과 ~ 1억 원 이하인 경우 최대 3,000,000원까지만 빼줍니다.

---

### 2. 작성해야 할 코드 (`logic/tax_calc.py`)

위 룰을 바탕으로 FastAPI에서 쉽게 가져다 쓸 수 있도록 `tax_calc.py`를 작성해 주세요. 코드는 다음 구조를 따라야 합니다.

```python
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
    # ... (AI가 작성할 부분) ...

    # [Rule A] 부가가치세 계산 로직 작성
    # ... (AI가 작성할 부분) ...

    # [Rule C] 노란우산공제 한도 계산 로직 작성
    # ... (AI가 작성할 부분) ...

    # 최종 종합소득세 과세표준 로직 작성
    # ... (AI가 작성할 부분) ...

    # 최종 결과 반환 형식
    return {
        "estimated_vat": estimated_vat,
        "valid_expenses_total": valid_expenses,
        "taxable_income": taxable_income,
        "seboki_warnings": seboki_warnings # 프론트엔드로 전달됨
    }