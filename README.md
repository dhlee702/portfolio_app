
# 요구사항 명세서
개인 포트폴리오 1페이지 웹사이트 기능 명세서
1. 프로젝트 개요

목적: 웹기획자 개인 포트폴리오를 소개하는 1페이지 웹사이트 제작

특징: 모던 디자인, 반응형, 빠른 로딩 속도, 직관적 정보 구조

기술 스택(권장):

Frontend: HTML5, CSS3, JavaScript (또는 Next.js / React 선택 가능)

UI Framework(옵션): Tailwind CSS

애니메이션: GSAP 또는 AOS

배포: Netlify / Vercel

2. 페이지 구조 (섹션별 기능 명세)
2.1 Header & Navigation

기능 요구사항

고정형(Fixed) 네비게이션

섹션 스크롤 시 네비게이션 활성 상태 표시

로고 또는 이름 표시

메뉴: Home / About / Skills / Projects / Contact

모바일 메뉴: 햄버거 버튼 → 슬라이드 열림

2.2 Hero 섹션 (인트로)

기능 요구사항

전체 화면 Full-screen 배치

메인 문구(Text Animation):

“Web Planner / UX Strategist / Project Manager”

부가 설명 문구 Fade-in 처리

CTA 버튼:

“Portfolio 보기” → Projects 섹션로 스크롤 이동

“CV 다운로드”

배경:

정적 이미지 또는 그라디언트 + 모션 배경 선택 가능

2.3 About Me 섹션

기능 요구사항

프로필 사진 + 간단한 소개문

직무 핵심 역할 리스트

예: Web 기획, IA 설계, Prototype, 요구사항 정의, PM 등

주요 경력/연차/강점 3~4개 카드 형태로 정리

“Resume 다운로드” 버튼

2.4 Skills 섹션

기능 요구사항

기술 카테고리 구분:

Web Planning / UX / Tools / Communication

기술 레벨 표현 방식 선택:

Progress Bar / Circle Chart / Tag 방식 중 택1

웹 기획 관련 툴 아이콘 목록 (Figma, Jira, Notion 등)

마우스 오버 시 간단 설명 Tooltip

2.5 Projects 섹션

기능 요구사항

프로젝트 카드 리스트

프로젝트 제목

간략 설명

담당 역할

사용 툴

썸네일 이미지

“자세히 보기” 링크 (모달 또는 외부 상세 페이지)

카드 Hover 시 Elevation 또는 Scale 효과

필터 기능(옵션)

Web App / Corporate Site / UX / PM 등 태그 기반 필터링

2.6 Contact 섹션

기능 요구사항

기본 정보: Email, LinkedIn, GitHub

Contact Form (옵션)

입력: Name / Email / Message

Validation 적용

제출 후 성공 메시지 표시

폼 제출 시 Email API 연동 (EmailJS 또는 Serverless Function)

3. 공통 UI/UX 기능 요구사항
3.1 반응형 디자인

데스크탑 / 태블릿 / 모바일 최적화

Grid 기반 컴포넌트 재배치

3.2 스크롤 애니메이션

섹션 진입 시 Fade, Slide-in 효과

성능 고려하여 Lazy-loading 적용

3.3 Light / Dark Mode (옵션)

헤더에 토글 버튼 배치

사용자 브라우저 모드 자동 인식 (prefers-color-scheme)

4. 성능 및 기술 요구사항
4.1 성능

이미지 webp 변환 및 Lazy-load 처리

CSS/JS minify 적용

Lighthouse 성능 점수 90+ 목표

4.2 SEO

메타태그 기본 구성

Open Graph 적용(프로필 이미지, 설명)

Sitemap.xml / Robots.txt 포함

4.3 접근성

모든 이미지 alt 태그 제공

명도 대비 준수

키보드 Tab 이동 가능하도록 구성

5. 관리자/운영 기능 (옵션)

프로젝트 카드 내용을 JSON 파일 또는 Headless CMS로 관리 가능하도록 설계
(예: Notion API, Strapi, Contentful 등)

6. 개발 산출물 요구사항

Github Repo 구조 명시

README 포함

프로젝트 개요

설치/실행 방법