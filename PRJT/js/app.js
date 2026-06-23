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
    const fileInputRef = useRef(null);

    const [showLedger, setShowLedger] = useState(false);
    const [activeView, setActiveView] = useState('dashboard'); // 'dashboard' or 'tax-filing'
    const [filings, setFilings] = useState([]);
    const [filingStep, setFilingStep] = useState(1); // 1: Verify, 2: Info & Calculate, 3: Completed
    const [filingForm, setFilingForm] = useState({
        period: '2026년 1기 부가가치세',
        businessName: '세복상회',
        businessRegNo: '123-45-67890',
        representative: '김대표',
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

        let expected_tax = 0;
        if (txs.length > 0) {
            expected_tax = estimated_vat + Math.round(taxable_income * 0.1);
        }

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
            const res = await fetch('/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMsg })
            });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
            const res = await fetch('/api/dashboard');
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
            const res = await fetch('/api/transactions');
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
            setTransactions(data);
        } catch (err) {
            console.warn("거래 내역 조회 실패, 로컬 데이터로 폴백합니다:", err);
            setTransactions(getLocalTransactions());
        }
    };

    const fetchFilings = async () => {
        try {
            const res = await fetch('/api/tax-filings');
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
            const res = await fetch('/api/tax-filings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filingData)
            });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
            const res = await fetch('/api/connect-accounts', { method: 'POST' });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
                { id: 14, date: "2026-06-09", summary: "퀵서비스 오토바이 배송", amount: 25000, type: "expense", category: "business", proof_type: "증빙없음" }
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
            const res = await fetch(`/api/transactions/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
            const res = await fetch('/api/upload-receipts', {
                method: 'POST',
                body: formData
            });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
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
                    } else if (filename.includes("주유")) {
                        parsed_summary = "화물차 주유소 지출";
                        amount = 65000;
                    } else if (filename.includes("마트")) {
                        parsed_summary = "홈플러스 개인 마트장보기";
                        amount = 42000;
                    } else {
                        const match = filename.match(/\d+/);
                        if (match) amount = parseInt(match[0]);
                        const cleanName = filename.split('.')[0].replace(/[\d_\-\(\)\s\.]+원?/g, '').trim();
                        if (cleanName && !["영수증", "지출", "신용카드", "현금영수증", "매출전표"].includes(cleanName)) {
                            parsed_summary = cleanName;
                        } else {
                            parsed_summary = "식자재마트";
                        }
                    }
                }

                if (!amount) amount = 15000;

                let proof_type = "신용카드";
                if (filename.includes("간이") || filename.includes("receipt")) {
                    proof_type = "간이영수증";
                } else if (filename.includes("현금") || filename.includes("cash")) {
                    proof_type = "현금영수증";
                }

                let category = "business";
                const personal_keywords = ["마트", "백화점", "병원", "약국", "학원", "의류", "뷰티", "네일", "카페", "택시"];
                for (let kw of personal_keywords) {
                    if (parsed_summary.includes(kw)) {
                        category = "personal";
                        break;
                    }
                }
                const category_kr = category === "business" ? "사업용 (절세 대상)" : "개인용 (공제 제외)";

                results.push({
                    filename: filename,
                    date: today_str,
                    summary: parsed_summary,
                    amount: amount,
                    type: "expense",
                    category: category,
                    category_kr: category_kr,
                    proof_type: proof_type
                });
            }

            setReceiptResults(results);
            setIsUploading(false);
            setShowReceiptResultModal(true);
        }
        e.target.value = null;
    };

    const handleSaveReceiptsToLedger = async () => {
        if (!receiptResults || receiptResults.length === 0) return;
        const formatted = receiptResults.map(r => ({
            date: r.date,
            summary: r.summary,
            amount: r.amount,
            type: r.type,
            category: r.category,
            proof_type: r.proof_type || '신용카드'
        }));

        try {
            const res = await fetch('/api/transactions/bulk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formatted)
            });
            if (!res.ok) throw new Error('API status error');
            const data = await res.json();
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
                setShowReceiptResultModal(false);
                setReceiptResults([]);
            }
        } catch (err) {
            console.warn("영수증 저장 에러, 로컬에 저장합니다:", err);
            const txs = getLocalTransactions();
            let currentId = txs.length > 0 ? Math.max(...txs.map(t => t.id || 0)) : 0;
            formatted.forEach(f => {
                currentId++;
                txs.unshift({ id: currentId, ...f });
            });
            setLocalTransactions(txs);
            setTransactions(txs);
            setDashboard(calculateLocalDashboard(txs));
            setShowReceiptResultModal(false);
            setReceiptResults([]);
        }
    };

    const handleCancelReceipts = () => {
        setShowReceiptResultModal(false);
        setReceiptResults([]);
    };

    const handleResultChange = (idx, field, value) => {
        const updated = [...receiptResults];
        updated[idx] = {
            ...updated[idx],
            [field]: value
        };
        setReceiptResults(updated);
    };

    const handleQnaSubmit = async (e) => {
        e.preventDefault();
        if (!qnaInputQuestion.trim()) return;
        setIsQnaLoading(true);
        setQnaAnswerResult('');
        try {
            const response = await fetch('/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: qnaInputQuestion })
            });
            if (response.ok) {
                const data = await response.json();
                setQnaAnswerResult(data.answer);
            } else {
                throw new Error('API response error');
            }
        } catch (error) {
            console.error('Q&A chatbot fetch error:', error);
            const matched = qnaData.find(item =>
                item.keywords.some(kw => qnaInputQuestion.toLowerCase().includes(kw.toLowerCase()))
            );
            if (matched) {
                setQnaAnswerResult(matched.answer);
            } else {
                setQnaAnswerResult("죄송해요 사장님, 입력하신 질문에 맞는 명확한 세무 답변을 찾지 못했어요. 조금 더 간단한 세무 키워드(예: 부가세, 식대, 알바 등)로 질문해 주시겠어요? 😢");
            }
        } finally {
            setIsQnaLoading(false);
        }
    };

    const hasTransactions = transactions.length > 0;
    const businessRatio = hasTransactions ? dashboard.business_ratio : 0;
    const personalRatio = hasTransactions ? dashboard.personal_ratio : 0;
    const expectedTax = hasTransactions ? dashboard.expected_tax : 0;

    return (
        <div className="flex-grow flex flex-col min-h-screen">
            {/* Header (TopNavBar) */}
            <header className="shadow-sm bg-surface-container-lowest sticky top-0 z-40 border-b border-outline-variant">
                <div className="flex justify-between items-center w-full px-4 md:px-8 h-[72px] max-w-[1200px] mx-auto">
                    <div className="font-bold text-2xl text-primary cursor-pointer flex items-center gap-2" onClick={() => setActiveView('dashboard')}>
                        <span className="material-symbols-outlined font-bold text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
                        소상공인 1초 세금비서
                    </div>
                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a className={`${activeView === 'dashboard' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors font-medium`} href="#" onClick={(e) => { e.preventDefault(); setActiveView('dashboard'); }}>홈</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#ledger" onClick={(e) => { e.preventDefault(); setActiveView('dashboard'); setShowLedger(true); setTimeout(() => { document.getElementById('ledger')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>장부내역</a>
                        <a className={`${activeView === 'tax-filing' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors font-medium`} href="#" onClick={(e) => { e.preventDefault(); setActiveView('tax-filing'); setFilingStep(1); }}>세금신고</a>
                        <a className={`${activeView === 'customer-center' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-colors font-medium`} href="#" onClick={(e) => { e.preventDefault(); setActiveView('customer-center'); }}>고객센터</a>
                    </nav>
                    {/* Trailing Actions */}
                    <div className="flex items-center gap-4">
                        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                        <div className="relative">
                            <div 
                                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden cursor-pointer border-2 border-outline-variant hover:border-primary hover:ring-4 hover:ring-primary/10 transition-all duration-200"
                                title="프로필 메뉴 열기"
                            >
                                <img alt="Seboki user profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAceHLmOtIggpB7dULLTI1_lsWsdi_RMYeHcsl2aOuraq28URg994K5ZbbXjZr3gO-ykXnO9AkFHY448MZ-pSyv0JB5omzHnv-3i9wN2oWGIzAAFnPyEmquHXEGY-Sp0xW5eA17aYVnZOohqe57_cpetlzVTzSIDFX0qvYMdXbzVU4LlEwuNIABl5rgu_TtRXUX_tJGR3HCaGzU8h9GOqWr3VF7eo-As0JybpJ7rUMi7iCJlT_To7w90Obg4gFkErJxZfqY5FfysnTR" />
                            </div>
                            
                            {/* Click outside backdrop overlay to close */}
                            {showProfileDropdown && (
                                <div className="fixed inset-0 z-40" onClick={() => setShowProfileDropdown(false)}></div>
                            )}
                            
                            {/* Dropdown Menu with slide down transition */}
                            <div className={`absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-outline-variant/60 py-3 z-50 transition-all duration-300 origin-top-right transform ${showProfileDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible pointer-events-none'}`}>
                                <div className="px-4 py-2.5 border-b border-outline-variant/40 mb-1.5">
                                    <p className="text-sm font-black text-primary">김대표 사장님</p>
                                    <p className="text-xs text-outline font-semibold mt-0.5">124-45-67890</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        setShowProfileDropdown(false);
                                        window.location.href = '/';
                                    }}
                                    className="w-full text-left px-4 py-3 text-sm font-bold text-error hover:bg-error-container/20 flex items-center gap-2.5 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-lg font-bold">logout</span>
                                    로그아웃
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">
                {activeView === 'dashboard' ? (
                    <React.Fragment>
                        {/* 1. 예상 세금 배너 */}
                        <section className="bg-surface-container-lowest rounded-2xl shadow-md border-t-[6px] border-primary overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative">
                            <div className="flex flex-col gap-3 z-10 w-full md:w-1/2">
                                <h2 className="text-xl font-bold text-on-surface-variant flex items-center gap-2">
                                    <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                                    이번 달 예상 세금
                                </h2>
                                <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                                    {expectedTax.toLocaleString()}<span className="text-2xl font-bold ml-1">원</span>
                                </div>
                                <p className="text-sm text-outline mt-1">
                                    * 국세청 연동 데이터를 기반으로 계산된 예상 금액입니다.
                                </p>
                                <button
                                    onClick={() => setShowTaxDetailModal(true)}
                                    className="mt-4 bg-primary text-on-primary font-bold py-3 px-6 rounded-xl w-fit hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95 flex items-center gap-2 text-lg">
                                    세금 상세 내역 보기
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                            <div className="relative mt-8 md:mt-0 p-6 md:p-8 rounded-[32px] bg-[#eaf3ff] w-full md:w-1/2 border border-blue-100 flex flex-col justify-between overflow-visible shadow-sm">
                                {/* 금융 정보 미연동시(데이터 0건) Overlay 레이어 */}
                                {(!isLinked || transactions.length === 0) && (
                                    <div className="absolute inset-0 z-30 rounded-[32px] overflow-hidden select-none">
                                        <img alt="세복이 안내 가림막" className="w-full h-full object-cover" src="/seboki2.png" />
                                    </div>
                                )}
                                {/* Title and Mascot section */}
                                <div className="flex justify-between items-start mb-6 relative">
                                    <div className="z-10">
                                        <h3 className="text-3xl font-extrabold text-[#1a4b84] tracking-tight">
                                            실시간 세무 알림
                                        </h3>
                                        <p className="text-sm text-[#4a5568] font-semibold mt-1">사장님, 2건의 알림이 있어요</p>
                                    </div>
                                    <img alt="세복이" className="w-[155px] h-auto object-contain absolute right-0 -top-10 z-20 drop-shadow-md" src="/seboki2.png" />
                                </div>

                                {/* Warning Card 1 */}
                                <div className="bg-white rounded-[24px] p-5 flex items-center justify-between shadow-sm mb-4 z-10 border border-white relative">
                                    <div className="flex items-center gap-4">
                                        <div className="text-red-500 flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-5xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[#1a202c] text-lg">3만원 초과 영수증 2건 확인</span>
                                            <span className="text-base text-red-500 font-bold mt-1">가산세 위험이 있습니다.</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setShowWarningDetailModal(true)}
                                        className="bg-[#cce3fd] hover:bg-blue-200 text-[#003466] font-bold px-7 py-3 rounded-full text-base transition-all transform active:scale-95 shrink-0">
                                        상세보기
                                    </button>
                                </div>

                                {/* Warning Card 2 */}
                                <div className="bg-white rounded-[24px] p-5 flex items-center justify-between shadow-sm z-10 border border-white relative">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[#3c6b9b] flex items-center justify-center shrink-0">
                                            <span className="material-symbols-outlined text-5xl">credit_card</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-[#1a202c] text-lg">홈택스 사업용 신용카드 갱신</span>
                                            <span className="text-base text-[#718096] font-medium mt-1">기간 만료 전 갱신해 주세요.</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => window.open('https://www.hometax.go.kr', '_blank')}
                                        className="bg-[#cce3fd] hover:bg-blue-200 text-[#003466] font-bold px-7 py-3 rounded-full text-base transition-all transform active:scale-95 shrink-0">
                                        홈택스 이동
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* 2. 소득 대비 지출 현황 */}
                        <section className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-8 flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
                                <span className="material-symbols-outlined text-secondary">monitoring</span>
                                소득 대비 지출 현황
                            </h3>
                            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="flex justify-between items-end">
                                            <span className="text-lg font-bold text-on-surface-variant">사업용 지출 (절세 가능)</span>
                                            <span className="text-2xl font-bold text-primary">{businessRatio}%</span>
                                        </div>
                                        <div className="w-full h-6 bg-surface-variant rounded-full overflow-hidden border border-outline-variant">
                                            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${businessRatio}%` }}></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <div className="flex justify-between items-end">
                                            <span className="text-lg font-bold text-on-surface-variant">개인용 지출 (공제 제외)</span>
                                            <span className="text-2xl font-bold text-outline">{personalRatio}%</span>
                                        </div>
                                        <div className="w-full h-6 bg-surface-variant rounded-full overflow-hidden border border-outline-variant">
                                            <div className="h-full bg-outline-variant rounded-full transition-all" style={{ width: `${personalRatio}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. 카드/은행 연결 및 영수증 촬영 */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button
                                onClick={handleConnectAccounts}
                                disabled={isConnecting}
                                className="bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container disabled:opacity-80 rounded-2xl p-6 flex items-center justify-center gap-6 shadow-lg transition-all transform hover:-translate-y-1 min-h-[140px] group border border-transparent">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {isConnecting ? (
                                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <img className="w-14 h-14 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6NWV9APrhlGqrL-j6f4NqM_bNKNSdHZhhog6McQuUJs3EQ629Yx17AaEE8JNpm8WWodTj5-I_viBg8_Pjco-w8Zch8VE0uV3equSM8j6imtBbtXpZA_q75zf7xjsvyVTM_Cmu4_w4hZxJjSlFEmGvtfyxt2hgcrRhK7A4zknIp_Bpt3TpkjQtF0XB7AGufHTEOfc8NLWnoXRxIHeb-ND0IWyWaxlPF1-BE0mtb6yFpzH5znRHX7C-0Sqh8oDOM8WQfO8FrT2docl0" alt="열쇠" />
                                    )}
                                </div>
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-2xl font-bold tracking-tight">{isConnecting ? "연동 불러오는 중..." : "내 카드·은행 연결하기"}</span>
                                    <span className="text-base opacity-80 mt-1">간편하게 금융 정보를 불러오세요</span>
                                </div>
                            </button>

                            <button
                                onClick={triggerReceiptUpload}
                                disabled={isUploading}
                                className="bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container disabled:opacity-80 rounded-2xl p-6 flex items-center justify-center gap-6 shadow-lg transition-all transform hover:-translate-y-1 min-h-[140px] group border border-transparent">
                                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {isUploading ? (
                                        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <img className="w-14 h-14 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByzfmi_hOoDdRLdtICtVl1goSnGVHjnOCjIHefI9_-n7ehRbEXUO_o1o2X3RusSoleERkqTlxSndlawVk_RnrR2WK8pRwIIO8oEZ29677UTOa6Hg05A11F_3-nYhpQYgsNCthe9DvUnerrbHAwPX2d0p2C6YVc94PiE4eNBCyivbSCj6Y_7OqCfslDq51WEcUDs0IghJALoyOLKgG2SBxvTUT3tQiiiH5KmbUATdL461NWVkl2HULVo2tXOG8aedCZFcRRpqayZMuA" alt="카메라" />
                                    )}
                                </div>
                                <div className="flex flex-col items-start text-left">
                                    <span className="text-2xl font-bold tracking-tight">{isUploading ? "영수증 분석 중..." : "종이 영수증 바로 촬영하기"}</span>
                                    <span className="text-base opacity-80 mt-1">누락된 지출 증빙을 빠르게 스캔하세요</span>
                                </div>
                            </button>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleReceiptUpload}
                                accept="image/*, .png, .jpg, .jpeg, .heic"
                                multiple={true}
                                className="hidden"
                            />
                        </section>

                        {/* 4. 최근 장부 요약 & 5. 세금 신고 일정 알림 */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                            <button
                                onClick={() => setShowLedger(!showLedger)}
                                className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-surface-variant flex items-center justify-between hover:shadow-lg transition-all text-left w-full">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-surface-container rounded-full text-on-surface-variant">
                                        <span className="material-symbols-outlined text-2xl font-bold">receipt_long</span>
                                    </div>
                                    <span className="text-xl font-bold text-on-surface">
                                        최근 장부 내역: <span className="text-secondary font-black">신규 {dashboard.recent_count}건</span>
                                        <span className="text-sm font-medium text-outline ml-2 block md:inline-block">({showLedger ? '접기' : '더보기'})</span>
                                    </span>
                                </div>
                                <span className={`material-symbols-outlined text-outline font-bold transform transition-transform ${showLedger ? 'rotate-90' : ''}`}>chevron_right</span>
                            </button>

                            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-surface-variant flex items-center justify-between hover:shadow-lg transition-all cursor-default">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 bg-error-container text-on-error-container rounded-full">
                                        <span className="material-symbols-outlined text-2xl font-bold">event</span>
                                    </div>
                                    <span className="text-xl font-bold text-on-surface">세금 신고 디데이: <span className="text-error font-black">{dashboard.d_day}</span></span>
                                </div>
                                <span className="bg-error text-white font-bold px-3 py-1 rounded-full text-sm">신고 대기</span>
                            </div>
                        </section>

                        {/* 실시간 장부 내역 */}
                        {showLedger && (
                            <section id="ledger" className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-8 mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">list_alt</span>
                                        실시간 영수증 장부 내역
                                    </h3>
                                    <span className="text-sm font-medium text-outline">총 {transactions.length}건 등록됨</span>
                                </div>

                                {transactions.length === 0 ? (
                                    <div className="text-center py-12 text-outline border-2 border-dashed border-outline-variant rounded-2xl">
                                        <span className="material-symbols-outlined text-5xl mb-2 text-outline-variant">info</span>
                                        <p className="text-lg">등록된 장부 내역이 없습니다.</p>
                                        <p className="text-sm mt-1">상단의 계좌 연결이나 영수증 촬영을 진행해 주세요.</p>
                                    </div>
                                ) : (
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface-variant font-bold text-base">
                                                    <th className="p-4 rounded-l-xl">날짜</th>
                                                    <th className="p-4">적요 (지출 항목)</th>
                                                    <th className="p-4">유형</th>
                                                    <th className="p-4">금액</th>
                                                    <th className="p-4">증빙</th>
                                                    <th className="p-4">세무 분류</th>
                                                    <th className="p-4 rounded-r-xl text-center">관리</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {transactions.map((tx) => (
                                                    <tr key={tx.id} className="border-b border-outline-variant hover:bg-surface-container-lowest transition-colors text-lg">
                                                        <td className="p-4 font-medium text-on-surface-variant">{tx.date}</td>
                                                        <td className="p-4 font-bold text-on-surface">{tx.summary}</td>
                                                        <td className="p-4">
                                                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${tx.type === 'income' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-on-surface-variant'}`}>
                                                                {tx.type === 'income' ? '소득' : '지출'}
                                                            </span>
                                                        </td>
                                                        <td className="p-4 font-bold text-primary">{tx.amount.toLocaleString()}원</td>
                                                        <td className="p-4">
                                                            {tx.type === 'income' ? (
                                                                <span className="text-outline text-sm">-</span>
                                                            ) : (
                                                                <span className="px-3 py-1 rounded-full text-sm font-bold bg-[#eaf3ff] text-[#1a4b84] border border-blue-100 shadow-sm">
                                                                    {tx.proof_type || '신용카드'}
                                                                </span>
                                                            )}
                                                        </td>
                                                        <td className="p-4">
                                                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${tx.category === 'business' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                                                {tx.category === 'business' ? '💼 사업용 (절세)' : '👤 개인용 (공제제외)'}
                                                            </span>
                                                        </td>
                                                        <td className="p-4 text-center whitespace-nowrap">
                                                            <button
                                                                onClick={() => handleDeleteTransaction(tx.id)}
                                                                className="text-error hover:bg-red-50 hover:text-red-700 p-2 rounded-xl transition-all duration-200 inline-flex items-center justify-center border border-transparent hover:border-red-200 active:scale-95 bg-white shadow-sm"
                                                                title="삭제">
                                                                <span className="material-symbols-outlined text-xl">delete</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </section>
                        )}
                    </React.Fragment>
                ) : activeView === 'tax-filing' ? (
                    /* Tax Filing View */
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col gap-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-outline-variant pb-6">
                            <div>
                                <h2 className="text-3xl font-black text-primary tracking-tight">세금 간편 전자 신고</h2>
                                <p className="text-on-surface-variant mt-2 text-base">
                                    연동된 장부 데이터를 바탕으로 국세청 홈택스 신고 서식을 자동 작성하고 원클릭으로 신고를 마칩니다.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-outline">신고 대상 분기:</span>
                                <select
                                    value={filingForm.period}
                                    onChange={(e) => setFilingForm({ ...filingForm, period: e.target.value })}
                                    className="bg-white border-2 border-outline-variant rounded-xl px-4 py-2 text-base font-bold text-primary focus:outline-none focus:border-primary">
                                    <option value="2026년 1기 부가가치세">2026년 1기 부가가치세 (예정)</option>
                                    <option value="2026년 종합소득세">2026년 종합소득세 (간이)</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-outline-variant">
                            <div className="flex justify-between items-center max-w-[600px] mx-auto relative">
                                <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface-container-high -translate-y-1/2 z-0"></div>
                                <div
                                    className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-300"
                                    style={{ width: `${(filingStep - 1) * 50}%` }}></div>

                                <div className="flex flex-col items-center z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-colors ${filingStep >= 1 ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                                        {filingStep > 1 ? <span className="material-symbols-outlined text-lg">check</span> : "1"}
                                    </div>
                                    <span className={`text-sm mt-2 font-bold ${filingStep >= 1 ? 'text-primary' : 'text-outline'}`}>장부 데이터 검증</span>
                                </div>

                                <div className="flex flex-col items-center z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-colors ${filingStep >= 2 ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                                        {filingStep > 2 ? <span className="material-symbols-outlined text-lg">check</span> : "2"}
                                    </div>
                                    <span className={`text-sm mt-2 font-bold ${filingStep >= 2 ? 'text-primary' : 'text-outline'}`}>정보 입력 & 세액확인</span>
                                </div>

                                <div className="flex flex-col items-center z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-colors ${filingStep >= 3 ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant'}`}>
                                        3
                                    </div>
                                    <span className={`text-sm mt-2 font-bold ${filingStep >= 3 ? 'text-primary' : 'text-outline'}`}>신고 완료</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-10 border border-outline-variant">
                            {filingStep === 1 && (
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary">fact_check</span>
                                        1단계: 장부 데이터 검증 및 신고 대상 내역
                                    </h3>
                                    <p className="text-on-surface-variant text-base">
                                        현재까지 등록된 장부 내역이 자동 분류되어 신고 금액에 반영됩니다. 개인 지출이나 미분류 내역이 없는지 최종 검토하세요.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col gap-1">
                                            <span className="text-sm font-bold text-blue-700">총 소득 (과세 매출)</span>
                                            <span className="text-2xl font-black text-blue-900">
                                                {calculateFilingStats().revenue.toLocaleString()}원
                                            </span>
                                        </div>
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex flex-col gap-1">
                                            <span className="text-sm font-bold text-green-700">공제 대상 지출 (사업 경비)</span>
                                            <span className="text-2xl font-black text-green-900">
                                                {calculateFilingStats().expense.toLocaleString()}원
                                            </span>
                                        </div>
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex flex-col gap-1">
                                            <span className="text-sm font-bold text-amber-700">공제 제외 지출 (개인 용도)</span>
                                            <span className="text-2xl font-black text-amber-900">
                                                {transactions.filter(t => t.type === 'expense' && t.category === 'personal').reduce((sum, t) => sum + t.amount, 0).toLocaleString()}원
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant flex gap-3 items-start">
                                        <span className="material-symbols-outlined text-secondary font-bold">info</span>
                                        <div className="text-sm text-on-surface-variant leading-relaxed">
                                            <p className="font-bold text-on-surface">💡 절세 팁</p>
                                            <p>공제 제외(개인용)로 분류된 지출 중 사업 목적(가게 물품, 식재료 등)으로 사용된 지출이 있다면, <b>홈 화면의 실시간 영수증 장부 내역</b>에서 사업용으로 변경하여 절세 혜택을 극대화하실 수 있습니다.</p>
                                        </div>
                                    </div>

                                    <div className="border border-outline-variant rounded-xl overflow-hidden mt-2">
                                        <div className="bg-surface-container-low px-4 py-3 font-bold border-b border-outline-variant text-base text-on-surface flex justify-between items-center">
                                            <span>신고 반영 사업용 거래 목록 ({transactions.filter(t => t.type === 'income' || (t.type === 'expense' && t.category === 'business')).length}건)</span>
                                            <button onClick={() => { setActiveView('dashboard'); setShowLedger(true); }} className="text-sm text-primary hover:underline flex items-center gap-1 font-bold">
                                                장부 수정하러 가기
                                                <span className="material-symbols-outlined text-xs">open_in_new</span>
                                            </button>
                                        </div>
                                        <div className="max-h-[300px] overflow-y-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-surface-container-lowest border-b border-outline-variant text-sm font-bold text-on-surface-variant">
                                                        <th className="p-3">날짜</th>
                                                        <th className="p-3">구분</th>
                                                        <th className="p-3">적요</th>
                                                        <th className="p-3 text-right">금액</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {transactions.filter(t => t.type === 'income' || (t.type === 'expense' && t.category === 'business')).map(t => (
                                                        <tr key={t.id} className="border-b border-outline-variant hover:bg-surface-container-low/50 text-sm">
                                                            <td className="p-3 text-outline">{t.date}</td>
                                                            <td className="p-3">
                                                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${t.type === 'income' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                                                    {t.type === 'income' ? '매출' : '경비'}
                                                                </span>
                                                            </td>
                                                            <td className="p-3 font-bold text-on-surface">{t.summary}</td>
                                                            <td className="p-3 text-right font-bold text-primary">{t.amount.toLocaleString()}원</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-3 mt-4">
                                        <button
                                            onClick={() => setActiveView('dashboard')}
                                            className="bg-surface-container-high text-on-surface font-bold py-3 px-6 rounded-xl hover:bg-surface-variant transition-all border border-outline-variant">
                                            취소
                                        </button>
                                        <button
                                            onClick={() => setFilingStep(2)}
                                            className="bg-primary text-on-primary font-bold py-3 px-8 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md">
                                            다음 단계로
                                        </button>
                                    </div>
                                </div>
                            )}

                            {filingStep === 2 && (
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary">edit_note</span>
                                        2단계: 신고 정보 확인 및 예상 세액 산출
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface-container-low p-6 rounded-2xl border border-outline-variant">
                                        <div className="flex flex-col gap-4">
                                            <span className="text-lg font-bold text-primary border-b border-outline-variant pb-2">기본 인적 사항</span>

                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-bold text-outline">신고 대상 기간</label>
                                                <input type="text" value={filingForm.period} disabled className="bg-surface-container border-2 border-outline-variant rounded-xl p-3 text-sm font-bold text-on-surface" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-bold text-outline">사업자 상호</label>
                                                <input
                                                    type="text"
                                                    value={filingForm.businessName}
                                                    onChange={(e) => setFilingForm({ ...filingForm, businessName: e.target.value })}
                                                    className="bg-white border-2 border-outline-variant rounded-xl p-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-bold text-outline">사업자등록번호</label>
                                                <input
                                                    type="text"
                                                    value={filingForm.businessRegNo}
                                                    onChange={(e) => setFilingForm({ ...filingForm, businessRegNo: e.target.value })}
                                                    className="bg-white border-2 border-outline-variant rounded-xl p-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-bold text-outline">대표자명</label>
                                                <input
                                                    type="text"
                                                    value={filingForm.representative}
                                                    onChange={(e) => setFilingForm({ ...filingForm, representative: e.target.value })}
                                                    className="bg-white border-2 border-outline-variant rounded-xl p-3 text-sm font-bold text-on-surface focus:outline-none focus:border-primary" />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            <span className="text-lg font-bold text-primary border-b border-outline-variant pb-2">최종 예상 세액 리포트</span>

                                            <div className="space-y-3.5 mt-2 text-base">
                                                <div className="flex justify-between">
                                                    <span className="text-on-surface-variant font-medium">총 매출 금액</span>
                                                    <span className="font-bold">{calculateFilingStats().revenue.toLocaleString()} 원</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-on-surface-variant font-medium">공제 대상 매입액</span>
                                                    <span className="font-bold text-green-700">- {calculateFilingStats().expense.toLocaleString()} 원</span>
                                                </div>
                                                <div className="flex justify-between border-b border-outline-variant/50 pb-3">
                                                    <span className="text-on-surface-variant font-medium">과세 표준 소득</span>
                                                    <span className="font-bold text-secondary">{calculateFilingStats().taxableIncome.toLocaleString()} 원</span>
                                                </div>

                                                <div className="flex justify-between pt-2">
                                                    <span className="text-on-surface-variant font-bold">부가가치세 (예정 납부세액)</span>
                                                    <span className="font-bold text-primary">{Math.round(calculateFilingStats().calculatedTax * 0.4).toLocaleString()} 원</span>
                                                </div>
                                                <div className="flex justify-between border-b border-outline-variant pb-4">
                                                    <span className="text-on-surface-variant font-bold">종합소득세 (선집계분)</span>
                                                    <span className="font-bold text-primary">{Math.round(calculateFilingStats().calculatedTax * 0.6).toLocaleString()} 원</span>
                                                </div>

                                                <div className="flex justify-between pt-3 text-xl font-black text-primary">
                                                    <span>최종 총 납부세액</span>
                                                    <span>{calculateFilingStats().calculatedTax.toLocaleString()} 원</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-4">
                                        <button
                                            onClick={() => setFilingStep(1)}
                                            className="bg-surface-container-high text-on-surface font-bold py-3 px-6 rounded-xl hover:bg-surface-variant transition-all border border-outline-variant">
                                            이전 단계
                                        </button>
                                        <button
                                            onClick={handleSubmitTaxFiling}
                                            disabled={isFiling}
                                            className="bg-primary text-on-primary font-bold py-3 px-8 rounded-xl hover:bg-primary-container hover:text-on-primary-container disabled:opacity-85 transition-all shadow-md flex items-center gap-2">
                                            {isFiling ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    국세청 전자 신고 중...
                                                </>
                                            ) : (
                                                <>
                                                    국세청 원클릭 신고 완료하기
                                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {filingStep === 3 && lastFilingResult && (
                                <div className="flex flex-col items-center gap-6 py-6">
                                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center shadow-md animate-bounce">
                                        <span className="material-symbols-outlined text-4xl font-black">done</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-black text-on-surface">세금 신고가 성공적으로 완료되었습니다!</h3>
                                        <p className="text-on-surface-variant text-base mt-2">
                                            신고서가 국세청 홈택스에 전송되었으며 아래와 같이 전자 접수증이 발급되었습니다.
                                        </p>
                                    </div>

                                    <div className="w-full max-w-[500px] border-2 border-double border-primary p-6 bg-white shadow-xl rounded-xl space-y-6 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                                            <span className="material-symbols-outlined text-[200px] font-black text-primary">calculate</span>
                                        </div>

                                        <div className="text-center border-b-2 border-primary/20 pb-4">
                                            <span className="text-xs font-bold text-primary tracking-widest border border-primary px-2.5 py-0.5 rounded-full">국세청 전자신고</span>
                                            <h4 className="text-2xl font-black text-primary mt-2">부가가치세 신고 접수증</h4>
                                        </div>

                                        <div className="space-y-3.5 text-sm text-on-surface">
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">접수번호</span>
                                                <span className="col-span-2 font-mono font-bold text-primary">{lastFilingResult.receiptNo}</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">신고분기</span>
                                                <span className="col-span-2 font-bold">{filingForm.period}</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">사업자 상호</span>
                                                <span className="col-span-2 font-bold">{filingForm.businessName}</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">대표자명</span>
                                                <span className="col-span-2 font-bold">{filingForm.representative}</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">신고 매출액</span>
                                                <span className="col-span-2 font-bold">{lastFilingResult.revenue.toLocaleString()} 원</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">신고 경비액</span>
                                                <span className="col-span-2 font-bold">{lastFilingResult.expense.toLocaleString()} 원</span>
                                            </div>
                                            <div className="grid grid-cols-3 border-b border-outline-variant/20 pb-2">
                                                <span className="font-bold text-outline">납부할 세액</span>
                                                <span className="col-span-2 font-black text-primary text-base">{lastFilingResult.calculatedTax.toLocaleString()} 원</span>
                                            </div>
                                            <div className="grid grid-cols-3 pb-2">
                                                <span className="font-bold text-outline">접수일시</span>
                                                <span className="col-span-2 text-outline-variant font-medium">{lastFilingResult.date}</span>
                                            </div>
                                        </div>

                                        <div className="text-center text-xs text-outline border-t border-primary/20 pt-4 leading-normal">
                                            귀하의 세금 신고서가 정상 접수되었습니다. 납부 기한 내에 세액을 납부해 주시기 바랍니다.
                                            <p className="font-bold mt-1 text-primary">대한민국 국세청 / 소상공인 1초 세금비서</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 w-full justify-center mt-4">
                                        <button
                                            onClick={() => {
                                                setActiveView('dashboard');
                                                setFilingStep(1);
                                            }}
                                            className="bg-primary text-on-primary font-bold py-3.5 px-8 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md">
                                            대시보드로 돌아가기
                                        </button>
                                        <button
                                            onClick={() => window.print()}
                                            className="bg-surface-container-high text-on-surface font-bold py-3.5 px-6 rounded-xl hover:bg-surface-variant transition-all border border-outline-variant flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">print</span>
                                            접수증 인쇄하기
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tax Filing History List */}
                        <div className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-8 border border-outline-variant">
                            <h3 className="text-2xl font-bold text-on-surface flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-primary">history</span>
                                과거 세금 신고 내역 및 접수 현황
                            </h3>

                            {filings.length === 0 ? (
                                <div className="text-center py-10 text-outline border-2 border-dashed border-outline-variant rounded-xl">
                                    <span className="material-symbols-outlined text-4xl mb-1 text-outline-variant">history</span>
                                    <p className="text-base font-bold">아직 완료된 세금 신고 내역이 없습니다.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-outline-variant bg-surface-container-low text-on-surface-variant font-bold text-sm">
                                                <th className="p-3 rounded-l-xl">신고 일자</th>
                                                <th className="p-3">신고 분기</th>
                                                <th className="p-3">상호명 (대표자)</th>
                                                <th className="p-3 text-right">매출액 (소득)</th>
                                                <th className="p-3 text-right">경비액 (사업지출)</th>
                                                <th className="p-3 text-right">최종 세액</th>
                                                <th className="p-3 rounded-r-xl text-center">접수 상태</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filings.map((f) => (
                                                <tr key={f.id} className="border-b border-outline-variant hover:bg-surface-container-low/20 text-sm">
                                                    <td className="p-3 font-medium text-on-surface-variant">{f.created_at}</td>
                                                    <td className="p-3 font-bold text-on-surface">{f.period}</td>
                                                    <td className="p-3">{f.business_name} ({f.representative})</td>
                                                    <td className="p-3 text-right font-medium">{f.revenue.toLocaleString()}원</td>
                                                    <td className="p-3 text-right font-medium text-green-700">{f.expense.toLocaleString()}원</td>
                                                    <td className="p-3 text-right font-bold text-primary">{f.calculated_tax.toLocaleString()}원</td>
                                                    <td className="p-3 text-center">
                                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                                            접수완료
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </section>
                ) : (
                    /* Customer Center View */
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col gap-8">
                        <div className="bg-gradient-to-r from-primary to-primary-container text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative border border-primary-container">
                            <div className="flex flex-col gap-3 z-10 w-full md:w-3/5">
                                <span className="bg-white/20 text-white font-bold px-3.5 py-1 rounded-full text-xs w-fit uppercase tracking-wider">고객지원 센터</span>
                                <h2 className="text-3xl font-black tracking-tight">사장님을 위한 세무 지식 Q&A</h2>
                                <p className="text-white/80 text-base leading-relaxed">
                                    종합소득세, 부가가치세, 인건비 신고 등 사업자 사장님들이 가장 자주 물어보는 핵심 질문들에 대해 친절하고 정확하게 답변해 드립니다.
                                </p>
                            </div>
                            <div className="relative shrink-0 w-full md:w-2/5 flex justify-center md:justify-end z-10">
                                <div className="relative w-full max-w-sm">
                                    <input
                                        type="text"
                                        placeholder="세무 키워드 검색 (예: 식대, 부가세)"
                                        value={qnaSearchQuery}
                                        onChange={(e) => setQnaSearchQuery(e.target.value)}
                                        className="w-full bg-white text-on-surface border-2 border-outline-variant rounded-2xl pl-12 pr-4 py-3.5 text-base font-medium focus:outline-none focus:border-secondary shadow-md"
                                    />
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-2xl font-bold">search</span>
                                </div>
                            </div>
                            <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-20 -right-20 pointer-events-none"></div>
                            <div className="absolute w-32 h-32 rounded-full bg-white/5 -bottom-10 left-10 pointer-events-none"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="w-full lg:w-2/3 flex flex-col gap-6">
                                <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                                    {['전체', '세금/신고', '비용/절세', '인건비/운영'].map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setQnaActiveCategory(category)}
                                            className={`px-6 py-3 rounded-2xl text-base font-bold transition-all whitespace-nowrap ${qnaActiveCategory === category
                                                ? 'bg-primary text-white shadow-md'
                                                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-variant'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-3">
                                    {(() => {
                                        const filtered = qnaData.filter(item => {
                                            const matchesCategory = qnaActiveCategory === '전체' || item.category === qnaActiveCategory;
                                            const matchesSearch = !qnaSearchQuery.trim() ||
                                                item.question.toLowerCase().includes(qnaSearchQuery.toLowerCase()) ||
                                                item.answer.toLowerCase().includes(qnaSearchQuery.toLowerCase()) ||
                                                item.keywords.some(kw => kw.toLowerCase().includes(qnaSearchQuery.toLowerCase()));
                                            return matchesCategory && matchesSearch;
                                        });

                                        if (filtered.length === 0) {
                                            return (
                                                <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-12 text-center text-outline">
                                                    <span className="material-symbols-outlined text-5xl mb-3 block">search_off</span>
                                                    검색어 또는 카테고리에 맞는 Q&A 내역이 없습니다.
                                                </div>
                                            );
                                        }

                                        return filtered.map(item => {
                                            const isOpen = qnaOpenId === item.id;
                                            return (
                                                <div
                                                    key={item.id}
                                                    className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
                                                >
                                                    <button
                                                        onClick={() => setQnaOpenId(isOpen ? null : item.id)}
                                                        className="w-full px-6 py-4.5 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="bg-[#e8f2fc] text-[#144780] text-xs font-bold px-3 py-1 rounded-lg shrink-0">
                                                                {item.category}
                                                            </span>
                                                            <span className="font-bold text-on-surface text-base md:text-lg leading-snug">
                                                                {item.question}
                                                            </span>
                                                        </div>
                                                        <span className={`material-symbols-outlined text-outline transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`}>
                                                            expand_more
                                                        </span>
                                                    </button>
                                                    <div
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-outline-variant' : 'max-h-0'
                                                            }`}
                                                    >
                                                        <div className="p-6 bg-surface-container-lowest text-on-surface-variant text-base leading-relaxed whitespace-pre-line">
                                                            <div className="flex gap-2 items-start">
                                                                <span className="material-symbols-outlined text-primary font-bold mt-0.5 shrink-0">question_answer</span>
                                                                <p>{item.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        });
                                    })()}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 flex flex-col gap-6">
                                <div className="bg-white rounded-3xl p-6 shadow-md border border-outline-variant">
                                    <h4 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                        <span className="material-symbols-outlined font-bold text-2xl">chat</span>
                                        1:1 세무 간편 문의
                                    </h4>
                                    <p className="text-sm text-outline mb-4">
                                        원하시는 질문이 없으신가요? 세무비서 세복이에게 직접 질문해 보세요!
                                    </p>
                                    <form onSubmit={handleQnaSubmit} className="flex flex-col gap-3">
                                        <textarea
                                            rows="3"
                                            placeholder="예: 직원이 없는 1인 기업인데 대표 식대는 비용처리가 되나요?"
                                            value={qnaInputQuestion}
                                            onChange={(e) => setQnaInputQuestion(e.target.value)}
                                            className="w-full border-2 border-outline-variant rounded-2xl p-4 text-sm focus:outline-none focus:border-primary disabled:opacity-50"
                                            disabled={isQnaLoading}
                                        />
                                        <button
                                            type="submit"
                                            disabled={isQnaLoading || !qnaInputQuestion.trim()}
                                            className="w-full bg-primary hover:bg-primary-container text-white font-bold py-3 rounded-2xl shadow-md transition-all disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            {isQnaLoading ? (
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            ) : (
                                                <>
                                                    질문하기
                                                    <span className="material-symbols-outlined text-sm font-bold">send</span>
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    {(qnaAnswerResult || isQnaLoading) && (
                                        <div className="mt-5 p-4 bg-blue-50 border border-blue-100 rounded-2xl animate-in fade-in duration-200">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-6 h-6 rounded-full bg-white p-0.5 border border-blue-200 overflow-hidden shrink-0">
                                                    <img src="/chat_icon.png" alt="세복이" className="w-full h-full object-contain" />
                                                </div>
                                                <span className="font-bold text-[#144780] text-sm">세복이의 실시간 답변</span>
                                            </div>
                                            {isQnaLoading ? (
                                                <div className="flex items-center gap-1.5 p-2">
                                                    <div className="w-1.5 h-1.5 bg-[#144780] rounded-full animate-bounce"></div>
                                                    <div className="w-1.5 h-1.5 bg-[#144780] rounded-full animate-bounce delay-75"></div>
                                                    <div className="w-1.5 h-1.5 bg-[#144780] rounded-full animate-bounce delay-150"></div>
                                                </div>
                                            ) : (
                                                <p className="text-sm text-[#144780] leading-relaxed whitespace-pre-line">
                                                    {qnaAnswerResult}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="bg-surface-container-low rounded-3xl p-6 border border-outline-variant flex flex-col gap-4">
                                    <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
                                        <span className="material-symbols-outlined text-secondary">contact_support</span>
                                        고객지원 안내
                                    </h4>
                                    <div className="flex flex-col gap-3 text-sm text-on-surface-variant">
                                        <div>
                                            <p className="text-xs text-outline font-bold">고객센터 대표번호</p>
                                            <p className="text-lg font-black text-primary mt-0.5">1644-1234</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-outline font-bold">운영시간</p>
                                            <p className="font-semibold text-on-surface mt-0.5">평일 09:00 ~ 18:00</p>
                                            <p className="text-[11px] text-outline mt-0.5">(점심시간 12:00 ~ 13:00 / 주말, 공휴일 휴무)</p>
                                        </div>
                                        <div className="border-t border-outline-variant pt-3 flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-outline font-semibold">이메일 문의</span>
                                                <a href="mailto:support@seboki.co.kr" className="text-primary hover:underline font-bold">support@seboki.co.kr</a>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-outline font-semibold">카카오톡 채널</span>
                                                <span className="bg-[#fee500] text-[#3c1e1e] font-bold px-2 py-0.5 rounded text-xs shadow-sm">@세복이세무비서</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-surface-container w-full border-t border-outline-variant mt-12">
                <div className="w-full py-8 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto gap-4 md:gap-0">
                    <div className="font-bold text-xl text-primary">
                        소상공인 1초 세금비서
                    </div>
                    <div className="flex gap-4 items-center">
                        <a className="font-medium text-on-surface-variant hover:underline" href="#">이용약관</a>
                        <span className="text-outline-variant text-sm">|</span>
                        <a className="font-medium text-on-surface-variant hover:underline" href="#">개인정보처리방침</a>
                        <span className="text-outline-variant text-sm">|</span>
                        <a className="font-medium text-on-surface-variant hover:underline" href="#">사업자정보확인</a>
                    </div>
                    <div className="text-on-surface-variant font-medium">
                        © 2026 소상공인 1초 세금비서. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Modals */}
            {showTaxDetailModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        <h4 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl">analytics</span>
                            세금 예상 상세 보고서
                        </h4>
                        <div className="space-y-4 border-y border-outline-variant py-4 text-base">
                            <div className="flex justify-between font-medium">
                                <span className="text-outline">기본 소득세 (연동 전 기준)</span>
                                <span>{dashboard.recent_count === 0 ? "0 원" : "2,500,000 원"}</span>
                            </div>
                            <div className="flex justify-between font-bold text-secondary">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                                    사업용 지출 절세 혜택 (10% 세액공제)
                                </span>
                                <span>- {dashboard.recent_count === 0 ? "0" : (2500000 - expectedTax).toLocaleString()} 원</span>
                            </div>
                            <div className="border-t border-outline-variant pt-4 flex justify-between text-xl font-black text-primary">
                                <span>최종 예상 세금</span>
                                <span>{expectedTax.toLocaleString()} 원</span>
                            </div>
                        </div>
                        <p className="text-sm text-outline mt-4 leading-relaxed">
                            💡 <b>세복이의 절세 팁:</b> 개인 장보기 영수증보다 사업 관련 자재(식자재, 배달비, 용품 등) 영수증을 성실히 촬영해 등록하실수록 공제 혜택이 더욱 늘어납니다!
                        </p>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setShowTaxDetailModal(false)}
                                className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showWarningDetailModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        <h4 className="text-2xl font-bold text-error mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-3xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                            3만원 초과 비적격증빙 지출 내역
                        </h4>
                        <p className="text-sm text-outline mb-4">
                            세법상 3만 원을 초과하는 사업용 경비 지출은 신용카드, 세금계산서, 현금영수증 등 <b>적격증빙</b>을 수취해야 하며, 간이영수증이나 증빙이 없는 경우 2%의 증빙불성실 가산세가 부과되거나 비용 처리가 부인될 수 있습니다.
                        </p>

                        <div className="space-y-3 max-h-[250px] overflow-y-auto border-y border-outline-variant py-4">
                            {(() => {
                                const realWarnings = transactions.filter(t => t.type === 'expense' && t.category === 'business' && ['간이영수증', '증빙없음'].includes(t.proof_type) && t.amount > 30000);
                                const listToShow = realWarnings.length > 0 ? realWarnings : [
                                    { id: 'm1', summary: "쿠팡비즈 사무실 비품", date: "2026-06-15", proof_type: "간이영수증", amount: 45000 },
                                    { id: 'm2', summary: "퀵서비스 오토바이 배송", date: "2026-06-09", proof_type: "증빙없음", amount: 35000 }
                                ];
                                return listToShow.map(t => (
                                    <div key={t.id} className="p-3.5 bg-red-50 border border-red-100 rounded-xl flex justify-between items-center text-left">
                                        <div>
                                            <p className="font-bold text-on-surface text-base">{t.summary}</p>
                                            <p className="text-xs text-outline mt-1">날짜: {t.date} | 증빙: <span className="text-red-600 font-bold">{t.proof_type}</span></p>
                                        </div>
                                        <div className="text-right shrink-0 ml-4">
                                            <p className="font-black text-red-600 text-lg">{t.amount.toLocaleString()}원</p>
                                            <p className="text-[11px] text-error font-semibold mt-1">예상 가산세: {Math.round(t.amount * 0.02).toLocaleString()}원</p>
                                        </div>
                                    </div>
                                ));
                            })()}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setShowWarningDetailModal(false)}
                                className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                확인했습니다
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showConnectModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl text-center relative animate-in fade-in zoom-in-95 duration-200">
                        <div className="text-6xl mb-4">🎉</div>
                        <h4 className="text-2xl font-bold text-on-surface mb-2">연동 완료!</h4>
                        <p className="text-lg text-on-surface-variant font-medium mb-4">
                            사장님의 숨은 절세 항목 <span className="text-secondary font-bold">14건</span>을 성공적으로 분석하여 장부에 반영했습니다.
                        </p>
                        <div className="bg-surface-container-low rounded-xl p-4 mb-6 text-left">
                            <p className="text-base text-on-surface font-semibold">📈 대시보드 업데이트 리포트:</p>
                            <ul className="list-disc list-inside text-sm text-on-surface-variant mt-2 space-y-1">
                                <li>예상 세금이 기존 대비 대폭 절감되었습니다.</li>
                                <li>사업용 지출 비율이 {businessRatio}%로 집계되었습니다.</li>
                            </ul>
                        </div>
                        <button
                            onClick={() => setShowConnectModal(false)}
                            className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                            확인했습니다
                        </button>
                    </div>
                </div>
            )}

            {showReceiptResultModal && receiptResults && receiptResults.length > 0 && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="material-symbols-outlined text-4xl text-green-600 font-bold">task_alt</span>
                            <h4 className="text-2xl font-bold text-on-surface">영수증 AI 분석 결과 ({receiptResults.length}건)</h4>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto space-y-4 border-y border-outline-variant py-4 text-base">
                            {receiptResults.map((result, idx) => (
                                <div key={idx} className="p-3 bg-surface-container-low rounded-xl space-y-3">
                                    <div className="flex justify-between items-center text-sm text-outline border-b border-outline-variant pb-1.5">
                                        <span>파일명: {result.filename}</span>
                                        <span className={`font-bold px-2.5 py-1 rounded-full text-xs shadow-sm ${result.category === 'business' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                            {result.category_kr}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs text-outline font-bold">적요 (상호명)</label>
                                            <input
                                                type="text"
                                                value={result.summary}
                                                onChange={(e) => handleResultChange(idx, 'summary', e.target.value)}
                                                className="w-full bg-white border border-outline-variant rounded-lg p-2 text-sm text-on-surface font-bold focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <label className="text-xs text-outline font-bold">금액 (원)</label>
                                            <input
                                                type="number"
                                                value={result.amount}
                                                onChange={(e) => handleResultChange(idx, 'amount', parseInt(e.target.value) || 0)}
                                                className="w-full bg-white border border-outline-variant rounded-lg p-2 text-sm text-primary font-bold focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <div className="flex gap-2 items-center">
                                            <span className="text-xs text-outline font-bold">세무 분류 수정:</span>
                                            <select
                                                value={result.category}
                                                onChange={(e) => {
                                                    const cat = e.target.value;
                                                    handleResultChange(idx, 'category', cat);
                                                    handleResultChange(idx, 'category_kr', cat === 'business' ? '사업용 (절세 대상)' : '개인용 (공제 제외)');
                                                }}
                                                className="bg-white border-2 border-outline-variant rounded-lg px-2 py-1 text-xs font-bold text-on-surface focus:outline-none focus:border-primary"
                                            >
                                                <option value="business">💼 사업용 (절세)</option>
                                                <option value="personal">👤 개인용 (공제제외)</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <span className="text-xs text-outline font-bold">증빙 종류:</span>
                                            <select
                                                value={result.proof_type || "신용카드"}
                                                onChange={(e) => {
                                                    handleResultChange(idx, 'proof_type', e.target.value);
                                                }}
                                                className="bg-white border-2 border-outline-variant rounded-lg px-2 py-1 text-xs font-bold text-on-surface focus:outline-none focus:border-primary"
                                            >
                                                <option value="세금계산서">세금계산서</option>
                                                <option value="계산서">계산서</option>
                                                <option value="신용카드">신용카드</option>
                                                <option value="현금영수증">현금영수증</option>
                                                <option value="간이영수증">간이영수증</option>
                                                <option value="증빙없음">증빙없음</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-outline mt-4 leading-relaxed">
                            💡 세복이가 영수증 이미지를 분석하여 경비 성격에 맞게 사업용(절세 대상) 또는 개인용(공제 제외)으로 분류하여 장부에 자동 등록하였습니다.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={handleSaveReceiptsToLedger}
                                className="flex-1 bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all">
                                장부에 저장
                            </button>
                            <button
                                onClick={handleCancelReceipts}
                                className="flex-1 bg-surface-container-high text-on-surface font-bold py-3 rounded-xl hover:bg-surface-variant transition-all border border-outline-variant">
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chatbot Floating Area */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
                {showChatbot && (
                    <div className="w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-outline-variant flex flex-col overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
                        <div className="bg-primary text-white p-4 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-white p-0.5 overflow-hidden">
                                    <img src="/chat_icon.png" alt="세복이 챗봇 아이콘" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base leading-tight">세무비서 세복이</h4>
                                    <span className="text-[11px] opacity-85">실시간 세무 Q&A 답변 서비스</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowChatbot(false)}
                                className="text-white/80 hover:text-white p-1 rounded-lg transition-colors flex items-center justify-center">
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-surface-container-low">
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'seboki' && (
                                        <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-outline-variant overflow-hidden shrink-0">
                                            <img src="/chat_icon.png" alt="세복이" className="w-full h-full object-contain" />
                                        </div>
                                    )}
                                    <div className={`p-3 text-base max-w-[75%] leading-relaxed whitespace-pre-line ${msg.sender === 'user'
                                        ? 'bg-primary text-white rounded-2xl rounded-tr-none shadow-sm'
                                        : 'bg-white text-on-surface rounded-2xl rounded-tl-none border border-outline-variant shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isChatLoading && (
                                <div className="flex gap-2.5 justify-start">
                                    <div className="w-8 h-8 rounded-full bg-white p-0.5 border border-outline-variant overflow-hidden shrink-0 animate-pulse">
                                        <img src="/chat_icon.png" alt="세복이" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="bg-white text-on-surface p-3 rounded-2xl rounded-tl-none border border-outline-variant shadow-sm flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce delay-75"></div>
                                        <div className="w-1.5 h-1.5 bg-outline rounded-full animate-bounce delay-150"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        <form onSubmit={handleSendChatMessage} className="p-3 bg-white border-t border-outline-variant flex gap-2 items-center shrink-0">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="궁금한 세무 키워드를 물어보세요! (예: 부가세)"
                                disabled={isChatLoading}
                                className="flex-grow border-2 border-outline-variant rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isChatLoading || !chatInput.trim()}
                                className="bg-primary text-white p-2 rounded-xl hover:bg-primary-container disabled:opacity-50 transition-all flex items-center justify-center shrink-0 w-10 h-10 shadow-md">
                                <span className="material-symbols-outlined text-xl">send</span>
                            </button>
                        </form>
                    </div>
                )}

                <div className="relative flex items-center">
                    <div className={`absolute right-[98px] whitespace-nowrap bg-white text-black text-[14px] font-normal py-2 px-3.5 rounded-xl shadow-xl pointer-events-none transition-opacity duration-200 border border-outline-variant z-50 ${showChatbot ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                        챗봇 '세복이'에게 물어보세요
                        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-t border-r border-outline-variant"></div>
                    </div>
                    <button
                        onClick={() => setShowChatbot(!showChatbot)}
                        className="w-[84px] h-[84px] rounded-full bg-gradient-to-tr from-sky-50 to-blue-100 hover:from-sky-100 hover:to-blue-200 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white p-2.5 overflow-hidden">
                        <img src="/chat_icon.png" alt="세복이 챗봇 버튼" className="w-full h-full object-contain" />
                    </button>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
