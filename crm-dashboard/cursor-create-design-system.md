# 디자인 시스템 CSS 파일 전체 생성

아래 파일들을 **정확한 경로**에 **내용 그대로** 생성해줘.
파일이 이미 존재하면 덮어써줘.

---

## 파일 1: `src/styles/design-system/tokens/primitive.css`

```css
:root {
  /* ── Neutral ── */
  --c-neutral-0:   #FFFFFF;
  --c-neutral-50:  #F9FAFB;
  --c-neutral-100: #F3F4F6;
  --c-neutral-150: #EDEFF2;
  --c-neutral-200: #E5E7EB;
  --c-neutral-300: #D1D5DB;
  --c-neutral-400: #9CA3AF;
  --c-neutral-500: #6B7280;
  --c-neutral-600: #4B5563;
  --c-neutral-700: #374151;
  --c-neutral-800: #1F2937;
  --c-neutral-900: #111827;
  --c-neutral-950: #0F172A;

  /* ── Blue (Brand) ── */
  --c-blue-50:     #F7FAFF;
  --c-blue-100:    #EEF5FF;
  --c-blue-200:    #DBEAFE;
  --c-blue-300:    #BFD7FF;
  --c-blue-400:    #93C5FD;
  --c-blue-500:    #3B82F6;
  --c-blue-600:    #2563EB;
  --c-blue-700:    #1D4ED8;
  --c-blue-strong: #0057FF;
  --c-blue-deep:   #005BAC;

  /* ── Red ── */
  --c-red-50:      #FEF2F2;
  --c-red-100:     #FDECEC;
  --c-red-500:     #E5484D;
  --c-red-600:     #DC2626;
  --c-red-strong:  #FF3B30;

  /* ── Green ── */
  --c-green-50:    #E9F8EF;
  --c-green-100:   #D1FAE5;
  --c-green-500:   #12A150;
  --c-green-600:   #047857;
  --c-green-strong:#22C55E;

  /* ── Yellow ── */
  --c-yellow-50:   #FFFBEB;
  --c-yellow-100:  #FFF4D8;
  --c-yellow-500:  #D99000;
  --c-yellow-600:  #B45309;

  /* ── Purple ── */
  --c-purple-50:   #F0EEFF;
  --c-purple-500:  #6D5DF6;

  /* ── Spacing Scale ── */
  --s-0:  0px;
  --s-1:  2px;
  --s-2:  4px;
  --s-3:  6px;
  --s-4:  8px;
  --s-5:  10px;
  --s-6:  12px;
  --s-7:  14px;
  --s-8:  16px;
  --s-9:  18px;
  --s-10: 20px;
  --s-12: 24px;
  --s-14: 28px;
  --s-16: 32px;
  --s-20: 40px;
  --s-24: 48px;
  --s-32: 64px;
  --s-40: 80px;

  /* ── Radius Scale ── */
  --r-xs:   4px;
  --r-sm:   6px;
  --r-md:   8px;
  --r-lg:   10px;
  --r-xl:   12px;
  --r-2xl:  16px;
  --r-3xl:  20px;
  --r-pill: 9999px;

  /* ── Font Size ── */
  --fs-10: 10px;
  --fs-11: 11px;
  --fs-12: 12px;
  --fs-13: 13px;
  --fs-14: 14px;
  --fs-15: 15px;
  --fs-16: 16px;
  --fs-18: 18px;
  --fs-20: 20px;
  --fs-22: 22px;
  --fs-24: 24px;
  --fs-28: 28px;
  --fs-32: 32px;

  /* ── Font Weight ── */
  --fw-regular:  400;
  --fw-medium:   500;
  --fw-semibold: 600;
  --fw-bold:     700;

  /* ── Line Height ── */
  --lh-tight:   1.2;
  --lh-snug:    1.35;
  --lh-normal:  1.5;
  --lh-relaxed: 1.65;

  /* ── Motion ── */
  --duration-fast:   120ms;
  --duration-normal: 200ms;
  --duration-slow:   320ms;
  --ease-default:    ease-out;
}
```

---

## 파일 2: `src/styles/design-system/tokens/semantic.css`

