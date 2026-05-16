# 3개 HTML 파일 텍스트·컬러 전체 토큰 치환

대상 파일:
- `src/pages/index.html`
- `src/pages/document-generator.html`
- `src/pages/inspection-review.html`

전제: `cursor-create-design-system.md` 명령으로 `src/styles/design-system/` 폴더가 이미 생성된 상태여야 함.

---

## STEP 1 — 각 파일 `<head>` 링크 교체

세 파일 모두 `<head>` 안에서 아래를 찾아 교체:

```html
<!-- 제거 대상 (파일마다 다를 수 있음) -->
<link rel="stylesheet" href="../styles/tokens.css">

<!-- 교체 -->
<link rel="stylesheet" href="../styles/design-system/index.css">
```

`@import url("../styles/design-system/components/column-header.css");` 가 `<style>` 블록 첫 줄에 있으면 **그대로 유지**.

---

## STEP 2 — 각 파일 `:root { }` 블록 전체 제거

세 파일에 각자 `:root { --bg-app: ...; --col-text: ...; ... }` 블록이 있음.
이 블록을 **통째로 삭제**해줘.
`src/styles/design-system/tokens/semantic.css`에 legacy alias로 동일 변수들이 이미 정의되어 있어서 제거해도 안전함.

삭제 대상 변수 목록 (세 파일 합산):
`--bg-app` `--col-outer-bg` `--col-card-bg` `--col-border` `--col-border-strong`
`--col-text` `--col-text-2` `--col-text-muted` `--col-text-soft`
`--col-primary` `--col-primary-bg` `--col-primary-bg-2` `--col-row-bg` `--col-soft-bg`
`--col-danger` `--col-danger-bg` `--col-warn` `--col-warn-bg`
`--col-info` `--col-info-bg` `--col-success` `--col-success-bg`
`--radius-outer` `--radius-card` `--radius-mini` `--radius-row` `--font-stack`

---

## STEP 3 — font-size 리터럴 치환

세 파일 `<style>` 블록 안에서 아래를 일괄 치환:

| 현재 | 교체 |
|---|---|
| `font-size: 22px` | `font-size: var(--type-heading-fs)` |
| `font-size: 18px` | `font-size: var(--type-heading-fs)` |
| `font-size: 16px` | `font-size: var(--type-subheading-fs)` |
| `font-size: 15px` | `font-size: var(--type-subheading-fs)` |
| `font-size: 14px` | `font-size: var(--type-body-fs)` |
| `font-size: 13px` | `font-size: var(--type-body-fs)` |
| `font-size: 12px` | `font-size: var(--type-small-fs)` |
| `font-size: 11px` | `font-size: var(--type-caption-fs)` |
| `font-size: 10px` | `font-size: var(--fs-10)` |

**index.html 추가 치환 (구 변수명):**
| 현재 | 교체 |
|---|---|
| `var(--text-xs)` | `var(--type-caption-fs)` |
| `var(--text-sm)` | `var(--type-small-fs)` |
| `var(--text-md)` | `var(--type-body-fs)` |
| `var(--text-base)` | `var(--type-body-fs)` |
| `var(--text-lg)` | `var(--type-subheading-fs)` |
| `var(--text-xl)` | `var(--type-heading-fs)` |

---

## STEP 4 — font-weight 리터럴 치환

| 현재 | 교체 |
|---|---|
| `font-weight: 400` | `font-weight: var(--fw-regular)` |
| `font-weight: 500` | `font-weight: var(--fw-medium)` |
| `font-weight: 600` | `font-weight: var(--fw-semibold)` |
| `font-weight: 700` | `font-weight: var(--fw-bold)` |
| `var(--font-regular)` | `var(--fw-regular)` |
| `var(--font-medium)` | `var(--fw-medium)` |
| `var(--font-semibold)` | `var(--fw-semibold)` |
| `var(--font-bold)` | `var(--fw-bold)` |

---

## STEP 5 — color 리터럴 치환

### 텍스트 컬러

