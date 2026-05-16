# 3페이지 버튼 스타일 통일

대상 파일:
- `src/pages/document-generator.html`
- `src/pages/inspection-review.html`
- `src/styles/design-system/components/page-overrides.css`

---

## 기준값 (DS 토큰 기반)

| 역할 | 높이 | 패딩 | 폰트 |
|---|---|---|---|
| Primary (주요 실행) | `var(--control-h-lg)` 36px | `0 var(--control-pad-x-lg)` | `var(--type-ui-label-fs)` 11px / bold |
| Secondary (보조) | `var(--control-h-md)` 30px | `0 var(--control-pad-x-md)` | `var(--type-ui-label-fs)` 11px / semibold |
| Ghost (취소/초기화) | `var(--control-h-md)` 30px | `0 var(--control-pad-x-md)` | `var(--type-ui-label-fs)` 11px / semibold |
| Seg (날짜 세그먼트) | `var(--control-h-md)` 30px | `0 var(--control-pad-x-md)` | `var(--type-ui-label-fs)` 11px / semibold |
| Pill (RAG 선택) | `var(--control-h-md)` 30px | `0 var(--control-pad-x-md)` | `var(--type-ui-label-fs)` 11px / medium |
| Pager | `var(--control-h-sm)` 26px | `0 var(--space-sm)` | `var(--type-ui-label-fs)` 11px |

※ `btn-primary`(문서생성 실행)는 페이지 전체 너비를 차지하는 CTA 버튼이므로 lg(36px)로 설정.
※ `fmt-btn`(PPTX/DOCX 등 다운로드 포맷)은 세로형 특수 버튼이므로 변경하지 말 것.

---

## STEP 1 — document-generator.html `<style>` 블록 수정

### btn-primary (문서 생성 실행 — CTA)
```css
/* Before */
.btn-primary {
  width: 100%; height: 44px; padding: 0 16px;
  background: var(--color-text-secondary); color: var(--color-text-inverse);
  border-radius: var(--r-lg);
  font-size: var(--type-body-fs); font-weight: var(--fw-bold);
}

/* After */
.btn-primary {
  width: 100%;
  height: var(--control-h-lg);
  padding: 0 var(--control-pad-x-lg);
  background: var(--c-neutral-800);
  color: var(--color-text-inverse);
  border-radius: var(--radius-control);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-bold);
  line-height: 1;
}
.btn-primary:hover { background: var(--c-neutral-900); }
```

### btn-secondary (다시 생성 / 이어서 수정)
```css
/* Before */
.btn-secondary {
  flex: 1 1 0;
  height: 40px; padding: 0 12px;
  border: 1px solid var(--color-border-strong);
  background: var(--color-surface-card); color: var(--color-text-default);
  border-radius: var(--r-lg);
  font-size: var(--type-body-fs); font-weight: var(--fw-semibold);
}
.btn-secondary--primary {
  background: var(--color-text-secondary); color: var(--color-text-inverse);
  border-color: var(--color-text-secondary);
}

/* After */
.btn-secondary {
  flex: 1 1 0;
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  border: 1px solid var(--color-border-strong);
  background: var(--color-surface-card);
  color: var(--color-text-default);
  border-radius: var(--radius-control);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-semibold);
  line-height: 1;
}
.btn-secondary:hover { background: var(--color-surface-soft); border-color: var(--color-border-strong); }
.btn-secondary--primary {
  background: var(--c-neutral-800);
  color: var(--color-text-inverse);
  border-color: var(--c-neutral-800);
}
.btn-secondary--primary:hover { background: var(--c-neutral-900); border-color: var(--c-neutral-900); }
```

### pill-btn (RAG 선택 chip)
```css
/* Before */
.pill-btn {
  height: 32px; padding: 0 12px;
  font-size: var(--type-body-fs); font-weight: var(--fw-medium);
}

/* After */
.pill-btn {
  display: inline-flex; align-items: center;
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  border: 1px solid var(--color-border-strong);
  background: var(--color-surface-soft);
  color: var(--color-text-secondary);
  border-radius: var(--radius-control);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-medium);
  line-height: 1;
  cursor: pointer;
}
.pill-btn:hover { background: var(--c-neutral-100); border-color: var(--c-neutral-400); }
.pill-btn.is-active,
.pill-btn[aria-pressed="true"] {
  background: var(--c-neutral-800);
  border-color: var(--c-neutral-800);
  color: var(--color-text-inverse);
}
```

### seg__btn (날짜 바로가기)
```css
/* Before */
.seg__btn {
  height: 30px; padding: 0 12px;
  font-size: var(--type-body-fs);
}

/* After */
.seg__btn {
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  background: var(--color-surface-card);
  color: var(--color-text-default);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-medium);
  line-height: 1;
}
.seg__btn.is-active {
  background: var(--c-neutral-100);
  color: var(--color-text-secondary);
  font-weight: var(--fw-bold);
}
```

