import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  }, [isLightMode]);

  return (
    <button className="nav-link theme-toggle" onClick={() => setIsLightMode(!isLightMode)}>
      {isLightMode ? <img src="/moon.svg" alt="Mode sombre" /> : <img src="/sun.svg" alt="Mode clair" />}
    </button>
  );
};

export default ThemeToggle;