| 현재 hex / 변수 | 교체 토큰 |
|---|---|
| `#000` / `#111111` / `#111827` | `var(--color-text-strong)` |
| `#333333` / `#1F2937` | `var(--color-text-default)` |
| `#374151` (텍스트) | `var(--color-text-secondary)` |
| `#4B5563` | `var(--color-text-secondary)` |
| `#666666` / `#6B7280` / `#64748B` | `var(--color-text-muted)` |
| `#999999` / `#9CA3AF` / `#8A8A8A` | `var(--color-text-soft)` |
| `#94a3b8` / `#8b9cb3` | `var(--color-text-soft)` |
| `#FFFFFF` (텍스트 color 속성) | `var(--color-text-inverse)` |
| `var(--col-text)` | `var(--color-text-strong)` |
| `var(--col-text-2)` | `var(--color-text-default)` |
| `var(--col-text-muted)` | `var(--color-text-muted)` |
| `var(--col-text-soft)` | `var(--color-text-soft)` |
| `var(--text-strong)` | `var(--color-text-strong)` |
| `var(--text-default)` | `var(--color-text-default)` |
| `var(--text-muted)` | `var(--color-text-muted)` |
| `var(--text-soft)` | `var(--color-text-soft)` |

### 브랜드·액션 컬러

| 현재 | 교체 |
|---|---|
| `#0057FF` (텍스트/링크) | `var(--color-brand-primary)` |
| `#005BAC` | `var(--color-brand-primary-hover)` |
| `#2563EB` | `var(--color-action-primary)` |
| `#1D4ED8` | `var(--color-action-primary-hover)` |
| `var(--col-primary)` (텍스트) | `var(--color-text-secondary)` |
| `var(--primary)` | `var(--color-brand-primary)` |

### 상태 컬러

| 현재 | 교체 |
|---|---|
| `#DC2626` / `#B91C1C` / `#FF3B30` / `#FF5A5F` | `var(--color-status-danger)` |
| `#EA580C` / `#C2410C` | `var(--color-status-warning)` |
| `#1E7E34` / `#12A150` | `var(--color-status-success)` |
| `var(--col-danger)` | `var(--color-status-danger)` |
| `var(--col-warn)` | `var(--color-status-warning)` |
| `var(--col-success)` | `var(--color-status-success)` |
| `var(--col-info)` | `var(--color-text-secondary)` |

### 배경 컬러

| 현재 | 교체 |
|---|---|
| `#FFFFFF` (background 속성) | `var(--color-surface-card)` |
| `#F9FAFB` / `#F8FAFC` / `#F8F9FA` | `var(--color-surface-soft)` |
| `#F3F4F6` / `#EDEDED` | `var(--c-neutral-100)` |
| `#EBEFF3` / `#EEF2F9` | `var(--color-surface-app)` |
| `#EEF5FF` / `#EEF4FF` / `#F3F7FF` / `#F1F6FF` | `var(--color-brand-primary-soft)` |
| `rgba(255,255,255,0.50)` (outer col) | `var(--color-surface-outer)` |
| `var(--bg-app)` | `var(--color-surface-app)` |
| `var(--col-outer-bg)` | `var(--color-surface-outer)` |
| `var(--col-card-bg)` | `var(--color-surface-card)` |
| `var(--col-soft-bg)` / `var(--col-primary-bg-2)` | `var(--color-surface-soft)` |
| `var(--col-primary-bg)` / `var(--col-row-bg)` | `var(--c-neutral-100)` |
| `var(--bg-card)` / `var(--bg-inner-content)` | `var(--color-surface-card)` |
| `var(--bg-content-soft)` / `var(--bg-card-soft)` | `var(--color-surface-soft)` |

### 상태 배경 컬러

| 현재 | 교체 |
|---|---|
| `#FEF2F2` / `#FEE2E2` / `var(--col-danger-bg)` | `var(--color-status-danger-soft)` |
| `#FFF7ED` / `#FFEDD5` / `var(--col-warn-bg)` | `var(--color-status-warning-soft)` |
| `#DCFCE7` / `var(--col-success-bg)` | `var(--color-status-success-soft)` |
| `var(--col-info-bg)` | `var(--c-neutral-100)` |

### 보더 컬러

