import React, { useContext } from "react";
import { ThemeContext } from "../app/contexts/themeContext";
import styles from '../app/styles/Toogle.module.css'

export const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleBtnClass = theme.background === 'light' ? styles.lightMode : styles.darkMode;

  return (
    <div className={styles.toggleBtnSection}>
      <div className={styles.toggleCheckbox}>
        <div className={styles.themeLabel}>
          {theme.background === 'light' ? 'Light mode' : 'Dark mode'}
        </div>
        <input
          className={styles.toggleBtnInput}
          type="checkbox"
          name="checkbox"
          onChange={toggleTheme}
          checked={theme.background === "light"} 
        />
        <button
          aria-label="Toggle screen mode"
          type="button"
          className={`${styles.toggleBtnInputLabel} ${toggleBtnClass}`}
          onClick={toggleTheme}
        ></button>
      </div>
    </div>
  );
};
