# React Router

## 설치방법

```bash
npm install react-router-dom@6
```

## 사용법

간단한 Router를 설정하고 만드는 방법을 알아보겠습니다. 먼저 App.js를 만들어보겠습니다!

```js
// src/App.js
export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
    </div>
  )
}
```

그리고 나서 URL을 연결할 수 있도록 아래와 같이 Router를 설정해 줍시다!

```js
// index.js
...

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

위 처럼 BrowserRouter를 감싸면 Router를 사용할 준비는 마친 상태입니다. 그리고 아래와 같은 코드로 설정하면 Router Link를 설정할 수 있습니다.

```js
// src/App.js
import './App.css'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>BookKeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  )
}
```

각 invoices expenses로 라우팅 되었을 때 나타날 컴포넌트를 만들어 봅시다!

```jsx
// src/routes/expenses.jsx
export default function Expenses() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Expenses</h2>
    </main>
  )
}

// src/routes/invoices/jsx
export default function Invoices() {
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Invoices</h2>
    </main>
  )
}
```

그리고 나서 각 Link 컴포넌트에 위의 컴포넌트를 연결시켜 주어야 제대로 된 라우팅을 실행할 수 있습니다. 아래와 같이 index.js를 바꿔봅시다!

```js
// src/index.js

...

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
```

위와 같이 구성하면 문제가 있습니다. 바로! 반복되는 컴포넌트에 대해서는 어쩔 수 없이 보일러 플레이트(반복되는 코드)가 발생합니다! 이러한 문제는 최대한 줄이는 것이 좋습니다. 그래서 Router Library 개발자들 역시 이러한 문제들 해결하기 위해 Nested Routes 라는 기능을 만들어 제공하고 있습니다.

## Nested Routes

Nested Routes라고 해서 새로운 컴포넌트가 있지는 않습니다. 아래와 같이 Route를 부모 컴포넌트로 지정하면 Nested Route가 설정됩니다.

```js
// src/index.js
...

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// src/App.js
    ...

  return (
    <div>
      <h1>BookKeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  )
```

위와 같이 코드를 구성하고 Outlet 컴포넌트를 만들어 주면, 기본 App 컴포넌트에 하위 컴포넌트들이 렌더링 되는 구조를 만들 수 있습니다.

URL 역시도 '/'로 구분되어 하위 Route URL이 붙어 구성됩니다.

> 만약 Root Route를 root로 지정했다면,
> localhost/root/invoices or localhost/root/expenses 로 지정됩니다.
