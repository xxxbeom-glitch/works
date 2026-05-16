# 카드 헤더 액션 버튼 스타일 통일

대상 파일: `src/pages/document-generator.html`

---

## 문제

카드 헤더 우측 버튼들이 높이·폰트·패딩이 제각각임:

| 버튼 | 클래스 | 현재 높이 | 현재 폰트 |
|---|---|---|---|
| 전체 삭제 | `.file-list__clear` | 높이 없음 (텍스트만) | small-fs / regular |
| 전체 선택 | `.card__head-action` | 28px | small-fs / semibold |
| 문서 통합 | `.card__head-action.is-active` | 28px | small-fs / semibold |
| 전체 다운로드 | `.link-btn` | 32px | body-fs / semibold |

→ 전부 **높이 26px / font 11px(ui-label) / semibold / padding 0 10px** 으로 통일

---

## 수정 — document-generator.html `<style>` 블록

### 1. `.file-list__clear` — 전체 삭제

```css
/* Before */
.file-list__clear { color: var(--color-text-soft); font-size: var(--type-small-fs); }
.file-list__clear:hover { color: var(--color-text-secondary); }

/* After */
.file-list__clear {
  display: inline-flex;
  align-items: center;
  height: var(--control-h-sm);           /* 26px */
  padding: 0 var(--control-pad-x-sm);    /* 0 10px */
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-control);
  background: transparent;
  color: var(--color-text-soft);
  font-size: var(--type-ui-label-fs);    /* 11px */
  font-weight: var(--fw-semibold);
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background var(--motion-fast), color var(--motion-fast), border-color var(--motion-fast);
}
.file-list__clear:hover {
  background: var(--color-surface-soft);
  border-color: var(--color-border-strong);
  color: var(--color-text-secondary);
}
```

### 2. `.card__head-action` — 전체 선택 / 문서 통합

```css
/* Before */
.card__head-action {
  height: 28px; padding: 0 10px;
  font-size: var(--type-small-fs);
  font-weight: var(--fw-semibold);
  ...
}
.card__head-action.is-active {
  background: var(--c-neutral-700);
  border-color: var(--c-neutral-700);
  color: #ffffff;
}

/* After */
.card__head-action {
  display: inline-flex; align-items: center;
  height: var(--control-h-sm);           /* 26px */
  padding: 0 var(--control-pad-x-sm);    /* 0 10px */
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-control);
  background: var(--color-surface-card);
  color: var(--color-text-muted);
  font-size: var(--type-ui-label-fs);    /* 11px */
  font-weight: var(--fw-semibold);
  line-height: 1;
  white-space: nowrap; cursor: pointer;
  transition: background var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast);
}
.card__head-action:hover {
  background: var(--color-surface-soft);
  border-color: var(--color-border-strong);
  color: var(--color-text-secondary);
}
.card__head-action.is-active {
  background: var(--c-neutral-800);
  border-color: var(--c-neutral-800);
  color: var(--color-text-inverse);
}
.card__head-action.is-active:hover {
  background: var(--c-neutral-900);
  border-color: var(--c-neutral-900);
}
```

### 3. `.link-btn` — 전체 다운로드

```css
/* Before */
.link-btn {
  height: 32px; padding: 0 10px;
  font-size: var(--type-body-fs); font-weight: var(--fw-semibold);
  ...
}

/* After */
.link-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  height: var(--control-h-sm);           /* 26px */
  padding: 0 var(--control-pad-x-sm);    /* 0 10px */
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  background: var(--color-surface-card);
  color: var(--color-text-default);
  font-size: var(--type-ui-label-fs);    /* 11px */
  font-weight: var(--fw-semibold);
  line-height: 1;
  white-space: nowrap;
  transition: background var(--motion-fast), color var(--motion-fast);
}
.link-btn:hover {
  background: var(--color-surface-soft);
  border-color: var(--color-border-strong);
  color: var(--color-text-strong);
}
.link-btn__icon {
  width: var(--icon-md);                 /* 16px */
  height: var(--icon-md);
  flex-shrink: 0;
  color: currentColor;
}
```

---

## 완료 후 확인

- [ ] 전체 삭제 / 전체 선택 / 문서 통합 / 전체 다운로드가 동일한 높이인가
- [ ] 네 버튼의 폰트 크기가 동일하게 보이는가
- [ ] 문서 통합(is-active) filled 상태가 자연스럽게 구분되는가
- [ ] 버튼들이 카드 헤더 높이 안에서 수직 정렬되는가