```css
:root {
  /* ── Text ── */
  --color-text-strong:    var(--c-neutral-900);
  --color-text-default:   var(--c-neutral-800);
  --color-text-secondary: var(--c-neutral-700);
  --color-text-muted:     var(--c-neutral-500);
  --color-text-soft:      var(--c-neutral-400);
  --color-text-disabled:  var(--c-neutral-300);
  --color-text-inverse:   var(--c-neutral-0);
  --color-text-link:      var(--c-blue-deep);

  /* ── Brand / Action ── */
  --color-brand-primary:        var(--c-blue-strong);
  --color-brand-primary-hover:  var(--c-blue-deep);
  --color-brand-primary-soft:   var(--c-blue-100);
  --color-brand-primary-softer: var(--c-blue-50);
  --color-brand-accent-border:  var(--c-blue-300);
  --color-action-primary:       var(--c-blue-600);
  --color-action-primary-hover: var(--c-blue-700);
  --color-action-primary-soft:  var(--c-blue-200);

  /* ── Surface ── */
  --color-surface-app:      #EEF2F9;
  --color-surface-outer:    rgba(241, 245, 249, 0.92);
  --color-surface-card:     var(--c-neutral-0);
  --color-surface-soft:     var(--c-neutral-50);
  --color-surface-row:      var(--c-blue-100);
  --color-surface-row-hover:#EEF4FF;
  --color-surface-selected: var(--c-blue-100);
  --color-surface-header:   var(--c-neutral-0);
  --color-surface-footer:   #475569;
  --color-surface-lnb:      #E4EAF2;

  /* ── Border ── */
  --color-border-default: #E5EAF3;
  --color-border-strong:  #DADDE3;
  --color-border-subtle:  rgba(220, 228, 238, 0.55);
  --color-border-focus:   var(--c-blue-400);
  --color-border-accent:  var(--c-blue-300);

  /* ── Status ── */
  --color-status-success:      var(--c-green-500);
  --color-status-success-soft: var(--c-green-50);
  --color-status-warning:      var(--c-yellow-500);
  --color-status-warning-soft: var(--c-yellow-50);
  --color-status-danger:       var(--c-red-strong);
  --color-status-danger-soft:  var(--c-red-50);
  --color-status-info:         var(--c-blue-600);
  --color-status-info-soft:    var(--c-blue-100);

  /* ── Step ── */
  --color-step-done:     #98A2B3;
  --color-step-wait:     #B8BDC7;
  --color-step-progress: var(--c-blue-strong);
  --color-step-error:    var(--c-red-strong);

  /* ── Spacing ── */
  --space-xxs: var(--s-2);
  --space-xs:  var(--s-3);
  --space-sm:  var(--s-4);
  --space-md:  var(--s-6);
  --space-lg:  var(--s-8);
  --space-xl:  var(--s-10);
  --space-2xl: var(--s-12);
  --space-3xl: var(--s-16);
  --space-4xl: var(--s-20);

  /* ── Radius ── */
  --radius-control: var(--r-md);
  --radius-card:    var(--r-2xl);
  --radius-outer:   var(--r-3xl);
  --radius-row:     var(--r-md);
  --radius-pill:    var(--r-pill);
  --radius-circle:  50%;

  /* ── Typography — 6단계 ── */
  --type-heading-fs:    var(--fs-18);
  --type-heading-fw:    var(--fw-bold);
  --type-heading-lh:    var(--lh-tight);

  --type-subheading-fs: var(--fs-14);
  --type-subheading-fw: var(--fw-semibold);
  --type-subheading-lh: var(--lh-snug);

  --type-body-fs:       var(--fs-13);
  --type-body-fw:       var(--fw-regular);
  --type-body-lh:       1.55;

  --type-small-fs:      var(--fs-12);
  --type-small-fw:      var(--fw-regular);
  --type-small-lh:      var(--lh-normal);

  --type-caption-fs:    var(--fs-11);
  --type-caption-fw:    var(--fw-medium);
  --type-caption-lh:    var(--lh-snug);

  --type-ui-label-fs:   var(--fs-11);
  --type-ui-label-fw:   var(--fw-bold);
  --type-ui-label-lh:   1;

  --type-button-fs:     var(--fs-12);
  --type-button-fw:     var(--fw-bold);

  /* ── 구 토큰 alias (점진 제거 예정) ── */
  --type-display-fs:    var(--type-heading-fs);
  --type-display-fw:    var(--type-heading-fw);
  --type-title-fs:      var(--type-heading-fs);
  --type-title-fw:      var(--type-heading-fw);
  --type-section-fs:    var(--type-subheading-fs);
  --type-section-fw:    var(--type-subheading-fw);
  --type-card-title-fs: var(--type-subheading-fs);
  --type-card-title-fw: var(--type-subheading-fw);
  --type-pill-fs:       var(--type-ui-label-fs);
  --type-pill-fw:       var(--type-ui-label-fw);
  --type-label-fs:      var(--type-ui-label-fs);
  --type-label-fw:      var(--type-ui-label-fw);

  /* ── Control Sizing ── */
  --control-h-sm:      26px;
  --control-h-md:      30px;
  --control-h-lg:      36px;
  --control-h-xl:      48px;
  --control-pad-x-sm:  10px;
  --control-pad-x-md:  12px;
  --control-pad-x-lg:  14px;

  /* ── Icon ── */
  --icon-xs:  12px;
  --icon-sm:  14px;
  --icon-md:  16px;
  --icon-lg:  18px;
  --icon-xl:  20px;
  --icon-2xl: 24px;
  --icon-3xl: 28px;

  /* ── Shadow ── */
  --shadow-card:    0 1px 3px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04);
  --shadow-overlay: 0 8px 24px rgba(15,23,42,0.12), 0 2px 8px rgba(15,23,42,0.06);
  --shadow-focus:   0 0 0 2px var(--c-blue-300);

  /* ── Motion ── */
  --motion-fast:   120ms ease-out;
  --motion-normal: 200ms ease-out;
  --motion-slow:   320ms ease-out;

  /* ── Layout ── */
  --layout-scale:           clamp(0.875, 0.78 + 0.12vw, 1);
  --layout-header-height:   clamp(56px, 3.5vw, 64px);
  --layout-lnb-width:       clamp(72px, 5vw, 96px);
  --layout-footer-height:   clamp(36px, 2.15vw, 40px);
  --layout-page-pad-x:      clamp(20px, 1.67vw, 32px);
  --layout-shell-pad-x:     clamp(20px, 1.67vw, 32px);
  --layout-gutter:          clamp(10px, 0.72vw, 14px);
  --layout-content-gap:     clamp(10px, 0.72vw, 14px);
  --layout-card-gap:        clamp(8px, 0.63vw, 12px);
  --layout-card-padding:    clamp(14px, 0.94vw, 18px);
  --layout-section-gap:     clamp(14px, 1.04vw, 20px);
  --layout-lnb-button-size: clamp(36px, 2.08vw, 40px);
  --layout-lnb-brand-size:  clamp(32px, 1.875vw, 36px);

  /* ── Z-index ── */
  --z-base:     1;
  --z-sticky:   10;
  --z-dropdown: 20;
  --z-overlay:  30;
  --z-modal:    40;
  --z-tooltip:  50;
  --z-toast:    60;

  /* ════════════════════════════════
     LEGACY ALIAS — index.html 구버전 호환
     (파일별 마이그레이션 완료 후 순차 제거)
  ════════════════════════════════ */
  --font-sans:       'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-default:    var(--font-sans);
  --font-regular:    var(--fw-regular);
  --font-medium:     var(--fw-medium);
  --font-semibold:   var(--fw-semibold);
  --font-bold:       var(--fw-bold);

  --text-xs:         var(--type-caption-fs);
  --text-sm:         var(--type-small-fs);
  --text-md:         var(--type-body-fs);
  --text-base:       var(--type-body-fs);
  --text-lg:         var(--type-subheading-fs);
  --text-xl:         var(--type-heading-fs);

  --leading-tight:   var(--lh-tight);
  --leading-snug:    var(--lh-snug);
  --leading-normal:  var(--lh-normal);
  --line-relaxed:    var(--lh-relaxed);

  --text-strong:     var(--color-text-strong);
  --text-default:    var(--color-text-default);
  --text-secondary:  var(--color-text-secondary);
  --text-muted:      var(--color-text-muted);
  --text-soft:       var(--color-text-soft);
  --text-disabled:   var(--color-text-disabled);
  --text-inverse:    var(--color-text-inverse);

  --primary:         var(--color-brand-primary);
  --primary-hover:   var(--color-brand-primary-hover);

  --bg-app:          var(--color-surface-app);
  --bg-panel:        var(--color-surface-app);
  --bg-card:         var(--color-surface-card);
  --bg-inner-content:var(--color-surface-card);
  --bg-content-soft: var(--color-surface-soft);
  --bg-card-soft:    var(--color-surface-soft);

  --divider-soft:    var(--color-border-subtle);
  --divider:         var(--color-border-default);

  --card-border:               1px solid var(--color-border-subtle);
  --radius-md:                 var(--r-md);
  --radius-workspace-card:     var(--r-3xl);
  --radius-inner-content:      var(--r-2xl);
  --shadow-workspace-card:     var(--shadow-card);
  --shadow-inner-content:      none;

  --btn-height-sm:   var(--control-h-sm);
  --btn-height-md:   var(--control-h-md);
  --btn-height-lg:   var(--control-h-lg);
  --input-height-sm: var(--control-h-sm);
  --input-height-md: var(--control-h-md);

  --surface-hover:   var(--c-neutral-100);
  --page-padding-x:  var(--layout-page-pad-x);
  --header-height:   var(--layout-header-height);
  --statusbar-height:var(--layout-footer-height);

  --space-2: var(--s-1);
  --space-3: var(--s-2);
  --space-4: var(--s-3);
}

@media (max-width: 1280px) {
  :root {
    --layout-scale:       0.875;
    --layout-content-gap: 10px;
    --layout-card-gap:    8px;
  }
}
@media (min-width: 1440px) { :root { --layout-scale: 0.94; } }
@media (min-width: 1600px) { :root { --layout-scale: 0.97; } }
@media (min-width: 1920px) { :root { --layout-scale: 1; } }
@media (min-width: 2560px) {
  :root {
    --layout-page-pad-x:  36px;
    --layout-content-gap: 16px;
  }
}
```

