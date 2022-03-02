# 자바스크립트를 공부해봅시다

처음 Javascript를 접하면 이 언어가 Java에서 파생되었다고 생각할 수 있습니다. 하지만 Javascript는 만들 당시 인기있었던 언어인 Java의 인기에 편승하기 위해 비슷한 이름을 사용한 스크립트입니다. 하지만 최근엔 Node.js의 등장으로 인해 프로그래밍 언어로서도 동작하고 있습니다.

- [자바스크립트를 공부해봅시다](#자바스크립트를-공부해봅시다)
  - [ES5 ES6?](#es5-es6)
  - [실습환경](#실습환경)
    - [VisualStudioCode](#visualstudiocode)
    - [WebStorm](#webstorm)
  - [Javascript 기본](#javascript-기본)
    - [변수 선언](#변수-선언)
    - [데이터 타입](#데이터-타입)
      - [Arrays](#arrays)
      - [Object](#object)
    - [함수](#함수)
  - [DOM](#dom)

## ES5 ES6?

간혹 Javascript를 이야기 할 때 ES5 ES6 단어를 들을 수 있습니다. 이는 Javascript의 표준이 되는 ECMAScript를 의마하며 뒤의 숫자는 표준의 생산연도를 의미합니다.

| 순번 | 출판일      | 이름                     | 이전과의 차이점                                                                                                                                                                                                                         |
| ---- | ----------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | 1997년 6월  |                          | 초판                                                                                                                                                                                                                                    |
| 2    | 1998년 6월  |                          | ISO/IEC 16262 국제 표준과 완전히 동일한 규격을 적용하기 위한 변경.                                                                                                                                                                      |
| 3    | 1999년 12월 |                          | 강력한 정규 표현식, 향상된 문자열 처리, 새로운 제어문 , try/catch 예외 처리, 엄격한 오류 정의, 수치형 출력의 포매팅 등.                                                                                                                 |
| 4    | 버려짐      |                          | 4번째 판은 언어에 얽힌 정치적 차이로 인해 버려졌다. 이 판을 작업 가운데 일부는 5번째 판을 이루는 기본이 되고 다른 일부는 ECMA스크립트의 기본을 이루고 있다.                                                                             |
| 5    | 2009년 12월 |                          | 더 철저한 오류 검사를 제공하고 오류 경향이 있는 구조를 피하는 하부집합인 "strict mode"를 추가한다. 3번째 판의 규격에 있던 수많은 애매한 부분을 명확히 한다.                                                                             |
| 5.1  | 2011년 6월  |                          | ECMA스크립트 표준의 제 5.1판은 ISO/IEC 16262:2011 국제 표준 제3판과 함께 한다.                                                                                                                                                          |
| 6    | 2015년 6월  | ECMAScript 2015 (ES2015) | 6판에는 클래스와 모듈 같은 복잡한 응용 프로그램을 작성하기 위한 새로운 문법이 추가되었다. 하지만 이러한 문법의 의미는 5판의 strict mode와 같은 방법으로 정의된다. 이 판은 "ECMAScript Harmony" 혹은 "ES6 Harmony" 등으로 불리기도 한다. |
| 7    | 2016년 6월  | ECMAScript 2016 (ES2016) | 제곱연산자 추가, Array.prototype.includes                                                                                                                                                                                               |
| 8    | 2017년 6월  | ECMAScript 2017 (ES2017) | 함수 표현식의 인자에서 trailing commas 허용, Object values/entries 메소드, async/await 등.                                                                                                                                              |
| 9    | 2018년 6월  | ECMAScript 2018 (ES2018) | Promise.finally, Async iteration, object rest/spread property 등.                                                                                                                                                                       |
| 10   | 2019년 6월  | ECMAScript 2019 (ES2019) | Object.fromEntries, flat, flatMap, Symbol.description, optional catch 등                                                                                                                                                                |

## 실습환경

### VisualStudioCode

VisualStudioCode(이하 VScode)는 live-server 확장을 설치하면 수정한 코드를 바로 브라우저에서 볼 수 있습니다. 이를 설치하도록 합시다.

### WebStorm

WebStorm의 경우 [가이드 링크](https://recoveryman.tistory.com/359)를 참조해 live-server를 설치해 환경을 구성해 봅시다!

> javascript는 브라우저 엔진을 이용해 실행되는 스크립트 언어입니다. 최근 나온 node는 크롬의 V8엔진을 이용해 작동하기에 브라우저가 아닌 환경에서도 사용이 가능하나 그렇지 않은 경우 브라우저 엔진을 이용해야 하기 때문에 html을 만들어 script태그 안에서 자바스크립트를 작성해야 합니다.

## Javascript 기본

### 변수 선언

```javascript
var 변수명 = 값;
let 변수명 = 값;
const 변수명 = 값;
```

자바스크립트에서는 변수를 다음의 3가지 방법으로 선언하고 값을 할당할 수 있습니다. 선언과 할당은 따로 분리해도 괜찮습니다. 하지만 const의 경우 상수(값을 재 할당 할 수 없음)이기에 선언과 할당을 동시에 해주어야 합니다.

var와 let은 호이스팅이라는 개념을 통해 차이를 파악할 수 있습니다. 다음과 같은 코드를 작성해 봅시다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    a = 10;
    var a;
    console.log(a);
  </script>
</html>
```

위의 html코드가 이상해 보일수도 있지만 이는 정상작동하는 코드입니다. 호이스팅은 변수 선언문을 최상단으로 올려주는 것을 의미합니다. 그래서 위의 html코드가 호이스팅 된다면

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
  <script>
    var a;
    a = 10;
    console.log(a);
  </script>
</html>
```

위와 같이 변한다고 생각하시면 됩니다! 하지만 이러한 호이스팅은 var 변수에만 해당하며 let은 호이스팅의 대상이 아닙니다. var을 let으로 변경하고 크롬의 개발자 툴을 통해 오류를 확인해봅시다!

### 데이터 타입

javascript는 동적 타입 언어입니다!(dynamic type language) 정적 타입이란 변수를 선언할 때 타입을 명시해줌으로써 해당 변수에는 해당 타입만 할당할 수 있는 타입을 의미합니다. 반대로 동적 타입은 타입을 선언하지 않고 할당하는 값에 따라 동적으로 변수의 타입이 바뀌는 것을 의미합니다. 다음의 코드를 보고 차이를 확인해봅시다!

```java
// JAVA
String box = "Hello World";
box = 1; // Error
```

```javascript
//JAVASCRIPT
var box = "Hello World";
box = 1; // working
```

그렇다면 다음의 경우는 어떻게 되는지 한번 확인해 봅시다!

```javascript
let x = 5;
console.log(x + "5000");
```

```javascript
let x = 5;
console.log("5000" * 1 + x);
```

> 추가적으로 이러한 애매모호한 동적타입으로 인해 불편함을 겪는 사람들은 javascript의 슈퍼셋 언어인 Typescript를 이용하기도 합니다!

#### Arrays

```javascript
let a = [];
const b = [];
```

위의 변수는 Arrays 타입을 의미합니다. 이 Arrays 타입은 다양한 타입의 변수를 담을 수 있는 변수입니다.
배열의 첫번째 담겨 있는 변수의 연번은 **0** 이고 이후 1씩 증가합니다. 만약 마지막 변수의 인덱스는 배열의 길이-1 이 연번(인덱스)가 됩니다.

[배열함수들 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Object

흔히들 이야기하는 JSON은 Javascript Object Notation입니다. 그래서 Javascript에서 생성하는 객체를 JSON이라고 생각해도 크게 무리는 없습니다.

```javascript
const obj = {
  key: "value",
};
```

자바스크립트 오브젝트는 위와 같이 선언할 수 있으며 key에는 quote를 붙이지 않아도 됩니다. 하지만 value에는 quote 또는 double quote를 붙여줘야 합니다.

```javascript
let hello = "hello";
const obj = {
  hello,
};
```

최신의 javascript 문법에서 만약 key와 value의 값이 같다면 위와 같이 선언하면 자동으로 맵핑되어 Object가 만들어집니다! 위의 코드를 확인해봅시다.

자바스크립트 오브젝트에 있는 값은 2가지 방법으로 접근할 수 있습니다.

- []
- .

만약 key값에 **-**이 붙어있는 경우엔 .으로는 접근할 수 없습니다.

### 함수

자바스크립트에서는 함수를 선언하는 방법이 2가지 있습니다.

```javascript
function foo() {
  return "something";
}

const foo = () => {
  return "something";
};
```

위의 방법은 다른 언어들과 같이 함수임을 나타내고 함수명을 적은 뒤 파라미터를 정하고 **{}** 안에 함수 내용을 작성합니다. 대부분의 정적 타입 언어의 경우 리턴 값의 타입에 대해서도 명시를 하는 경우가 많지만, 동적 타입 언어의 경우 리턴 타입에 대한 명시는 잘 하지 않는 경향이 있습니다.

아래는 Arrow함수라고 불립니다. 동적 타입 언어인 자바스크립트 변수라는 공간에 함수를 명시한 것입니다. 만약 C언어를 했었다면 함수 포인터라고 생각해도 좋습니다.

위 아래 함수는 완벽하게 같은 함수입니다.

## DOM

Document Object Model(DOM)은 HTML XML을 나타내기 위한 하나의 인터페이스라고 생각할 수 있습니다. HTML XML로 만들어진 하나의 인터페이스에 자바스크립트를 통해서 접근 또는 값을 변경할 수 있습니다. 이에 대해서 간단하게 알아봅시다.

[HTML Element](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement)

이러한 HTML Element는 다음과 같은 코드를 이용해 접근할 수 있습니다.

```javascript
document.getElementById("elementID");
```
