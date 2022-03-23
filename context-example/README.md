# Context API

Context API를 알아보기 이전 Context를 사용하지 않는 리액트에서 State 관리를 어떻게 했는지 알아봅시다.

![React State](image/react-state.gif)

React는 State를 관리하기 위해 상위 컴포넌트에서 State을 선언하고 이를 자식 컴포넌트로 전달하면서 State를 관리할 수 있습니다. 이러한 구조는 같은 State이지만 매번 자식 컴포넌트에게 전달 시키도록 하는 의미없는 코드 작성을 통해 컴포넌트의 코드는 지저분해지는 것을 쉽게 경험할 수 있습니다.

> 이렇게 하위 컴포넌트로 전달 하는 State를 prop drilling이라고도 합니다.

이러한 의미없는 코드 작성을 방지하고 좀 더 효율적으로 React 앱 전반에 사용되는 데이터를 관리하고 사용할 수 있도록 React는 ContextAPI를 제공하고 있습니다. 이 ContextAPI는 React 16.3 버젼부터 제공되고 있습니다.

## Context API Methods

React Context API는 다음의 메소드를 이용해 사용할 수 있습니다.

- React.createContext: Context 오브젝트를 생성할 때 사용합니다.
- Context.Provider: 하위 컴포넌트가 Context를 사용할 수 있도록 만들어 줍니다.
- Context.Consumer: props drilling 없이도 Context에 저장된 State를 사용할 수 있도록 합니다.

## 실습

