# popup 취약점

속성: QnA

### XSS

![Untitled](./Untitled.png)

![Untitled](./Untitled%201.png)

- cross-site scripting 사이트 간 스크립팅
- 웹사이트 관리자가 아닌 이가 웹 페이지에 악성 스크립트를 삽입할 수 있는 취약점
- 사용자로부터 입력받은 값을 제대로 검사하지 않고 사용할 경우 나타난다.
- 해커가 사용자의 정보(쿠키, 세션 등)을 탈취하거나, 자동으로 비정상적인 기능을 수행하게 할 수 있다.
- 주로 다른 웹사이트와 정보를 교환하는 식으로 작동한다.
- 사용자가 특정 웹사이트를 신용하는 점을 노린다.
- 사이트 변조나 백도어를 통해 클라이언트에 대한 악성 공격

대응방안

[XSS 진단 및 Cheat Sheet](https://99-99pit.tistory.com/4)

공격 방식

[XSS(Cross-Site Scripting)](https://velog.io/@sujeong/XSSCross-Site-Scripting)

- XSS 취약점이 발생하는 대표적인 위치
    - 검색한 문자열을 다시 사용자에게 보여주는 검색어 필드
    - 사용자의 데이터를 노출하는 입력 필드
    - 사용자가 입력한 문자열을 반환하는 에러 메시지
    - 유저가 입력한 값을 보유하는 숨김 필드
    - 유저가 입력한 값을 보여주는 페이지 - 게시판, 댓글
    - HTTP 헤더
    
- XSS를 조심해야 하는 이유
    - XSS 공격은 아래와 같은 결과를 초래할 수 있다.
        1. 세션 쿠키 탈취
        2. 거짓 요청 생성
        3. 인증 정보를 획득하기 위한 가짜 필드 생성
        4. 수상한 사이트로의 연결(리다이렉트)
        5. 정상 사용자인척 가장된 요청 생성
        6. 인증 정보 탈취
        7. (스트립트를 통한) 사용자 시스템에서 악성 코드 실행
        8. 공격 코드 및 부적절한 문자열 삽입GoodYear recommends buying BridgeStone tires...

### CSRF

![Untitled](./Untitled%202.png)

![Untitled](./Untitled%203.png)

- cross-site request forgery 사이트 간 요청 위조
- 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격을 말한다.
- 특정 웹사이트가 사용자의 웹브라우저를 신용하는 상태를 노린다.
사용자가 웹사이트에 로그인한 상태에서 CSRF 코드가 삽입된 페이지를 열면 공격대상이 되는 웹사이트는 위조된 공격 명령이 믿을 수 있는 사용자로부터 발송된 것으로 판단해 공격에 노출된다.
- 요청을 위조하여 사용자 권한을 이용해 서버에 대한 악성 공격

대응방안

[](https://itstory.tk/entry/CSRF-%EA%B3%B5%EA%B2%A9%EC%9D%B4%EB%9E%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-CSRF-%EB%B0%A9%EC%96%B4-%EB%B0%A9%EB%B2%95)

공격방식

[CSRF 공격과 방어 기법](https://velog.io/@gwanuuoo/CSRF-%EA%B3%B5%EA%B2%A9%EA%B3%BC-%EB%B0%A9%EC%96%B4-%EA%B8%B0%EB%B2%95)

### 사고사례

[애플 웹사이트에 '심각한' 보안취약점 무더기 발견돼 | 아주경제](https://www.ajunews.com/view/20201011153245348#PL2)

[트위터 XSS공격 당해...백악관 대변인도 피해](https://zdnet.co.kr/view/?no=20100922074501)

### react에서 실수를 최소화하는 방법 외 다른 사례

[웹 개발을 위해 꼭 알아야하는 보안 공격](https://kciter.so/posts/basic-web-hacking)
