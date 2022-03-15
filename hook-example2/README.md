# Hook

이번에는 useCallBack과 useMemo훅에 대해서 알아보자. Hook은 React의 렌더링 사이클과 깊은 연관이 있다. 이번에 다룰 callback memo역시 이러한 렌더링에 대한 지식이 필요합니다. React 라이브러리가 어느 시점에서 리액트 컴포넌트의 변경점을 살피고 데이터를 반영해 렌더링 하는지 알아봅시다.

리액트는 다음의 시점에 렌더링 할 컴포넌트를 찾고 다시 렌더링이 필요한 컴포넌트를 그립니다.

- Props가 변경되었을 때
- State가 변경되었을 때
- forceUpdate() 함수를 실행했을 때
- 부모 컴포넌트가 렌더링 되었을 때

위의 4가지 렌더링 시점에 대해서 반드시 숙지해야만 아래에서 얘기 할 useCallBack 과 useMemo에 대해서 이해할 수 있습니다.

## 왜 useMemo와 useCallback이 필요한가?

아래의 [코드](./ExampleCode/HardLoading.js)가 있다고 가정해봅시다.

```JSX
//HardLoading.js
import React, { useState } from 'react'

const HardLoading = (props) => {
  const [counter, setCounter] = useState(0)

  const addHanlder = () => {
    setCounter((prev) => {
      return prev + 1
    })
  }

  for (let index = 0; index < 100000000000000; index++) {}
  return
    <div>
      {counter}
      <button onClick={addHanlder}>+1</button>
    </div>
}
export default HardLoading

```

위의 코드를 실행하면 상당히 많은 시간이 소요됨을 알 수 있습니다. (크롬으로 켰을 시 위 탭에서 로딩이 계속됨을 확인할 수 있습니다.) 위의 예제는 극단적인 예시이지만 이러한 예시와 비슷한 상황을 만날 수 도 있습니다. 그렇다면 counter는 증가하도록 하면서 숫자로 세기도 힘든 for문을 회피하고 싶을 때는 어떻게 하면 될까요?

이러한 문제의 해결책을 React는 Memo Callback 훅을 이용해 해결할 수 있도록 유도하고 있습니다.

## useMemo

먼저 useMemo를 살표봅시다! useMemo는 일반적으로 함수가 아닌 변수를 렌더링에 관계없이 사용할 떄 사용하는 Hook입니다. 아래의 [코드](src/Components/MemoExample.js)를 사용해 살펴 보겠습니다.

```JSX
//MemoExample.js
import React, { useState, useMemo } from 'react'

const MemoExample = (props) => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // const doubleNumber = slowFunction(number)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyle = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    height: '100px',
  }

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  )
}

const slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  return
}
export default MemoExample

```

예제는 굉장히 단순화 되어있지만, 상상의 나래를 펼처봅시다. 만약 우리가 만든 웹페이지는 사용자의 입맛에 맞게 테마를 선택할 수 있습니다. 이 테마를 선택하면 다크모드 ↔ 일반모드를 번갈아 선택할 수 있도록 만들었습니다.

하지만 문제가 있습니다. 위에서 살펴본 바에 따르면 Component의 State가 변경되면 컴포넌트 전체가 다시 계산되고 렌더링 됩니다.

> 이 변경을 살펴보기 위해 이 예제에서는 slowFunction을 만듦

만약 useMemo를 사용하지 않았다면 테마를 바꾸기 위해 버튼을 클릭할 때마다 주석처리 된 doubleNumber의 값을 구하기 위해 상당한 시간이 소요되는 함수를 실행해야 합니다. 이러한 것을 방지하기위해 성능적인 측면에서 useMemo를 사용하게 되는 것입니다.

## useCallback

Javascript에서의 다음과 같은 함수는 어떠한 메모리에 오브젝트로서 저장됩니다. 그렇다면 렌더링 시에 새롭게 생성되는 컴포넌트에 탑재되어 있는 함수는 이름이 같기에 매번 같은 메모리에 저장될까요?

답은 '아니다' 입니다. 함수는 오브젝트로 저장되고 임의의 공간에 저장됩니다. 따라서 다시 렌더링이 필요한 컴포넌트에 포함된 함수는 매번 실행 될 때마다 새롭게 함수가 생성됩니다. 따라서 이러한 렌더링을 피하고 싶을 때 우리는 useCallback을 이용해 성능 향상을 위해 useCallback을 사용합니다.

```javascript
function doubleNumber(a) {
  return a * 2
}
```

## useMemo와 useCallback의 유일한 차이점

