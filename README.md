# 탐구와 실천 기말 과제 – 하이브리드 다문화 통합 플랫폼

> **주제:** 온·오프라인이 연계된 하이브리드 다문화 통합 플랫폼 구축  
> **과목:** 탐구와 실천  
> **기술 스택:** Next.js (App Router) · TypeScript · Tailwind CSS

이 레포지토리는 “온·오프라인이 연계된 다문화 통합 플랫폼”을  
웹 사이트 형태로 시각화한 **기말 과제용 데모 프로젝트**입니다.

온라인 포털, 지역 다문화 센터, 하이브리드 프로그램(온·오프라인 결합)을  
한눈에 이해할 수 있도록 화면 구조와 라우팅을 설계했습니다.

---

## 1. 기술 스택

- **Framework**: [Next.js 13+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **UI**: Tailwind CSS
- **구조**: 다중 페이지 (App Router 기반 라우팅)

---

## 2. 주요 기능 · 화면 구성

### 2-1. 라우트 구조

`app/` 디렉터리 기준:

```text
app
├─ layout.tsx          # 공통 레이아웃 (헤더/푸터)
├─ page.tsx            # 홈 (플랫폼 개요)
├─ about
│   └─ page.tsx        # 플랫폼 소개
├─ programs
│   ├─ page.tsx        # 프로그램 전체 개요
│   ├─ online
│   │   └─ page.tsx    # 온라인 프로그램
│   ├─ offline
│   │   └─ page.tsx    # 오프라인(지역 센터) 프로그램
│   └─ hybrid
│       └─ page.tsx    # 하이브리드(온·오프라인 연계) 프로그램
├─ community
│   ├─ page.tsx        # 커뮤니티(스토리/후기 예시)
│   └─ events
│       └─ page.tsx    # 온·오프라인·하이브리드 행사 목록
├─ resources
│   └─ page.tsx        # 다문화 자료실 (생활/교육/법률/언어)
├─ support
│   └─ page.tsx        # 참여 · 후원 · 자원봉사 (예시 폼 포함)
└─ contact
    └─ page.tsx        # 문의 · 연락처 · FAQ (예시 폼 포함)