---

## STEP 2 — inspection-review.html `<style>` 블록 수정

### btn-primary (조회)
```css
/* Before */
.btn-primary {
  height: 36px; padding: 0 20px;
  background: var(--color-text-secondary); color: var(--color-text-inverse);
  border-radius: var(--radius-control);
  font-size: var(--type-body-fs); font-weight: var(--fw-bold);
}

/* After */
.btn-primary {
  height: var(--control-h-lg);
  padding: 0 var(--control-pad-x-lg);
  background: var(--c-neutral-800);
  color: var(--color-text-inverse);
  border-radius: var(--radius-control);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-bold);
  line-height: 1;
}
.btn-primary:hover { background: var(--c-neutral-900); }
```

### btn-ghost (초기화)
```css
/* Before */
.btn-ghost {
  height: 36px; padding: 0 20px;
  background: var(--color-surface-card); color: var(--color-text-default);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  font-size: var(--type-body-fs); font-weight: var(--fw-semibold);
}

/* After */
.btn-ghost {
  height: var(--control-h-lg);
  padding: 0 var(--control-pad-x-lg);
  background: var(--color-surface-card);
  color: var(--color-text-default);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-semibold);
  line-height: 1;
}
.btn-ghost:hover { background: var(--color-surface-soft); border-color: var(--color-border-strong); }
```

### seg__btn (날짜 바로가기)
```css
/* Before */
.seg__btn {
  height: 30px; padding: 0 12px;
  font-size: var(--type-small-fs);
}

/* After */
.seg__btn {
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  background: var(--color-surface-card);
  color: var(--color-text-default);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-medium);
  line-height: 1;
}
.seg__btn.is-active {
  background: var(--c-neutral-100);
  color: var(--color-text-secondary);
  font-weight: var(--fw-bold);
}
```

### pager__btn
```css
/* Before */
.pager__btn {
  min-width: 32px; height: 32px; padding: 0 8px;
  font-size: var(--type-body-fs); border-radius: var(--r-sm);
}
.pager__btn.is-active {
  background: var(--color-text-secondary); color: var(--color-text-inverse);
  font-weight: var(--fw-bold);
}

/* After */
.pager__btn {
  min-width: var(--control-h-sm);
  height: var(--control-h-sm);
  padding: 0 var(--space-sm);
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text-muted);
  font-size: var(--type-ui-label-fs);
  font-weight: var(--fw-medium);
  border-radius: var(--radius-control);
  line-height: 1;
}
.pager__btn:hover { background: var(--c-neutral-100); color: var(--color-text-strong); }
.pager__btn.is-active {
  background: var(--c-neutral-800);
  color: var(--color-text-inverse);
  font-weight: var(--fw-bold);
}
.pager__btn--edge { color: var(--color-text-muted); font-weight: var(--fw-semibold); }
```

---

## STEP 3 — page-overrides.css 버튼 override 정리

`src/styles/design-system/components/page-overrides.css` 에서
기존 `.btn-primary`, `.btn-ghost` override 블록을 아래로 교체:

```css
/* ── 버튼 공통 override ── */
.btn-primary {
  height:        var(--control-h-lg) !important;
  padding:       0 var(--control-pad-x-lg) !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-bold) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--c-neutral-800) !important;
  color:         var(--color-text-inverse) !important;
  line-height:   1 !important;
}
.btn-primary:hover { background: var(--c-neutral-900) !important; }

.btn-ghost {
  height:        var(--control-h-lg) !important;
  padding:       0 var(--control-pad-x-lg) !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-semibold) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--color-surface-card) !important;
  color:         var(--color-text-default) !important;
  border:        1px solid var(--color-border-strong) !important;
  line-height:   1 !important;
}
.btn-ghost:hover {
  background:   var(--color-surface-soft) !important;
  border-color: var(--color-border-strong) !important;
}

.seg__btn {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-md) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important;
  line-height: 1 !important;
}

.pager__btn {
  height:    var(--control-h-sm) !important;
  min-width: var(--control-h-sm) !important;
  font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important;
  line-height: 1 !important;
}
.pager__btn.is-active {
  background:  var(--c-neutral-800) !important;
  color:       var(--color-text-inverse) !important;
  font-weight: var(--fw-bold) !important;
}
```

---

## 완료 후 확인

- [ ] P2 문서 생성 실행 버튼이 36px인가
- [ ] P2 다시 생성 / 이어서 수정 버튼이 30px인가
- [ ] P2 RAG 선택 pill이 30px인가
- [ ] P3 조회 / 초기화 버튼이 36px이고 동일한 높이인가
- [ ] P3 페이저 버튼이 26px인가
- [ ] 양 페이지 날짜 세그먼트 버튼 높이가 동일한가 (30px)
- [ ] 모든 버튼 폰트가 11px인가