어떻게 보면 비슷한 역할을 하는 이 2가지 Hook은 조금은 다른 것이 있습니다. 이를 [코드](src/Components/DiffExample.js) 로 작성해보고 한번 확인해 봅시다.

```JSX
import React, { useCallback, useEffect, useMemo } from 'react'

const DiffExample = (props) => {
  const memo = useMemo(() => {
    return 'insert JSX here'
  }, [])

  const callback = useCallback(() => {
    return 'inset JSX here'
  }, [])

  useEffect(() => {
    console.log(memo)
    console.log(callback)
  }, [])

  return <div>Hello</div>
}
export default DiffExample

```

아래의 코드를 실행해보면 확연하게 다른 것을 알 수 있습니다. 한번 실행해 보고 결과를 확인해 봅시다. 많은 사람들이 Memo 그리고 Callback의 차이를 묻는다면 memo는 변수에 사용하고 callback은 함수에 사용한다 라고 말합니다. 하지만 이는 반은 맞고 반은 틀린 내용입니다.

그렇다면 반 만큼 틀린 내용에 [아래의 예제](src/Components/DiffExample2.js) 조금 더 알아봅시다.

```JSX
import React, { useCallback, useEffect, useMemo } from 'react'

const DiffExample2 = (props) => {
  const memo = useMemo((arg) => {
    return () => {
      return 'inset JSX here ' + arg
    }
  }, [])

  const callback = useCallback((arg) => {
    return 'inset JSX here ' + arg
  })

  useEffect(() => {
    console.log(memo('hello'))
    console.log(callback('hello'))
  }, [])

  return <div>Hello</div>
}
export default DiffExample2

```

Callback과 Memo 2개의 훅에 모두 파라미터를 주었습니다. 이렇게 실행한 코드는 아래와 같이 콘솔에 출력됩니다. Callback은 함수이기에 Argument를 받아 함수에 적용할 수 있지만, Memo의 경우 변수 값 그 자체이기 때문에 Argument를 사용할 수 없음을 알 수 있습니다.

```
inset JSX here undefined
inset JSX here hello
```

> 여담으로 다음 리액트 버전에서 Memo와 Callback이 하나의 Hook으로서 합쳐질 수 도 있습니다.

## React.Memo

컴포넌트의 재 렌더링 시 컴포넌트의 내용을 다시 렌더링하는 것과는 별개로 컴포넌트가 생성될 때 받아오는 Props의 값을 이전과 비교해서 렌더링을 결정하는 React.Memo도 존재합니다.

아래의 [코드](src/Components/ReactMemo.js)에서 주석을 변경해 브라우저 콘솔창의 변화를 찾아봅시다!

```JSX
import React, { useState } from 'react'

const SubMemo = ({ state1 }) => {
  console.log('SubMemo redering')
  return <div>{state1}</div>
}

// const SubMemo = React.memo(({ state1 }) => {
//   console.log('SubMemo redering')
//   return <div>{state1}</div>
// })

const ReactMemo = (props) => {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)

  return (
    <>
      <SubMemo state1={state1} />
      <div>
        <button
          onClick={() => {
            setState1((prevState) => {
              return prevState + 1
            })
          }}
        >
          State1 Increse
        </button>
        <button
          onClick={() => {
            setState2((prevState) => {
              return prevState + 1
            })
          }}
        >
          State2 Increse
        </button>
      </div>
      <div>
        State1 : {state1} <br /> State2 : {state2}
      </div>
    </>
  )
}
export default ReactMemo

```

처음에 살펴본 것 처럼 부모 컴포넌트가 재 렌더링 되면 자식 컴포넌트 역시 다시 렌더링됩니다. 하지만 이러한 규칙은 변경이 없는 컴포넌트에게도 강제되는 사항이기에 만약 자식 컴포넌트는 정적인(변화하지 않음) 컴포넌트이면서 많은 데이터를 가지고 있는 경우 재 렌더링 되면서 상당한 성능의 저하를 초래할 수 있습니다. 이 때 React.memo를 사용한다면 성능적인 측면에서 상당한 이점을 얻을 수 있습니다.

그렇다면 React.memo만을 사용하면 성능적인 측면에서 좋은 것 아닌가요? 라고 반문할 수 있습니다. 아주 약간의 차이이지만 자주 Props가 바뀌는 컴포넌트에 대해서는 memo를 설정하지 않는 것이 좋습니다. memo를 설정하게 된다면 비교를 위해 특정한 로직을 실행해야 하기에 오히려 성능이 낮아질 수도 있습니다.
