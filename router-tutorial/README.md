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
  );
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
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>BookKeeper</h1>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
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

### 더미데이터와 함께하는 예제

일반적으로 서버로부터 가져온 데이터를 바탕으로 웹 어플리케이션을 구성하지만, 예제에서는 하드코딩 된 가짜 데이터를 바탕으로 웹 어플리케이션을 만들어 봅시다.

```js
// src/data.js
let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getInvoices() {
  return invoices;
}
```

이 데이터를 가지고 설정한 invoices라우터에서 사용할 수 있도록 해보겠습니다. 또한 간단한 스타일을 nav에 적용하는 것까지 해보겠습니다!

```js
import { Link } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
```

위 코드를 작성하고 어떠한 일이 생겼는지 한번 작동시켜보세요!

### "No Match" Route

일반적인 사용자들은 홈페이지에서 제공하는 컨텐츠에만 접근하는 것이 보통입니다. 하지만 이러한 예상을 빗나가 행동하는 사람들 역시도 존재합니다. 만약 그러한 접근을 시도하면 공백의 페이지가 나타납니다. 그 이유는 당연하게도 우리는 임의의 접근에 대해서 라우팅을 지정하지 않았기 때문입니다.

그렇다면 이러한 문제를 방지하기 위해 우리는 아래의 코드를 추가하여 문제를 방지할 수 있습니다.

```js
//src/index.js

<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

제일 마지막에 등록된 Route의 \*은 조금 특별한 의미를 가지고 있습니다.

> 만약 정규식을 알고 있다면 . SQL에서는 % 와 같습니다

### URL 파라미터

먼저 접근해 본 사람도 있겠지만, 개인 invoice를 선택하면 아무것도 등장하지 않습니다. 이 역시 어떠한 컴포넌트를 보여줄지 결정하지 않았기 때문입니다. 이를 위해서 invoice 컴포넌트를 만들어보겠습니다.

```js
// src/route/invoice.js

export default function Invoice() {
  return <h2>Invoice #???</h2>;
}
```

눈치 챘을지도 모르지만, 저기 보이는 ???에 사용자가 선택하면 invoice 번호를 보여줄 URL 파리미터를 이용해 보여줄 계획입니다.

그렇다면 URL 파라미터를 사용하기 위해 route 설정을 아래와 같이 해봅시다!

```js
//src/index.js
...

<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

설정을 다한 것 같으니 invoice 1개를 클릭해봅시다! 어라라? URL은 바뀌었지만 화면은 바뀌지 않았습니다. 그 이유는 바로 _Outlet_ 컴포넌트를 설정하지 않았기 때문입니다.

그렇다면 상위 Route인 Invoices 컴포넌트에 다음의 Outlet 태그를 추가해봅시다

```js
//src/route/invoices.jsx
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

이렇게 하면 적절하게 우리가 설정한 **Invoice** 컴포넌트가 렌더링 되는 것을 확인할 수 있습니다.

그렇다면 이제 ???에 URL파라미터로 넘어온 데이터를 바인딩 해 봅시다!

```js
// src/routes/invoice.jsx
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
}
```

여기서 알아두어야 할 것은 useParams() 훅을 사용하여 가져온 파리미터는 router 등록시에 설정한 값이 키로 설정됩니다.

> :invoiceId -> params.invoiceId

제대로 Invoice number가 등장핶다면 좀 더 흥미로운 invoice 페이지를 만들어 봅시다! 더미데이터가 존재하는 *src/data.js*에 invoice number를 이용해 찾을 수 있는 함수를 만들어 보겠습니다.

```js
// src/data.js
export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}
```

이렇게 하면 현재 invoice페이지에서 알고 있는 number를 기반으로 invoice에 대한 전반적인 정보를 가져올 수 있습니다. 그 정보를 가져오고 데이터를 렌더링 해 보겠습니다.

```js
// src/route/invoice.jsx
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}
```

## Index Route

Index route는 조금은 이해하기 어려운 개념입니다. 현재까지 만든 홈페이지의 경우 위쪽의 invoices 메뉴를 클릭하면 invoice의 상세정보가 나오는 공간은 빈 공간으로 렌더링 되었습니다. 이러한 빈 공간은 index를 이용한다면 기본페이지 그러니까 상세정보가 나오기 전 상태에서의 UI를 제공할 수 있습니다. Route를 다음과 같이 설정해보겠습니다.

```js
// src/index.js
...

<Routes>
  <Route path="/" element={<App />}>
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
      <Route path=":invoiceId" element={<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  </Route>
</Routes>
```

확인하기 위해 위 메뉴에서 Invoices를 선택해보면 기본페이지가 만들어진 것을 확인할 수 있습니다.

일반적인 Route와 달리 index Route는 Path props를 받지 않습니다. path 대신 index를 설정한다고 생각하면 됩니다.

## Active Links

위 개념은 매우 일반적인 개념입니다. 웹 서핑을 하다가 현재 보고 있는 페이지의 링크가 다르게 표시되는 기능을 볼 수 있습니다. 이 기능 역시 react-router에서 제공하고 있습니다. invoices 컴포넌트에서 <Link>를 <NavLink>로 바꿔봅시다!

그리고 표시된 구역의 코드를 아래와 같이 변경해 봅시다!

```js
//src/routes/invoices.jsx
...

 return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
      // from
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
        // to
      </nav>
      <Outlet />
    </div>
  );
```

이 코드에서 다음의 3가지를 했습니다.

1. Link 를 NavLink로 바꾸었습니다.
2. style object를 object를 반환하는 함수를 사용했습니다.
3. isActive를 사용해 동적인 스타일을 적용했습니다.

아래와 같이 className에 class를 적용해 색을 바꿀 수도 있습니다.

```js
// normal string
<NavLink className="red" />

// function
<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
```

## Search Params

Search params는 URL params와 흡사하나, 위치에 있어서 차이가 납니다. 일반적인 URL parameter의 경우 */*로 구분되지만, Search params의 경우 *?*의 뒤에 위치하게 됩니다.

React Router에서는 이를 **useSearchParams**훅을 이용해 쉽게 사용할 수 있습니다. useState 훅과 다르게 이 값들은 메모리에 저장되지 않고 URL에 저장됩니다.

> 그 이유는 단순하니 설명하지 않도록 하겠습니다!

필터를 이용해 invoice를 필터링하는 작업을 해보겠습니다.

```js
// src/routes/invoices.jsx

import { NavLink, Link, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
```

## Custom Behavior

필터링을 적용하고 새로운 invoice를 클릭하면 알 수 있듯이 필터링이 초기화되는 것을 알 수 있습니다. 이를 한번 고쳐보겠습니다.

```js
// src/components/QueryNavLink.js

import { useLocation, NavLink } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
```

아래와 같이 커스텀 Component를 만들고 useLocation을 이용해 정보를 받은 후 **search** search params의 값을 붙여준다면, 필터링을 유지할 수 있습니다.

새로 등장한 useLocation 훅은 다음의 형태로 정보를 담고 있습니다.

```json
{
  "pathname": "/invoices",
  "search": "?filter=sa",
  "hash": "",
  "state": null,
  "key": "ae4cz2j"
}
```
