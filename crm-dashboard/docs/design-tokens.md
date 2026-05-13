# Design Tokens

CRM Dashboard 디자인 토큰 문서입니다.
세부 값은 `src/styles/tokens.css` 에서 CSS 변수로 선언됩니다.

## 토큰 구성

| 카테고리 | 파일 참조 |
|---|---|
| Color | `colors.md` |
| Typography | `typography.md` |
| Spacing | `spacing.md` |
| Border Radius | 이 문서 하단 |
| Shadow | 이 문서 하단 |

## Border Radius

| Token | Value | 용도 |
|---|---|---|
| `--radius-sm` | 4px | 태그, 뱃지 |
| `--radius-md` | 8px | 버튼, 인풋 |
| `--radius-lg` | 12px | 카드 |
| `--radius-xl` | 16px | 모달, 패널 |
| `--radius-full` | 9999px | 아바타, 토글 |

## Shadow

| Token | Value | 용도 |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | 인풋 포커스 |
| `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.08)` | 버튼 |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | 카드 |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.10)` | 드롭다운, 팝오버 |
| `--shadow-xl` | `0 16px 40px rgba(0,0,0,0.12)` | 모달 |
