const { useState, useEffect, useRef } = React;

function App() {
    // 상태 관리 정의
    const [dashboard, setDashboard] = useState({
        expected_tax: 1245000,
        business_ratio: 75,
        personal_ratio: 25,
        recent_count: 0,
        d_day: "10월 15일"
    });
    const [transactions, setTransactions] = useState([]);
    const [isConnecting, setIsConnecting] = useState(false);
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showTaxDetailModal, setShowTaxDetailModal] = useState(false);
    const [showReceiptResultModal, setShowReceiptResultModal] = useState(false);
    const [receiptResults, setReceiptResults] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    // 컴포넌트 로드 시 데이터 조회
    useEffect(() => {
        fetchDashboardData();
        fetchTransactions();
    }, []);

    // 대시보드 API 호출
    const fetchDashboardData = async () => {
        try {
            const res = await fetch('/api/dashboard');
            const data = await res.json();
            setDashboard(data);
        } catch (err) {
            console.error("대시보드 데이터 조회 실패:", err);
        }
    };

    // 거래 내역 API 호출
    const fetchTransactions = async () => {
        try {
            const res = await fetch('/api/transactions');
            const data = await res.json();
            setTransactions(data);
        } catch (err) {
            console.error("거래 내역 조회 실패:", err);
        }
    };

    // 내 계좌 연결하기 실행
    const handleConnectAccounts = async () => {
        setIsConnecting(true);
        try {
            const res = await fetch('/api/connect-accounts', { method: 'POST' });
            const data = await res.json();
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
                setIsConnecting(false);
                setShowConnectModal(true); // 완료 팝업 노출
            }
        } catch (err) {
            console.error("계좌 연결 실패:", err);
            setIsConnecting(false);
        }
    };

    // 거래 내역 삭제 실행
    const handleDeleteTransaction = async (id) => {
        if (!confirm("이 거래 내역을 정말 삭제하시겠습니까?")) return;
        try {
            const res = await fetch(`/api/transactions/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
            }
        } catch (err) {
            console.error("거래 삭제 에러:", err);
        }
    };

    // 영수증 스캔 기능 호출 (파일 다이얼로그)
    const triggerReceiptUpload = () => {
        fileInputRef.current.click();
    };

    // 영수증 파일 업로드 처리
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
            const data = await res.json();
            if (data.status === 'success') {
                setReceiptResults(data.results);
                setIsUploading(false);
                setShowReceiptResultModal(true); // 결과 모달 노출
            }
        } catch (err) {
            console.error("영수증 업로드 에러:", err);
            setIsUploading(false);
        }
        // 인풋 초기화
        e.target.value = null;
    };

    const handleSaveReceiptsToLedger = async () => {
        if (!receiptResults || receiptResults.length === 0) return;
        try {
            const res = await fetch('/api/transactions/bulk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(receiptResults.map(r => ({
                    date: r.date,
                    summary: r.summary,
                    amount: r.amount,
                    type: r.type,
                    category: r.category
                })))
            });
            const data = await res.json();
            if (data.status === 'success') {
                await fetchDashboardData();
                await fetchTransactions();
                setShowReceiptResultModal(false);
                setReceiptResults([]);
            }
        } catch (err) {
            console.error("영수증 저장 에러:", err);
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

    return (
        <div className="flex-grow flex flex-col min-h-screen">
            {/* Header (TopNavBar) */}
            <header className="shadow-sm bg-surface-container-lowest sticky top-0 z-40 border-b border-outline-variant">
                <div className="flex justify-between items-center w-full px-4 md:px-8 h-[72px] max-w-[1200px] mx-auto">
                    {/* Brand Logo */}
                    <div className="font-bold text-2xl text-primary cursor-pointer flex items-center gap-2">
                        <span className="material-symbols-outlined font-bold text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
                        소상공인 1초 세금비서
                    </div>
                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-primary font-bold border-b-2 border-primary pb-1 transition-colors" href="#">홈</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#ledger">장부내역</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">세금신고</a>
                        <a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">고객센터</a>
                    </nav>
                    {/* Trailing Actions */}
                    <div className="flex items-center gap-4">
                        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden cursor-pointer border border-outline-variant">
                            <img alt="Seboki user profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAceHLmOtIggpB7dULLTI1_lsWsdi_RMYeHcsl2aOuraq28URg994K5ZbbXjZr3gO-ykXnO9AkFHY448MZ-pSyv0JB5omzHnv-3i9wN2oWGIzAAFnPyEmquHXEGY-Sp0xW5eA17aYVnZOohqe57_cpetlzVTzSIDFX0qvYMdXbzVU4LlEwuNIABl5rgu_TtRXUX_tJGR3HCaGzU8h9GOqWr3VF7eo-As0JybpJ7rUMi7iCJlT_To7w90Obg4gFkErJxZfqY5FfysnTR" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">
                
                {/* 1. 이번 달 예상 세금 및 상세보기 */}
                <section className="bg-surface-container-lowest rounded-2xl shadow-md border-t-[6px] border-primary overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative">
                    <div className="flex flex-col gap-3 z-10 w-full md:w-1/2">
                        <h2 className="text-xl font-bold text-on-surface-variant flex items-center gap-2">
                            <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                            이번 달 예상 세금
                        </h2>
                        <div className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                            {dashboard.expected_tax.toLocaleString()}<span className="text-2xl font-bold ml-1">원</span>
                        </div>
                        <p className="text-sm text-outline mt-1">
                            * 국세청 연동 데이터를 기반으로 실시간 계산된 절세 반영 예상 세금입니다.
                        </p>
                        <button 
                            onClick={() => setShowTaxDetailModal(true)}
                            className="mt-4 bg-primary text-on-primary font-bold py-3 px-6 rounded-xl w-fit hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md active:scale-95 flex items-center gap-2 text-lg">
                            세금 상세 내역 보기
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                    {/* 세복이 안내 영역 및 캐릭터 */}
                    <div className="relative mt-8 md:mt-0 flex items-center justify-center p-6 rounded-2xl bg-gradient-to-tr from-sky-50 to-blue-100 w-full md:w-1/2 min-h-[220px]">
                        {/* Speech Bubble */}
                        <div className="absolute top-2 right-4 bg-primary text-on-primary p-4 rounded-2xl rounded-br-none shadow-md max-w-[280px] z-10 float-animation border border-primary-container">
                            <p className="text-base font-bold leading-snug">
                                "반갑습니다 사장님!<br/>저 세복이에게 세금 걱정은 싹 맡기시고 오늘 장사에만 집중하세요!"
                            </p>
                        </div>
                        {/* Mascot Image */}
                        <img alt="세복이 마스코트" className="w-[180px] md:w-[220px] h-auto object-contain z-0 drop-shadow-xl relative top-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRRisqxz5ACe0iW3ONds9pax7uMRXVyaycjOHPFsv9YL2l7LcHlBZeNFRLQUUClZzflaV95Af_iw_3t0VS_50LXgJj-Nj5Q5SCdOR-CNZzVa4aVcL8lXMVpmbYOfG7iYpiyL2lLFL7iwn8RT3yOdGZjyQTluUqpeBzqENZQtAmxKfkzMaO28xRjAG8Uy3D5T45eyTSrYfVBE5KRbRKKO3KqMb51acZsbwGHghUXxXBOEYJwoAc_2uy2OOxgu8wRNMhFsu_Ag40qnMO" />
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
                            {/* Business Expense Column */}
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-on-surface-variant">사업용 지출 (절세 가능)</span>
                                    <span className="text-2xl font-bold text-primary">{dashboard.business_ratio}%</span>
                                </div>
                                <div className="w-full h-6 bg-surface-variant rounded-full overflow-hidden border border-outline-variant">
                                    <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: `${dashboard.business_ratio}%` }}></div>
                                </div>
                            </div>
                            {/* Personal Expense Column */}
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex justify-between items-end">
                                    <span className="text-lg font-bold text-on-surface-variant">개인용 지출 (공제 제외)</span>
                                    <span className="text-2xl font-bold text-outline">{dashboard.personal_ratio}%</span>
                                </div>
                                <div className="w-full h-6 bg-surface-variant rounded-full overflow-hidden border border-outline-variant">
                                    <div className="h-full bg-outline-variant rounded-full transition-all duration-1000 ease-out" style={{ width: `${dashboard.personal_ratio}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. 카드/은행 연결 & 종이 영수증 촬영 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 카드/은행 연결 버튼 */}
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

                    {/* 종이 영수증 바로 촬영하기 버튼 */}
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

                    {/* 숨겨진 파일 인풋 */}
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleReceiptUpload} 
                        accept="image/*, .png, .jpg, .jpeg, .heic" 
                        multiple={true}
                        className="hidden" 
                    />
                </section>

                {/* 4. 최근 장부 건수 및 세부 내역 & 5. 세금 신고 일정 알림 */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    {/* 최근 장부 요약 배너 */}
                    <a href="#ledger" className="bg-surface-container-lowest rounded-2xl p-6 shadow-md border border-surface-variant flex items-center justify-between hover:shadow-lg transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-surface-container rounded-full text-on-surface-variant">
                                <span className="material-symbols-outlined text-2xl font-bold">receipt_long</span>
                            </div>
                            <span className="text-xl font-bold text-on-surface">최근 장부 내역: <span className="text-secondary font-black">신규 {dashboard.recent_count}건</span></span>
                        </div>
                        <span className="material-symbols-outlined text-outline font-bold">chevron_right</span>
                    </a>

                    {/* 세금 신고 일정 알림 */}
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

                {/* 장부 세부 내역 목록 */}
                <section id="ledger" className="bg-surface-container-lowest rounded-2xl shadow-md p-6 md:p-8 mt-2">
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

            {/* --- 모달 다이얼로그 모음 --- */}

            {/* 1. 세금 상세 내역 모달 */}
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
                                <span>2,500,000 원</span>
                            </div>
                            <div className="flex justify-between font-bold text-secondary">
                                <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm font-bold">check_circle</span>
                                    사업용 지출 절세 혜택 (10% 세액공제)
                                </span>
                                <span>- {(2500000 - dashboard.expected_tax).toLocaleString()} 원</span>
                            </div>
                            <div className="border-t border-outline-variant pt-4 flex justify-between text-xl font-black text-primary">
                                <span>최종 예상 세금</span>
                                <span>{dashboard.expected_tax.toLocaleString()} 원</span>
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

            {/* 2. 카드/은행 계좌 연결 성공 모달 */}
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
                                <li>사업용 지출 비율이 {dashboard.business_ratio}%로 집계되었습니다.</li>
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

            {/* 3. 영수증 업로드 & AI 분석 결과 모달 */}
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
                                    <div className="flex gap-2 items-center">
                                        <span className="text-xs text-outline font-bold">세무 분류 수정:</span>
                                        <select
                                            value={result.category}
                                            onChange={(e) => {
                                                const cat = e.target.value;
                                                handleResultChange(idx, 'category', cat);
                                                handleResultChange(idx, 'category_kr', cat === 'business' ? '사업용 (절세 대상)' : '개인용 (공제 제외)');
                                            }}
                                            className="bg-white border border-outline-variant rounded-lg px-2 py-1 text-xs font-bold text-on-surface focus:outline-none focus:border-primary"
                                        >
                                            <option value="business">💼 사업용 (절세)</option>
                                            <option value="personal">👤 개인용 (공제제외)</option>
                                        </select>
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
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