---

## 파일 3: `src/styles/design-system/base/reset.css`

```css
*, *::before, *::after { box-sizing: border-box; }

html, body { margin: 0; padding: 0; height: 100%; }

body {
  font-family:             var(--font-sans);
  font-size:               var(--type-body-fs);
  font-weight:             var(--type-body-fw);
  line-height:             var(--type-body-lh);
  color:                   var(--color-text-default);
  background:              var(--color-surface-app);
  -webkit-font-smoothing:  antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  color: var(--color-text-strong);
}

p, ul, ol, dl { margin: 0; padding: 0; }
ul, ol { list-style: none; }
img, svg { display: block; max-width: 100%; }

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0; margin: 0;
  -webkit-tap-highlight-color: transparent;
}

input, textarea, select { font-family: inherit; font-size: inherit; }
a { color: var(--color-text-link); text-decoration: none; }
table { border-collapse: collapse; width: 100%; }
```

---

## 파일 4: `src/styles/design-system/base/typography.css`

```css
.ds-heading {
  font-size: var(--type-heading-fs); font-weight: var(--type-heading-fw);
  line-height: var(--type-heading-lh); color: var(--color-text-strong);
}
.ds-subheading {
  font-size: var(--type-subheading-fs); font-weight: var(--type-subheading-fw);
  line-height: var(--type-subheading-lh); color: var(--color-text-strong);
}
.ds-body {
  font-size: var(--type-body-fs); font-weight: var(--type-body-fw);
  line-height: var(--type-body-lh); color: var(--color-text-default);
}
.ds-body--strong {
  font-size: var(--type-body-fs); font-weight: var(--fw-semibold);
  line-height: var(--type-body-lh); color: var(--color-text-strong);
}
.ds-body--muted {
  font-size: var(--type-body-fs); font-weight: var(--type-body-fw);
  line-height: var(--type-body-lh); color: var(--color-text-muted);
}
.ds-small {
  font-size: var(--type-small-fs); font-weight: var(--type-small-fw);
  line-height: var(--type-small-lh); color: var(--color-text-secondary);
}
.ds-caption {
  font-size: var(--type-caption-fs); font-weight: var(--type-caption-fw);
  line-height: var(--type-caption-lh); color: var(--color-text-muted);
}
.ds-ui-label {
  font-size: var(--type-ui-label-fs); font-weight: var(--type-ui-label-fw);
  line-height: var(--type-ui-label-lh);
}

/* 구 alias */
.ds-display, .ds-title       { font-size: var(--type-heading-fs);    font-weight: var(--type-heading-fw);    line-height: var(--type-heading-lh);    color: var(--color-text-strong); }
.ds-section-title, .ds-card-title { font-size: var(--type-subheading-fs); font-weight: var(--type-subheading-fw); line-height: var(--type-subheading-lh); color: var(--color-text-strong); }
.ds-label { font-size: var(--type-ui-label-fs); font-weight: var(--type-ui-label-fw); line-height: var(--type-ui-label-lh); }

/* color helper */
.ds-text-strong    { color: var(--color-text-strong);    }
.ds-text-default   { color: var(--color-text-default);   }
.ds-text-secondary { color: var(--color-text-secondary); }
.ds-text-muted     { color: var(--color-text-muted);     }
.ds-text-soft      { color: var(--color-text-soft);      }
.ds-text-disabled  { color: var(--color-text-disabled);  }
.ds-text-inverse   { color: var(--color-text-inverse);   }
.ds-text-primary   { color: var(--color-brand-primary);  }
.ds-text-success   { color: var(--color-status-success); }
.ds-text-warning   { color: var(--color-status-warning); }
.ds-text-danger    { color: var(--color-status-danger);  }
```