| 현재 | 교체 |
|---|---|
| `#EBEBEB` / `#E5EAF3` / `#E5E7EB` | `var(--color-border-default)` |
| `#DADDE3` / `#DDE3EA` / `rgba(220,228,238,*)` | `var(--color-border-subtle)` |
| `rgba(203,213,225,*)` | `var(--color-border-subtle)` |
| `#FCA5A5` (danger border) | `var(--color-status-danger-soft)` |
| `#FED7AA` (warn border) | `var(--color-status-warning-soft)` |
| `#D1D5DB` | `var(--color-border-strong)` |
| `var(--col-border)` | `var(--color-border-default)` |
| `var(--col-border-strong)` | `var(--color-border-strong)` |
| `var(--divider)` / `var(--divider-soft)` | `var(--color-border-subtle)` |

---

## STEP 6 — border-radius 리터럴 치환

| 현재 | 교체 |
|---|---|
| `4px` | `var(--r-xs)` |
| `6px` | `var(--r-sm)` |
| `7px` | `var(--r-sm)` |
| `8px` | `var(--radius-control)` |
| `10px` | `var(--r-lg)` |
| `12px` | `var(--r-xl)` |
| `16px` | `var(--radius-card)` |
| `20px` | `var(--radius-outer)` |
| `999px` / `9999px` | `var(--radius-pill)` |
| `50%` | `var(--radius-circle)` |
| `var(--radius-outer)` (삭제된 로컬 변수) | `var(--radius-outer)` (semantic.css 토큰 그대로) |
| `var(--radius-card)` (삭제된 로컬 변수) | `var(--radius-card)` |
| `var(--radius-mini)` | `var(--r-xl)` |
| `var(--radius-row)` (삭제된 로컬 변수) | `var(--radius-control)` |

---

## STEP 7 — spacing 리터럴 치환

`gap` / `padding` / `margin` 값만 치환. `width` / `height` / `grid` 관련 px는 건드리지 말 것.

| 현재 | 교체 |
|---|---|
| `4px` | `var(--space-xxs)` |
| `6px` | `var(--space-xs)` |
| `8px` | `var(--space-sm)` |
| `10px` / `11px` | `var(--space-sm)` |
| `12px` | `var(--space-md)` |
| `14px` | `var(--space-md)` |
| `16px` | `var(--space-lg)` |
| `20px` | `var(--space-xl)` |
| `24px` | `var(--space-2xl)` |
| `32px` | `var(--space-3xl)` |
| `40px` (section margin) | `var(--space-4xl)` |

---

## STEP 8 — line-height 치환

| 현재 | 교체 |
|---|---|
| `1.2` / `1.25` | `var(--lh-tight)` |
| `1.35` | `var(--lh-snug)` |
| `1.5` | `var(--lh-normal)` |
| `1.55` / `1.65` | `var(--lh-relaxed)` |
| `var(--leading-snug)` | `var(--lh-snug)` |
| `var(--leading-normal)` | `var(--lh-normal)` |
| `var(--line-relaxed)` | `var(--lh-relaxed)` |

---

## STEP 9 — transition 치환

| 현재 | 교체 |
|---|---|
| `160ms ease` / `120ms ease` | `var(--motion-fast)` |
| `200ms ease` | `var(--motion-normal)` |
| `280ms` / `320ms ease` | `var(--motion-slow)` |

---

## 절대 건드리지 말 것

- `display: grid/flex`, `grid-template-columns/rows`, `grid-area`
- `flex: 1 1 auto`, `flex: 0 0 360px` 등 flex ratio
- `height: 100vh`, `min-height: 0`, `max-height: 100%`
- `width: 142px`, `min-width: 140px` 등 컴포넌트 고정 너비
- `@media` 내부 컬럼/그리드 변수
- `position`, `top/right/bottom/left` 좌표
- JS 로직, 이벤트 리스너, DOM 조작
- `transform`, `opacity`, `transition: transform/opacity` 애니메이션
- HTML 마크업 구조 (클래스명 변경 금지)

---

## 완료 후 검증

- [ ] 세 파일 `<style>` 블록에 `#` hex가 남아있지 않은가
- [ ] `font-size: Npx` 리터럴이 남아있지 않은가
- [ ] `font-weight: N` 리터럴이 남아있지 않은가
- [ ] 각 파일 `:root {}` 블록이 제거됐는가
- [ ] 브라우저에서 세 페이지 레이아웃 깨짐 없는가
- [ ] 콘솔 CSS 에러 없는가
