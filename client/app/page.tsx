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
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ThemeProvider>
      <main className={styles.container}>
        <Header openModal={openModal} /> 
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

      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
    </ThemeProvider>
  );
}
