import { forwardRef, useImperativeHandle, useRef } from "react";

const MyComponent = forwardRef((props, ref) => {
  const localRef = useRef();
  useImperativeHandle(ref, () => ({
    customMethod() {
      console.log("This is a custom method");
    },
  }));
  return <div ref={localRef}>My Component</div>;
});


