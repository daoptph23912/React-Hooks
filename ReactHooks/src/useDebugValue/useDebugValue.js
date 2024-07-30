import { useDebugValue, useState } from "react";

const useClickCounterCustomHook = () => {
  const [count, setCount] = useState(0);
  useDebugValue(count);
  return [count, () => setCount(count + 1)];
};
export const  UseDebugValue = () => {
  const [count, increament] = useClickCounterCustomHook();
  return (
    <div>
      <p>Click count : {count}</p>
      <button onClick={increament}>Click me</button>
    </div>
  );
};
