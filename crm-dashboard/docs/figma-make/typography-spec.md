# Typography Spec (Figma Make)

> **기준 파일:** `src/styles/tokens.css`, `src/pages/index.html` (인라인 `<style>`)  
> **작성일:** 2026-05-15  
> 토큰 해석값은 `tokens.css`의 `:root` 정의를 기준으로 계산했습니다. `calc()`·fallback이 있는 항목은 CSS에 명시된 대로 표기합니다.

---

## 1. Global

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 기본 font-family | `body` (`--font-sans`) | — | — | — | — | — | 전역 |
| body 기본 | `body` | `var(--text-md)` → **13px** | `var(--font-medium)` → **500** | `var(--line-relaxed)` → **1.6** | (미지정, normal) | `var(--text-default)` → **#26364d** | 앱 기본 본문 |

**font-family 스택 (`--font-sans`):**  
`'Pretendard Variable', Pretendard, SUIT, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## 2. Header (Topbar)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 서비스명 | `.topbar__title` | `var(--text-lg)` → **16px** | `var(--font-bold)` → **700** | `var(--line-tight)` → **1.25** | `var(--tracking-tight)` → **-0.02em** | `var(--text-strong)` → **#101828** | 상단 좌측 앱 타이틀 |
| 버전 | `.topbar__ver` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-soft)` → **#98a2b3** | 타이틀 옆 `v1.0` |
| 모드 토글 (비활성) | `.mode-segmented__btn` | **13px** (리터럴) | **600** | **1** | `var(--tracking-wide, 0.02em)` → **0.04em** (`--tracking-wide`) | **#64748b** | 상담모드 / 학습·조회모드 |
| 모드 토글 (활성) | `.mode-segmented__btn.is-active` | (상동) | **700** | (상동) | (상동) | **#005bac** | 선택된 모드 |
| 사용자명·구분 | `.topbar__link` | `var(--text-md, 13px)` → **13px** | **600** | **1** | (미지정) | `var(--text-default)` → **#26364d** | 우측 `김상담 \| Tele-Pro 연동` |
| Tele-Pro 연동 | `.topbar__link-tele` | (`.topbar__link` 상속) | **600** | (상동) | (상동) | **#12a150** | 연동 상태 강조 |
| 설정 아이콘 버튼 | `.icon-btn` | `var(--text-base)` → **14px** | (상속 **500**) | (상속 **1.6**) | (미지정) | `var(--text-default)` → **#26364d** | 상단 ⚙ 버튼 |

---

