import React, { useCallback, useState } from "react";

// const Button = React.memo(({ onClick, children }) => {
//   console.log(`Rendering button - ${children}`);
//   return <button onClick={onClick}>{children}</button>;
// });

const Couter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // const increment = useCallback(() => {
  //   setCount(count + 1);
  //   console.log("re-render");
  // }, [count]);

  const increment = () => {
    setCount(count + 1);
    console.log("re-render");
    return increment;
  };

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <comp2 increment={increment} />
        <button onClick={() => setOtherState(!otherState)}>
          Toggle Other State{" "}
        </button>
      </div>
    </>
  );
};

export default Couter;

export const comp2 = (increment) => {
  return (
    <>
      <button onClick={increment}>Increment</button>
    </>
  );
};
