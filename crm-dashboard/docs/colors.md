# Colors

B2B 상담/보험 AI SaaS 대시보드용 컬러 토큰입니다. **배경 레이어**는 `--bg-app`(페이지) → `--bg-card`(외곽 카드) → `--bg-content`(안쪽 컨텐츠 흰색) 순으로 밝기·채도를 달리해 **보더 없이** 구조가 드러나게 합니다. 말풍선·칩 등 작은 면은 `--bg-content-soft` 또는 연한 블루 tint를 사용합니다. 카드 셸에는 테두리를 두지 않습니다(`--card-border: none`).

실제 값은 `src/styles/tokens.css`의 `:root`에 정의되어 있습니다.

## 배경 레이어

| Token | Value | 용도 |
| --- | --- | --- |
| `--bg-app` | `#E9F1F8` | 앱·워크스페이스 대시보드 캔버스(`body`, `.workspace`) |
| `--bg-panel` | `#E9F1F8` | 레거시·보조 면(앱과 동일 톤으로 둘 수 있음) |
| `--bg-card` | `#D7E3EF` | 외곽 카드 셸(`live-outer`, `dashboard-card` 등) |
| `--bg-card-hover` | `#CEDCEA` | 외곽 카드 호버 배경 |
| `--bg-content` | `#FFFFFF` | 카드 안 실제 컨텐츠(`live-inner`, STT 로그 영역, 지식 본문 등) |
| `--bg-content-soft` | `#F8FAFD` | 톱바·고객 말풍선 등 소프트 서피스 |
| `--bg-card-icon` | `#CAD8E8` | 카드 헤더 좌측 아이콘 래퍼 배경 |
| `--bg-card-soft` | `var(--bg-content-soft)` | 예전 토큰 호환 별칭 |
| `--bg-card-strong` | `#E8EEF6` | 아이콘 칩·아바타 배경 등 약한 강조 |
| `--card-border` | `none` | 카드·FAQ 칩(테두리 미사용, 호환용 토큰) |

## Surface (호버·선택)

| Token | Value | 용도 |
| --- | --- | --- |
| `--surface-hover` | `#F1F6FB` | 리스트·버튼 호버 |
| `--surface-active` | `#E8F0FF` | pressed/active |
| `--surface-selected` | `#DFEAFF` | 선택·온 상태(필 등) |

## Primary

| Token | Value | 용도 |
| --- | --- | --- |
| `--primary` | `#2563EB` | 주 액션·포커스 링·링크 |
| `--primary-soft` | `#EAF1FF` | 주색 약한 배경(에이전트 말풍선 등) |
| `--primary-muted` | `#9DB7F5` | 보조 그래픽·그라데이션 단계 |

## AI

| Token | Value | 용도 |
| --- | --- | --- |
| `--ai-purple` | `#6D5DF6` | AI 브랜드·강조 포인트 |
| `--ai-purple-soft` | `#F0EEFF` | AI 관련 배경 |
| `--ai-blue-soft` | `#EAF4FF` | AI 상태 바·웨이브 영역 등 |

## Semantic

| Token | Value | 용도 |
| --- | --- | --- |
| `--success` | `#12A150` | 성공·완료·연동 OK |
| `--success-soft` | `#E9F8EF` | 성공 톤 배경 |
| `--warning` | `#D99000` | 경고·주의 |
| `--warning-soft` | `#FFF4D8` | 경고 배경 |
| `--danger` | `#E5484D` | 오류·라이브/위험 |
| `--danger-soft` | `#FDECEC` | 위험 톤 배경 |
| `--info` | `#2F80ED` | 정보 |
| `--info-soft` | `#EAF4FF` | 정보 배경 |

## Text

| Token | Value | 용도 |
| --- | --- | --- |
| `--text-strong` | `#101828` | 제목·강조 제목 |
| `--text-default` | `#26364D` | 본문·값 기본 |
| `--text-muted` | `#667085` | 라벨·보조 설명 |
| `--text-soft` | `#98A2B3` | 캡션·타임스탬프·메타 |
| `--text-disabled` | `#C5CED8` | 비활성 |
| `--text-inverse` | `#FFFFFF` | 어두운 배경 위 텍스트 |

## Status bar

| Token | Value | 용도 |
| --- | --- | --- |
| `--bg-status` | `#0F172A` | 하단 상태바 배경 |
| `--text-status` | `#D8E0EA` | 상태바 본문 |
| `--status-accent` | `#22C55E` | 상태 점·긍정 인디케이터 |

## Divider

| Token | Value | 용도 |
| --- | --- | --- |
| `--divider-soft` | `rgba(100, 116, 139, 0.12)` | 최소 구분선(헤더 하단 등) |

## 레거시 별칭

기존 컴포넌트 호환을 위해 `--color-gray-*`, `--color-surface-*`, `--color-border*` 등은 위 토큰을 가리키도록 매핑되어 있습니다. 신규 UI는 위 시맨틱 토큰을 직접 사용하는 것을 권장합니다.
