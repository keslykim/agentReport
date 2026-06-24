const qnaData = [
    {
        id: 1,
        category: '비용/절세',
        question: "3만 원 초과 간이영수증은 전액 비용 처리가 불가능한가요?",
        answer: "3만 원 초과 거래의 경우 간이영수증이나 증빙 없음으로 처리하면 원칙적으로 경비 처리가 인정되지 않거나, 부득이하게 비용 처리 시 2%의 증빙불성실 가산세가 부과됩니다. 절세를 위해서는 반드시 신용카드 결제전표, 세금계산서, 현금영수증(지출증빙용) 등 적격증빙을 수취해 주셔야 합니다.",
        keywords: ["간이영수증", "비용처리", "영수증", "적격증빙", "가산세", "3만원"]
    },
    {
        id: 2,
        category: '세금/신고',
        question: "부가가치세 신고 기간은 언제인가요?",
        answer: "일반과세자는 1년에 두 번(1월 1일~25일, 7월 1일~25일) 확정 신고 및 납부를 진행합니다. 간이과세자는 1년에 한 번(다음 해 1월 1일~25일) 신고/납부합니다. 법인사업자의 경우 분기별로 연 4회 신고합니다.",
        keywords: ["부가세", "부가가치세", "언제", "신고 기간", "신고일"]
    },
    {
        id: 3,
        category: '비용/절세',
        question: "노란우산공제 제도는 세금 감면에 얼마나 도움이 되나요?",
        answer: "노란우산공제는 소기업·소상공인의 생활 안정을 위한 공제 제도입니다. 사업 소득 금액에 따라 연간 최대 500만 원까지 종합소득세 신고 시 소득공제 혜택을 제공하므로, 소상공인 사장님들께 강력히 추천하는 절세 수단입니다.",
        keywords: ["절세", "세금 줄이는", "노란우산", "공제"]
    },
    {
        id: 4,
        category: '비용/절세',
        question: "직원이 없는 1인 개인사업자인데 대표자 식대도 경비 처리가 되나요?",
        answer: "직원이 없는 1인 개인사업자 대표님 본인의 식대(식사 및 커피)는 원칙적으로 개인 가사 비용으로 취급되어 사업 경비(복리후생비) 처리가 불가능합니다. 단, 직원을 채용하여 인건비 신고를 하고 있다면 직원 식대 및 대표 식대는 복리후생비로 비용 처리가 가능합니다.",
        keywords: ["식대", "밥값", "커피", "대표 식대", "1인"]
    },
    {
        id: 5,
        category: '비용/절세',
        question: "거래처 축의금이나 조의금 등 경조사비는 어떻게 증빙을 증명하나요?",
        answer: "거래처 접대 목적의 경조사비는 적격증빙(카드 등)을 받기 어려우므로 청첩장, 모바일 부고장 캡처, 부고 안내 문자 등을 보관하면 건당 최대 20만 원까지 접대비(경조사비)로 전액 비용 인정됩니다. 장부에 등록하실 때 일시와 거래처명을 명시하고 증빙 자료를 저장해 두세요.",
        keywords: ["축의금", "조의금", "청첩장", "경조사", "부고"]
    },
    {
        id: 6,
        category: '비용/절세',
        question: "사업용 휴대폰 요금과 통신비를 경비 처리하는 방법은 무엇인가요?",
        answer: "이용 중인 통신사 고객센터에 전화를 걸거나 웹사이트를 통해 본인의 사업자등록증을 제출하고 '사업자 지출증빙용 세금계산서' 발급을 신청해 두시면 됩니다. 매달 납부 금액에 대해 세금계산서가 자동 발급되어 부가세 매입세액공제와 종합소득세 비용 처리가 동시에 이루어집니다.",
        keywords: ["핸드폰", "휴대폰", "통신비", "요금", "인터넷"]
    },
    {
        id: 7,
        category: '인건비/운영',
        question: "아르바이트생 인건비 신고 시 3.3% 프리랜서와 근로소득 중 어느 것이 나은가요?",
        answer: "단기 아르바이트나 1회성 용역인 경우 원천세 3.3%를 공제하고 지급하는 프리랜서(사업소득) 신고가 간편합니다. 만약 주 15시간 이상 일하며 장기간 근무하는 정기 알바라면 근로계약 체결 및 4대보험이 적용되는 근로소득 신고를 하시는 것이 원칙이며, 요건 충족 시 일용직 신고도 대안이 될 수 있습니다.",
        keywords: ["알바", "인건비", "3.3%", "프리랜서", "직원", "원천세"]
    },
    {
        id: 8,
        category: '인건비/운영',
        question: "배우자나 자녀 등 가족에게 주는 월급도 사업 경비로 처리할 수 있나요?",
        answer: "가족이 실제로 사업장에 근무하고 장부 및 실제 업무에 기여하고 있다면 인건비 처리가 가능합니다. 이를 위해 가족 근로자와 근로계약서를 작성하고 실제 급여를 통장으로 이체한 내역을 구비해야 하며, 타 직원과 동일하게 세무서에 원천세 신고를 매월 이행해야 합니다.",
        keywords: ["가족", "부인", "남편", "자녀", "월급", "친족"]
    },
    {
        id: 9,
        category: '비용/절세',
        question: "업무용 차량 주유비, 기름값, 주차요금도 전액 비용 인정되나요?",
        answer: "개인사업자 명의 또는 리스/렌트 차량이 사업 업무용으로 쓰인다면 주유비, 하이패스 통행료, 주차료, 차량수리비, 보험료 모두 경비 처리가 가능합니다. 복수의 업무용 차량을 운용하거나 고가의 승용차인 경우 세법상 운행기록부 작성 의무나 한도 규정이 있으니 주의가 필요합니다.",
        keywords: ["자동차", "차량", "주유비", "기름값", "수리비"]
    },
    {
        id: 10,
        category: '세금/신고',
        question: "종합소득세 신고 기한과 기간은 언제인가요?",
        answer: "직전 1년간 얻은 모든 종합소득(사업소득, 근로소득, 이자/배당소득 등)에 대해 매년 5월 1일부터 5월 31일(성실신고대상자는 6월 30일)까지 주소지 관할 세무서에 신고하고 납부하셔야 합니다. 기한 내에 신고하지 않으면 가산세가 가중됩니다.",
        keywords: ["종소세", "종합소득세", "5월", "소득세", "기한"]
    },
    {
        id: 11,
        category: '인건비/운영',
        question: "장사가 잘 안되어 적자(결손)가 났는데도 세금 신고를 해야 하나요?",
        answer: "매우 중요합니다! 적자가 발생했더라도 종합소득세 신고를 간편장부나 복식부기에 의해 성실히 신고하면 '결손금'이 확정됩니다. 이 결손금은 향후 15년간 이월되어, 다음 해나 그 이후에 이익(흑자)이 났을 때 발생한 이익에서 적자액을 차감해 주어 소득세를 엄청나게 절감할 수 있습니다.",
        keywords: ["적자", "손해", "결손금", "결손", "종소세"]
    },
    {
        id: 12,
        category: '인건비/운영',
        question: "간이과세자와 일반과세자의 기준과 세금 차이는 무엇인가요?",
        answer: "연간 매출액(공급대가)이 1억 400만 원 미만일 것으로 예상되면 간이과세자로 등록 및 신고가 가능합니다. 간이과세자는 부가가치세율이 1.5%~4% 수준으로 일반과세자(10%)에 비해 매우 저렴합니다. 다만 세금계산서 발급이 불가능한 일부 구간이 있어 기업 간 거래(B2B)가 주력인 경우 일반과세자가 유리할 수 있습니다.",
        keywords: ["간이과세자", "일반과세자", "차이", "1억", "과세자"]
    }
];

