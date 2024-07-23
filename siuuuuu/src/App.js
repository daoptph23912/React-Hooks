import "./App.css";
import React, { useEffect, useState } from "react";
import { ProductList } from "./useMemo/memo";
import { IntervalComponent } from "./setInterval/interval";
import { ThemeProvider } from "./useContext/context";
import ThemedComponent from "./useContext/contextComponent";
import Couter from "./useCallback/callback";
import FocusInput from "./useRef/ref";
import ClickCounter from "./useRef/clickCounter";
import StopWatch from "./useRef/stopwatch";
import { Parent } from "./useImperativeHandle/Vidu2";
import { MyComponentLayoutEffect } from "./useLayoutEffect/useLayoutEffect";
import { UseDebugValue } from "./useDebugValue/useDebugValue";
function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <>
      <h1>Tìm hiểu các React Hooks</h1>
      <div>
        <ProductList products={products} />
        <IntervalComponent />

        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>

        <Couter />

        <FocusInput />
        <ClickCounter />
        <StopWatch />

        <Parent />

        <MyComponentLayoutEffect />

        <UseDebugValue />
      </div>
    </>
  );
}
export default App;
