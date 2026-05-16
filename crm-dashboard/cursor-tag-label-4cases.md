# 태그 / 라벨 4케이스 통일 — page-overrides.css

`src/styles/design-system/components/page-overrides.css` 에서
기존 태그/라벨/배지 관련 블록을 지우고 아래를 추가해줘.

```css
/* ================================================================
   태그 / 라벨 4케이스 Alias
   Case 1 Badge      pill / 색상으로 상태 구분 (Status·Risk·File·Step 통합)
   Case 2 Outline Tag border 있는 정보 태그
   Case 3 Dot Status  dot + 텍스트
   Case 4 Label       텍스트 레이블 (typography 토큰 연결)
================================================================ */

/* ── Case 1: Badge (공통 베이스) ── */
/* 적용 대상:
   P1 — cinfo-guide__item-status (완료/진행중)
   P2 — file__status (성공/실패/진행중), pill
   P3 — risk (High/Mid/Low), status pill 계열 */

.ds-badge,
.file__status,
.risk,
.pill {
  display:       inline-flex !important;
  align-items:   center !important;
  gap:           4px !important;
  height:        18px !important;
  padding:       0 var(--space-xs) !important;
  border-radius: var(--radius-pill) !important;
  font-family:   inherit !important;
  font-size:     var(--fs-10) !important;
  font-weight:   var(--fw-bold) !important;
  line-height:   1 !important;
  white-space:   nowrap !important;
  /* 기본값 — neutral */
  background:    var(--c-neutral-100) !important;
  color:         var(--color-text-secondary) !important;
}

/* Risk는 좌우 패딩 더 넓게 */
.risk {
  height:  20px !important;
  padding: 0 var(--space-sm) !important;
  letter-spacing: 0.3px !important;
}

/* ── Badge 상태별 컬러 ── */
/* Success */
.file__status--ok,
.ds-badge--success,
.cinfo-guide__item--done .cinfo-guide__item-status {
  background: var(--color-status-success-soft) !important;
  color:      var(--color-status-success) !important;
}

/* Danger */
.file__status--fail,
.ds-badge--danger,
.risk--high {
  background: var(--color-status-danger-soft) !important;
  color:      var(--color-status-danger) !important;
}

/* Warning */
.ds-badge--warning,
.risk--mid {
  background: var(--color-status-warning-soft) !important;
  color:      var(--color-status-warning) !important;
}

/* Neutral (Loading / Low / 대기) */
.file__status--loading,
.ds-badge--neutral,
.risk--low {
  background: var(--c-neutral-100) !important;
  color:      var(--color-text-secondary) !important;
}

/* Info */
.ds-badge--info {
  background: var(--color-status-info-soft) !important;
  color:      var(--color-status-info) !important;
}

/* ── Case 2: Outline Tag ── */
/* 적용 대상:
   P1 — cinfo-history__pill (갱신 안내장 수령고객)
         product-info-summary__chip (해당 없음 등)
   P3 — 정보성 태그 */

.ds-tag,
.cinfo-history__pill,
.product-info-summary__chip {
  display:       inline-flex !important;
  align-items:   center !important;
  height:        22px !important;
  padding:       0 var(--space-sm) !important;
  border:        1px solid var(--color-border-default) !important;
  border-radius: var(--r-sm) !important;
  background:    var(--color-surface-card) !important;
  color:         var(--color-text-secondary) !important;
  font-family:   inherit !important;
  font-size:     var(--type-caption-fs) !important;
  font-weight:   var(--fw-medium) !important;
  line-height:   1 !important;
  white-space:   nowrap !important;
}

/* brand tint variant */
.ds-tag--brand,
.product-info-summary__chip--ok {
  border-color: var(--color-brand-accent-border) !important;
  background:   var(--color-brand-primary-softer) !important;
  color:        var(--color-brand-primary) !important;
}

/* danger tint variant */
.ds-tag--danger,
.product-info-summary__chip--deny {
  border-color: rgba(248, 113, 113, 0.24) !important;
  background:   var(--color-status-danger-soft) !important;
  color:        var(--color-status-danger) !important;
}

/* muted variant */
.ds-tag--muted,
.product-info-summary__chip--muted {
  background: var(--color-surface-soft) !important;
  color:      var(--color-text-muted) !important;
}

/* ── Case 3: Dot Status ── */
/* 적용 대상:
   P3 — status (미확인 / 확인중 / 조치완료) */

.ds-dot-status,
.status {
  display:     inline-flex !important;
  align-items: center !important;
  gap:         var(--space-xs) !important;
  font-family: inherit !important;
  font-size:   var(--type-caption-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: 1 !important;
  white-space: nowrap !important;
  color:       var(--color-text-soft) !important;
}

.ds-dot-status::before,
.status::before {
  content:       '' !important;
  width:         6px !important;
  height:        6px !important;
  border-radius: var(--radius-circle) !important;
  background:    currentColor !important;
  flex-shrink:   0 !important;
}

/* 상태별 컬러 */
.status--unchecked,
.ds-dot-status--wait    { color: var(--color-text-soft) !important; }
.status--checking,
.ds-dot-status--progress{ color: var(--color-text-muted) !important; }
.status--done,
.ds-dot-status--done    { color: var(--color-text-secondary) !important; }

/* ── Case 4: Label (텍스트 레이블) ── */
/* 적용 대상:
   P1 — 고객정보 dt, cinfo-caller__label
   P2 — form-row__label, editor-label
   P3 — filter-grid__label, mini-card__title, stat-row__label-title */

.ds-label,
.form-row__label,
.filter-grid__label,
.mini-card__title,
.stat-row__label-title,
.editor-label,
.cinfo-caller__label,
.cust-list .label,
.cust-list dt,
.ai-result__label {
  font-family: inherit !important;
  font-size:   var(--type-caption-fs) !important;
  font-weight: var(--fw-medium) !important;
  line-height: var(--lh-snug) !important;
  color:       var(--color-text-muted) !important;
}

/* editor-label은 uppercase 유지 */
.editor-label {
  letter-spacing: 0.06em !important;
  text-transform: uppercase !important;
}
```

---

## 완료 후 확인

- [ ] P3 High / Medium / Low pill 높이·폰트 동일한가
- [ ] P1 갱신 안내장 수령고객 tag 스타일 자연스러운가
- [ ] P1 상품 chip (해당 없음 등) outlined 스타일인가
- [ ] P2 파일 성공/실패/진행중 badge 동일한 베이스인가
- [ ] P3 미확인/확인중/조치완료 dot 정렬 맞는가
- [ ] 전 페이지 필드 레이블이 11px/medium/muted로 통일됐는가
