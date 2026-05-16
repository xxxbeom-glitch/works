# 고객정보 타이틀 크기 수정

대상 파일: `src/pages/index.html`

---

## 문제

`고객정보` 타이틀이 `상담 진행`, `SHINDY` 보다 크게 보임.

- `고객정보` → `.cinfo-panel__head-title` → `font-size: 24px` 하드코딩
- `상담 진행` / `SHINDY` → `.ds-col-head__title` → `var(--type-subheading-fs)` (14px)

---

## 수정

`index.html` `<style>` 블록에서 아래를 찾아 교체:

```css
/* Before — L4774 근처 */
.cinfo-panel__head-title {
  margin: 0;
  color: var(--color-text-strong);
  font-family: Pretendard, "Pretendard Variable", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: var(--fw-bold);
  line-height: 20px;
  letter-spacing: 0.094px;
}

/* After */
.cinfo-panel__head-title {
  margin: 0;
  color: var(--color-text-strong);
  font-family: var(--font-sans);
  font-size: var(--type-subheading-fs);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-snug);
  letter-spacing: -0.01em;
}
```
