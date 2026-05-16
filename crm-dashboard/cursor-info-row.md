# 검수 상세 정보 패널 — 공통 Info Row 스타일 정립

대상 파일: `src/pages/inspection-review.html`
추가 파일: `src/styles/design-system/components/info-row.css` (신규 생성)

---

## 배경

우측 패널(업무 검수 상세)의 각 미니카드 안에는 3가지 정보 표시 패턴이 혼재해 있어.

- **패턴 A — KV Row**: 라벨(좌) + 값(우)이 그리드로 나열 → 고객정보, 최근이력
- **패턴 B — Section Value**: 섹션 레이블(상) + 단일 값(하) → AI 1차 검수 결과의 위험도·검수유형
- **패턴 C — Bullet List**: 섹션 레이블(상) + 불릿 항목 복수(하) → 검수 사유

이 세 패턴의 라벨·값·불릿 스타일을 공통 토큰으로 통일해줘.

---

## STEP 1 — 신규 파일 생성: `src/styles/design-system/components/info-row.css`

```css
/* ================================================================
   Info Row — 검수 상세 정보 패널 공통 스타일
   패턴 A: .info-kv        — 라벨 + 값 그리드 행
   패턴 B: .info-sv        — 섹션 레이블 + 단일 값
   패턴 C: .info-bul       — 섹션 레이블 + 불릿 목록
================================================================ */

/* ── 공통 컨테이너 ── */
.info-section-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);        /* 항목 간 6px */
}

.info-section-block + .info-section-block {
  margin-top: var(--space-md); /* 섹션 간 12px */
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-border-subtle);
}


/* ════ 패턴 A — KV Row ════ */
/* 사용: 고객정보(고객번호·연락처·주소·발신번호), 최근이력(날짜·내용) */

.info-kv {
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr);
  align-items: baseline;
  gap: var(--space-sm);        /* 열 간 8px */
  min-height: 22px;
}

.info-kv__label {
  font-size:   var(--type-caption-fs);   /* 11px */
  font-weight: var(--fw-medium);          /* 500 */
  line-height: var(--lh-snug);
  color:       var(--color-text-muted);   /* #6B7280 */
  white-space: nowrap;
  flex-shrink: 0;
}

.info-kv__value {
  font-size:   var(--type-small-fs);     /* 12px */
  font-weight: var(--fw-regular);         /* 400 */
  line-height: var(--lh-snug);
  color:       var(--color-text-default); /* #1F2937 */
  word-break: break-all;
}

/* 값 강조 modifier */
.info-kv__value--strong {
  font-weight: var(--fw-medium);
  color: var(--color-text-strong);
}

.info-kv__value--danger {
  color: var(--color-status-danger);
}

.info-kv__value--muted {
  color: var(--color-text-muted);
}


/* ════ 패턴 B — Section Value ════ */
/* 사용: AI 검수결과의 위험도, 검수유형 */

.info-sv {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-sv__label {
  font-size:   var(--type-caption-fs);   /* 11px */
  font-weight: var(--fw-medium);          /* 500 */
  line-height: var(--lh-snug);
  color:       var(--color-text-muted);   /* #6B7280 */
}

.info-sv__value {
  font-size:   var(--type-body-fs);      /* 13px */
  font-weight: var(--fw-semibold);        /* 600 */
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);  /* #111827 */
}

/* 값 상태 modifier */
.info-sv__value--danger  { color: var(--color-status-danger);  }
.info-sv__value--warning { color: var(--color-status-warning); }
.info-sv__value--success { color: var(--color-status-success); }
.info-sv__value--muted   { color: var(--color-text-muted);     }


/* ════ 패턴 C — Bullet List ════ */
/* 사용: 검수 사유 (복수 항목 나열) */

.info-bul {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-bul__label {
  font-size:   var(--type-caption-fs);   /* 11px */
  font-weight: var(--fw-medium);          /* 500 */
  line-height: var(--lh-snug);
  color:       var(--color-text-muted);
  margin-bottom: 2px;
}

.info-bul__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs);                 /* 항목 간 4px */
  list-style: none;
  margin: 0;
  padding: 0;
}

.info-bul__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-xs);                  /* dot-텍스트 간 6px */
  font-size:   var(--type-small-fs);     /* 12px */
  font-weight: var(--fw-regular);
  line-height: var(--lh-snug);
  color:       var(--color-text-default);
}

.info-bul__item::before {
  content: '';
  width:  4px;
  height: 4px;
  border-radius: var(--radius-circle);
  background: var(--color-text-muted);
  flex-shrink: 0;
  margin-top: 5px;                       /* 텍스트 중앙 정렬 보정 */
}
```