const { useState, useEffect, useRef } = React;

const safeParseJson = async (res) => {
    try {
        const text = await res.text();
        return text ? JSON.parse(text) : {};
    } catch (e) {
        console.warn("JSON parsing failed, returning empty object", e);
        return {};
    }
};

function App() {
    const [dashboard, setDashboard] = useState({
        expected_tax: 0,
        business_ratio: 0,
        personal_ratio: 0,
        recent_count: 0,
        d_day: "10월 15일"
    });
    const [transactions, setTransactions] = useState([]);
    const [isConnecting, setIsConnecting] = useState(false);
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showTaxDetailModal, setShowTaxDetailModal] = useState(false);
    const [showWarningDetailModal, setShowWarningDetailModal] = useState(false);
    const [showReceiptResultModal, setShowReceiptResultModal] = useState(false);
    const [receiptResults, setReceiptResults] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [currentUser, setCurrentUser] = useState(() => {
        const stored = localStorage.getItem('currentUser');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch (e) {
                console.error("Error parsing currentUser", e);
            }
        }
        return {
            business_reg_no: '124-45-67890',
            business_name: '세복상회',
            representative: '김대표',
            email: 'ceo@example.com'
        };
    });
    const fileInputRef = useRef(null);

    const [showLedger, setShowLedger] = useState(false);
    const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' or 'tax-filing'
    const [filings, setFilings] = useState([]);
    const [filingStep, setFilingStep] = useState(1); // 1: Verify, 2: Info & Calculate, 3: Completed
    const [filingForm, setFilingForm] = useState({
        period: '2026년 1기 부가가치세',
        businessName: currentUser.business_name || '세복상회',
        businessRegNo: currentUser.business_reg_no || '124-45-67890',
        representative: currentUser.representative || '김대표',
    });
    const [isFiling, setIsFiling] = useState(false);
    const [lastFilingResult, setLastFilingResult] = useState(null);

    const [qnaSearchQuery, setQnaSearchQuery] = useState('');
    const [qnaActiveCategory, setQnaActiveCategory] = useState('전체');
    const [qnaOpenId, setQnaOpenId] = useState(null);

    const [qnaInputQuestion, setQnaInputQuestion] = useState('');
    const [qnaAnswerResult, setQnaAnswerResult] = useState('');
    const [isQnaLoading, setIsQnaLoading] = useState(false);

    const [showChatbot, setShowChatbot] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { sender: 'seboki', text: '안녕하세요 사장님! 저는 세금을 아껴드리는 세복이 비서예요. 궁금하신 세무 키워드(예: 부가세, 절세, 식대, 알바 등)에 대해 물어보시면 상세히 안내해 드릴게요! 🪙' }
    ]);
    const [chatInput, setChatInput] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages, showChatbot]);

    const getLocalTransactions = () => {
        const val = localStorage.getItem('transactions');
        return val ? JSON.parse(val) : [];
    };

    const setLocalTransactions = (txs) => {
        localStorage.setItem('transactions', JSON.stringify(txs));
    };

    const getLocalFilings = () => {
        const val = localStorage.getItem('tax_filings');
        return val ? JSON.parse(val) : [];
    };

    const setLocalFilings = (fls) => {
        localStorage.setItem('tax_filings', JSON.stringify(fls));
    };

    const calculateLocalDashboard = (txs) => {
        let valid_expenses = 0;
        let seboki_warnings = [];
        let incomes_sum = 0;
        let expenses = { business: 0, personal: 0 };

        txs.forEach(t => {
            if (t.type === 'expense') {
                const cat = t.category;
                expenses[cat] = (expenses[cat] || 0) + t.amount;
                if (cat === 'business') {
                    const pt = (t.proof_type || "증빙없음").trim();
                    if (["세금계산서", "계산서", "신용카드", "현금영수증"].includes(pt)) {
                        valid_expenses += t.amount;
                    } else if (["간이영수증", "증빙없음"].includes(pt)) {
                        if (t.amount > 30000) {
                            const warning_msg = `앗 사장님! ${t.summary}에서 쓰신 ${t.amount.toLocaleString()}원은 적격증빙이 없어서 비용 처리가 어려울 수 있어요. 다음부턴 꼭 현금영수증이나 카드를 써주세요! 😢`;
                            seboki_warnings.push(warning_msg);
                        }
                    }
                }
            } else if (t.type === 'income') {
                incomes_sum += t.amount;
            }
        });

        const total_expense = expenses.business + expenses.personal;
        let business_ratio = 75;
        let personal_ratio = 25;
        if (total_expense > 0) {
            business_ratio = Math.round((expenses.business / total_expense) * 100);
            personal_ratio = 100 - business_ratio;
        }

        const total_revenue = incomes_sum > 0 ? incomes_sum : 124500000;

        let estimated_vat = 0;
        if (total_revenue >= 104000000) {
            estimated_vat = Math.max(0, Math.round(total_revenue * 0.1 - valid_expenses * 0.1));
        }

        const business_income = total_revenue - valid_expenses;
        let deduction_limit = 2000000;
        if (business_income <= 40000000) {
            deduction_limit = 5000000;
        } else if (business_income <= 100000000) {
            deduction_limit = 3000000;
        }
        const yellow_umbrella_deduction = Math.min(3000000, deduction_limit);
        const taxable_income = Math.max(0, business_income - yellow_umbrella_deduction);

        {/*
        let expected_tax = 0;
        if (txs.length > 0) {
            expected_tax = estimated_vat + Math.round(taxable_income * 0.1);
        }
        */}

        let income_tax = 0;
        if (taxable_income <= 14000000) {
            income_tax = taxable_income * 0.06;
        } else if (taxable_income <= 50000000) {
            income_tax = taxable_income * 0.15 - 1260000;
        } else if (taxable_income <= 88000000) {
            income_tax = taxable_income * 0.24 - 5760000;
        } else if (taxable_income <= 150000000) {
            income_tax = taxable_income * 0.35 - 15440000;
        } else {
            income_tax = taxable_income * 0.38 - 19940000;
        }
        income_tax = Math.max(0, Math.round(income_tax));

        const total_estimated_tax = estimated_vat + income_tax;

        return {
            expected_tax: total_estimated_tax, // 하위 호환성을 위해 유지
            total_estimated_tax: total_estimated_tax,
            income_tax: income_tax,
            total_revenue: total_revenue,
            business_ratio,
            personal_ratio,
            recent_count: txs.length,
            d_day: "10월 15일",
            estimated_vat,
            valid_expenses_total: valid_expenses,
            taxable_income,
            seboki_warnings
        };

        return {
            expected_tax,
            business_ratio,
            personal_ratio,
            recent_count: txs.length,
            d_day: "10월 15일",
            estimated_vat,
            valid_expenses_total: valid_expenses,
            taxable_income,
            seboki_warnings
        };
    };

    const localChatbotAnswer = (message) => {
        const qa_data = [
            {
                "keywords": ["간이영수증", "비용처리", "영수증", "적격증빙"],
                "answer": "앗 사장님! 간이영수증은 3만 원까지만 비용 처리가 가능해요. 3만 원이 넘는 금액은 꼭 신용카드나 현금영수증(지출증빙용)을 받아주셔야 세금 폭탄을 피할 수 있어요! 😢"
            },
            {
                "keywords": ["부가세", "부가가치세", "언제", "신고 기간"],
                "answer": "부가가치세 신고 기간이 궁금하시군요! 일반과세자는 1월과 7월, 간이과세자는 1월에 한 번 신고합니다. 기한을 놓치지 않게 제가 미리 알림을 드릴게요! 🪙"
            },
            {
                "keywords": ["절세", "세금 줄이는", "노란우산"],
                "answer": "세금을 줄이는 가장 확실한 방법은 '노란우산공제'예요! 사장님의 소득에 따라 최대 500만 원까지 소득공제 혜택을 받을 수 있답니다. 가입을 적극 추천드려요! 💼"
            },
            {
                "keywords": ["식대", "밥값", "커피", "대표 식대"],
                "answer": "사장님, 직원이 없는 1인 기업이라면 대표님 본인의 밥값은 원칙적으로 비용 처리가 어려워요. 하지만 직원이 있다면 '복리후생비'로 전액 처리 가능합니다! 🍚"
            },
            {
                "keywords": ["축의금", "조의금", "청첩장", "경조사"],
                "answer": "거래처 경조사비는 청첩장이나 부고장(모바일 캡처 포함)만 있어도 건당 최대 20만 원까지 비용 처리가 가능해요. 꼭 캡처해서 모아두세요! 💌"
            },
            {
                "keywords": ["핸드폰", "휴대폰", "통신비", "요금"],
                "answer": "사업용으로 쓰시는 휴대폰 요금도 당연히 비용 처리되죠! 통신사에 전화하셔서 '사업자 지출증빙용'으로 등록해 달라고 하시면 매달 자동으로 처리됩니다. 📱"
            },
            {
                "keywords": ["알바", "인건비", "3.3%", "프리랜서", "직원"],
                "answer": "알바생 인건비를 처리할 때는 3.3%를 떼고 주는 '사업소득' 방식과, 4대보험을 가입하는 '근로소득' 방식이 있어요. 단기 알바라면 보통 3.3%나 일용직 신고를 많이 하십니다! 🧑‍🤝‍🧑"
            },
            {
                "keywords": ["가족", "부인", "남편", "자녀", "월급"],
                "answer": "가족이라도 실제로 매장에서 일을 하고 급여를 이체한 내역이 있다면 당연히 인건비로 비용 처리가 가능합니다. 근로계약서도 꼭 써두시는 센스! 👨‍👩‍👧‍👦"
            },
            {
                "keywords": ["자동차", "차량", "주유비", "기름값"],
                "answer": "업무용으로 쓰는 차량이라면 주유비, 톨게이트비, 수리비 모두 비용 처리 가능해요! 단, 출퇴근용 승용차는 한도가 있으니 꼼꼼히 챙겨야 합니다. 🚗"
            },
            {
                "keywords": ["종소세", "종합소득세", "5월", "소득세"],
                "answer": "종합소득세는 1년 동안 번 돈에 대해 다음 해 '5월 1일부터 31일' 사이에 신고하고 납부하셔야 해요. 1년 농사를 결산하는 가장 중요한 달이죠! 🗓️"
            },
            {
                "keywords": ["적자", "손해", "결손금"],
                "answer": "사장님, 올해 장사가 힘드셔서 적자가 났더라도 종소세 신고는 꼭 하셔야 해요! 적자(결손금)를 신고해 두면, 내년이나 내후년에 돈을 벌었을 때 그만큼 세금을 깎아주거든요. 힘내세요! 💪"
            },
            {
                "keywords": ["간이과세자", "일반과세자", "차이", "1억"],
                "answer": "연 매출이 1억 400만 원을 넘으면 일반과세자, 그 미만이면 간이과세자로 분류돼요. 간이과세자는 부가세 부담이 훨씬 적은 대신, 세금계산서 발급에 제한이 있을 수 있어요. 📊"
            },
            {
                "keywords": ["면세", "학원", "농산물"],
                "answer": "꽃집, 농수산물, 학원 등을 운영하시는 '면세사업자' 사장님은 부가가치세를 내지 않아요! 대신 매년 2월에 '사업장현황신고'를 꼭 해주셔야 합니다. 💐"
            },
            {
                "keywords": ["원천세", "매월 10일", "원천징수"],
                "answer": "직원이나 알바생에게 월급을 주셨다면, 월급에서 뗀 세금을 다음 달 10일까지 국세청에 납부하셔야 해요. 이걸 '원천세 신고'라고 부릅니다! ⏰"
            },
            {
                "keywords": ["간편장부", "복식부기", "기장"],
                "answer": "처음 사업을 시작하셨거나 매출이 일정 규모 이하(보통 도소매업 3억 미만)라면 가계부 쓰듯 쉬운 '간편장부' 대상자예요. 제가 장부 정리를 1초 만에 도와드릴 테니 걱정 마세요! 📒"
            },
            {
                "keywords": ["투잡", "직장인", "근로소득"],
                "answer": "직장을 다니시면서 사업을 하시는 투잡 사장님이시군요! 5월 종합소득세 신고 때 회사에서 받은 '근로소득'과 장사해서 번 '사업소득'을 합쳐서 신고하셔야 해요. 👔"
            },
            {
                "keywords": ["홈택스", "사업용 신용카드", "카드 등록"],
                "answer": "홈택스에 '사업용 신용카드'를 등록해 두는 건 기본 중의 기본이에요! 등록해 두시면 제가 국세청 데이터를 긁어와서 부가세 신고할 때 알아서 비용 처리를 해드릴 수 있어요. 💳"
            },
            {
                "keywords": ["창업 감면", "청년", "세액감면"],
                "answer": "'창업중소기업 세액감면'이라는 엄청난 제도가 있어요! 만 34세 이하 청년이거나 특정 지역에서 창업하셨다면 5년간 소득세의 50~100%를 깎아준답니다. 사장님도 대상인지 꼭 확인해 보세요! 🎁"
            },
            {
                "keywords": ["세금계산서", "발급", "언제까지"],
                "answer": "물건을 팔고 세금계산서를 끊어주실 때는 늦어도 '다음 달 10일'까지는 발급하셔야 가산세를 안 물어요. 날짜를 꼭 지켜주세요! 🧾"
            },
            {
                "keywords": ["환급", "부가세 환급", "돌려받는"],
                "answer": "부가세 환급은 보통 신고 기한이 지난 후 30일 이내에 사장님 계좌로 들어와요. 만약 수출이나 시설 투자를 하셨다면 15일 만에 돌려받는 '조기환급'도 가능합니다! 💸"
            }
        ];
        const userMsg = message.trim();
        let matched_answer = null;
        for (let item of qa_data) {
            for (let kw of item.keywords) {
                if (userMsg.toLowerCase().includes(kw.toLowerCase())) {
                    matched_answer = item.answer;
                    break;
                }
            }
            if (matched_answer) break;
        }
        if (!matched_answer) {
            matched_answer = "죄송해요 사장님, 말씀하신 내용에 대한 답변을 찾지 못했어요. '부가세', '절세', '식대', '휴대폰', '종소세' 등 세무 관련 단어로 질문해 주시면 친절히 답변 드릴게요! 😢";
        }
        return matched_answer;
    };

    const handleSendChatMessage = async (e) => {
        if (e) e.preventDefault();
        if (!chatInput.trim()) return;

        const userMsg = chatInput.trim();
        setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setChatInput('');
        setIsChatLoading(true);

        try {
            const res = await fetch(API_BASE + '/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMsg })
            });
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            setChatMessages(prev => [...prev, { sender: 'seboki', text: data.answer }]);
        } catch (err) {
            console.warn("챗봇 API 호출 실패, 로컬 챗봇으로 폴백합니다:", err);
            const ans = localChatbotAnswer(userMsg);
            setChatMessages(prev => [...prev, { sender: 'seboki', text: ans }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    const fetchDashboardData = async () => {
        try {
            const res = await fetch(API_BASE + '/api/dashboard');
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            setDashboard(data);
        } catch (err) {
            console.warn("대시보드 데이터 조회 실패, 로컬 데이터로 폴백합니다:", err);
            const txs = getLocalTransactions();
            const localDashboard = calculateLocalDashboard(txs);
            setDashboard(localDashboard);
        }
    };

    const fetchTransactions = async () => {
        try {
            const res = await fetch(API_BASE + '/api/transactions');
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            setTransactions(data);
        } catch (err) {
            console.warn("거래 내역 조회 실패, 로컬 데이터로 폴백합니다:", err);
            setTransactions(getLocalTransactions());
        }
    };

    const fetchFilings = async () => {
        try {
            const res = await fetch(API_BASE + '/api/tax-filings');
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            setFilings(data);
        } catch (err) {
            console.warn("세금 신고 이력 조회 실패, 로컬 데이터로 폴백합니다:", err);
            setFilings(getLocalFilings());
        }
    };

    const handleSubmitTaxFiling = async () => {
        setIsFiling(true);
        await new Promise(resolve => setTimeout(resolve, 1500));

        const currentStats = calculateFilingStats();
        const filingData = {
            period: filingForm.period,
            business_name: filingForm.businessName,
            business_reg_no: filingForm.businessRegNo,
            representative: filingForm.representative,
            revenue: currentStats.revenue,
            expense: currentStats.expense,
            calculated_tax: currentStats.calculatedTax
        };

        try {
            const res = await fetch(API_BASE + '/api/tax-filings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filingData)
            });
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            if (data.status === 'success') {
                setLastFilingResult({
                    receiptNo: `TX-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
                    date: new Date().toLocaleString(),
                    ...currentStats
                });
                setFilingStep(3);
                await fetchFilings();
                await fetchDashboardData();
            }
        } catch (err) {
            console.warn("세금 신고 제출 실패, 로컬에 저장합니다:", err);
            const localFls = getLocalFilings();
            const newFiling = {
                id: localFls.length + 1,
                created_at: new Date().toLocaleString(),
                ...filingData
            };
            localFls.unshift(newFiling);
            setLocalFilings(localFls);

            setLastFilingResult({
                receiptNo: `TX-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`,
                date: newFiling.created_at,
                ...currentStats
            });
            setFilingStep(3);
            setFilings(localFls);
            const txs = getLocalTransactions();
            setDashboard(calculateLocalDashboard(txs));
        } finally {
            setIsFiling(false);
        }
    };

    const calculateFilingStats = () => {
        let revenue = 0;
        let expense = 0;
        transactions.forEach(t => {
            if (t.type === 'income') {
                revenue += t.amount;
            } else if (t.type === 'expense' && t.category === 'business') {
                expense += t.amount;
            }
        });

        if (transactions.length === 0) {
            revenue = 12450000;
            expense = 9337500;
        }

        const taxableIncome = Math.max(0, revenue - expense);
        const calculatedTax = Math.max(0, Math.round(taxableIncome * 0.1));

        return { revenue, expense, taxableIncome, calculatedTax };
    };

    const handleConnectAccounts = async () => {
        setIsConnecting(true);
        try {
            const res = await fetch(API_BASE + '/api/connect-accounts', { method: 'POST' });
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
                setIsConnecting(false);
                setShowConnectModal(true);
            }
        } catch (err) {
            console.warn("계좌 연결 실패, 로컬 시뮬레이션을 수행합니다:", err);
            await new Promise(resolve => setTimeout(resolve, 2000));

            const mock_data = [
                { id: 1, date: "2026-06-19", summary: "농협하나로마트 식자재", amount: 450000, type: "expense", category: "business", proof_type: "신용카드" },
                { id: 2, date: "2026-06-18", summary: "구글 마케팅 광고비", amount: 120000, type: "expense", category: "business", proof_type: "신용카드" },
                { id: 3, date: "2026-06-18", summary: "SK에너지 주유소 (배달용)", amount: 75000, type: "expense", category: "business", proof_type: "신용카드" },
                { id: 4, date: "2026-06-17", summary: "스타벅스 커피 (개인)", amount: 12500, type: "expense", category: "personal", proof_type: "신용카드" },
                { id: 5, date: "2026-06-17", summary: "중부세무서 부가세 납부", amount: 540000, type: "expense", category: "business", proof_type: "세금계산서" },
                { id: 6, date: "2026-06-16", summary: "이마트 개인 장보기", amount: 89000, type: "expense", category: "personal", proof_type: "신용카드" },
                { id: 7, date: "2026-06-15", summary: "쿠팡비즈 사무실 비품", amount: 45000, type: "expense", category: "business", proof_type: "간이영수증" },
                { id: 8, date: "2026-06-15", summary: "당근마켓 광고비", amount: 30000, type: "expense", category: "business", proof_type: "신용카드" },
                { id: 9, date: "2026-06-14", summary: "김밥천국 점심식사", amount: 9000, type: "expense", category: "business", proof_type: "간이영수증" },
                { id: 10, date: "2026-06-13", summary: "개인 택시 요금", amount: 18000, type: "expense", category: "personal", proof_type: "신용카드" },
                { id: 11, date: "2026-06-12", summary: "가게 월세 (임대료)", amount: 1000000, type: "expense", category: "business", proof_type: "세금계산서" },
                { id: 12, date: "2026-06-11", summary: "네이버 스마트스토어 정산", amount: 3500000, type: "income", category: "business", proof_type: "신용카드" },
                { id: 13, date: "2026-06-10", summary: "올리브영 화장품", amount: 32000, type: "expense", category: "personal", proof_type: "신용카드" },
                { id: 14, date: "2026-06-09", summary: "퀵서비스 오토바이 배송", amount: 25000, type: "expense", category: "business", proof_type: "증빙없음" },
                { id: 15, date: "2026-06-08", summary: "배민커넥트 배달 소득", amount: 150000, type: "income", category: "business", proof_type: "신용카드" },
                { id: 16, date: "2026-06-07", summary: "쿠팡이츠 배달 소득", amount: 220000, type: "income", category: "business", proof_type: "신용카드" },
                { id: 17, date: "2026-06-06", summary: "다이소 매장 용품", amount: 12000, type: "expense", category: "business", proof_type: "현금영수증" },
                { id: 18, date: "2026-06-05", summary: "알바생 주간 급여", amount: 350000, type: "expense", category: "business", proof_type: "현금영수증" },
                { id: 19, date: "2026-06-04", summary: "카카오 대리운전 (개인)", amount: 35000, type: "expense", category: "personal", proof_type: "신용카드" },
                { id: 20, date: "2026-06-03", summary: "배달의민족 저녁식사 (개인)", amount: 28000, type: "expense", category: "personal", proof_type: "신용카드" }
            ];
            setLocalTransactions(mock_data);
            setTransactions(mock_data);
            setDashboard(calculateLocalDashboard(mock_data));
            setIsConnecting(false);
            setShowConnectModal(true);
        }
    };

    const handleDeleteTransaction = async (id) => {
        if (!confirm("이 거래 내역을 정말 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(API_BASE + `/api/transactions/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
            }
        } catch (err) {
            console.warn("거래 삭제 에러, 로컬에서 삭제 처리합니다:", err);
            const txs = getLocalTransactions().filter(t => t.id !== id);
            setLocalTransactions(txs);
            setTransactions(txs);
            setDashboard(calculateLocalDashboard(txs));
        }
    };

    const performLocalOcr = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = async () => {
                try {
                    const result = await Tesseract.recognize(
                        reader.result,
                        'kor+eng',
                        { logger: m => console.log(m) }
                    );
                    resolve(result.data.text);
                } catch (err) {
                    console.error("Tesseract OCR error:", err);
                    resolve("");
                }
            };
            reader.onerror = () => resolve("");
            reader.readAsDataURL(file);
        });
    };

    const parseOcrText = (text) => {
        if (!text) return null;
        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (lines.length === 0) return null;

        let amount = null;
        let potential_amounts = [];

        const total_keywords = ["합계", "결제금액", "합 계", "총금액", "받을금액", "승인금액", "총계", "금액", "원", "total", "amount", "charge", "pay"];
        const minus_keywords = ["부가세", "과세", "면세", "할인", "거스름", "받은금액", "과세물품", "세액", "단가", "수량"];

        lines.forEach((line, idx) => {
            if (/\d{3}-\d{2}-\d{5}/.test(line) || line.includes("등록번호")) return;
            if (/\d{2,4}-\d{3,4}-\d{4}/.test(line) || line.includes("전화") || line.includes("Tel") || line.includes("T.")) return;
            if (/\d{4}[-/.]\d{2}[-/.]\d{2}/.test(line) || line.includes("대표자")) return;

            const numbers = line.match(/\d[\d,.\s]*\d|\d/g);
            if (numbers) {
                numbers.forEach(num_str => {
                    const clean_num = parseInt(num_str.replace(/[^\d]/g, ''));
                    if (clean_num >= 100 && clean_num <= 10000000) {
                        let weight = 0;
                        if (total_keywords.some(k => line.toLowerCase().includes(k))) {
                            weight += 50;
                            if (["합계", "결제", "총금액", "받을금액", "승인금액", "total"].some(k => line.toLowerCase().includes(k))) {
                                weight += 50;
                            }
                        }
                        if (idx > 0 && ["합계", "결제", "총금액", "받을금액", "승인금액", "total"].some(k => lines[idx - 1].toLowerCase().includes(k))) {
                            weight += 80;
                        }
                        if (minus_keywords.some(k => line.toLowerCase().includes(k))) {
                            weight -= 30;
                        }
                        potential_amounts.push({ amount: clean_num, weight: weight });
                    }
                });
            }
        });

        if (potential_amounts.length > 0) {
            potential_amounts.sort((a, b) => {
                if (b.weight !== a.weight) return b.weight - a.weight;
                return b.amount - a.amount;
            });
            amount = potential_amounts[0].amount;
        }

        let summary = null;
        for (let line of lines.slice(0, 15)) {
            const match = line.match(/(?:가맹점명|가맹점|매장명|상호명|상호|판매점|업체명)\s*[:\]호]?\s*([^\s].*)/);
            if (match) {
                let candidate = match[1].trim();
                candidate = candidate.replace(/[\(\[\{].*?[\)\]\}]/g, '').trim();
                candidate = candidate.replace(/[:\]\}\)]/g, '').trim();
                if (candidate && !["영수증", "지출", "신용카드", "승인전표", "매출전표", "고객용"].includes(candidate)) {
                    summary = candidate;
                    break;
                }
            }
        }

        if (!summary) {
            let store_candidates = [];
            for (let line of lines.slice(0, 6)) {
                if (/\d{3}-\d{2}-\d{5}/.test(line) || line.includes("등록번호")) continue;
                if (/\d{2,4}-\d{3,4}-\d{4}/.test(line) || line.includes("전화") || line.includes("Tel") || line.includes("T.")) continue;
                if (/\d{4}[-/.]\d{2}[-/.]\d{2}/.test(line) || line.includes("주소") || line.includes("대표자") || line.includes("일자")) continue;
                if (/^[\d\s\-,./:]+$/.test(line)) continue;
                if (["단가", "수량", "금액", "품명", "메뉴", "합계", "부가세", "승인"].some(k => line.includes(k))) continue;
                if (["http", "www", ".com", ".co.kr"].some(k => line.toLowerCase().includes(k))) continue;
                if (["영수증", "신용카드", "승인전표", "매출전표", "고객용", "1등", "감사합니다", "환영합니다", "어서오세요"].some(k => line.includes(k))) continue;

                let cleaned = line.replace(/[\(\[\{].*?[\)\]\}]/g, '').trim();
                cleaned = cleaned.replace(/주식회사/g, '').trim();
                if (cleaned.length >= 2) {
                    store_candidates.push(cleaned);
                }
            }
            if (store_candidates.length > 0) {
                summary = store_candidates[0];
            }
        }

        return { summary, amount };
    };

    const triggerReceiptUpload = () => {
        fileInputRef.current.click();
    };

    const handleReceiptUpload = async (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setIsUploading(true);
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }

        try {
            const res = await fetch(API_BASE + '/api/upload-receipts', {
                method: 'POST',
                body: formData
            });
            if (!res.ok) throw new Error('API status error');
            const data = await safeParseJson(res);
            if (data.status === 'success') {
                setReceiptResults(data.results);
                setIsUploading(false);
                setShowReceiptResultModal(true);
            }
        } catch (err) {
            console.warn("영수증 업로드 에러, 로컬 파싱 시뮬레이션을 실행합니다:", err);
            const results = [];
            const today_str = new Date().toISOString().split('T')[0];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const filename = file.name;
                let parsed_summary = "";
                let amount = null;

                if (typeof Tesseract !== 'undefined') {
                    const ocrText = await performLocalOcr(file);
                    const parsed = parseOcrText(ocrText);
                    if (parsed) {
                        parsed_summary = parsed.summary || "";
                        amount = parsed.amount;
                    }
                }

                if (!parsed_summary || !amount) {
                    if (filename.includes("식자재") || filename.includes("식재료")) {
                        parsed_summary = "도소매 식재료 구입";
                        amount = 50000;
                    } else if (filename.includes("주유")) 
