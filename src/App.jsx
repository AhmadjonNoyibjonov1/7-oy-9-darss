import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Save from "./Pages/Save";

// ThemeContext yaratish
export const ThemeContext = createContext();

function App() {
  // Theme-ni localStorage'dan olish yoki "dark" deb boshlash
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // theme o'zgarganda uni localStorage'ga saqlash va document elementga qo'llash
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Theme-ni almashtirish funksiyasi
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/save" element={<Save />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
