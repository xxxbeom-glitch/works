# Migration Guide

> 기존 페이지의 하드코딩 값 → 디자인 시스템 토큰으로 치환하는 패턴 모음.

## 1. 페이지 진입

기존 페이지의 `<head>` 에 단 한 줄 추가:

```html
<link rel="stylesheet" href="../styles/design-system/index.css">
```

기존 페이지 내부 `<style>` 블록은 점진적으로 토큰으로 치환합니다.

---

## 2. 자주 등장하는 치환표

### Color

| Before | After |
|---|---|
| `#0057FF` | `var(--color-brand-primary)` |
| `#005BAC` | `var(--color-brand-primary-hover)` |
| `#EEF5FF` | `var(--color-brand-primary-soft)` |
| `#F7FAFF` | `var(--color-brand-primary-softer)` |
| `#BFD7FF` | `var(--color-border-accent)` |
| `#2563EB` | `var(--color-action-primary)` |
| `#111827` / `#111111` | `var(--color-text-strong)` |
| `#1F2937` / `#333` | `var(--color-text-default)` |
| `#64748B` / `#666` | `var(--color-text-muted)` |
| `#98A2B3` / `#999` | `var(--color-text-soft)` |
| `#FFFFFF` (배경) | `var(--color-surface-card)` |
| `#EBEFF3` / `#EEF2F9` | `var(--color-surface-app)` |
| `#F8FAFC` | `var(--color-surface-soft)` |
| `#E5EAF3` / `#EBEBEB` | `var(--color-border-default)` |
| `#DADDE3` | `var(--color-border-strong)` |
| `#FF3B30` | `var(--color-status-danger)` |
| `#22C55E` / `#12A150` | `var(--color-status-success)` |
| `#475569` (statusbar bg) | `var(--color-surface-footer)` |

### Spacing

| Before | After |
|---|---|
| `4px` | `var(--space-xxs)` |
| `6px` | `var(--space-xs)` |
| `8px` | `var(--space-sm)` |
| `12px` | `var(--space-md)` |
| `16px` | `var(--space-lg)` |
| `20px` | `var(--space-xl)` |
| `24px` | `var(--space-2xl)` |
| `32px` | `var(--space-3xl)` |

### Radius

| Before | After |
|---|---|
| `4px` | `var(--r-xs)` |
| `8px` | `var(--radius-control)` |
| `12px` | `var(--r-xl)` |
| `16px` | `var(--radius-card)` |
| `20px` | `var(--radius-outer)` |
| `9999px` / `999px` | `var(--radius-pill)` |
| `50%` | `var(--radius-circle)` |

### Typography

| Before | After |
|---|---|
| `font-size: 22px; font-weight: 700` | `.ds-heading` 또는 `var(--type-heading-fs)` + `var(--type-heading-fw)` |
| `font-size: 18px; font-weight: 700` | `.ds-heading` 또는 `var(--type-heading-fs)` |
| `font-size: 16px; font-weight: 700` | `.ds-subheading` 또는 `var(--type-subheading-fs)` |
| `font-size: 15px; font-weight: 700` | `.ds-subheading` 또는 `var(--type-subheading-fs)` |
| `font-size: 14px; line-height: 1.5` | `.ds-body` |
| `font-size: 13px; line-height: 1.5; color: #333` | `.ds-small` |
| `font-size: 12px; color: #666` | `.ds-caption` |
| `font-size: 11px; font-weight: 700` (pill/badge) | `.ds-ui-label` 또는 `var(--type-ui-label-fs)` |
| `font-size: 13px; font-weight: 700` (버튼) | `.ds-ui-label` (sm) / `var(--type-button-fs)` (md·lg) |

#### 구 토큰 → 신 토큰 치환

| 구 토큰 | 신 토큰 |
|---|---|
| `--type-display-*` | `--type-heading-*` |
| `--type-title-*` | `--type-heading-*` |
| `--type-section-*` | `--type-subheading-*` |
| `--type-card-title-*` | `--type-subheading-*` |
| `--type-button-*` | `--type-ui-label-*` (sm) / `--type-button-*` (md·lg, 12px 유지) |
| `--type-pill-*` | `--type-ui-label-*` |
| `--type-label-*` | `--type-ui-label-*` |

> 구 토큰은 alias로 유지 중이므로 즉시 교체 필수 아님. 여유 있는 파일부터 점진 치환.

### Shadow

| Before | After |
|---|---|
| `0 1px 3px rgba(15,23,42,0.06)` | `var(--shadow-card)` |
| `0 8px 24px rgba(...)` | `var(--shadow-overlay)` |
| 포커스 ring | `var(--shadow-focus)` |

### Motion

| Before | After |
|---|---|
| `transition: ... 120ms` | `transition: ... var(--motion-fast)` |
| `transition: ... 200ms` | `var(--motion-normal)` |
| `transition: ... 320ms` | `var(--motion-slow)` |

---

## 3. 컴포넌트 치환

### "추천 질문" / "관련 화면" 영역

Before (페이지마다 다른 클래스로 흩어져 있음):
```html
<section class="ka-doc__recommend">
  <p class="ka-doc__recommend-label">질문 추천</p>
  <div class="ka-doc__recommend-pills">
    <button class="ka-doc__recommend-pill">…</button>
  </div>
</section>
```

After (공통 컴포넌트만 사용):
```html
<div class="ds-quick-action-row">
  <div class="ds-quick-action-label">질문 추천</div>
  <div class="ds-quick-action-list">
    <button class="ds-quick-action-button">…</button>
  </div>
</div>
```

### 카드

Before:
```html
<article class="workspace-main-card" style="padding: 16px; background: #fff;">
  <h3 style="font-size: 15px; font-weight: 700;">고객 정보</h3>
  …
</article>
```

After:
```html
<article class="ds-card">
  <header class="ds-card__head">
    <div class="ds-card__head-lead">
      <span class="ds-card__title">고객 정보</span>
    </div>
  </header>
  <div class="ds-card__body">…</div>
</article>
```

### 버튼

Before:
```html
<button style="height: 32px; padding: 0 14px; background: #2563eb; color: white; border-radius: 8px;">저장</button>
```

After:
```html
<button class="ds-btn ds-btn--primary">저장</button>
```

### 체크박스 row

Before:
```html
<label class="check"><input type="checkbox" /> 보험 약관</label>
```

After:
```html
<label class="ds-check-row is-checked">
  <input type="checkbox" checked />
  <span>보험 약관</span>
</label>
```

### Chip

Before:
```html
<button class="chip is-active">요약본 생성</button>
```

After:
```html
<button class="ds-chip is-selected" aria-pressed="true">요약본 생성</button>
```

---

## 4. 검증 체크리스트

- [ ] `<style>` 안에 hex가 더 이상 등장하지 않는가
- [ ] `padding/margin/gap` 이 모두 `var(--space-*)` 인가
- [ ] `border-radius` 가 모두 `var(--radius-*)` 인가
- [ ] `font-size/weight` 가 모두 `var(--fs-*) / var(--fw-*)` 또는 type 토큰인가
- [ ] 페이지에서 정의한 카드/버튼/입력창 CSS가 모두 제거됐는가
- [ ] LNB/Header/Footer는 AppShell 외부에 다시 만들지 않았는가
- [ ] `style="…"` 인라인이 없는가
