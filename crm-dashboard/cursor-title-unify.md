# 3페이지 섹션 타이틀 공통 통일

## 문제 요약

세 페이지의 섹션/카드 타이틀들이 아래처럼 제각각임:

| 클래스 | 현재 크기 | 파일 |
|---|---|---|
| `.info-sect-mini-head__title` | `type-heading-fs (18px)` | index.html |
| `.cinfo-section__title` | `type-heading-fs (18px)` | index.html |
| `.cinfo-guide__title` | `type-heading-fs (18px)` | index.html |
| `.ai-agent-title__name` | `type-heading-fs (18px)` | index.html |
| `.card-header-title` | `text-card-title (15px)` | index.html |
| `.card__title` | `type-heading-fs (18px)` | document-generator.html |
| `.card__title` | `type-subheading-fs (14px)` | inspection-review.html |
| `.mini-card__title` | `type-subheading-fs (14px)` | inspection-review.html |

→ 전부 **`type-subheading-fs (14px) / fw-semibold`** 로 통일

---

## STEP 1 — semantic-map.css에 공통 섹션 타이틀 규칙 추가

`src/styles/design-system/components/semantic-map.css` 파일 **맨 위**에 추가:

```css
/* ================================================================
   공통 섹션 타이틀 — 3페이지 전체 통일
   모든 카드/섹션 헤더 타이틀 → subheading (14px/600)
================================================================ */

/* index.html */
.info-sect-mini-head__title,
.cinfo-section__title,
.cinfo-guide__title,
.ai-agent-title__name,
.card-header-title,
.live-sect__title,
.know-acc-card__title,
.product-acc-card__title,

/* document-generator.html */
.card__title,

/* inspection-review.html */
.mini-card__title {
  font-size:   var(--type-subheading-fs) !important;  /* 14px */
  font-weight: var(--fw-semibold) !important;          /* 600 */
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  letter-spacing: -0.01em;
  color: var(--color-text-strong);
  font-style: normal;
}

/* column-header.css 타이틀 (ds-col-head__title) */
.ds-col-head__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  letter-spacing: -0.01em;
  color: var(--color-text-strong);
}
```

---

## STEP 2 — index.html 로컬 스타일 정리

`@index.html` 에서 아래 클래스들의 `font-size`, `font-weight`, `font-family`, `line-height` 선언을 제거하거나 주석 처리해줘.
(semantic-map.css에서 이미 통일하므로 중복 제거)

제거 대상 선언이 있는 클래스:
- `.info-sect-mini-head__title` — `font-size: var(--type-heading-fs)` 를 삭제
- `.cinfo-section__title` — `font-family` 하드코딩, `font-size: var(--type-heading-fs)`, `line-height: 20px` 삭제
- `.cinfo-guide__title` — `font-family` 하드코딩, `font-size: var(--type-heading-fs)`, `line-height: 20px` 삭제
- `.ai-agent-title__name` — `font-family` 하드코딩, `font-size: var(--type-heading-fs)`, `line-height: 20px` 삭제
- `.card-header-title` — `font-size: var(--text-card-title)` 삭제 (--text-card-title은 15px로 불일치)

**단, !important가 붙은 FINAL OVERRIDE 블록은 건드리지 말고 그대로 둬.**
semantic-map.css의 !important가 덮어씌울 거야.

---

## STEP 3 — document-generator.html 로컬 `.card__title` 수정

`@document-generator.html` `<style>` 블록에서:

```css
/* Before */
.card__title {
  font-size: var(--type-heading-fs);   /* 18px — 삭제 */
  font-weight: var(--fw-bold);
}

/* After */
.card__title {
  /* font-size, font-weight, font-family 삭제 — semantic-map.css에서 통일 */
  line-height: var(--lh-snug);
  margin: 0;
}
```

---

## STEP 4 — column-header.css 직접 수정

`@src/styles/design-system/components/column-header.css`:

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
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  font-family: var(--font-sans);
  letter-spacing: -0.01em;
  color: var(--color-text-strong);
}
```

---

## 예외 — 건드리지 말 것

- `.cinfo-customer__name` (고객명 "김신한") — 이미 `type-heading-fs(18px)/bold`로 맞춰져 있음. 그대로 유지.
- `.left-accordion__pair:nth-child(1) dd` (고객명 중복 정의) — 유지
- `!important` 블록 내부 font-size — semantic-map.css가 덮어씌우므로 건드리지 않아도 됨

---

## 완료 후 확인

- [ ] 3페이지 모든 섹션/카드 타이틀이 동일한 크기로 보이는가
- [ ] "최근 상담 이력", "계약 리스트", "상담 안내 가이드" 타이틀이 작아졌는가
- [ ] "상담 어시스턴트", "상품 및 업무정보" 타이틀이 작아졌는가
- [ ] P2 "문서 업로드", "참조 RAG 선택" 타이틀이 P3와 동일한 크기인가
- [ ] 고객명 "김신한"은 여전히 더 크게 보이는가 (타이틀보다 커야 함)
