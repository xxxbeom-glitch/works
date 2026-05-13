# Typography

## 기본 폰트

- **우선:** Pretendard (`Pretendard Variable` / `Pretendard`, CDN은 `tokens.css`에서 로드)
- **fallback:** `SUIT`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `sans-serif`

CSS 변수: `--font-sans` (`src/styles/tokens.css`)

## Font weight

| Token | Value | 용도 |
| --- | --- | --- |
| `--font-regular` | `400` | 덜 강조된 본문 |
| `--font-medium` | `500` | 본문·라벨 |
| `--font-semibold` | `600` | 소제목·값·버튼 |
| `--font-bold` | `700` | 앱 타이틀 등 최상위 강조 |

호환: `--font-weight-medium` → `--font-medium`, `--font-weight-semibold` → `--font-semibold`, `--font-weight-bold` → `--font-bold`

## Font size scale

| Token | Value | 용도 |
| --- | --- | --- |
| `--text-2xs` | `10px` | 극소 캡션 |
| `--text-xs` | `11px` | 캡션·시간·메타·뱃지 |
| `--text-sm` | `12px` | 라벨·보조 |
| `--text-md` | `13px` | 본문·값 |
| `--text-base` | `14px` | 강조 본문·보조 제목 |
| `--text-card-title` | `calc(var(--text-md) + 2px)` (현재 스케일에서 15px) | 카드 헤더 타이틀(STT·고객·계약·추천 지식 등) |
| `--text-lg` | `16px` | 앱 타이틀 |
| `--text-xl` | `18px` | 히어로급(선택) |

확장(수치·KPI 등): `--text-2xl` ~ `--text-5xl` (`tokens.css` 참고)

## Line height

| Token | Value | 용도 |
| --- | --- | --- |
| `--line-tight` | `1.25` | 제목·뱃지 |
| `--line-card-title` | `1.28` | 카드 헤더 타이틀 한 줄 |
| `--line-normal` | `1.45` | UI 한 줄 설명 |
| `--line-relaxed` | `1.6` | 본문(긴 문장) |

호환: `--leading-tight` → `--line-tight`, `--leading-normal` → `--line-normal`, `--leading-relaxed` → `--line-relaxed` (`--leading-snug`은 1.35 유지). 카드 헤더 타이틀 행간은 `--line-card-title`(1.28)을 사용합니다.

## Letter spacing

| Token | 용도 |
| --- | --- |
| `--tracking-tight` | 큰 제목 |
| `--tracking-wide` | 라벨·뱃지 |
| `--tracking-wider` | 대문자 라벨 |

## 텍스트 역할 매핑

| 역할 | size | weight | color | line-height |
| --- | --- | --- | --- | --- |
| App title | `--text-lg` (16px) | `--font-bold` (700) | `--text-strong` | `--line-tight` |
| Card title | `--text-card-title` (`--text-md`+2px, 현재 15px) | `--font-semibold` (600) | `--text-strong` | `--line-card-title` (1.28) |
| Section title | `--text-md` (13px) | `--font-semibold` (600) | `--text-strong` | `--line-tight` |
| Label | `--text-sm` (12px) | `--font-medium` (500) | `--text-muted` | `--leading-snug` |
| Value | `--text-md` (13px) | `--font-semibold` (600) | `--text-default` | `--leading-snug` |
| Body | `--text-md` (13px) | `--font-medium` (500) | `--text-default` | `--line-relaxed` (1.6) |
| Caption, time, meta | `--text-xs` (11px) | `--font-medium` (500) | `--text-soft` | `--leading-snug` |
| Badge text | `--text-xs` (11px) | `--font-semibold` (600) | 시맨틱(예: `--warning`) | `--line-tight` |
| Bottom status text | `--text-sm` (12px) | `--font-semibold` (600) | `--text-status` | `--line-normal` |
