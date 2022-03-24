# Redux

Redux는 전역적으로 관리할 수 있는 State를 사용할 수 있게 도와주는 라이브러리입니다.

Redux는 React에서 소개한 적있는 Reducer 함수를 기본적으로 사용합니다. 이러한 이유는 Redux의 구조에 대해 설명하면서 다루도록 하겠습니다.

Redux Reducer함수는 state 와 action 오브젝트를 아규먼트로 받으며, React App이 시작할 때에는 state값은 초기화 되지 않습니다. 따라서 Arguments로 선언할 때에 DefaultValue를 주어 RuntimeError를 막는 것이 보통입니다.

```javascript
const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}
```

Redux Reducer 함수의 Arguments 중에서 action 오브젝트는 항상 type 값을 가지고 있으며 이 type을 분기로 하여 해당하는 로직을 수행합니다. 따라서 type 값은 유니크해야 합니다.

> 추가적으로 reducer 함수를 실행할 때에 값을 넘겨줄 수도 있으며 이 때에는 action 오브젝트의 payload로 전달 됩니다.

위 예제에서는 type을 좀 더 유니크하게 설정하기 위해서 counter/ 접두사를 붙여서 Reducer 함수를 구성했습니다.

```javascript
// 새로운 오브젝트를 전달하는 것이 Key Point입니다.
return { ...state, value: state.value + 1 };
```

위의 구문에 대해서 낯설수도 있어 추가적으로 설명하면 ... 기본의 오브젝트 값을 복사한 후 value 값을 override, 즉, 덮어 씌운다는 의미의 구문입니다.

## Store

Redux를 사용할 때에 Redux에 관리되는 State들은 모두 하나의 Store에서 관리됩니다. 이 Store는 다음과 같은 구문을 이용해 만들 수 있습니다.

```javascript
// counterReducer는 위의 예제에서 만든 reducer 함수 또는 reducer 로직을 담고 있는 함수를 파라미터로 넘겨주면 됩니다.
const store = Redux.createStore(counterReducer);
```

## Redux API

먼저 Redux에서 주로 사용되는 API(제공되는 함수)에 대해 알아봅시다

- getState(): store에 저장된 state를 반환합니다.
- subscribe(): store에 저장된 state가 변경 됐을 경우 subsribe에 파라미터로 전달 된 함수를 실행합니다. 추가적으로 기존의 State 오브젝트에서 값을 변경한 경우 subscribe 함수가 실행되지 않습니다.
- dispatch(): store를 만들 때 파라미터로 넘겨주었던 Reducer함수를 실행합니다. 이 때 Reducer함수의 Argument로 선언한 action type값은 반드시 들어가야 합니다.

## Redux Data flow

![Redux_Data_Flow](./static/ReduxDataFlow.gif)

Redux API를 이용해 Dispath를 실행하면, Store에 지정해준 Reducer가 실행되며 새로운 State가 반환된다면, UI에서 subscribe함수가 실행되어 UI를 반영해줌을 도식화 한 이미지입니다.
