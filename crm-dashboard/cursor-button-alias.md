# 버튼 Alias 통일 — page-overrides.css

`src/styles/design-system/components/page-overrides.css` 에서
기존 버튼 관련 override 블록을 전부 지우고 아래 내용으로 교체해줘.

HTML 마크업은 건드리지 않고, 각 페이지 로컬 버튼 클래스를
`ds-btn` 기준값과 동일하게 맞추는 alias 방식.

```css
/* ================================================================
   버튼 Alias — 페이지별 로컬 클래스 → ds-btn 기준값 통일
   HTML 마크업 변경 없이 page-overrides.css 한 곳에서 관리
   나중에 마크업을 ds-btn 계열로 교체하면 이 블록 전체 삭제
================================================================ */

/* ── CTA 버튼 (주요 실행) → ds-btn--primary + ds-btn--lg ── */
/* P2: 문서 생성 실행 / P3: 조회, 업무 종결 */
.btn-primary {
  display:       inline-flex !important;
  align-items:   center !important;
  justify-content: center !important;
  gap:           var(--space-xs) !important;
  height:        var(--control-h-lg) !important;
  padding:       0 var(--control-pad-x-lg) !important;
  border:        1px solid var(--c-neutral-800) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--c-neutral-800) !important;
  color:         var(--color-text-inverse) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-bold) !important;
  line-height:   1 !important;
  white-space:   nowrap !important;
  cursor:        pointer !important;
  transition:    background var(--motion-fast), border-color var(--motion-fast) !important;
}
.btn-primary:hover {
  background:   var(--c-neutral-900) !important;
  border-color: var(--c-neutral-900) !important;
}

/* ── Ghost 버튼 (취소/저장) → ds-btn--secondary + ds-btn--lg ── */
/* P3: 초기화, 저장 */
.btn-ghost {
  display:       inline-flex !important;
  align-items:   center !important;
  justify-content: center !important;
  gap:           var(--space-xs) !important;
  height:        var(--control-h-lg) !important;
  padding:       0 var(--control-pad-x-lg) !important;
  border:        1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--color-surface-card) !important;
  color:         var(--color-text-default) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-semibold) !important;
  line-height:   1 !important;
  white-space:   nowrap !important;
  cursor:        pointer !important;
  transition:    background var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast) !important;
}
.btn-ghost:hover {
  background:   var(--color-surface-soft) !important;
  border-color: var(--color-border-strong) !important;
}

/* ── Secondary 버튼 (보조) → ds-btn--secondary + ds-btn--md ── */
/* P2: 다시 생성, 이어서 수정 / P3: 변경 저장 */
.btn-secondary {
  display:       inline-flex !important;
  align-items:   center !important;
  justify-content: center !important;
  gap:           var(--space-xs) !important;
  height:        var(--control-h-md) !important;
  padding:       0 var(--control-pad-x-md) !important;
  border:        1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--color-surface-card) !important;
  color:         var(--color-text-default) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-semibold) !important;
  line-height:   1 !important;
  white-space:   nowrap !important;
  cursor:        pointer !important;
  transition:    background var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast) !important;
}
.btn-secondary:hover { background: var(--color-surface-soft) !important; }

/* filled variant (이어서 수정) */
.btn-secondary.btn-secondary--primary {
  background:   var(--c-neutral-800) !important;
  color:        var(--color-text-inverse) !important;
  border-color: var(--c-neutral-800) !important;
}
.btn-secondary.btn-secondary--primary:hover {
  background:   var(--c-neutral-900) !important;
  border-color: var(--c-neutral-900) !important;
}

/* inline variant (변경 저장) → ds-btn--sm */
.btn-secondary.btn-secondary--inline {
  height:  var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
}

/* ── Seg 버튼 (날짜 바로가기) → ds-chip 기준 ── */
/* P2, P3: 최근 일주일 / 1개월 / 3개월 */
.seg__btn {
  height:      var(--control-h-md) !important;
  padding:     0 var(--control-pad-x-md) !important;
  background:  var(--color-surface-card) !important;
  color:       var(--color-text-secondary) !important;
  font-family: inherit !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important;
  line-height: 1 !important;
  cursor:      pointer !important;
  transition:  background var(--motion-fast), color var(--motion-fast) !important;
}
.seg__btn:hover { background: var(--color-surface-soft) !important; color: var(--color-text-default) !important; }
.seg__btn.is-active {
  background:  var(--c-neutral-100) !important;
  color:       var(--color-text-strong) !important;
  font-weight: var(--fw-bold) !important;
}

/* ── Pill 버튼 (RAG 선택) → ds-chip 기준 ── */
/* P2: 보험 약관, FAQ 등 */
.pill-btn {
  display:       inline-flex !important;
  align-items:   center !important;
  height:        var(--control-h-md) !important;
  padding:       0 var(--control-pad-x-md) !important;
  border:        1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background:    var(--color-surface-soft) !important;
  color:         var(--color-text-secondary) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-medium) !important;
  line-height:   1 !important;
  cursor:        pointer !important;
  transition:    background var(--motion-fast), border-color var(--motion-fast) !important;
}
.pill-btn:hover { background: var(--c-neutral-100) !important; border-color: var(--c-neutral-300) !important; }
.pill-btn.is-active {
  background:   var(--c-neutral-800) !important;
  border-color: var(--c-neutral-800) !important;
  color:        var(--color-text-inverse) !important;
}

/* ── Pager 버튼 → ds-btn--sm 기준 ── */
/* P3: 페이지 네비게이션 */
.pager__btn {
  display:       inline-flex !important;
  align-items:   center !important;
  justify-content: center !important;
  min-width:     var(--control-h-sm) !important;
  height:        var(--control-h-sm) !important;
  padding:       0 var(--space-sm) !important;
  border:        1px solid transparent !important;
  border-radius: var(--radius-control) !important;
  background:    transparent !important;
  color:         var(--color-text-muted) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-medium) !important;
  line-height:   1 !important;
  cursor:        pointer !important;
  transition:    background var(--motion-fast), color var(--motion-fast) !important;
}
.pager__btn:hover { background: var(--c-neutral-100) !important; color: var(--color-text-strong) !important; }
.pager__btn.is-active {
  background:  var(--c-neutral-800) !important;
  color:       var(--color-text-inverse) !important;
  font-weight: var(--fw-bold) !important;
}
.pager__btn--edge { color: var(--color-text-soft) !important; }

/* ── Inline 아이콘 버튼 → ds-icon-btn 기준 ── */
/* P1: 변경저장, 분리 / P2: 카드 헤더 액션 */
.cinfo-caller__save {
  height:        var(--control-h-sm) !important;
  min-height:    var(--control-h-sm) !important;
  padding:       0 var(--control-pad-x-sm) !important;
  border:        0 !important;
  border-radius: var(--radius-control) !important;
  background:    var(--color-status-danger) !important;
  color:         var(--color-text-inverse) !important;
  font-family:   inherit !important;
  font-size:     var(--type-ui-label-fs) !important;
  font-weight:   var(--fw-bold) !important;
  line-height:   1 !important;
  cursor:        pointer !important;
}

.ds-col-head--ai .ds-col-head__action-btn {
  height:      var(--control-h-sm) !important;
  padding:     0 var(--control-pad-x-sm) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important;
}

/* ── Tool 버튼 (파일/음성/지식ON) ── */
/* P1: SHINDY 패널 하단 */
.ai-agent-tool {
  height:      var(--control-h-sm) !important;
  min-height:  var(--control-h-sm) !important;
  padding:     0 var(--control-pad-x-sm) !important;
  font-family: var(--font-sans) !important;
  font-size:   var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important;
  line-height: 1 !important;
}
```

---

## 완료 후 확인

- [ ] P2 문서 생성 실행 — 36px, 11px
- [ ] P2 다시 생성 / 이어서 수정 — 30px, 11px
- [ ] P2 RAG 선택 pill — 30px, 11px
- [ ] P2 날짜 세그먼트 — 30px, 11px
- [ ] P3 조회 / 업무 종결 — 36px, 11px
- [ ] P3 초기화 / 저장 — 36px, 11px
- [ ] P3 변경 저장 — 26px, 11px
- [ ] P3 날짜 세그먼트 — 30px, 11px
- [ ] P3 페이저 — 26px, 11px
- [ ] P1 변경저장 — 26px, 11px
- [ ] P1 분리 / 파일 / 음성 / 지식ON — 26px, 11px
