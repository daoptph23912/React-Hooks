import { useContext } from "react";
import ThemeContext from "./context";

const ThemedComponent = () => {
  const { theme , setTheme } = useContext(ThemeContext);

  return (
    <>
      <p>Context Theme:{theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </>
  );
};
export default ThemedComponent;
