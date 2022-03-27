# Redux Toolkit

## 왜 Redux Toolkit을 사용하는가

Redux로만해도 상당히 많은 것을 이룰 수 있습니다. 복잡한 Context보다 속도도 빠를 뿐더러, Props Drilling과 같은 헛갈리는 작업을 하지 않아도 되기 때문입니다. 하지만 Redux를 사용하다면 반복적으로 만들어내는 보일러 플레이트 코드가 존재함을 알 수 있습니다. 개발자들은 이러한 것을 싫어 하기 때문에 Redux Toolkit을 이용해 이러한 반복을 최대한 줄이고자 했습니다. 공식문서에서는 아래와 같은 이유로 Toolkit을 사용한다고 나와있습니다.

- Redux Store 설정방법이 너무 복잡하기 때문에
- Redux는 너무 많은 보일러 플레이트 코드가 존재하기 때문에
- Redux를 좀 더 유용하게 사용하기 위해서는 많은 패키지를 설치해야 하기 때문에

## 설치방법

```shell
npm install @reduxjs/toolkit react-redux
# react-redux가 이미 설치되어 있다면 설치하지 않아도 됨
```

### ReduxToolkit을 이용한 Store 생성

Redux에서는 createStore라는 메소드를 이용해 Store Object를 생성했지만, Toolkit에서는 configureStore라는 메소드를 이용해 생성합니다.

```js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
```

createStore와 다른 점은 메소드 이름에서도 볼 수 있듯이 어떠한 설정을 하는 것을 짐작할 수 있습니다. 이 메소드는 createStore메소드를 확장해 Redux DeveloperTool 등 설정이 필요한 기능을 사전에 설정해 둔 메소드입니다.

Store가 만들어 졌다면, Redux와 같이 상위 컴포넌트를 Provider 함수로 감싸고, store를 지정해주어야 합니다.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
```

### createSlice

Store가 생성됐다면 이제는 Reducer함수를 만들 차례입니다. toolkit에서는 이를 좀 더 체계화하고 쉽게 만들 수 있도록 기능을 제공합니다. 그것이 바로 createSlice입니다.

아래의 코드는 toolkit을 이용해 만든 reducer입니다. 구분을 위해서 toolkit을 이용한 reduce의 경우 slice라고 명명하겠습니다. 이 slice의 경우 값을 주어야 하는데,

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```
