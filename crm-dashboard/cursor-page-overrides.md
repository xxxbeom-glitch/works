# page-overrides.css 적용 명령

---

## STEP 1 — 파일 생성

`src/styles/design-system/components/page-overrides.css` 파일을 새로 만들고
아래 내용을 그대로 붙여넣어줘:

```css
/* ================================================================
   Page Overrides — 3페이지 공통 컴포넌트 강제 통일
   각 페이지 로컬 <style>이 디자인시스템보다 나중에 로드되므로
   이 파일을 index.css 맨 마지막에 import해서 최종 override
================================================================ */

/* ── 카드 헤더 공통 ── */
.card__head {
  padding: var(--space-2xl) var(--layout-card-padding) !important;
  height: auto !important;
  min-height: 0 !important;
}

.card__body {
  padding: var(--layout-card-padding) !important;
}

/* ── 카드 타이틀 공통 ── */
.card__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong) !important;
  margin: 0 !important;
}

/* ── 컬럼 헤더 공통 ── */
.ds-col-head {
  padding: var(--space-2xl) var(--layout-card-padding) !important;
  min-height: 0 !important;
}

.ds-col-head__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong) !important;
}

.ds-col-head__icon {
  background: var(--color-surface-footer) !important;
  color:      var(--color-text-inverse) !important;
}

/* ── 섹션 타이틀 공통 (index.html) ── */
.cinfo-section__title,
.cinfo-guide__title,
.card-header-title,
.live-sect__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong) !important;
}

/* ── Form Controls 공통 (inspection-review) ── */
.input,
.select {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-md) !important;
  font-size:   var(--type-body-fs) !important;
  font-weight: var(--fw-regular) !important;
}

.seg__btn {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-md) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important;
}

/* ── 버튼 공통 (inspection-review) ── */
.btn-primary {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-lg) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-bold) !important;
  border-radius: var(--radius-control) !important;
  background:  var(--c-neutral-800) !important;
  color:       var(--color-text-inverse) !important;
}
.btn-primary:hover {
  background: var(--c-neutral-900) !important;
}

.btn-ghost {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-lg) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important;
  border-radius: var(--radius-control) !important;
  background:  var(--color-surface-card) !important;
  color:       var(--color-text-default) !important;
  border:      1px solid var(--color-border-strong) !important;
}
.btn-ghost:hover {
  background:   var(--color-surface-soft) !important;
  border-color: var(--color-border-strong) !important;
}

/* ── 체크박스 공통 ── */
.check {
  font-size: var(--type-body-fs) !important;
  gap:       var(--space-xs) !important;
}

.check input[type="checkbox"] {
  width:  16px !important;
  height: 16px !important;
  accent-color: var(--c-neutral-800) !important;
}

/* ── 필터 레이블 공통 ── */
.filter-grid__label {
  font-size:   var(--type-caption-fs) !important;
  font-weight: var(--fw-medium) !important;
  color:       var(--color-text-muted) !important;
}

/* ── 페이저 공통 ── */
.pager__btn {
  height:    var(--control-h-sm) !important;
  font-size: var(--type-ui-label-fs) !important;
}

.pager__btn.is-active {
  background:  var(--c-neutral-800) !important;
  color:       var(--color-text-inverse) !important;
  font-weight: var(--fw-bold) !important;
}

/* ── 미니카드 공통 ── */
.mini-card {
  padding: var(--layout-card-padding) !important;
  gap:     var(--space-md) !important;
}
```

---

## STEP 2 — index.css 맨 마지막 줄에 추가

`src/styles/design-system/index.css` 파일 맨 아래에 한 줄 추가:

```css
@import "./components/page-overrides.css";
```

---

## STEP 3 — semantic-map.css 중복 정리

`src/styles/design-system/components/semantic-map.css` 에서
아래 중복 블록을 삭제해줘. (앞에서 이미 !important로 통일된 규칙이 뒤에 약한 버전으로 다시 나옴)

삭제 대상 — 파일 중간에 있는 아래 블록들:

```css
/* document-generator.html — 카드 스텝 타이틀 (공통 규칙과 동일) */
.card__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}
```

```css
/* inspection-review.html — 열 헤더 제목 */
.ds-col-head__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong);
}
```

이 두 블록만 삭제. 나머지 semantic-map 내용은 그대로 유지.

---

## 완료 후 확인

- [ ] 3페이지 카드 헤더 상하 여백이 동일한가
- [ ] 3페이지 카드 타이틀 크기가 동일한가
- [ ] 컬럼 헤더 아이콘 배경이 진한 색으로 보이는가
- [ ] inspection 페이지 조회/초기화 버튼 높이가 맞는가
- [ ] inspection 페이지 input/select 높이가 맞는가
- [ ] 페이지 새로고침 후에도 유지되는가
