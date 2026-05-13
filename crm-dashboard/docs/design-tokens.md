# Design Tokens

CRM Dashboard의 **스타일 토큰** 요약입니다. 레이아웃·기능은 바꾸지 않고, 색·타이포·구분 방식만 토큰으로 통일합니다.

- **단일 소스:** `src/styles/tokens.css`의 `:root`
- **상세:** `colors.md`, `typography.md`, 간격은 `spacing.md` 및 `tokens.css`의 `--space-*` 등

## 원칙

1. **배경 레이어:** `--bg-app` / `--bg-panel` (`#E9F1F8`) → **외곽 카드** `--bg-card` (`#D7E3EF`, 호버 `--bg-card-hover`) → **컨텐츠** `--bg-content` (`#FFFFFF`). 작은 UI는 `--bg-content-soft`. **테두리·그림자 없음** (`--card-border: none`).
2. **기타 구분선:** `--divider-soft`(헤더 하단 등).
3. **텍스트는 역할 토큰:** `--text-strong` ~ `--text-soft`와 타이포 스케일을 조합합니다 (`typography.md` 매핑 표).

## 색상·타이포 요약

| 구분 | 핵심 토큰 |
| --- | --- |
| 배경·카드 | `--bg-app`, `--bg-panel`, `--bg-card`, `--bg-card-hover`, `--bg-content`, `--bg-content-soft`, `--bg-card-icon`, `--bg-card-strong`, `--card-border` |
| 인터랙션 | `--surface-hover`, `--surface-active`, `--surface-selected` |
| 브랜드 | `--primary`, `--primary-soft`, `--primary-muted` |
| AI | `--ai-purple`, `--ai-purple-soft`, `--ai-blue-soft` |
| 시맨틱 | `--success` / `-soft`, `--warning` / `-soft`, `--danger` / `-soft`, `--info` / `-soft` |
| 텍스트 | `--text-strong`, `--text-default`, `--text-muted`, `--text-soft`, `--text-disabled`, `--text-inverse` |
| 상태바 | `--bg-status`, `--text-status`, `--status-accent` |
| 구분선 | `--divider-soft` |
| 폰트 스택 | `--font-sans` (Pretendard 우선) |
| 크기 | `--text-2xs` ~ `--text-xl`, **`--text-card-title`**, 웨이트 `--font-regular` ~ `--font-bold` |
| 행간 | `--line-tight`, **`--line-card-title`**, `--line-normal`, `--line-relaxed` |

## Border radius · Shadow

| Token | Value | 용도 |
| --- | --- | --- |
| `--radius-sm` | 4px | 태그·뱃지 |
| `--radius-md` | 10px | 버튼·인풋 |
| `--radius-lg` | 14px | 카드 |
| `--radius-xl` | 16px | 패널 |
| `--radius-full` | 9999px | pill·도트 |

| Token | 용도 |
| --- | --- |
| `--shadow-xs` ~ `--shadow-xl` | 카드·모달·플로팅(필요 시) |

## 적용용 `:root` 스니펫

아래는 **색·타이포·행간·폰트 스택**만 발췌한 예시입니다. 간격·레이아웃 상수·그림자 등 전체는 `tokens.css`를 그대로 사용하세요.

```css
:root {
  --font-sans: 'Pretendard Variable', Pretendard, SUIT, -apple-system,
    BlinkMacSystemFont, 'Segoe UI', sans-serif;

  --bg-app: #e9f1f8;
  --bg-panel: #e9f1f8;
  --bg-card: #d7e3ef;
  --bg-card-hover: #cedcea;
  --bg-content: #ffffff;
  --bg-content-soft: #f8fafd;
  --bg-card-icon: #cad8e8;
  --bg-card-soft: var(--bg-content-soft);
  --bg-card-strong: #e8eef6;
  --card-border: none;

  --surface-hover: #f1f6fb;
  --surface-active: #e8f0ff;
  --surface-selected: #dfeaff;

  --primary: #2563eb;
  --primary-soft: #eaf1ff;
  --primary-muted: #9db7f5;

  --ai-purple: #6d5df6;
  --ai-purple-soft: #f0eeff;
  --ai-blue-soft: #eaf4ff;

  --success: #12a150;
  --success-soft: #e9f8ef;
  --warning: #d99000;
  --warning-soft: #fff4d8;
  --danger: #e5484d;
  --danger-soft: #fdecec;
  --info: #2f80ed;
  --info-soft: #eaf4ff;

  --text-strong: #101828;
  --text-default: #26364d;
  --text-muted: #667085;
  --text-soft: #98a2b3;
  --text-disabled: #c5ced8;
  --text-inverse: #ffffff;

  --bg-status: #0f172a;
  --text-status: #d8e0ea;
  --status-accent: #22c55e;

  --divider-soft: rgba(100, 116, 139, 0.12);

  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  --text-2xs: 10px;
  --text-xs: 11px;
  --text-sm: 12px;
  --text-md: 13px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 18px;
  --text-card-title: calc(var(--text-md) + 2px);

  --line-tight: 1.25;
  --line-card-title: 1.28;
  --line-normal: 1.45;
  --line-relaxed: 1.6;
}
```

## 토큰 구성 (파일 참조)

| 카테고리 | 파일 |
| --- | --- |
| Color | `colors.md` |
| Typography | `typography.md` |
| Spacing | `spacing.md` |
