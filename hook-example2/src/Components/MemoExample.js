import React, { useState, useMemo } from "react";

const MemoExample = (props) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "100px",
  };

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
  );
};

const slowFunction = (number) => {
  console.log("hello");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};
export default MemoExample;
