import React, { useCallback, useEffect, useMemo } from "react";

const DiffExample = (props) => {
  const memo = useMemo(() => {
    return "insert JSX here";
  }, []);

  const callback = useCallback(() => {
    return "inset JSX here";
  }, []);

  useEffect(() => {
    console.log(memo);
    console.log(callback);
  }, []);

  return <div>Hello</div>;
};
export default DiffExample;