---

## STEP 2 — index.css에 import 추가

`src/styles/design-system/index.css` 맨 아래에 추가:

```css
@import "./components/info-row.css";
```

---

## STEP 3 — inspection-review.html 마크업 교체

`@inspection-review.html` 파일을 참조해서 아래 패턴대로 마크업을 교체해줘.

### 고객 정보 영역 → 패턴 A 적용

```html
<div class="info-section-block">
  <div class="info-kv">
    <span class="info-kv__label">고객번호</span>
    <span class="info-kv__value">1234-5678 (Family)</span>
  </div>
  <div class="info-kv">
    <span class="info-kv__label">연락처</span>
    <span class="info-kv__value">010-1234-5678</span>
  </div>
  <div class="info-kv">
    <span class="info-kv__label">주소</span>
    <span class="info-kv__value">서울 종로구 신문로2가 28 5층 503호</span>
  </div>
  <div class="info-kv">
    <span class="info-kv__label">발신번호</span>
    <span class="info-kv__value info-kv__value--danger">010-2231-4567</span>
  </div>
</div>
```

### AI 1차 검수 결과 영역 → 패턴 B + C 혼합 적용

```html
<div class="info-section-block">
  <div class="info-sv">
    <span class="info-sv__label">위험도</span>
    <span class="info-sv__value info-sv__value--danger">High</span>
  </div>
  <div class="info-sv">
    <span class="info-sv__label">검수 유형</span>
    <span class="info-sv__value">오안내</span>
  </div>
  <div class="info-bul">
    <span class="info-bul__label">검수 사유</span>
    <ul class="info-bul__list">
      <li class="info-bul__item">약관상 면책기간 안내 누락 감지</li>
      <li class="info-bul__item">보장범위 설명 불충분</li>
    </ul>
  </div>
</div>
```

### 최근 이력 영역 → 패턴 A 적용

```html
<div class="info-section-block">
  <div class="info-kv">
    <span class="info-kv__label">2026-03</span>
    <span class="info-kv__value">계약 변경</span>
  </div>
  <div class="info-kv">
    <span class="info-kv__label">2025-12</span>
    <span class="info-kv__value">보험료 연체</span>
  </div>
  <div class="info-kv">
    <span class="info-kv__label">2025-08</span>
    <span class="info-kv__value">보장 추가</span>
  </div>
</div>
```

---

## 주의사항

- 실제 HTML에서 위 구조와 다른 부분이 있으면 실제 구조에 맞게 적용해줘.
- 기존 `.cust-list`, `.ai-result` 등 클래스는 제거하지 말고 새 클래스를 병기해줘.
  예: `<div class="cust-list info-section-block">`
- JS로 동적 렌더되는 영역은 마크업 교체 대신 CSS 선택자로만 처리해줘.

---

## 완료 후 확인

- [ ] 세 패턴의 라벨이 모두 11px / muted 컬러로 통일됐는가
- [ ] KV Row의 라벨 열 너비가 72px로 정렬됐는가
- [ ] 불릿 dot이 텍스트와 수직 정렬됐는가
- [ ] 위험도 High가 danger 컬러로 표시되는가
- [ ] 섹션 간 divider가 subtle하게 구분되는가
