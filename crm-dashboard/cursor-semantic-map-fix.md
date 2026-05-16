# semantic-map.css 클래스명 교정

대상 파일: `src/styles/design-system/components/semantic-map.css`

---

## 문제

아래 타이틀들이 여전히 큼. semantic-map.css에 연결된 클래스명이 실제 HTML과 달라서 미적용됨.

| 타이틀 | 실제 HTML 클래스 | semantic-map 현재 | 결과 |
|---|---|---|---|
| 최근 상담 이력 / 계약 리스트 / 상담 안내 가이드 | `.cinfo-section__title` | `.info-sect-mini-head__title` | ❌ 미적용 |
| 상담 어시스턴트 / 상품 및 업무정보 | `.card-header-title` `.live-sect__title` | `.know-acc-card__title` | ❌ 미적용 |

---

## 수정

semantic-map.css에서 L2 subheading 섹션을 찾아서 아래와 같이 교체해줘.

### 최근 상담 이력 / 계약 리스트 / 상담 안내 가이드

```css
/* Before */
.live-outer--info .info-sect-mini-head__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}

/* After */
.live-outer--info .info-sect-mini-head__title,
.cinfo-section__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong);
}
```

### 상담 어시스턴트 / 상품 및 업무정보

```css
/* Before */
.know-acc-card__title {
  font-size:   var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  color:       var(--color-text-strong);
}

/* After */
.card-header-title,
.live-sect__title,
.know-acc-card__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong);
}
```

### ds-col-head__title (고객정보 / 상담 진행 / SHINDY)

```css
/* Before */
.ds-col-head__title {
  font-size:   var(--type-heading-fs);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color:       var(--color-text-strong);
}

/* After */
.ds-col-head__title {
  font-size:   var(--type-subheading-fs) !important;
  font-weight: var(--fw-semibold) !important;
  line-height: var(--lh-snug) !important;
  font-family: var(--font-sans) !important;
  color:       var(--color-text-strong);
}
```

---

## 완료 후 확인

- [ ] 최근 상담 이력 / 계약 리스트 / 상담 안내 가이드 타이틀이 작아졌는가
- [ ] 상담 어시스턴트 / 상품 및 업무정보 타이틀이 작아졌는가
- [ ] 고객정보 / 상담 진행 / SHINDY 컬럼 헤더가 동일한 크기인가
- [ ] 김신한(고객명)은 여전히 더 크게 보이는가 (L1 heading 18px 유지)
