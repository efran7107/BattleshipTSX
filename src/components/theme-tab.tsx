import { useState } from "react";
import { useTheme } from "../ts/providers-context";
import "../styles/theme-tab.css";

export const ThemeTab = () => {
  const { theme, setTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const right = "fa-solid fa-chevron-right";
  const left = "fa-solid fa-chevron-left";
  return (
    <div
      className={`theme-btn-cont ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="theme-tab">
        <i
          className={isActive ? right : left}
          onClick={() => setIsActive(!isActive)}
        ></i>
      </div>
      <div className="theme-change">
        <p>Change Theme</p>
        <div className="theme-btns">
          <input
            className={`light-btn ${theme === "light" ? "active" : ""}`}
            type="button"
            value="Light"
            onClick={() => setTheme("light")}
          />
          <input
            className={`dark-btn ${theme === "dark" ? "active" : ""}`}
            type="button"
            value="Dark"
            onClick={() => setTheme("dark")}
          />
        </div>
      </div>
    </div>
  );
};
