import React, { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    localStorage.setItem("theme", t);
    console.log(t);
  };

  document.body.setAttribute("data-theme", theme);

  return (
    <div>
      <button onClick={handleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
