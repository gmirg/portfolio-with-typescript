"use client";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import { defaultTheme } from "../components/themes/defaultTheme";
import { GlobalStyle } from "../components/themes/globalStyles";
import type { AppProps } from "next/app";

import styles from "./page.module.css";
import Header from "../components/Header";
import Main from "../components/Main";
import { Banner } from "../components/Banner";
import { Skills } from "../components/Skills";

export default function Home({ Component, pageProps }: AppProps) {
  const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps}>
        <main className={styles.container}>
          <Header />
          <div className={styles.description}>
            <Banner />
            <Main />
            <Skills />
            <div></div>
          </div>

          <div className={styles.center}></div>

          <div className={styles.grid}></div>
        </main>
        </Component>
    </ThemeProvider>
  );
}
