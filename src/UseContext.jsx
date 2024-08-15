import React, { useContext, createContext } from "react";

const ThemeContext = createContext("light");

function UseContext() {
  const theme = useContext(ThemeContext);
  return <div className={`theme-${theme}`}>Current Theme: {theme}</div>;
}

export default UseContext;
