# Shinhan Life CRM — Design System

> 현재 빌드된 4개 화면(AppShell · 상담지원 · 문서생성 · 검수처리)을 추상화해서
> 만든 **프로덕션급 디자인 시스템** 입니다. 신규 페이지는 반드시 이 시스템의 토큰과
> 컴포넌트만 사용하세요.

## 전체 구조

```
src/styles/design-system/
├── index.css                ← 단일 진입점 (이거 하나만 link)
├── tokens/
│   ├── primitive.css        ← 색·간격·radius·typography·motion 의 원시값
│   └── semantic.css         ← 의미 기반 토큰 (primary, surface, text…)
├── base/
│   ├── reset.css            ← 토큰 기반 리셋
│   └── typography.css       ← .ds-title / .ds-body / .ds-caption …
└── components/
    ├── app-shell.css        ← Header / LNB / MainArea / Footer 레이아웃
    ├── card.css             ← .ds-card / .ds-card--outer / .ds-card--soft / …
    ├── button.css           ← .ds-btn / .ds-btn--primary / .ds-icon-btn
    ├── input.css            ← .ds-input / .ds-textarea / .ds-field
    ├── chip.css             ← .ds-chip-group / .ds-chip / .ds-chip--tint
    ├── checkbox.css         ← .ds-check / .ds-check-row / .ds-check-row--all
    ├── quick-action-row.css ← 추천 질문 / 관련 화면 공통
    ├── status.css           ← .ds-status-pill / .ds-status-dot / .ds-step-icon
    ├── accordion.css        ← .ds-accordion
    ├── table.css            ← .ds-table
    └── scrollbar.css        ← .ds-scroll
```

## 사용 방법

페이지 `<head>`에 단 한 줄:

```html
<link rel="stylesheet" href="../styles/design-system/index.css">
```

이후 토큰(`var(--…)`)과 컴포넌트 클래스(`.ds-…`)만 사용합니다.

## 절대 금지

| 금지 | 대신 사용 |
|---|---|
| `style="..."` 인라인 | 토큰/컴포넌트 클래스 |
| 직접 hex (`#0057FF`) | `var(--color-brand-primary)` |
| 임의의 px (`12px`) | `var(--space-md)` |
| 임의의 radius (`8px`) | `var(--radius-control)` |
| 임의의 font-weight (`700`) | `var(--fw-bold)` 또는 `.ds-title` |
| `box-shadow: 0 1px …` | `var(--shadow-card)` |
| 페이지별 버튼/카드 재정의 | `.ds-btn--primary`, `.ds-card` |

## 문서

- [Token Dictionary](./tokens.md) — 모든 토큰의 값과 의미
- [Component Catalog](./components.md) — 컴포넌트별 마크업 예시
- [Migration Guide](./migration.md) — 기존 코드 → 토큰 치환 패턴
