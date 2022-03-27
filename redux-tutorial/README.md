# Redux

Redux는 전역적으로 관리할 수 있는 State를 사용할 수 있게 도와주는 라이브러리입니다.

Redux는 React에서 소개한 적있는 Reducer 함수를 기본적으로 사용합니다. 이러한 이유는 Redux의 구조에 대해 설명하면서 다루도록 하겠습니다.

Redux Reducer함수는 state 와 action 오브젝트를 아규먼트로 받으며, React App이 시작할 때에는 state값은 초기화 되지 않습니다. 따라서 Arguments로 선언할 때에 DefaultValue를 주어 RuntimeError를 막는 것이 보통입니다.

```javascript
const initialState = {
  value: 0,
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
```

Redux Reducer 함수의 Arguments 중에서 action 오브젝트는 항상 type 값을 가지고 있으며 이 type을 분기로 하여 해당하는 로직을 수행합니다. 따라서 type 값은 유니크해야 합니다.

> 추가적으로 reducer 함수를 실행할 때에 값을 넘겨줄 수도 있으며 이 때에는 action 오브젝트의 payload로 전달 됩니다.

위 예제에서는 type을 좀 더 유니크하게 설정하기 위해서 counter/ 접두사를 붙여서 Reducer 함수를 구성했습니다.

```javascript
// 새로운 오브젝트를 전달하는 것이 Key Point입니다.
return { ...state, value: state.value + 1 }
```

위의 구문에 대해서 낯설수도 있어 추가적으로 설명하면 ... 기본의 오브젝트 값을 복사한 후 value 값을 override, 즉, 덮어 씌운다는 의미의 구문입니다.

## Store

Redux를 사용할 때에 Redux에 관리되는 State들은 모두 하나의 Store에서 관리됩니다. 이 Store는 다음과 같은 구문을 이용해 만들 수 있습니다.

```javascript
// counterReducer는 위의 예제에서 만든 reducer 함수 또는 reducer 로직을 담고 있는 함수를 파라미터로 넘겨주면 됩니다.
const store = Redux.createStore(counterReducer)
```

## Redux API

먼저 Redux에서 주로 사용되는 API(제공되는 함수)에 대해 알아봅시다

- getState(): store에 저장된 state를 반환합니다.
- subscribe(): store에 저장된 state가 변경 됐을 경우 subsribe에 파라미터로 전달 된 함수를 실행합니다. 추가적으로 기존의 State 오브젝트에서 값을 변경한 경우 subscribe 함수가 실행되지 않습니다.
- dispatch(): store를 만들 때 파라미터로 넘겨주었던 Reducer함수를 실행합니다. 이 때 Reducer함수의 Argument로 선언한 action type값은 반드시 들어가야 합니다.
- useSelector(): store에 존재하는 State를 읽을 수 있는 함수입니다.

## Redux Data flow

![Redux_Data_Flow](./static/ReduxDataFlow.gif)

Redux API를 이용해 Dispath를 실행하면, Store에 지정해준 Reducer가 실행되며 새로운 State가 반환된다면, UI에서 subscribe함수가 실행되어 UI를 반영해줌을 도식화 한 이미지입니다.

## Counter Example

Redux를 이용해 Counter앱을 만들어 보겠습니다.

먼저 Redux와 React에서 Redux를 사용하기 위한 패키지를 설치해야합니다.

```bash
npm i redux react-redux
```

> 소스는 [링크](./example/todo)에 있습니다!

Redux Store를 사용하기 위해서는 Context와 마찬가지로 Provider를 제공해 주어야 합니다. Redux의 경우 전체 앱에서 필요한 곳에서 state를 관리하고 state를 업데이트 할 수 있는 dispatch 함수를 실행시켜야 합니다. 따라서 일반적으로 제일 상위 컴포넌트 index.js에 Provider를 제공하는 것이 보통입니다.

또한 Context와 마찬가지로 store를 등록시켜 주어야 합니다. 이 Store의 경우 redux 라이브러리의 API 중 하나인 createStore 메소드로 만들어진 Store 객체이어야 합니다.

createStore의 경우 3개의 Arguments를 받는데 Reducer, preloadStaet, enhander를 받습니다.

```js
createStore(reducer, prelaodState, enhancer)
// Mandatory
// reducer는 store에 걸려오는 dispatch를 분기해주는 함수

// Optional
// preloadState는 store를 만들 때 state의 초기값
// enhancer middleware로서 사용할 수 있는 함수입니다.
```

Store를 만들기 위해서 ReduxToolkit을 이용해 하는 것이 보일러플레이트를 줄이고 보기에는 좋으나 지금은 if 또는 switch문을 이용해 만들어 보겠습니다.

```js
const reducer = (state, action) => {
  switch(action.type){
    case something:
      ...
        return newState
      default
        return state
  }
}
```

이렇게 만들어진 reducer함수는 Store 객체에 내장된 dispath함수를 이용해 접근할 수 있습니다.

> 간단하게 설명했지만 생각보다 복잡합니다. 상세내용은 [createStore API](https://redux.js.org/api/createstore) 를 참조해주세요!

```js
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

이렇게 하면 Redux를 사용하기 위한 설정은 모든 마치게 되었습니다. Store는 하나밖에 생성할 수 없기 때문에 일반적으로 객체로 만들어 사용하고 있습니다.

실제 Component에서는 다음과 같이 사용할 수 있습니다.

```jsx
import logo from './logo.svg'
import './App.css'
import ReduxStore from './store/store'

function App() {
  const store = ReduxStore
  return <></>
}

export default App
```

이제 준비작업을 모두 마쳤으니 실제로 redux에 존재하는 state를 가져오고 dispath하는 코드 예제를 살펴보겠습니다.

```js
import logo from './logo.svg'
import './App.css'
import ReduxStore from './store/store'
import { useSelector } from 'react-redux'

function App() {
  const store = ReduxStore
  const dispatch = store.dispatch
  const counter = useSelector((state) => state)

  const incre = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decre = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={incre}>INCREMENT</button>
        <button onClick={decre}>DECREMENT</button>
      </div>
    </>
  )
}

export default App
```

위와 같은 방식으로 Redux를 사용할 수 있습니다. 대부분의 실제 앱에서는 ReduxToolkit을 이용해 좀 더 쉽게 Reducer함수를 작성할 수 있습니다. 이는 다음에 더 자세하게 알아볼 수 있도록 하겠습니다.

## Example

위의 내용을 바탕으로 Redux에서 State 관리를 하는 TodoApp을 만들어 봅시다!
[ReduxTodoApp](./example/todo/)