## 3. Card Header

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 카드 타이틀 | `.card-header-title` (`.live-composite`, `.live-outer--info`) | `var(--text-card-title)` → **15px** | `var(--font-semibold)` → **600** | `var(--line-card-title)` → **1.28** | **-0.01em** | `var(--text-strong)` → **#101828** | STT·고객정보·최근 상담·추천 지식 카드 헤더 |
| 1열 열기/닫기 | `.info-panel-card__toggle` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-muted)` → **#667085** (hover: `var(--primary, #005bac)`) | 1열 카드 헤더 우측 |
| 필터 chip (기본) | `.history-chip` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | **1** | (미지정) | `var(--text-muted)` → **#667085** | 최근 상담 헤더 필터 |
| 필터 chip (활성) | `.history-chip.is-active` | (상동) | `var(--font-semibold)` → **600** | (상동) | (미지정) | **#0f2744** | 선택된 필터 |
| 정렬 dropdown | `.history-sort__select` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | **1** | (미지정) | `var(--text-default)` → **#26364d** | 최근 상담 헤더 정렬 |

---

## 4. Left Info Panel (1열)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 섹션 번호 | `.info-doc-section__num` | **12px** (리터럴) | `var(--font-semibold)` → **600** | **1.25** | **0.06em** | **#64748b** | `01` / `02` … 라벨 |
| 섹션 타이틀 | `.info-doc-section__title` | **16px** (리터럴) | `var(--font-bold)` → **700** | **1.35** | **-0.02em** | `var(--text-strong)` → **#101828** | 기본정보·계약정보 등 |
| 섹션 메타 | `.info-doc-section__meta` | **12px** (리터럴) | `var(--font-medium)` → **500** | **1.25** | (미지정) | **#64748b** | 계약리스트 `3건` |
| label (dt) | `.left-accordion__pair dt` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-muted)` → **#667085** | 고객명·계약번호 등 라벨 |
| value (dd) | `.left-accordion__pair dd` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | 필드 값 |
| 상태 pill | `.status-pill` | `var(--text-xs)` → **11px** | `var(--font-semibold)` → **600** | `var(--line-tight)` → **1.25** | (미지정) | `var(--warning)` → **#d99000** | 기본정보 상태 태그 |
| 계약 리스트 제목 | `.contract-list__title` | `var(--text-md)` → **13px** | `var(--font-bold)` → **700** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | 계약 row 제목 |
| 계약 리스트 메타 | `.contract-list__meta` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-muted)` → **#667085** | `계약 2018.03 / 월 120,000원` |
| 선택 체크 | `.contract-list__check` | `var(--text-md)` → **13px** | `var(--font-bold)` → **700** | **1** | (미지정) | **#2563eb** | 선택된 계약 ✓ |
| 가이드 요약 | `.info-doc-guide__lede` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | **1.55** | (미지정) | `var(--text-default)` → **#26364d** | 상담안내 가이드 본문 |

---

## 5. STT Log

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 고객명/화자명 | `.stt-chat__sender` | `var(--text-xs)` → **11px** | **600** | `var(--leading-snug)` → **1.35** | `var(--tracking-wide)` → **0.04em** | **#64748b** | `홍길동 고객님` |
| 말풍선 본문 | `.stt-chat__bubble` | `var(--text-md)` → **13px** | `var(--font-medium)` → **500** | `var(--line-relaxed)` → **1.6** | (미지정) | **#26364d** | 고객·상담사 대화 |
| 시간 | `.stt-chat__time` | **11px** (리터럴) | **500** | `var(--leading-snug)` → **1.35** | (미지정) | **#a0aec0** | `14:23:08` |
| 아바타 이니셜 | `.stt-chat__avatar--initial` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | **1** | **-0.02em** | `var(--text-inverse)` → **#ffffff** | 고객 이니셜 아바타 |
| 키워드 (고객 말풍선) | `.stt-chat__msg--customer .highlight-keyword` | **inherit** (13px) | **700** | **inherit** (1.6) | (미지정) | **#005bac** (bg **#dcebff**) | `자동이체` 등 하이라이트 |
| 키워드 (상담사 말풍선) | `.stt-chat__msg--agent .highlight-keyword` | inherit | inherit | inherit | (미지정) | inherit (강조 없음) | 상담사 버블 내 키워드 |
| 통화 경과 시간 | `.floating-control-group__elapsed` | **14px** (리터럴) | **700** | **1** | (미지정) | `var(--text-muted)` → **#667085** | 하단 `00:00` |
| 분석 상태 문구 | `.floating-control-group__caption` | **12px** (리터럴) | **500** | **1.35** | (미지정) | `var(--text-soft)` → **#98a2b3** | `실시간으로 통화 내용이 기록됩니다` |

---

