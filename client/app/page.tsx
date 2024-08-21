"use client";
import { ThemeProvider } from "./contexts/themeContext";

import styles from "./page.module.css";
import Header from "../components/Header";
import Main from "../components/Main";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider>
      <main className={styles.container}>
        <Header />
        <div className={styles.description}>
          <Banner />
          <Main />
          <Skills />
          <Portfolio />
        </div>

        <div className={styles.center}></div>

        <div className={styles.grid}></div>
      </main>
      <footer>
        <Contact />
      </footer>
    </ThemeProvider>
  );
}
