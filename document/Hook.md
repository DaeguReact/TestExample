# React Hook

## useState

React에서 가장 기본이되는 Hook입니다. Hook은 다음과 같이 사용할 수 있습니다.

```js
import React, {useState} from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);
}
```


**useState** 함수는 기본값이 되는 값을 파라미터로 받습니다. 이후 useState 함수는 리턴값으로 리스트를 반환해주고, 리스트의 첫번째 값은 읽기 전용 변수, 쓰기 전용 함수 변수가 주어집니다. **useState**는 하나의 상태 값만 관리할 수 있습니다. 만약 여러개의 상태(State)를 관리해야 한다면, **useState**를 여러번 사용해 상태를 관리할 수 있습니다.

## useEffect

useEffect는 리액트 컴포넌트가 렌더링 될 때마다 작업을 수행할 수 있도록 하는 Hook입니다. 만약 관리해야 하는 2개의 State가 있는 경우 다음과 같이 관리할 수 있습니다.

> 이걸 어디에 사용하지 라고 의문을 가질 수 있습니다. 어떠한 상태 변화를 감지하기위해서 useState를 설정하고 설정된 State의 변경이 일어났을때 실행하는 함수가 바로 useEffect입니다. 이 **useEffect는 cleanUp함수를 지원하며, 이 cleanUp함수를 이용해 rendering이 시작되기 전 어떠한 작업을 수행해야할 때 유용하게 사용할 수 있습니다.**

## useReducer

Reduder의 사용법은 State와 비슷하게 보여질 수도 있습니다. useReducer()는 2개의 파라미터를 받으며, 첫번째는 리듀서 함수, 두번째는 해당 리듀서의 초기값을 넣어줍니다. 첫번째 파라미터인 reducer함수는 component 밖에서도 선언할 수 있다는 점이 가장 큰 장점입니다.

> **왜지?**🙄

useReducer를 적절하게 사용할 수 있는 곳은 Object를 관리할 때 유용할 수 있습니다.

## useMemo

함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있는 Hook입니다. 만약 리스트에 있는 값을 이용해 평균을 낸다고 할 때 Memo Hook을 사용하면 좋습니다.

> useState를 사용해 평균을 구하기위해 코드를 작성하면 인풋에 Hook을 건 순간 인풋 값이 변경될때 마다 평균을 구하는 함수가 호출되는 것을 볼 수 있습니다. 이러한 호출이 되는 이유는 리액트에서 렌더링이 되는 조건을 생각해 볼 수 있습니다. 리액트에서 렌더링이 되는 조건은 props state 부모 컴포넌트의 렌더링, 변경이 있을 때 바뀌게 됩니다. 이러한 조건에 따라 평균을 구하는 함수가 호출되는 것 같습니다.

## useCallback

useCallback은 useMemo와 상당히 비스산 함수입니다. 렌더링 성능을 위한 함수입니다. 렌더링이 될 때마다 새로운 함수를 만들어 사용하는 리액트의 특성상 useCallback을 이용해 처음 렌더링 시에 함수를 등록해 놓고 이후 사용하는 Hook입니다.

## useRef

```jsx
// RefHook 생성
const inputEl = useRef(null);

const handleFunction = () => {
    // current가 실제 HTML Element를 가리킴
    inputEl.current.focus();
}

<input type="text" ref={inputEl} />
```

## CustomHook