---

## 파일 5: `src/styles/design-system/components/button.css`

```css
.ds-btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-xs);
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  border: 1px solid transparent;
  border-radius: var(--radius-control);
  font-family: inherit;
  font-size: var(--type-button-fs);
  font-weight: var(--type-button-fw);
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  transition: background var(--motion-fast), color var(--motion-fast), border-color var(--motion-fast);
  -webkit-tap-highlight-color: transparent;
}
.ds-btn:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; }
.ds-btn:disabled { opacity: 0.4; cursor: not-allowed; pointer-events: none; }

.ds-btn--sm { height: var(--control-h-sm); padding: 0 var(--control-pad-x-sm); font-size: var(--type-ui-label-fs); }
.ds-btn--lg { height: var(--control-h-lg); padding: 0 var(--control-pad-x-lg); font-size: var(--fs-13); }

.ds-btn--primary   { background: var(--c-neutral-800); color: var(--color-text-inverse); border-color: var(--c-neutral-800); }
.ds-btn--primary:hover { background: var(--c-neutral-900); border-color: var(--c-neutral-900); }

.ds-btn--secondary { background: var(--color-surface-card); color: var(--color-text-default); border-color: var(--color-border-strong); }
.ds-btn--secondary:hover { background: var(--color-surface-soft); }

.ds-btn--ghost  { background: transparent; color: var(--color-text-muted); }
.ds-btn--ghost:hover { background: var(--color-surface-soft); color: var(--color-text-default); }

.ds-btn--outline { background: var(--color-brand-primary-soft); color: var(--color-brand-primary); border-color: var(--color-brand-accent-border); }
.ds-btn--outline:hover { background: var(--color-brand-primary-softer); }

.ds-btn--danger  { background: var(--color-status-danger); color: var(--color-text-inverse); border-color: var(--color-status-danger); }
.ds-btn--danger:hover { background: var(--c-red-600); border-color: var(--c-red-600); }

.ds-icon-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--control-h-sm); height: var(--control-h-sm);
  border: none; border-radius: var(--radius-control);
  background: transparent; color: var(--color-text-muted);
  cursor: pointer; flex-shrink: 0;
  transition: background var(--motion-fast), color var(--motion-fast);
}
.ds-icon-btn:hover { background: var(--color-surface-soft); color: var(--color-text-default); }
.ds-icon-btn:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; }
```

