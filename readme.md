#youtube 클론코딩

https://stranger7174.github.io/youtube/

## 시도해본것
- 화면 크기에 따라 메뉴 토글
  이슈: none일때만 true값 나와야 되는데 전부 나옴
  해결: none을 텍스트로 인식해 true값 인식 비교연산자(===) 이용해 해결
- 화면 크기에 따라 ui 변경
  이슈: 인터넷에서 가져온 변수가 높이+넓이로 들어가 있어서 설정한 넓이보다 줄어들어도 적용안됨
  해결: 높이값을 뺀 변수 적용
- 다크모드
  시도중...
  모르겠는것:
     os테마 인식방법
     이건 도데체 무슨 뜻인가.... => const displaymode = window.localStorage.getItem('color-mode');