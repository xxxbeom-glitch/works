# Typography Spec (Figma Make)

> **기준 파일:** `src/styles/tokens.css`, `src/pages/index.html` (인라인 `<style>`)  
> **최종 반영:** 2026-05-15  
> 토큰 해석값은 `tokens.css`의 `:root` 정의를 기준으로 합니다. `calc()`·fallback이 있는 항목은 CSS에 명시된 대로 표기합니다.

---

## 1. Global

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 기본 font-family | `body` (`--font-sans`) | — | — | — | — | — | 전역 |
| body 기본 | `body` | `var(--text-md)` → **13px** | `var(--font-medium)` → **500** | `var(--line-relaxed)` → **1.6** | normal | `var(--text-default)` → **#26364d** | 앱 기본 본문 |
| 최소 너비 안내 | `.viewport-min-notice` | **12px** | `var(--font-semibold)` → **600** | **1.35** | (미지정) | **#7a5c00** | `<768px` 가로 스크롤 안내 |

**font-family 스택 (`--font-sans`):**  
`'Pretendard Variable', Pretendard, SUIT, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

---

## 2. Header (Topbar)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 모드 토글 (비활성) | `.topbar__modes .mode-segmented__btn` | **13px** | **600** | **1** | `var(--tracking-wide, 0.02em)` → **0.04em** | **#64748b** | 상담모드 / 학습·조회모드 |
| 모드 토글 (활성) | `.mode-segmented__btn.is-active` | (상동) | **700** | (상동) | (상동) | **#005bac** | 선택된 모드 |
| 사용자명 | `.topbar__user-name` | **13px** | `var(--font-semibold)` → **600** | **1.2** | (미지정) | `var(--text-default)` → **#26364d** | 우측 `김상담` |

**참고:** 우측 placeholder 아이콘(`.ui-icon-placeholder`)은 텍스트 없음. 구 서비스명(`.topbar__title`), Tele-Pro(`.topbar__link-tele`), 설정 `icon-btn`은 제거됨.

---

## 3. Card Header (공통)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 카드 타이틀 | `.card-header-title` | `var(--text-card-title)` → **15px** | `var(--font-semibold)` → **600** | `var(--line-card-title)` → **1.28** | **-0.01em** | `var(--text-strong)` → **#101828** | STT·고객정보·상담 어시스턴트·상품정보 카드 헤더 |
| 1열 패널 접기 | `.info-panel-card__toggle` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | **#94a3b8** (hover **#64748b**) | 1열 `고객정보` 헤더 `닫기`/`열기` |
| 상품정보 접기 | `.product-info__toggle` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | **-0.01em** | `var(--text-muted)` → **#667085** | 2열 하단 상품정보 |

---

## 4. Left Info Panel (1열)

### 4.1 섹션 미니 헤더

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 섹션 번호 | `.info-sect-mini-head__num` | **11px** | `var(--font-semibold)` → **600** | **1.25** | **0.06em** | **#8b9cb3** | `01` / `02` … |
| 섹션 타이틀 | `.info-sect-mini-head__title` | **15px** | `var(--font-bold)` → **700** | **1.35** | **-0.02em** | `var(--text-strong)` → **#101828** | 기본정보·최근 상담·계약리스트·상담안내 가이드 |
| 섹션 메타 | `.info-sect-mini-head__meta` | **12px** | `var(--font-medium)` → **500** | **1.25** | (미지정) | **#94a3b8** | 계약리스트 `3건` |

**참고:** 섹션 accordion chevron·헤더 더보기(`info-doc-section__more`)는 제거·비활성. 구 `.info-doc-section__num` / `__title` 클래스는 미사용.

### 4.2 기본정보 KV

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| label (dt) | `.left-accordion__pair dt` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-muted)` → **#667085** | 고객명·계약번호 등 |
| value (dd) | `.left-accordion__pair dd` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | 필드 값 |
| 발신번호 강조 | `.left-accordion__caller-value` | (dd 상속 **13px**) | `var(--font-semibold)` → **600** | (상동) | (미지정) | **#dc2626** | 발신번호 값 |

### 4.3 계약 리스트 (정보 표시용)

