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
function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  return (
    <>
      <div>Tìm hiểu useMemo</div>
      <div>
        <ProductList products={products} />
        <IntervalComponent />

        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>

        <Couter />

        <FocusInput />
        <ClickCounter/>
        <StopWatch/>
      </div>
    </>
  );
}
export default App;