---

## 파일 6: `src/styles/design-system/components/input.css`

```css
.ds-input, .ds-select {
  display: block; width: 100%;
  height: var(--control-h-md);
  padding: 0 var(--control-pad-x-md);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  background: var(--color-surface-card);
  font-family: inherit; font-size: var(--type-body-fs); font-weight: var(--type-body-fw);
  color: var(--color-text-default); line-height: 1; outline: none;
  transition: border-color var(--motion-fast);
  -webkit-appearance: none; appearance: none;
}
.ds-input::placeholder { color: var(--color-text-soft); }
.ds-input:hover  { border-color: var(--color-border-default); }
.ds-input:focus  { border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.ds-select:focus { border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }

.ds-textarea {
  display: block; width: 100%; min-height: 80px;
  padding: var(--space-sm) var(--control-pad-x-md);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  background: var(--color-surface-card);
  font-family: inherit; font-size: var(--type-body-fs);
  color: var(--color-text-default); line-height: var(--type-body-lh);
  outline: none; resize: vertical;
  transition: border-color var(--motion-fast);
}
.ds-textarea:focus { border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }

.ds-field { display: flex; flex-direction: column; gap: var(--space-xs); }
.ds-field__label { font-size: var(--type-caption-fs); font-weight: var(--type-caption-fw); color: var(--color-text-muted); }
.ds-field__hint  { font-size: var(--type-caption-fs); font-weight: var(--fw-regular); color: var(--color-text-soft); }
```