공통 row 토큰: `--info-list-row-min-height: 56px`, `--info-list-row-pad: 10px 12px`

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 계약 제목 | `.contract-list__title` | `var(--text-md)` → **13px** | `var(--font-bold)` → **700** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | 계약명 |
| 계약 메타 | `.contract-list__meta` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-muted)` → **#667085** | `계약 2018.03 / 월 120,000원` |

**참고:** 체크(✓)·row chevron·클릭 이동 제거. 1줄 row도 `min-height`로 2줄 row와 동일 높이.

### 4.4 상담안내 가이드

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 가이드 제목 | `.info-doc-guide__title` | `var(--text-sm)` → **12px** | `var(--font-bold)` → **700** | **1.4** | **-0.01em** | `var(--text-strong)` → **#101828** | `[자동안내] 보험금 청구` |
| 진행 상태 | `.info-doc-guide__status` | **12px** | `var(--font-medium)` → **500** | **1.35** | (미지정) | **#64748b** | `필수 안내 5건 중 3건 완료` |
| 체크리스트 항목 | `.info-doc-guide__check-item` | **12px** | `var(--font-medium)` → **500** | **1.35** | (미지정) | **#334155** | 본인확인·서류 안내 등 |

### 4.5 최근 상담 (1열 내)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 날짜 | `.history-item__date` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-soft)` → **#98a2b3** | row 상단 |
| 상담 제목 | `.history-item__title` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | (미지정) | `var(--text-default)` → **#26364d** | row 제목 |

**참고:** row·헤더 더보기 클릭·chevron·badge 제거. 정보 표시용 정적 리스트. row `min-height`는 §4.3과 동일 토큰.

### 4.6 서브패널 (레거시·hidden)

진입 UI 제거 후 DOM만 유지. Figma 참고용.

| 항목 | selector / class | font-size | font-weight | line-height | color |
| --- | --- | --- | --- | --- | --- |
| 뒤로 | `.info-subpanel__back` | **12px** | **500** | (상속) | **#64748b** |
| 서브패널 타이틀 | `.info-subpanel__title` | **13px** | **600** | **1.35** | `var(--text-strong)` |
| 상세 날짜 | `.history-detail__date` | **11px** | **500** | (상속) | `var(--text-muted)` |
| 상세 제목 | `.history-detail__heading` | **13px** | **600** | **1.35** | `var(--text-strong)` |
| 상세 본문 | `.history-detail__summary` | **12px** | **500** | **1.55** | `var(--text-default)` |

---

## 5. STT Log (2열)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 화자명 | `.stt-chat__sender` | `var(--text-xs)` → **11px** | **600** | `var(--leading-snug)` → **1.35** | `var(--tracking-wide)` → **0.04em** | **#64748b** | `홍길동 고객님` |
| 말풍선 본문 | `.stt-chat__bubble` | `var(--text-md)` → **13px** | `var(--font-medium)` → **500** | `var(--line-relaxed)` → **1.6** | (미지정) | **#26364d** | 고객·상담사 대화 |
| 시간 | `.stt-chat__time` | **11px** | **500** | `var(--leading-snug)` → **1.35** | (미지정) | **#a0aec0** | `14:23:08` |
| 아바타 이니셜 | `.stt-chat__avatar--initial` | `var(--text-md)` → **13px** | `var(--font-semibold)` → **600** | **1** | **-0.02em** | `var(--text-inverse)` → **#ffffff** | 고객 이니셜 |
| FAQ chip | `.stt-faq-link.knowledge-chip` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | (미지정) | **#26364d** | 말풍선 하단 추천 chip (참고용, 클릭 없음) |
| 통화 경과 | `.floating-control-group__elapsed` | **14px** | **700** | **1** | (미지정) | `var(--text-muted)` → **#667085** | `00:00` |
| 분석 상태 | `.floating-control-group__caption` | **12px** | **500** | **1.35** | (미지정) | `var(--text-soft)` → **#98a2b3** | 실시간 기록 안내 |

---

## 6. 상품정보 (2열 하단)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 계약명 | `.product-info__contract` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--leading-snug)` → **1.35** | **-0.01em** | `var(--text-strong)` → **#101828** | 선택 계약 |
| 계약번호 | `.product-info__contract-no` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | (상속) | (미지정) | `var(--text-muted)` → **#667085** | 증권번호 |
| 지표 라벨 | `.product-info__metric` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | **1.3** | (미지정) | `var(--text-muted)` → **#667085** | 납입·만기 등 |
| 지표 값 | `.product-info__metric strong` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | (상동) | (미지정) | `var(--text-default)` → **#26364d** | 수치 강조 |
| 기능 pill | `.product-info__cap-pill` | `var(--text-xs)` → **11px** | `var(--font-medium)` → **500** | **1.25** | (미지정) | (상태별) | 청구·변경 등 |
| pill 상태 | `.product-info__cap-status` | (상동) | `var(--font-semibold)` → **600** | (상동) | (미지정) | (상태별) | `가능` / `불가` |
| 하단 안내 | `.product-info__notice` | **11px** | `var(--font-medium)` → **500** | **1.45** | (미지정) | `var(--text-muted)` → **#667085** | 접수 중 안내 |

---

