# 밥알이(Bap-ari) 이모지 라이브러리 관리 규칙

do-chwi 블로그 글 꾸미기 + 인스타툰 재활용을 위한 밥알이 이모지 시스템.
새 이모지를 만들 때마다 이 문서 하단 카탈로그에 반드시 기록한다.

---

## 1. 캐릭터 기본 설정 (절대 변하면 안 되는 것)

**이름**: 밥알이 (Bap-ari) — 의인화된 쌀 한 톨
**정체성**: do-chwi의 마스코트. 한국 전통주를 빚는 쌀알 캐릭터.

**고정 외형**:
- 쌀알 모양의 둥글고 통통한 몸 (크림빛 흰색, 순백 아님)
- 작고 짧은 팔다리
- 단순하고 표정 풍부한 얼굴 (점 눈, 작은 입) — 상황에 따라 과장
- **테라코타색 앞치마** 착용, 앞치마에 稻(벼) 구름 로고
- 자주 드는 소품: 나무 주걱, 막걸리 사발, 항아리(옹기)

**팔레트 (고정)**:
- Rice Cream (몸): 크림빛 흰색
- Terracotta (앞치마): 따뜻한 테라코타
- Earthy Brown (디테일·소품): 어스 브라운
- Warm Grey (음영): 웜 그레이

**스타일**: Soft 2D illustration, 부드럽고 둥근 선, 플랫 컬러 + 최소 음영. 브레드이발소식 과장된 표정·리액션(단, 고유명사 언급 금지 — "exaggerated comedic expression, squash-and-stretch" 로 프롬프트).

**톤**: 귀엽지만 유치하지 않게(성인 대상). 실패해도 웃는 캐릭터 — 완벽한 장인이 아니라 같이 실수하며 즐기는 친구.

---

## 2. 새 이모지 생성 규칙 (일관성 유지 핵심)

새 표정/동작을 만들 때 **반드시**:

1. **참조 이미지 필수**: 밥알이 캐릭터 디자인 시트를 참조로 넣고 생성 (안 그러면 얼굴 흔들림)
2. **프롬프트 고정 문구** 앞에 붙이기:
   ```
   The Bap-ari mascot: a single grain of white rice character, cream-colored plump rice-grain body, small stubby arms and legs, wearing a terracotta apron with a small cloud-shaped 稻 logo, soft rounded 2D illustration style, warm palette (rice cream, terracotta, earthy brown). Consistent with the reference character sheet.
   ```
   → 그 뒤에 [상황/표정/동작] 묘사 추가
3. **배경 투명 or 흰색**: 이모티콘용은 배경 제거(remove.bg) 전제 → 프롬프트에 "white background, single character, no scene"
4. **정사각 단독 컷**: 이모티콘은 밥알이 하나만, 작게 봐도 표정이 읽히게

## 3. 파일 명명 규칙

`bapari_[감정영문]_[번호].png`
예: `bapari_shocked_01.png`, `bapari_happy_01.png`

투명 배경 버전은 `_t` 접미사: `bapari_shocked_01_t.png`

## 4. 사용법 (마크다운 삽입)

블로그 글에 이모티콘처럼:
```markdown
텍스트 텍스트 ![밥알이](/emoji/bapari_shocked_01_t.png) 텍스트
```
인라인 크기는 CSS로 조절 (예: height 1.5em~2em).

---

## 5. 이모지 카탈로그 (생성할 때마다 추가 기록)

### 기본 세트 (캐릭터 시트 원본 — 잘라서 사용 가능)
이미 존재하는 표정들. 새로 생성 말고 시트에서 잘라 쓰기.

| 이름 | 표정/동작 | 언제 쓰나 |
|------|----------|----------|
| Cheerful (기본) | 주걱 들고 활짝 웃음, 눈 반짝 | 대표 이미지, 프로필, 긍정적 문맥 |
| Happy Wave | 두 팔 들고 윙크하며 신남 | 인사, 환영, "안녕!" |
| Running | 땀 흘리며 당황해 뛰는 표정 | 실패·당황·"큰일났다", 발효 사고 |
| Yum/Enjoying | 사발 든 하트눈, 황홀 | 맛있음, 완성의 기쁨, 첫 잔 |
| Cheeky Wink | 주걱 들고 능청 윙크 | 팁·비밀·"이건 아는 사람만", 장난 |
| Chef Bap-ari | 요리사 모자, 항아리 젓는 열정 폭발 | 본격 양조 과정, 열정, "만들어보자" |
| Cozy | 항아리 안고 하트눈으로 편안 | 마무리, 애정, 기다림·발효 대기 |

### 추가 생성분 (새로 만들 때마다 아래에 기록)
<!-- 형식:
| 파일명 | 표정/동작 | 프롬프트 요약 | 언제 쓰나 | 생성일 |
-->

(아직 없음 — 새 이모지 생성 시 여기에 추가)

---

## 6. 업데이트 로그
- 2026-07-21: 문서 생성. 캐릭터 기본 설정 + 기본 세트 7종 등록.
