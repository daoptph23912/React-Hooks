import { useEffect, useRef, useState } from "react";

export const IntervalComponent = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <div>
        <h1>Count{count}</h1>
      </div>
    </>
  );
};