---

## 파일 7: `src/styles/design-system/components/chip.css`

```css
.ds-chip-group { display: flex; flex-wrap: wrap; gap: var(--space-xs); }

.ds-chip {
  display: inline-flex; align-items: center; justify-content: center;
  height: var(--control-h-sm);
  padding: 0 var(--control-pad-x-sm);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-control);
  background: var(--color-surface-card);
  font-family: inherit; font-size: var(--type-small-fs); font-weight: var(--fw-medium);
  color: var(--color-text-secondary);
  cursor: pointer; white-space: nowrap;
  transition: background var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast);
}
.ds-chip:hover { background: var(--color-surface-soft); }
.ds-chip.is-selected,
.ds-chip[aria-pressed="true"] {
  background: var(--color-surface-card);
  border-color: var(--color-text-strong);
  color: var(--color-text-strong);
  font-weight: var(--fw-semibold);
}
.ds-chip--pill { border-radius: var(--radius-pill); }
.ds-chip--tint { background: var(--color-brand-primary-soft); border-color: var(--color-brand-accent-border); color: var(--color-brand-primary); }
```

---

## 파일 8: `src/styles/design-system/components/checkbox.css`

```css
.ds-check {
  display: inline-flex; align-items: center; gap: var(--space-xs);
  cursor: pointer; font-size: var(--type-body-fs); color: var(--color-text-default);
}
.ds-check input[type="checkbox"] {
  width: 16px; height: 16px; flex-shrink: 0;
  border: 1.5px solid var(--color-border-strong);
  border-radius: var(--r-xs);
  background: var(--color-surface-card);
  cursor: pointer; appearance: none; -webkit-appearance: none;
  display: grid; place-items: center;
  transition: background var(--motion-fast), border-color var(--motion-fast);
}
.ds-check input[type="checkbox"]:checked {
  background: var(--c-neutral-800); border-color: var(--c-neutral-800);
}
.ds-check input[type="checkbox"]:checked::after {
  content: '';
  width: 8px; height: 5px;
  border-left: 2px solid #fff; border-bottom: 2px solid #fff;
  transform: rotate(-45deg) translate(1px, -1px);
}

.ds-check-row {
  display: flex; align-items: center; gap: var(--space-xs);
  cursor: pointer;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-row);
  font-size: var(--type-body-fs); color: var(--color-text-default);
  transition: background var(--motion-fast);
}
.ds-check-row:hover    { background: var(--color-surface-soft); }
.ds-check-row.is-checked { background: var(--color-surface-row); }
.ds-check-row--all { font-weight: var(--fw-semibold); }

.ds-check-list { display: flex; flex-direction: column; gap: var(--space-sm); }

.ds-check-group--inline {
  display: flex; flex-wrap: wrap; align-items: center;
  gap: var(--space-xs) var(--space-lg);
}
```

---

## 파일 9: `src/styles/design-system/components/status.css`