## 6. Recent History (최근 상담)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 필터 chip | `.history-chip` | `var(--text-xs)` → **11px** | **500** / 활성 **600** | **1** | (미지정) | muted / 활성 **#0f2744** | 카드 헤더 (§3 참고) |
| 날짜 | `.history-item__date` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-soft)` → **#98a2b3** | row 상단 날짜 |
| 상담 제목 | `.history-item__title` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | row 제목 |
| 상태 badge | `.history-item__badge` | **10px** (리터럴) | `var(--font-semibold)` → **600** | **1.25** | **0.01em** | 상태별 (아래) | row 우측 `[진행]` 등 |
| chevron | `.history-item__chevron` | **15px** (리터럴) | `var(--font-semibold)` → **600** | **1** | (미지정) | **#94a3b8** (hover **#2563eb**) | row 우측 `>` |
| 정렬 dropdown | `.history-sort__select` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | **1** | (미지정) | `var(--text-default)` → **#26364d** | 카드 헤더 (§3 참고) |

**최근 상담 상태 badge 텍스트 색:**

| modifier | color |
| --- | --- |
| `--in_progress` | **#1d4ed8** |
| `--done` | **#15803d** |
| `--delayed` | **#c2410c** |
| `--pending` | **#64748b** |

---

## 7. Recommendation Panel (추천 지식)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 카드 타이틀 | `.card-header-title` | **15px** | **600** | **1.28** | **-0.01em** | **#101828** | `추천 지식 답변` (§3) |
| 요청 row 제목 | `.know-queue__title` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | **1.35** | (미지정) | `var(--text-default)` → **#26364d** | 처리할 요청 큐 |
| 상태/우선순위 badge | `.know-queue__badge` | **10px** (리터럴) | `var(--font-semibold)` → **600** | **1.35** | **0.01em** | modifier별 (아래) | 큐 row 우측 |
| 현재 답변 제목 | `.know-detail__headline` | **18px** (리터럴) | `var(--font-bold)` → **700** | **1.35** | **-0.02em** | `var(--text-strong)` → **#101828** | 선택 요청 제목 |
| 빈 상태 문구 | `.know-detail__empty` | **15px** (리터럴) | `var(--font-medium)` → **500** | **1.6** | (미지정) | `var(--text-muted)` → **#667085** | 큐 비었을 때 |
| 블록 소제목 | `.know-card__subhead` | **13px** (리터럴) | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | **0.01em** | `var(--text-muted)` → **#667085** | `추천 답변` / `관련 FAQ` |
| 추천 답변 본문 | `.know-card__answer` | **15px** (리터럴) | `var(--font-medium)` → **500** | **1.6** | (미지정) | `var(--text-default)` → **#26364d** | 답변 텍스트 |
| FAQ/화면 pill | `.know-card__btn.knowledge-chip` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | **#26364d** | FAQ·다음 화면 칩 |
| 하단 CTA (primary) | `.know-actions__btn--primary` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | **#ffffff** | `답변 완료` |
| 하단 CTA (secondary) | `.know-actions__btn--secondary` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | **#0f2744** | `다음 요청 보기` |

**큐 badge 텍스트 색:**

| modifier | color |
| --- | --- |
| `--in_progress` | **#1d4ed8** |
| `--pending` | **#64748b** |
| `--done` | **#15803d** |
| `--prio-high` | **#c2410c** |
| `--prio-medium` | **#4338ca** |
| `--prio-low` | **#64748b** |

---

## 8. Bottom Status Bar (참고)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 상태바 본문 | `.statusbar` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--line-normal)` → **1.45** | (미지정) | `var(--text-status)` → **#d8e0ea** | 하단 상태바 |
| 강조 수치/라벨 | `.statusbar__item strong` | (상속 **12px**) | `var(--font-semibold)` → **600** | (상속) | (미지정) | `var(--text-inverse)` → **#ffffff** | `통화 중`, `GPT-4o` 등 |
| 단축키 안내 | `.statusbar__keys` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | `var(--tracking-wide)` → **0.04em** | `var(--text-status)` (opacity **0.85**) | `F1 도움말 …` |

---

## Typography Token 요약 (Figma Make)

아래 표는 위 화면에서 반복 사용되는 **디자인 토큰 → 해석값** 요약입니다. Figma 변수/텍스트 스타일 생성 시 이 이름을 그대로 쓰면 됩니다.