## 7. 상담 어시스턴트 (3열)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 카드 타이틀 | `.card-header-title` | **15px** | **600** | **1.28** | **-0.01em** | **#101828** | `상담 어시스턴트` (§3) |
| 빈 목록 | `.know-assistant__empty` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | **1.55** | (미지정) | `var(--text-muted)` → **#667085** | 요청 없음 |
| 아코디언 번호 | `.know-acc-card__num` | **13px** | `var(--font-bold)` → **700** | **1.3** | (미지정) | **#64748b** | 카드 좌측 번호 |
| 아코디언 제목 (트리거) | `.know-acc-card__title` | **15px** | **700** | **1.35** | (미지정) | `var(--text-strong)` → **#101828** | 요청 제목 (접힘 행) |
| 질문 (펼침) | `.know-acc-flow__question` | **16px** | **700** | **1.4** | **-0.02em** | `var(--text-strong)` → **#101828** | STT 질문 인용 |
| 답변 본문 | `.know-acc-flow__answer` | **15px** | `var(--font-normal)` → **400** | **1.6** | (미지정) | **#26364d** | 추천 답변 |
| 출처 | `.know-acc-source` | **11px** | `var(--font-medium)` → **500** | **1.45** | (미지정) | **#94a3b8** | SOK·FAQ 근거 |
| chip 그룹 라벨 | `.know-acc-chip-group__label` | **12px** | `var(--font-medium)` → **500** | **1.3** | (미지정) | **#94a3b8** | `질문 추천` / `관련 화면` |
| FAQ·화면 chip | `.know-card__btn.knowledge-chip` | **12px** | `var(--font-medium)` → **500** | **1.3** | (미지정) | **#26364d** | 칩 버튼 |
| 화면 chip | `.know-chip--screen` | (상동) | (상동) | (상동) | (미지정) | **#475569** | 관련 화면 |
| 상태 badge | `.know-acc-badge` | **10px** | `var(--font-semibold)` → **600** | **1.35** | **0.01em** | (modifier별) | 진행·대기 등 |
| AI 질의 CTA | `.live-outer--know .ai-agent-fab` | **13px** | `var(--font-bold)` → **700** | **1.2** | (미지정) | **#1d4ed8** | 카드 하단 `AI 질의` |
| 태블릿 FAB | `.know-drawer-fab` | **12px** | `var(--font-semibold)` → **600** | **1.2** | (미지정) | **#1d4ed8** | `상담 어시스턴트` (768–1023px) |

**know-acc-badge 텍스트 색:**

| modifier | color |
| --- | --- |
| `--in_progress` | **#1d4ed8** |
| `--pending` | **#64748b** |
| `--done` | **#15803d** |
| `--prio-high` | **#c2410c** |
| `--prio-medium` | **#4338ca** |
| `--prio-low` | **#64748b** |

**참고:** 헤더 정렬 드롭다운(`assistant-sort`, `know-sort-select`) 제거됨.

---

## 8. AI 질의 패널 (슬라이드오버)

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 패널 타이틀 | `.ai-agent-panel__title` | **15px** | `var(--font-bold)` → **700** | **1.35** | (미지정) | `var(--text-strong)` → **#101828** | `질의 및 에이전트` |
| 상태 badge | `.ai-agent-badge` | **11px** | `var(--font-semibold)` → **600** | **1.2** | (미지정) | **#1d4ed8** / **#15803d** | Know·Live |
| 닫기 | `.ai-agent-panel__close` | **20px** | (상속) | **1** | (미지정) | **#64748b** | `×` |
| 말풍선 | `.ai-agent-bubble` | **13px** | `var(--font-medium)` → **500** | **1.55** | (미지정) | user **#1e3a5f** / ai **#334155** | 채팅 |
| 메타 라인 | `.ai-agent-meta__line` | **11px** | `var(--font-medium)` → **500** | **1.45** | (미지정) | **#94a3b8** | 모델·토큰 등 |
| 추천 라벨 | `.ai-agent-suggest__label` | **12px** | `var(--font-medium)` → **500** | **1.3** | (미지정) | **#94a3b8** | 추천 질문 |
| 추천 pill | `.ai-agent-suggest__pill` | **12px** | `var(--font-medium)` → **500** | **1.3** | (미지정) | **#26364d** | 질문 chip |
| 입력 | `.ai-agent-composer__input` | **14px** | `var(--font-medium)` → **500** | **1.5** | (미지정) | `var(--text-default)` → **#26364d** | placeholder **#94a3b8** |
| 도구 chip | `.ai-agent-tool` | **11px** | `var(--font-medium)` → **500** | **1.2** | (미지정) | **#64748b** / on **#1d4ed8** | 웹검색·문서 |

---

