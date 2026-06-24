# 소상공인 1초 세금비서 (세복이) 시스템 구축 계획

이 계획서는 `AGEMTS.md` 및 `DESIGN.md`, 그리고 `smp.html` 구조를 철저히 참고하여 소상공인 1초 세금비서 시스템을 구축하기 위한 계획입니다. 특히, **복잡한 설계를 배제하고 누구나 이해하기 쉬우며 직관적인 구조로 시스템을 단순화하여 구축**하는 데 중점을 둡니다.

## User Review Required

> [!IMPORTANT]
> - **개발 단순성 극대화**: 프레임워크나 복잡한 디렉토리 깊이를 최소화하여, 백엔드는 하나의 진입점을 가진 깔끔한 구조로 개발하고, 프론트엔드는 빌드 단계가 필요 없는 React CDN 방식을 사용해 직관적으로 소스코드를 파악할 수 있도록 단순화합니다.
> - **OpenAI API 연동**: OpenAI API 키가 필요한 멀티에이전트 기능이 포함되어 있으므로, 로컬 실행을 위해 `.env` 파일에 API 키를 입력해주셔야 정상적인 AI 분류 기능이 동작합니다. (미입력 시 모의 데이터로 자동 폴백(fallback)되도록 구현합니다.)

## Proposed Changes

프로젝트 폴더 구조를 아래와 같이 구성합니다:
- `html/`: 프론트엔드 HTML 파일 (`index.html`)
- `js/`: React 컴포넌트 및 로직 파일 (`app.js`)
- `css/`: 디자인 시스템 및 사용자 정의 스타일 (`style.css`)
- `backend/`: FastAPI 애플리케이션 및 SQLite DB 연동 (`main.py`)
- `requirements.txt`: 필요한 파이썬 라이브러리 목록
- `.env`: 환경 변수 설정 파일

---

### [Backend Component]

코드의 가독성과 유지보수 편의성을 위해 백엔드 구조를 최대한 직관적이고 납작하게(Flat) 구성합니다.
- **SQLite 단일 테이블 관리**: 복잡한 ORM 설계 대신 내장 `sqlite3` 모듈 또는 단순한 구조를 사용하여 `main.py` 내에서 직관적으로 DB 쿼리 및 데이터를 처리합니다.
- **직관적인 모의/실제 하이브리드 Agent**: OpenAI API 키가 있을 경우 실제 LLM 호출을 통해 지출을 분류하고, 없을 경우 사전에 정의된 직관적인 키워드 매핑 룰(예: '마트'->개인용, '식자재'->사업용)을 사용하여 누구나 코드를 열어보았을 때 흐름을 1초 만에 파악할 수 있게 단순화합니다.

#### [NEW] [main.py](file:///c:/AI_Agent/PRJT/backend/main.py)
- FastAPI 웹 서버 설정, SQLite 데이터베이스 연결, AI 지출 분류 Agent 로직, 그리고 API 엔드포인트를 한눈에 볼 수 있도록 모아둔 직관적인 메인 파일.

---

### [Frontend Component]

`smp.html`의 레이아웃과 디자인 요소를 100% 반영하여 React로 컴포넌트화하되, 코드가 파편화되지 않도록 `app.js` 파일 하나에 상태 관리와 핵심 컴포넌트를 모두 담아 가독성을 높입니다.
- **이번 달 예상 세금 및 상세보기**: 대시보드 메인 배너 영역에 표시하며, "세금 상세 내역 보기" 클릭 시 상세 내역 모달/오버레이 제공.
- **세복이 안내 영역**: 둥실둥실 움직이는 3D 복주머니 요정 세복이 캐릭터와 맞춤형 안내 문구 말풍선.
- **소득 대비 지출 현황**: 사업용 지출(절세 대상)과 개인용 지출의 비율을 시각화하는 고대비 프로그레스 바 그래프 표시.
- **카드/은행 연결 & 종이 영수증 촬영**:
  - **내 카드·은행 연결하기**: 3D 열쇠 아이콘 버튼 클릭 시 2초간 "연동 중..." 로딩 스피너 애니메이션 후, "🎉 연동 완료! 숨은 절세 항목 14건을 찾았습니다." 안내 팝업 노출 및 대시보드 상태 업데이트.
  - **종이 영수증 바로 촬영하기**: 3D 카메라 아이콘 버튼 클릭 시 파일 선택창을 띄우고, 모의/실제 영수증 업로드 시 분석 결과(식재료비/용품비 등 사업용 지출 자동 분류 완료 알림) 출력.
- **최근 장부 건수 및 세부 내역**: 최근 추가된 장부 건수(신규 14건 등) 및 세부 항목 리스트 표시 및 토글 토글 기능.
- **세금 신고 일정 알림**: D-Day 배지 형태로 "세금 신고 디데이: 10월 15일" 표시.

#### [NEW] [index.html](file:///c:/AI_Agent/PRJT/html/index.html)
- React, Babel, Tailwind CSS CDN을 로드하고 프론트엔드 마운트 지점 제공.

#### [NEW] [app.js](file:///c:/AI_Agent/PRJT/js/app.js)
- 메인 대시보드 화면 및 모달 UI, API 연동 상태 관리를 포함한 React 애플리케이션 핵심 로직.

#### [NEW] [style.css](file:///c:/AI_Agent/PRJT/css/style.css)
- `DESIGN.md` 기반의 색상 테마 및 세복이 캐릭터 둥실둥실(float) 애니메이션 등 추가 스타일 정의.

---

### [Configuration]

#### [NEW] [requirements.txt](file:///c:/AI_Agent/PRJT/requirements.txt)
- `fastapi`, `uvicorn`, `openai`, `python-dotenv`, `python-multipart` 등 명시.

#### [NEW] [.env](file:///c:/AI_Agent/PRJT/.env)
- OpenAI API Key 등 환경 변수 템플릿.

## Verification Plan

### Automated Tests
- FastAPI 백엔드 수동 구동 테스트: `python -m uvicorn backend.main:app --reload`
- 브라우저를 통한 시나리오 동작 검증 (계좌 연동 클릭 -> 로딩 -> 완료 및 수치 업데이트, 영수증 업로드 -> 분류 확인).

### Manual Verification
- 브라우저로 `http://localhost:8000` 접속 후 `AGEMTS.md`의 Scene 1, 2, 3 시연 동선이 정상적으로 연출되는지 확인.
