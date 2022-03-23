import React, { useState } from "react";

const SubMemo = React.memo(({ state1 }) => {
  console.log("SubMemo redering");
  return <div>{state1}</div>;
});

// const SubMemo = React.memo(({ state1 }) => {
//   console.log('SubMemo redering')
//   return <div>{state1}</div>
// })

const ReactMemo = (props) => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  return (
    <>
      <SubMemo state1={state1} />
      <div>
        <button
          onClick={() => {
            setState1((prevState) => {
              return prevState + 1;
            });
          }}
        >
          State1 Increse
        </button>
        <button
          onClick={() => {
            setState2((prevState) => {
              return prevState + 1;
            });
          }}
        >
          State2 Increse
        </button>
      </div>
      <div>
        State1 : {state1} <br /> State2 : {state2}
      </div>
    </>
  );
};
export default ReactMemo;
