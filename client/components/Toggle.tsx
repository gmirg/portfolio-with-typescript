import React, { useContext } from "react";
import { ThemeContext } from "../app/contexts/themeContext";

export const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="toggle-btn-section">
      
      <div className={`toggle-checkbox m-vertical-auto`}>
      <div className={`theme-label`}>{(theme.background === 'light' ? 'Light mode': 'Dark mode')}</div>
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="checkbox"
          onChange={toggleTheme} 
          checked={theme.background === "light"} // Check the background theme
        />
        <button
          type="button"
          className={`toggle-btn__input-label`}
          onClick={toggleTheme} // Also use toggleTheme for button click
        ></button>
      </div>
    </div>
  );
};
