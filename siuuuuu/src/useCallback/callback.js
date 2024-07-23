import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

const Couter = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);
  const increment = useCallback(() => {
    setCount(count + 1);
    console.log("re-render");
  }, [count]);

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <Button onClick={increment}>Increament</Button>
        <Button onClick={() => setOtherState(!otherState)}>
          Toggle Other State{" "}
        </Button>
      </div>
    </>
  );
};

export default Couter;
