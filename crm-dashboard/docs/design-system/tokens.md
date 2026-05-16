# Token Dictionary

> 모든 값은 **두 레이어**로 관리됩니다.
> **Primitive** = 원시값(raw scale), **Semantic** = 의미 기반.
> 컴포넌트/페이지는 **Semantic** 만 사용합니다.

---

## 1. Color

### Primitive (팔레트)

| 카테고리 | 토큰 | 값 |
|---|---|---|
| Neutral | `--c-neutral-0 ~ 950` | `#FFFFFF` → `#0F172A` 15단계 |
| Blue | `--c-blue-50 ~ 700` | `#F7FAFF` → `#1E40AF` |
| Blue | `--c-blue-strong` / `-deep` | `#0057FF` / `#005BAC` (SB 브랜드) |
| Red | `--c-red-50 / 100 / 500 / 600 / -strong` | `#FEF2F2` / `#FDECEC` / `#E5484D` / `#DC2626` / `#FF3B30` |
| Green | `--c-green-50 / 100 / 500 / 600 / -strong` | `#E9F8EF` / `#D1FAE5` / `#12A150` / `#047857` / `#22C55E` |
| Yellow | `--c-yellow-50 / 100 / 500 / 600` | `#FFFBEB` / `#FFF4D8` / `#D99000` / `#B45309` |
| Purple | `--c-purple-50 / 500` | `#F0EEFF` / `#6D5DF6` |

### Semantic (사용 권장)

