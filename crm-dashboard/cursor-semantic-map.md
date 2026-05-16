# Semantic Map CSS 생성 명령

HTML 마크업은 건드리지 않고, 기존 클래스에 시멘틱 토큰을 연결하는
`semantic-map.css` 파일을 신규 생성하고 index.css에 import 추가해줘.

---

## 파일 생성: `src/styles/design-system/components/semantic-map.css`

```css
/* ================================================================
   Semantic Map — 기존 페이지 클래스 → 디자인 시스템 토큰 연결
   HTML 마크업 수정 없이 CSS만으로 시멘틱 계층 적용

   L1 heading    18px/700  — 페이지·카드 최상위 제목
   L2 subheading 14px/600  — 섹션 타이틀
   L3 body       13px/400  — 본문 읽기 텍스트
   L4 small      12px/400  — 보조 데이터
   L5 caption    11px/500  — 레이블·메타
   L6 ui-label   11px/700  — pill·badge·버튼
================================================================ */

/* ── L1 heading ── */
/* index.html — 고객명 */
.live-outer--info #info-acc-customer .info-sect-mini-head__title,
.live-outer--info #info-acc-customer .left-accordion__pair:nth-child(1) dd {
  font-size:   var(--type-heading-fs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color:       var(--color-text-strong);
}

/* document-generator.html — 컬럼 카드 타이틀 */
.card__title {
  font-size:   var(--type-heading-fs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color:       var(--color-text-strong);
}

/* inspection-review.html — 페이지 타이틀 */
.col-header__title {
  font-size:   var(--type-heading-fs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color:       var(--color-text-strong);
}


/* ── L2 subheading ── */
/* index.html — 섹션 헤더 (최근 상담 이력, 계약 리스트 등) */
.live-outer--info .info-sect-mini-head__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}

/* index.html — 2열 카드 타이틀 */
.know-acc-card__title,
.product-acc-card__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}

/* document-generator.html — 스텝 타이틀 (① 문서 업로드 등) */
.card__step-title,
.card__title-sub {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}

/* inspection-review.html — 미니카드 타이틀 */
.mini-card__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}


/* ── L3 body ── */
/* index.html — STT 대화, 계약명, 이력 제목 */
.stt-utterance__text,
.stt-turn__text,
.know-acc-flow__answer-body,
.know-acc-answer-item__detail li,
.contract-list__title,
.history-item__title {
  font-size:   var(--type-body-fs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
  color:       var(--color-text-default);
}

/* document-generator.html — 에디터 본문 */
.doc-editor__body,
.doc-content {
  font-size:   var(--type-body-fs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-relaxed);
  color:       var(--color-text-default);
}

/* inspection-review.html — STT 내용, 검수 사유 */
.stt-body,
.ai-result__reason {
  font-size:   var(--type-body-fs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color:       var(--color-text-default);
}

/* inspection-review.html — 테이블 셀 데이터 */
.table tbody td {
  font-size:   var(--type-body-fs);
  font-weight: var(--fw-regular);
  color:       var(--color-text-default);
}


/* ── L4 small ── */
/* index.html — 고객 상세값, 날짜, 계약 메타 */
.live-outer--info .left-accordion__pair dt,
.live-outer--info .left-accordion__pair dd,
.history-item__date,
.contract-list__meta {
  font-size:   var(--type-small-fs);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color:       var(--color-text-secondary);
}

/* document-generator.html — 생성일, 페이지수/글자수 */
.doc-meta,
.card__meta-text {
  font-size:   var(--type-small-fs);
  font-weight: var(--fw-regular);
  color:       var(--color-text-muted);
}

/* inspection-review.html — 날짜, 고객번호 값, 기준일 */
.stat-row__label-date,
.cust-sub,
.cust-list li {
  font-size:   var(--type-small-fs);
  font-weight: var(--fw-regular);
  color:       var(--color-text-secondary);
}


/* ── L5 caption ── */
/* index.html — 레이블, 단계·출처 메타 */
.info-sect-mini-head__meta,
.stt-turn__label,
.know-acc-flow__step-label {
  font-size:   var(--type-caption-fs);
  font-weight: var(--fw-medium);
  color:       var(--color-text-muted);
}

/* document-generator.html — 월보험료·가입금액 레이블 */
.metrics-label,
.card__head-end {
  font-size:   var(--type-caption-fs);
  font-weight: var(--fw-medium);
  color:       var(--color-text-muted);
}

/* inspection-review.html — 테이블 헤더, 필드 레이블 */
.table thead th,
.filter-grid__label,
.cust-list li dt,
.stat-row__label-title {
  font-size:   var(--type-caption-fs);
  font-weight: var(--fw-medium);
  color:       var(--color-text-muted);
}


/* ── L6 ui-label ── */
/* index.html — 완료·진행중·대기 badge, chip */
.guide-check__state,
.mode-segmented__btn {
  font-size:   var(--type-ui-label-fs);
  font-weight: var(--fw-bold);
  line-height: 1;
}

/* document-generator.html — 성공·실패·진행중 badge, 버튼 */
.file-status-badge,
.btn-primary,
.btn-download {
  font-size:   var(--type-ui-label-fs);
  font-weight: var(--fw-bold);
  line-height: 1;
}

/* inspection-review.html — High·Medium·Low pill, 버튼, 검수상태 */
.risk,
.status,
.seg__btn,
.btn-primary,
.btn-ghost,
.pager__btn {
  font-size:   var(--type-ui-label-fs);
  font-weight: var(--fw-bold);
  line-height: 1;
}
```

---

## index.css에 import 추가

`src/styles/design-system/index.css` 파일 맨 아래에 한 줄 추가:

```css
@import "./components/semantic-map.css";
```

---

## 주의사항

- 이 파일은 기존 CSS를 덮어쓰는 override 파일이야.
- 특이성 충돌 시 선택자를 더 구체적으로 수정해줘.
- HTML 클래스명은 절대 변경하지 말 것.
- 위 선택자 중 실제 파일에 없는 클래스는 무시하고 건너뛰되 주석으로 표시해줘.
- `@index.html @document-generator.html @inspection-review.html` 세 파일을 참조해서
  실제 존재하는 클래스명과 다른 게 있으면 실제 클래스명으로 교정해줘.

---

## 완료 후 확인

- [ ] 고객명 "김신한"이 18px bold로 렌더되는가
- [ ] "최근 상담 이력", "계약 리스트" 섹션 타이틀이 14px semibold인가
- [ ] 테이블 th가 11px medium으로 렌더되는가
- [ ] High / Medium / Low pill이 11px bold인가
- [ ] 전체 텍스트 볼륨이 이전보다 줄어든 느낌인가
```