```css
.ds-status-pill {
  display: inline-flex; align-items: center;
  height: 18px; padding: 0 var(--space-xs);
  border-radius: var(--radius-pill);
  font-size: var(--type-ui-label-fs); font-weight: var(--type-ui-label-fw); line-height: 1;
  white-space: nowrap;
  background: var(--c-neutral-100); color: var(--color-text-secondary);
}
.ds-status-pill--success { background: var(--color-status-success-soft); color: var(--color-status-success); }
.ds-status-pill--warning { background: var(--color-status-warning-soft); color: var(--color-status-warning); }
.ds-status-pill--danger  { background: var(--color-status-danger-soft);  color: var(--color-status-danger);  }
.ds-status-pill--info    { background: var(--color-status-info-soft);    color: var(--color-status-info);    }

.ds-status-dot {
  display: inline-block; width: 8px; height: 8px;
  border-radius: var(--radius-circle); background: var(--c-neutral-400); flex-shrink: 0;
}
.ds-status-dot--success { background: var(--color-status-success); }
.ds-status-dot--warning { background: var(--color-status-warning); }
.ds-status-dot--danger  { background: var(--color-status-danger);  }
.ds-status-dot--info    { background: var(--color-status-info);    }
.ds-status-dot--muted   { background: var(--c-neutral-400);        }

.ds-step-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: var(--radius-circle); flex-shrink: 0;
}
.ds-step-state--done     { color: var(--color-step-done); }
.ds-step-state--wait     { color: var(--color-step-wait); }
.ds-step-state--progress { color: var(--color-step-progress); }
.ds-step-state--error    { color: var(--color-step-error); }
```

---

## 파일 10: `src/styles/design-system/components/table.css`

```css
.ds-table { width: 100%; border-collapse: collapse; table-layout: fixed; }

.ds-table th,
.ds-table td {
  height: 36px; padding: 0 10px;
  text-align: left; vertical-align: middle;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  border-bottom: 1px solid var(--color-border-default);
}
.ds-table th:first-child,
.ds-table td:first-child { padding-left: 14px; }

.ds-table th {
  font-size: var(--type-caption-fs); font-weight: var(--fw-semibold);
  color: var(--color-text-muted); background: var(--color-surface-soft);
}
.ds-table td {
  font-size: var(--type-small-fs); color: var(--color-text-default);
}
.ds-table tbody tr:hover  { background: var(--color-surface-soft); }
.ds-table tbody tr.is-active { background: var(--color-surface-row); }
```

---

## 파일 11: `src/styles/design-system/components/card.css`

```css
.ds-card {
  display: flex; flex-direction: column; min-width: 0;
  background: var(--color-surface-card);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}
.ds-card--outer  { border-radius: var(--radius-outer); background: var(--color-surface-outer); }
.ds-card--soft   { background: var(--color-surface-soft); box-shadow: none; }
.ds-card--flat   { box-shadow: none; }
.ds-card--status { border-color: var(--color-border-accent); }

.ds-card__head {
  display: flex; align-items: center; justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-md) var(--layout-card-padding);
  border-bottom: 1px solid var(--color-border-subtle);
  flex-shrink: 0;
}
.ds-card__head-lead { display: flex; align-items: center; gap: var(--space-sm); flex: 1 1 auto; min-width: 0; }
.ds-card__head-meta { display: flex; align-items: center; gap: var(--space-xs); flex-shrink: 0; }
.ds-card__title {
  font-size: var(--type-subheading-fs); font-weight: var(--type-subheading-fw);
  line-height: var(--type-subheading-lh); color: var(--color-text-strong);
}
.ds-card__body { padding: var(--layout-card-padding); flex: 1 1 auto; min-height: 0; }
```

---

## 파일 12: `src/styles/design-system/components/scrollbar.css`

```css
.ds-scroll {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(100,116,139,0.22) transparent;
}
.ds-scroll::-webkit-scrollbar       { width: 4px; }
.ds-scroll::-webkit-scrollbar-track { background: transparent; }
.ds-scroll::-webkit-scrollbar-thumb { background: rgba(100,116,139,0.22); border-radius: 999px; }
.ds-scroll::-webkit-scrollbar-thumb:hover { background: rgba(100,116,139,0.38); }
```

---

## 파일 13: `src/styles/design-system/index.css`

```css
@import "./tokens/primitive.css";
@import "./tokens/semantic.css";
@import "./base/reset.css";
@import "./base/typography.css";
@import "./components/button.css";
@import "./components/input.css";
@import "./components/chip.css";
@import "./components/checkbox.css";
@import "./components/status.css";
@import "./components/table.css";
@import "./components/card.css";
@import "./components/scrollbar.css";
```

---

## 완료 후

`index.html` `<head>` 안의 기존 토큰 링크를 아래로 교체:

```html
<!-- 기존 -->
<link rel="stylesheet" href="../styles/tokens.css">

<!-- 교체 -->
<link rel="stylesheet" href="../styles/design-system/index.css">
```
