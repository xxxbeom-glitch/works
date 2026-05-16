# Component Catalog

> 모든 컴포넌트는 `.ds-` prefix를 사용합니다.
> 페이지 단위 커스텀 클래스를 추가하지 말고, 필요한 modifier가 없다면 시스템에 추가하세요.

---

## AppShell

```html
<div class="ds-app-shell">
  <header class="ds-app-header"> … topbar … </header>
  <div class="ds-app-body">
    <aside class="ds-app-lnb"> … LNB … </aside>
    <section class="ds-app-main-area">
      <div class="ds-app-main-content">
        <!-- activePage 별 콘텐츠 -->
      </div>
      <footer class="ds-app-footer"> … statusbar … </footer>
    </section>
  </div>
</div>
```

> Header / LNB / Footer는 AppShell에만 존재. Page는 main-content 안에서만 렌더.

---

## Card

| 모디파이어 | 사용 |
|---|---|
| `.ds-card` | 기본 흰 카드 (radius 16, shadow sm) |
| `.ds-card--outer` | 외곽 반투명 카드 (radius 20) |
| `.ds-card--soft` | 옅은 회색 배경 |
| `.ds-card--status` | accent border |
| `.ds-card--flat` | shadow 제거 |

```html
<article class="ds-card">
  <header class="ds-card__head">
    <div class="ds-card__head-lead">
      <span class="ds-card__title">고객 정보</span>
    </div>
    <div class="ds-card__head-meta">
      <button class="ds-icon-btn" aria-label="접기">…</button>
    </div>
  </header>
  <div class="ds-card__body">
    <!-- body -->
  </div>
</article>
```

---

## Button

| variant | size | 결과 |
|---|---|---|
| `.ds-btn` | base | 투명 |
| `.ds-btn--primary` | filled blue |
| `.ds-btn--secondary` | white + border |
| `.ds-btn--ghost` | transparent + hover soft |
| `.ds-btn--outline` | tint bg + accent border |
| `.ds-btn--danger` | filled red |
| `.ds-btn--sm` / `--lg` | 28 / 40 |

```html
<button class="ds-btn ds-btn--primary">저장</button>
<button class="ds-btn ds-btn--secondary ds-btn--sm">취소</button>
<button class="ds-btn ds-btn--outline">참고 자료</button>
```

### Icon Button
```html
<button class="ds-icon-btn" aria-label="접기">
  <svg> … </svg>
</button>
```

---

## Input

```html
<label class="ds-field">
  <span class="ds-field__label">제목</span>
  <input class="ds-input" type="text" placeholder="입력하세요" />
  <span class="ds-field__hint">최대 50자</span>
</label>

<textarea class="ds-textarea" rows="4"></textarea>
<select class="ds-select">…</select>
```

---

## Chip / Chip Group

```html
<div class="ds-chip-group" role="group" aria-label="문서 유형">
  <button class="ds-chip is-selected" aria-pressed="true">요약본 생성</button>
  <button class="ds-chip">SOK 콘텐츠</button>
  <button class="ds-chip">교육자료</button>
</div>
```

`.ds-chip--tint` : 선택은 안 됐지만 강조 톤(연한 blue) chip
`.ds-chip--pill` : pill 모양

---

## Checkbox / Check Row

```html
<!-- 단일 체크박스 -->
<label class="ds-check">
  <input type="checkbox" />
  <span>이용 약관 동의</span>
</label>

<!-- 다중 선택 row 리스트 (RAG 선택 등) -->
<label class="ds-check-row ds-check-row--all">
  <input type="checkbox" /><span>전체 선택</span>
</label>
<div class="ds-check-list">
  <label class="ds-check-row is-checked"><input type="checkbox" checked /><span>보험 약관</span></label>
  <label class="ds-check-row"><input type="checkbox" /><span>FAQ</span></label>
</div>
```

> row 체크 시 `.is-checked` 클래스를 JS로 토글하면 light blue tint 적용.

---

## QuickActionRow (추천 질문 / 관련 화면)

```html
<div class="ds-quick-action-row">
  <div class="ds-quick-action-label">추천 질문</div>
  <div class="ds-quick-action-list">
    <button class="ds-quick-action-button">청구 후 지급 기간은?</button>
    <button class="ds-quick-action-button">자동이체 변경 가능 시점</button>
  </div>
</div>
```

세 영역(상담 어시스턴트 / SHINDY / STT)이 모두 이 구조를 그대로 사용.

---

## Status

```html
<!-- Pill -->
<span class="ds-status-pill ds-status-pill--success">완료</span>
<span class="ds-status-pill ds-status-pill--danger">처리불가</span>

<!-- Dot -->
<span class="ds-status-dot ds-status-dot--info"></span>

<!-- Step icon (자동안내 단계 등) -->
<span class="ds-step-icon ds-step-state--done">
  <svg>…CheckCircle…</svg>
</span>
<span class="ds-step-icon ds-step-state--error">
  <svg>…RemoveCircle…</svg>
</span>
```

---

## Accordion

```html
<div class="ds-accordion">
  <div class="ds-accordion__item">
    <button class="ds-accordion__trigger" aria-expanded="true">
      <span>약관 보기</span>
      <span class="ds-accordion__chevron"><svg>…</svg></span>
    </button>
    <div class="ds-accordion__body"> … </div>
  </div>
</div>
```

---

## Table

```html
<table class="ds-table">
  <thead><tr><th>건명</th><th>상태</th></tr></thead>
  <tbody>
    <tr class="is-active"><td>홍길동</td><td>완료</td></tr>
    <tr><td>김상담</td><td>대기</td></tr>
  </tbody>
</table>
```

---

## Scrollbar

스크롤 컨테이너에 `.ds-scroll` 만 부여하면 얇고 연한 스크롤바가 적용됩니다.

```html
<div class="ds-scroll" style="max-height: 320px;"> … </div>
```
