/**
 * API 기본 URL 설정
 *
 * [로컬 개발]
 *   API_BASE = ''  (빈 문자열 → 상대 경로, 로컬 FastAPI 서버가 처리)
 *
 * [Cloudflare Pages 배포 후]
 *   Railway 백엔드 URL로 변경:
 *   API_BASE = 'https://your-app.railway.app'
 *
 * 주의: 끝에 슬래시(/)를 붙이지 마세요.
 */

// ✅ 데모 버전: 백엔드 없이 브라우저(localStorage)만으로 동작
// API 호출이 실패하면 자동으로 로컬 데이터로 폴백됩니다.
const API_BASE = '';

// 🚀 실서비스 배포 시 (Railway 등 백엔드 서버 주소):
// const API_BASE = 'https://your-app.railway.app';