| Token | Size | Weight | Line height | Letter spacing | Color token | Hex | Role |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `type/app-title` | 16 | 700 | 1.25 | -0.02em | `--text-strong` | #101828 | 앱 타이틀 |
| `type/card-title` | 15 | 600 | 1.28 | -0.01em | `--text-strong` | #101828 | 카드 헤더 |
| `type/detail-headline` | 18 | 700 | 1.35 | -0.02em | `--text-strong` | #101828 | 추천 지식 선택 제목 |
| `type/section-title` | 16 | 700 | 1.35 | -0.02em | `--text-strong` | #101828 | 1열 문서형 섹션 |
| `type/section-num` | 12 | 600 | 1.25 | 0.06em | (literal) | #64748b | 섹션 번호 01–04 |
| `type/body-md` | 13 | 500 | 1.6 | 0 | `--text-default` | #26364d | 기본 본문·말풍선 |
| `type/body-md-semibold` | 13 | 600 | 1.35 | 0 | `--text-default` | #26364d | 값·히스토리 제목 |
| `type/body-md-bold` | 13 | 700 | 1.35 | 0 | `--text-default` | #26364d | 계약 리스트 제목 |
| `type/body-sm` | 12 | 500 | 1.35 | 0 | `--text-muted` | #667085 | 라벨·보조 |
| `type/body-sm-default` | 12 | 500 | 1.35 | 0 | `--text-default` | #26364d | 가이드·칩 |
| `type/caption` | 11 | 500 | 1.35 | 0 | `--text-soft` | #98a2b3 | 날짜·시간·버전 |
| `type/caption-wide` | 11 | 600 | 1.35 | 0.04em | (literal) | #64748b | STT 화자명 |
| `type/badge` | 10 | 600 | 1.25 | 0.01em | (semantic) | — | 상태·우선순위 뱃지 |
| `type/chip` | 11 | 500 / 600 | 1 | 0 | `--text-muted` / literal | #667085 / #0f2744 | 필터 chip |
| `type/button-sm` | 12 | 600 | 1.35 | 0 | `--text-default` | #26364d | CTA·토글 |
| `type/keyword` | 13 (inherit) | 700 | 1.6 (inherit) | 0 | (literal) | #005bac | STT 키워드 |
| `type/mode-toggle` | 13 | 600 / 700 | 1 | 0.04em | (literal) | #64748b / #005bac | 상단 모드 |
| `type/elapsed` | 14 | 700 | 1 | 0 | `--text-muted` | #667085 | STT 경과 시간 |
| `type/answer` | 15 | 500 | 1.6 | 0 | `--text-default` | #26364d | 추천 답변 본문 |

### Font family (전역)

| Token | Value |
| --- | --- |
| `--font-sans` | Pretendard Variable, Pretendard, SUIT, system-ui stack |

### Weight scale

| Token | Value |
| --- | --- |
| `--font-regular` | 400 |
| `--font-medium` | 500 |
| `--font-semibold` | 600 |
| `--font-bold` | 700 |

### Size scale (`tokens.css`)

| Token | px |
| --- | --- |
| `--text-2xs` | 10 |
| `--text-xs` | 11 |
| `--text-sm` | 12 |
| `--text-md` | 13 |
| `--text-base` | 14 |
| `--text-card-title` | 15 (`calc(13px + 2px)`) |
| `--text-lg` | 16 |
| `--text-xl` | 18 |

### Text color scale

| Token | Hex |
| --- | --- |
| `--text-strong` | #101828 |
| `--text-default` | #26364d |
| `--text-muted` | #667085 |
| `--text-soft` | #98a2b3 |
| `--text-inverse` | #ffffff |
| `--text-status` | #d8e0ea |

---

## 참고

- **LNB** (`.app-lnb`): 별도 `font-size` 규칙 없음 → **body 기본(13px / 500)** 상속.
- **리터럴 px** (`10px`, `13px`, `16px` 등)는 토큰 미사용 구간이므로 Figma에서는 위 요약표의 Role 또는 동일 px로 매핑하면 됩니다.
- 소스: `src/pages/index.html` 인라인 스타일, `src/styles/tokens.css`.
