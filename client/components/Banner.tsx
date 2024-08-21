import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import gerar from "../../public/gerar.png";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.mainHeader}>
        
        <h1 className="noMargin">Gerardo Mir</h1>
        <h3 className="noMargin">FullStack MERN Developer</h3>
        <p>and I'm web developer</p>
      </div>
      <div className={styles.mainimage}>
        <Image src={gerar} alt={"Gerardo mir"} height={500} />
      </div>
    </div>
  );
};

export default Banner;
