const { useState, useRef, useLayoutEffect } = require("react");

export const MyComponentLayoutEffect = () => {
  const [height, setHeight] = useState(0);
  const boxRef = useRef();
  useLayoutEffect(() => {
    if (boxRef.current) {
      setHeight(boxRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
      <div
        ref={boxRef}
        style={{ height: "200px", backgroundColor: "lightblue" }}
      >
        My Box
      </div>
      <p>The height of the box {height}</p>
    </>
  );
};
