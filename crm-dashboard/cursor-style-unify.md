# 3페이지 스타일 불일치 · 하드코딩 전체 수정

대상 파일:
- `src/styles/design-system/components/column-header.css`
- `src/pages/index.html`
- `src/pages/document-generator.html`
- `src/pages/inspection-review.html`

---

## 🔴 HIGH — 즉시 수정

### 1. column-header.css — 타이틀 17px → 토큰 교체, font-family 하드코딩 제거

```css
/* Before */
.ds-col-head__title {
  color: #000000;
  font-family: Pretendard, "Pretendard Variable", ...;
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.01em;
}

/* After */
.ds-col-head__title {
  color: var(--color-text-strong);
  font-family: var(--font-sans);
  font-size: var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  letter-spacing: -0.01em;
}
```

### 2. column-header.css — 아이콘 배경 교체

```css
/* Before */
.ds-col-head__icon {
  background: var(--color-surface-footer);
  color: #ffffff;
}

/* After */
.ds-col-head__icon {
  background: var(--color-surface-soft);
  color: var(--color-text-muted);
}
```

---

### 3. index.html — 고객명 24px 하드코딩 교체

찾을 곳: `.cinfo-panel__head-title`

```css
/* Before */
.cinfo-panel__head-title {
  font-size: 24px;
  font-weight: var(--fw-bold);
  line-height: 20px;
  letter-spacing: 0.094px;
}

/* After */
.cinfo-panel__head-title {
  font-size: var(--type-heading-fs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: -0.01em;
}
```

---

### 4. index.html — collapse 버튼 20px 하드코딩 교체

찾을 곳: `.live-outer--info .cinfo-panel__collapse`

```css
/* Before */
font-size: 20px;

/* After */
font-size: var(--icon-xl);
```

---

### 5. document-generator.html — card__title 18px → 14px로 통일

P2의 `.card__title`이 `type-heading-fs(18px)`인데, P3는 `type-subheading-fs(14px)`.
카드 내부 섹션 타이틀은 subheading이 맞음.

```css
/* Before (document-generator.html <style> 블록 안) */
.card__title {
  font-size: var(--type-heading-fs);  /* 18px — 너무 큼 */
  font-weight: var(--fw-bold);
}

/* After */
.card__title {
  font-size: var(--type-subheading-fs);  /* 14px */
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
}
```

---

### 6. document-generator.html / inspection-review.html — card__head 높이 통일

P2: `height: 56px`, P3: `height: 44px` → 둘 다 `48px`로 통일 (ds-card__head 기준에 맞춤)

```css
/* document-generator.html AND inspection-review.html <style> 블록 */

/* Before */
.card__head {
  height: 56px;  /* P2 */
  /* 또는 */
  height: 44px;  /* P3 */
  padding: 0 16px;
}

/* After — 두 파일 모두 동일하게 */
.card__head {
  height: 48px;
  padding: 0 var(--layout-card-padding);
}
```

---

## 🟡 MID — 순차 수정

### 7. inspection-review.html — stat-cell 컬러 배경 뉴트럴화

검수현황 High/Medium/Low 카드의 유색 배경 제거.

```css
/* Before */
.stat-cell--high {
  background: #FEF2F2;
  border-color: #FCA5A5;
}
.stat-cell--high .stat-cell__name { color: #B91C1C; }
.stat-cell--high .stat-cell__val  { color: var(--col-danger); }

.stat-cell--mid {
  background: #FFF7ED;
  border-color: #FED7AA;
}
.stat-cell--mid .stat-cell__name { color: #C2410C; }
.stat-cell--mid .stat-cell__val  { color: var(--col-warn); }

.stat-cell--low {
  background: #F3F4F6;
  border-color: #D1D5DB;
}

/* After */
.stat-cell--high {
  background: var(--color-surface-soft);
  border-color: var(--color-border-default);
}
.stat-cell--high .stat-cell__name { color: var(--color-text-muted); font-weight: var(--fw-semibold); }
.stat-cell--high .stat-cell__val  { color: var(--color-status-danger); }

.stat-cell--mid {
  background: var(--color-surface-soft);
  border-color: var(--color-border-default);
}
.stat-cell--mid .stat-cell__name { color: var(--color-text-muted); font-weight: var(--fw-semibold); }
.stat-cell--mid .stat-cell__val  { color: var(--color-status-warning); }

.stat-cell--low {
  background: var(--color-surface-soft);
  border-color: var(--color-border-default);
}
.stat-cell--low .stat-cell__name { color: var(--color-text-muted); font-weight: var(--fw-semibold); }
.stat-cell--low .stat-cell__val  { color: var(--color-text-secondary); }
```

---

### 8. document-generator.html — card__body padding 토큰화

```css
/* Before */
.card__body {
  padding: 16px;
}

/* After */
.card__body {
  padding: var(--layout-card-padding);
}
```

---

## 🔵 LOW — 마지막 정리

### 9. document-generator.html — #ffffff 잔재 1곳 교체

```css
/* Before (L406 근처) */
color: #ffffff;

/* After */
color: var(--color-text-inverse);
```

---

## 완료 후 검증

- [ ] 3페이지 컬럼 헤더 타이틀이 동일한 크기/굵기로 보이는가
- [ ] P1 고객명이 이전보다 작아졌는가 (24px → 18px)
- [ ] P2와 P3의 card__head 높이가 동일한가 (48px)
- [ ] P2 card__title과 P3 card__title이 동일한 크기인가 (14px)
- [ ] P3 검수현황 High/Medium/Low 배경이 뉴트럴 회색인가
- [ ] #ffffff hex가 남아있지 않은가
- [ ] 3페이지 나란히 놓았을 때 헤더 구조가 통일되어 보이는가
