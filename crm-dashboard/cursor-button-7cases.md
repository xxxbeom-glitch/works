# 버튼 7케이스 통일 — page-overrides.css

`src/styles/design-system/components/page-overrides.css` 에서
기존 버튼 관련 블록을 전부 지우고 아래로 교체해줘.

```css
/* ================================================================
   버튼 7케이스 Alias
   Case 1 CTA      36px / bold   / filled dark
   Case 2 Secondary 30px / semibold / outlined
   Case 3 Ghost    36px / semibold / outlined
   Case 4 Inline   26px / semibold / outlined or filled
   Case 5 Chip/Seg 30px / medium  / soft → bold(active)
   Case 6 Icon     26×26px / ghost
   Case 7 Tool     26px / medium  / pill
================================================================ */

/* ── Case 1: CTA ── */
.btn-primary {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-lg) !important;
  padding: 0 var(--control-pad-x-lg) !important;
  border: 1px solid var(--c-neutral-800) !important;
  border-radius: var(--radius-control) !important;
  background: var(--c-neutral-800) !important;
  color: var(--color-text-inverse) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-bold) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), border-color var(--motion-fast) !important;
}
.btn-primary:hover { background: var(--c-neutral-900) !important; border-color: var(--c-neutral-900) !important; }
.btn-primary:disabled { opacity: 0.4 !important; cursor: not-allowed !important; }

/* ── Case 2: Secondary ── */
.btn-secondary {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-md) !important;
  padding: 0 var(--control-pad-x-md) !important;
  border: 1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background: var(--color-surface-card) !important;
  color: var(--color-text-default) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), border-color var(--motion-fast) !important;
}
.btn-secondary:hover { background: var(--color-surface-soft) !important; }
/* filled variant */
.btn-secondary.btn-secondary--primary {
  background: var(--c-neutral-800) !important; color: var(--color-text-inverse) !important;
  border-color: var(--c-neutral-800) !important;
}
.btn-secondary.btn-secondary--primary:hover { background: var(--c-neutral-900) !important; border-color: var(--c-neutral-900) !important; }
/* sm variant */
.btn-secondary.btn-secondary--inline {
  height: var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
}

/* ── Case 3: Ghost ── */
.btn-ghost {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-lg) !important;
  padding: 0 var(--control-pad-x-lg) !important;
  border: 1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background: var(--color-surface-card) !important;
  color: var(--color-text-default) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), border-color var(--motion-fast) !important;
}
.btn-ghost:hover { background: var(--color-surface-soft) !important; }

/* ── Case 4: Inline ── */
/* outlined */
.card__head-action,
.link-btn,
.file-list__clear,
.btn-secondary.btn-secondary--inline {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  gap: var(--space-xs) !important;
  height: var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
  border: 1px solid var(--color-border-default) !important;
  border-radius: var(--radius-control) !important;
  background: var(--color-surface-card) !important;
  color: var(--color-text-muted) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), color var(--motion-fast) !important;
}
.card__head-action:hover,
.link-btn:hover,
.file-list__clear:hover { background: var(--color-surface-soft) !important; color: var(--color-text-secondary) !important; }
/* filled active (문서 통합) */
.card__head-action.is-active {
  background: var(--c-neutral-800) !important; border-color: var(--c-neutral-800) !important;
  color: var(--color-text-inverse) !important;
}
.card__head-action.is-active:hover { background: var(--c-neutral-900) !important; border-color: var(--c-neutral-900) !important; }
/* danger (변경저장 P1) */
.cinfo-caller__save {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-sm) !important; min-height: var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
  border: 0 !important; border-radius: var(--radius-control) !important;
  background: var(--color-status-danger) !important; color: var(--color-text-inverse) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-bold) !important; line-height: 1 !important; cursor: pointer !important;
}
/* outlined (분리 P1) */
.ds-col-head--ai .ds-col-head__action-btn {
  height: var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
  font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-semibold) !important;
}

/* ── Case 5: Chip / Seg ── */
.seg__btn,
.pill-btn {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-md) !important;
  padding: 0 var(--control-pad-x-md) !important;
  border: 1px solid var(--color-border-strong) !important;
  border-radius: var(--radius-control) !important;
  background: var(--color-surface-soft) !important;
  color: var(--color-text-secondary) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast) !important;
}
.seg__btn:hover,
.pill-btn:hover { background: var(--c-neutral-100) !important; }
.seg__btn.is-active,
.pill-btn.is-active,
.pill-btn[aria-pressed="true"] {
  background: var(--c-neutral-800) !important; border-color: var(--c-neutral-800) !important;
  color: var(--color-text-inverse) !important; font-weight: var(--fw-bold) !important;
}

/* Pager도 chip 계열이나 크기는 sm */
.pager__btn {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  min-width: var(--control-h-sm) !important; height: var(--control-h-sm) !important;
  padding: 0 var(--space-sm) !important;
  border: 1px solid transparent !important; border-radius: var(--radius-control) !important;
  background: transparent !important; color: var(--color-text-muted) !important;
  font-family: inherit !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important; line-height: 1 !important; cursor: pointer !important;
  transition: background var(--motion-fast), color var(--motion-fast) !important;
}
.pager__btn:hover { background: var(--c-neutral-100) !important; color: var(--color-text-strong) !important; }
.pager__btn.is-active { background: var(--c-neutral-800) !important; color: var(--color-text-inverse) !important; font-weight: var(--fw-bold) !important; }
.pager__btn--edge { color: var(--color-text-soft) !important; }

/* ── Case 6: Icon ── */
.ds-icon-btn,
.icon-btn {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  width: var(--control-h-sm) !important; height: var(--control-h-sm) !important;
  border: none !important; border-radius: var(--radius-control) !important;
  background: transparent !important; color: var(--color-text-muted) !important;
  cursor: pointer !important; flex-shrink: 0 !important;
  transition: background var(--motion-fast), color var(--motion-fast) !important;
}
.ds-icon-btn:hover,
.icon-btn:hover { background: var(--color-surface-soft) !important; color: var(--color-text-default) !important; }

/* ── Case 7: Tool (pill shape toggle) ── */
.ai-agent-tool {
  display: inline-flex !important; align-items: center !important; justify-content: center !important;
  height: var(--control-h-sm) !important; min-height: var(--control-h-sm) !important;
  padding: 0 var(--control-pad-x-sm) !important;
  border: 1px solid var(--color-border-default) !important;
  border-radius: var(--radius-pill) !important;
  background: var(--color-surface-soft) !important; color: var(--color-text-muted) !important;
  font-family: var(--font-sans) !important; font-size: var(--type-ui-label-fs) !important;
  font-weight: var(--fw-medium) !important; line-height: 1 !important;
  white-space: nowrap !important; cursor: pointer !important;
  transition: background var(--motion-fast), color var(--motion-fast) !important;
}
.ai-agent-tool.is-on,
.ai-agent-tool[aria-pressed="true"] {
  background: var(--c-neutral-100) !important; border-color: var(--c-neutral-300) !important;
  color: var(--color-text-secondary) !important; font-weight: var(--fw-semibold) !important;
}
```