## 9. Bottom Status Bar

| 항목 | selector / class | font-size | font-weight | line-height | letter-spacing | color | 사용 위치 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 상태바 본문 | `.statusbar` | `var(--text-sm)` → **12px** | `var(--font-semibold)` → **600** | `var(--line-normal)` → **1.45** | (미지정) | `var(--text-status)` → **#d8e0ea** | 하단 상태바 |
| 강조 | `.statusbar__item strong` | (상속 **12px**) | **600** | (상속) | (미지정) | `var(--text-inverse)` → **#ffffff** | `통화 중`, `GPT-4o` |
| 단축키 | `.statusbar__keys` | `var(--text-sm)` → **12px** | `var(--font-medium)` → **500** | `var(--leading-snug)` → **1.35** | `var(--tracking-wide)` → **0.04em** | `var(--text-status)` (opacity **0.85**) | `F1 도움말 …` |

---

## Typography Token 요약 (Figma Make)

| Token | Size | Weight | Line height | Letter spacing | Color token | Hex | Role |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `type/mode-toggle` | 13 | 600 / 700 | 1 | 0.04em | (literal) | #64748b / #005bac | 상단 모드 |
| `type/topbar-user` | 13 | 600 | 1.2 | 0 | `--text-default` | #26364d | 상담사명 |
| `type/card-title` | 15 | 600 | 1.28 | -0.01em | `--text-strong` | #101828 | 카드 헤더 |
| `type/section-title` | 15 | 700 | 1.35 | -0.02em | `--text-strong` | #101828 | 1열 섹션 타이틀 |
| `type/section-num` | 11 | 600 | 1.25 | 0.06em | (literal) | #8b9cb3 | 섹션 번호 |
| `type/know-question` | 16 | 700 | 1.4 | -0.02em | `--text-strong` | #101828 | 어시스턴트 질문 |
| `type/know-answer` | 15 | 400 | 1.6 | 0 | (literal) | #26364d | 어시스턴트 답변 |
| `type/body-md` | 13 | 500 | 1.6 | 0 | `--text-default` | #26364d | 기본·말풍선 |
| `type/body-md-semibold` | 13 | 600 | 1.35 | 0 | `--text-default` | #26364d | 값·히스토리 제목 |
| `type/body-md-bold` | 13 | 700 | 1.35 | 0 | `--text-default` | #26364d | 계약 제목 |
| `type/body-sm` | 12 | 500 | 1.35 | 0 | `--text-muted` | #667085 | 라벨·보조 |
| `type/caption` | 11 | 500 | 1.35 | 0 | `--text-soft` | #98a2b3 | 날짜·시간 |
| `type/caption-wide` | 11 | 600 | 1.35 | 0.04em | (literal) | #64748b | STT 화자명 |
| `type/badge` | 10 | 600 | 1.35 | 0.01em | (semantic) | — | know 상태 |
| `type/chip` | 12 | 500 | 1.3 | 0 | (literal) | #26364d | FAQ·칩 |
| `type/cta-fab` | 13 | 700 | 1.2 | 0 | (literal) | #1d4ed8 | AI 질의 |
| `type/composer` | 14 | 500 | 1.5 | 0 | `--text-default` | #26364d | 패널 입력 |
| `type/elapsed` | 14 | 700 | 1 | 0 | `--text-muted` | #667085 | STT 경과 |

### Layout tokens (리스트 row)

| Token | Value | 사용 |
| --- | --- | --- |
| `--info-list-row-min-height` | **56px** | 최근 상담·계약 row |
| `--info-list-row-pad` | **10px 12px** | row 패딩 |
| `--info-list-row-content-min-height` | **36px** | 2줄 본문 슬롯 |

### Font family

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
| `--text-section-title` | 14 (`var(--text-base)`) |
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

### Primary (참고)

| Token | Hex | 비고 |
| --- | --- | --- |
| `--primary` (`tokens.css`) | **#2563eb** | 디자인 토큰 기본값 |
| fallback 리터럴 | **#005bac** | 모드 토글·focus 등 일부 UI |

---

## 참고

- **LNB** 메뉴: 별도 `font-size` 없음 → **body 13px / 500** 상속. 로고는 `.ui-icon-placeholder` (텍스트 없음).
- **제거·비활성 UI** (문서에서 제외): `topbar__title`, `history-chip`, `history-sort`, `assistant-sort`, 계약 체크/chevron, 최근 상담 row chevron·더보기, 구 `know-queue` / `know-detail` 단독 레이아웃.
- **리터럴 px**는 토큰 미사용 구간; Figma에서는 위 Role 또는 동일 px로 매핑.
- 소스: `src/pages/index.html`, `src/styles/tokens.css`.
