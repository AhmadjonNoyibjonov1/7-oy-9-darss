import React, { createContext, useEffect, useState } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Save from "./Pages/Save";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} setSearchQuery={setSearchQuery} />} />
        <Route path="/save" element={<Save/>} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
