
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import styles from "../app/page.module.css";
import { Toggle } from "./Toggle";

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openModal }) => {
  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt={"logo"} width={70} height={70} />
      <button className={styles.button} type="button" onClick={openModal}>
        Connect with me
      </button>
      <Toggle />
    </nav>
  );
};

export default Header;
