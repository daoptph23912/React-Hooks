import { useRef } from "react";

const ClickCounter = () => {
    const countRef = useRef(0);
  
    const handleClick = () => {
      countRef.current++;
      console.log(`Button clicked ${countRef.current} times`);
    };
  
    return <button onClick={handleClick}>Click me</button>;
  };
  
  export default ClickCounter;
  