#### Brand / Action
| 토큰 | 의미 |
|---|---|
| `--color-brand-primary` | SB 브랜드 강조색 (`#0057FF`) |
| `--color-brand-primary-hover` | hover 시 진해짐 |
| `--color-brand-primary-soft` | 옅은 tint 배경 (#EEF5FF) |
| `--color-brand-primary-softer` | 가장 옅은 tint (#F7FAFF) |
| `--color-brand-accent-border` | tint 영역 border (#BFD7FF) |
| `--color-action-primary` | UI 액션 버튼 (`#2563EB`) |
| `--color-action-primary-hover` | `#1D4ED8` |
| `--color-action-primary-soft` | 옅은 tint |

#### Text
| 토큰 | 의미 |
|---|---|
| `--color-text-strong` | 본문 강조 (`#111827`) |
| `--color-text-default` | 본문 기본 (`#1F2937`) |
| `--color-text-secondary` | 보조 텍스트 (`#334155`) |
| `--color-text-muted` | meta / hint (`#64748B`) |
| `--color-text-soft` | placeholder (`#98A2B3`) |
| `--color-text-disabled` | 비활성 (`#B8BDC7`) |
| `--color-text-inverse` | 다크 배경 위 흰색 |
| `--color-text-link` | 링크 |

#### Surface (배경 레이어)
| 토큰 | 의미 |
|---|---|
| `--color-surface-app` | 페이지 바깥 배경 (#EEF2F9) |
| `--color-surface-outer` | 외곽 반투명 카드 |
| `--color-surface-card` | 내부 흰 카드 |
| `--color-surface-soft` | 옅은 회색 영역 |
| `--color-surface-row` | 선택된 row tint |
| `--color-surface-row-hover` | row hover |
| `--color-surface-selected` | 선택 상태 강조 |
| `--color-surface-header` | topbar |
| `--color-surface-footer` | statusbar |
| `--color-surface-lnb` | LNB |

#### Border
| 토큰 | 의미 |
|---|---|
| `--color-border-default` | 기본 카드 라인 (#E5EAF3) |
| `--color-border-strong` | 강조 라인 (#DADDE3) |
| `--color-border-subtle` | 거의 보이지 않는 divider |
| `--color-border-focus` | 포커스 표시 |
| `--color-border-accent` | tint 영역 강조 (#BFD7FF) |

#### Status
| 토큰 | 의미 |
|---|---|
| `--color-status-success` / `-soft` | success |
| `--color-status-warning` / `-soft` | warning |
| `--color-status-danger` / `-soft` | danger |
| `--color-status-info` / `-soft` | info |

#### Step (4단계 매핑)
| 단계 | 토큰 |
|---|---|
| 처리완료 | `--color-step-done` (#98A2B3) |
| 대기중 | `--color-step-wait` (#B8BDC7) |
| 진행중 | `--color-step-progress` (#0057FF) |
| 처리불가 | `--color-step-error` (#FF3B30) |

---

## 2. Spacing

### Primitive
| 토큰 | px |
|---|---|
| `--s-0` | 0 |
| `--s-1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10` | 2 / 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 |
| `--s-12 / 14 / 16 / 20 / 24 / 32 / 40` | 24 / 28 / 32 / 40 / 48 / 64 / 80 |

### Semantic (페이지 사용)
| 토큰 | 값 | 용도 |
|---|---|---|
| `--space-xxs` | 4px | icon gap |
| `--space-xs` | 6px | tight gap |
| `--space-sm` | 8px | row gap / chip gap |
| `--space-md` | 12px | label-content gap |
| `--space-lg` | 16px | card padding (default) |
| `--space-xl` | 20px | section gap |
| `--space-2xl` | 24px | between cards |
| `--space-3xl` | 32px | page padding |
| `--space-4xl` | 40px | 큰 섹션 여백 |

---

## 3. Radius

| Semantic | Primitive | 용도 |
|---|---|---|
| `--radius-control` | `--r-md` (8) | button / chip / input |
| `--radius-card` | `--r-2xl` (16) | 내부 카드 |
| `--radius-outer` | `--r-3xl` (20) | 외곽 카드 |
| `--radius-row` | `--r-md` (8) | row |
| `--radius-pill` | `--r-pill` (9999) | pill |
| `--radius-circle` | `50%` | avatar / dot |

---

## 4. Typography

### Font Family
- `--font-default` → Pretendard Variable 우선 + 시스템 폰트 fallback

### Font Size
`--fs-10 / 11 / 12 / 13 / 14 / 15 / 16 / 18 / 20 / 22 / 24 / 28 / 32`

### Font Weight
`--fw-regular (400)` / `-medium (500)` / `-semibold (600)` / `-bold (700)`

### Line Height
`--lh-tight (1.2)` / `-snug (1.35)` / `-normal (1.5)` / `-relaxed (1.65)`

### Semantic (Type scale)
| 토큰 | 크기 | 굵기 | line-height | 용도 |
|---|---|---|---|---|
| `--type-display-*` | 22 | bold | tight | 가장 큰 헤딩 |
| `--type-title-*` | 18 | bold | tight | 페이지 타이틀 |
| `--type-section-*` | 16 | bold | snug | 열 헤더 |
| `--type-card-title-*` | 15 | bold | snug | 카드 헤더 |
| `--type-body-*` | 14 | regular | normal | 본문 |
| `--type-small-*` | 13 | regular | normal | 보조 본문 |
| `--type-caption-*` | 12 | medium | snug | meta |
| `--type-pill-*` | 11 | bold | 1 | badge |
| `--type-button-*` | 13 | bold | 1 | 버튼 |
| `--type-label-*` | 13 | bold | 1 | 라벨 |

### Utility 클래스
`.ds-display` / `.ds-title` / `.ds-section-title` / `.ds-card-title` /
`.ds-body` / `.ds-body--strong` / `.ds-body--muted` /
`.ds-small` / `.ds-caption` / `.ds-label`

색상 helper:
`.ds-text-strong / -default / -muted / -soft / -disabled / -inverse /`
`-primary / -success / -warning / -danger`

---

## 5. Shadow

| 토큰 | 값 |
|---|---|
| `--shadow-card` | sm — 카드용 |
| `--shadow-overlay` | lg — 드롭다운 / 팝오버 |
| `--shadow-focus` | 0 0 0 2px blue-200 |

---

## 6. Control Sizing

| 토큰 | 값 |
|---|---|
| `--control-h-sm / md / lg / xl` | 28 / 32 / 40 / 48 |
| `--control-pad-x-sm / md / lg` | 12 / 14 / 16 |

## 7. Icon Sizing
| 토큰 | 값 |
|---|---|
| `--icon-xs / sm / md / lg / xl / 2xl / 3xl` | 12 / 14 / 16 / 18 / 20 / 24 / 28 |

## 8. Motion
| 토큰 | 값 |
|---|---|
| `--motion-fast` | 120ms ease-out |
| `--motion-normal` | 200ms ease-out |
| `--motion-slow` | 320ms ease-out |

## 9. Layout
| 토큰 | 값 |
|---|---|
| `--layout-scale` | `clamp(0.875, 0.78 + 0.12vw, 1)` |
| `--layout-header-height` | `clamp(56px, 3.5vw, 64px)` |
| `--layout-lnb-width` | `clamp(72px, 5vw, 96px)` |
| `--layout-footer-height` | `clamp(36px, 2.15vw, 40px)` |
| `--layout-page-pad-x` / `--layout-shell-pad-x` | `clamp(20px, 1.67vw, 32px)` |
| `--layout-gutter` / `--layout-content-gap` | `clamp(10px, 0.72vw, 14px)` |
| `--layout-card-gap` | `clamp(8px, 0.63vw, 12px)` |
| `--layout-card-padding` | `clamp(14px, 0.94vw, 18px)` |
| `--layout-section-gap` | `clamp(14px, 1.04vw, 20px)` |
| `--layout-lnb-button-size` | `clamp(36px, 2.08vw, 40px)` |
| `--layout-lnb-brand-size` | `clamp(32px, 1.875vw, 36px)` |

### Layout Breakpoints

| 구간 | 규칙 |
|---|---|
| `≤1280` | `--layout-scale: 0.875`, content gap 10px, card gap 8px로 dense 보정 |
| `1440` | compact desktop, scale 0.94 |
| `1600` | standard desktop, scale 0.97 |
| `1920` | canonical baseline, Header 64px / LNB 96px 상한 도달 |
| `2560+` | Header/LNB는 상한 유지, page padding 36px / content gap 16px만 소폭 확장 |

원칙:
- 모바일 전환이 아니라 고해상도 업무용 대시보드 밀도 보정용이다.
- Header/LNB/card gap/page padding에 고정 px를 직접 쓰지 않는다.
- LNB 내부 아이콘은 `--icon-2xl`(24px)을 유지하고 컨테이너만 스케일한다.
- 카드 비율과 정보 구조는 유지하고 spacing만 반응형으로 보정한다.

## 10. Z-index
`--z-base / -sticky / -dropdown / -overlay / -modal / -tooltip / -toast`
= 1 / 10 / 20 / 30 / 40 / 50 / 60
