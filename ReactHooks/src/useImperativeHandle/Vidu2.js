import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const localref = useRef();
  useImperativeHandle(ref, () => ({
    focus() {
      localref.current.focus();
    },
  }));
  return <input ref={localref} {...props}></input>;
});

export const Parent = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus the Input</button>
    </div>
  );
};
