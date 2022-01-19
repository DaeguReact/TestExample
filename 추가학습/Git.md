## **Git 학습을 위한 간단한 메뉴얼 입니다**

Git은 리눅스 개발자인 [리누스 토르발스](https://namu.wiki/w/%EB%A6%AC%EB%88%84%EC%8A%A4%20%ED%86%A0%EB%A5%B4%EB%B0%9C%EC%8A%A4)가 만들었으면 분산현 버전 관리 시스템(VCS)이다.

### 간단한 메뉴얼
> Git을 사용하기 위해서는 머저 Git을 설치해야 한다. Git은 각 운영체제에 맞는 응용프로그램을 제공하며, CLI를 통해 설치도 가능하다. 대부분 Windows 환경에서 사용하기에 Windows 기준으로 설명한다.

1. [Git 설치](https://git-scm.com/) 깃을 설치하면 대부분의 옵션은 있는 default값으로 설정하면 된다.

2. 윈도우 버전 Git을 설치하면 git-bash가 함께 설치되는데, 이는 Git 환경에 최적화된 Interface가 제공된다.

3. Git은 다음과 같은 순서대로 이루어진다.
![Git process](https://media.vlpt.us/images/haneul7960/post/a990fb96-f709-406d-8b01-5dc7ce4a7466/image.png)

> 만약 처음 프로젝트를 생성하는 경우 `git init`을 통해 해당 경로를 Git이 추적할 수 있도록 알려야 한다.

간단하게 부연설명 하자면 프로젝트 디렉토리에서 파일 생성 수정 삭제가 이루어지면 변경사항에 대해 Git에게 알려주는 `git add` 그리고 그 변경사항을 확정하는 `git commit` 이후 원격 레포지토리에 업로드는 `git push`가 있다.

> `git add .` 현재 경로에 있는 모든 변경사항을 Git에게 알려줌<br>
> `git commit -m <message>` 변경 사항에 대해서 확정하고 메시지를 같이 남김<br>
> `git push <branch> <remote branch>`로컬의 브랜치 상태를 remote branch로 업로드

그리고 같은 원격 레포지토리를 가지고 있다면 최신의 정보를 가지고 오는 `git fetch` 그리고 fetch된 정보를 병합까지 해주는 `git pull`가 있다.

> `git fetch`를 사용한 경우 `git merge`를 이용해 병합을 따로 해주어야 한다.

4. Git branch 관련

Git은 형상관리를 위해 다양한 기능을 제공하고 있다. 그 중 branch에 대해서 알아보자.
branch는 가지 라는 뜻으로 하나의 분기점을 말한다.

![Git branch](https://media.vlpt.us/images/tngusl5/post/02366c9d-b215-404c-89e2-2c761d787945/img.png)

그림에서 보는 것과 같이 중심이 되는 Master(이름은 사용자가 정하기 나름)에서 기능을 변경하기 위해 새로운 branch를 만들어 Master 브랜치에 영향을 주지 않도록 하는 기능을하는 것이 branch이다.

branch를 사용하기 위해서는 
`git branch <brnach name>`을 이용해 branch를 만들 수 있고, 이 brnach로 이동하기 위해서는 `git checkout <branch name>` branch를 만들 때 사용했던 branch 이름으로 checkout하면 branch로 이동할 수 있다.

> 브랜치를 생성하고 이동하는 일련의 과정을 `git branch -b <branch name>`과 같이 -b 옵션을 주어 하나의 명령어로도 수행할 수 있다.

[Git 브랜치를 이해하기 위해 도움되는 유용한 사이트](https://learngitbranching.js.org/?locale=ko)

### 참고자료
- [간단히 보는 git 사용법](http://rogerdudler.github.io/git-guide/index.ko.html)
- [생활코딩 1](https://www.youtube.com/playlist?list=PLuHgQVnccGMCNJESahrVV-uYGMNYK_vMf)
- [생활코딩 2](https://www.youtube.com/playlist?list=PLuHgQVnccGMCNJESahrVV-uYGMNYK_vMf)
- [누구나 쉽게 이해할 수 있는 Git 입문](https://backlog.com/git-tutorial/kr/intro/intro1_1.html)
- [progit](http://dogfeet.github.io/articles/2012/progit.html)

> 아래로 갈수록 양이 방대합니다!