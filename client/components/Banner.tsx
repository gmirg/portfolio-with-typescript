import React from "react";
import Image from "next/image";
import styles from "../app/page.module.css";
import bulb from "../../public/bulb.png";

export const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.mainHeader}>
        <p className="noMargin">Say Hello!!   My name is </p>
        <h1 className="noMargin">Gerardo Mir</h1>
        <p>and I'm web developer</p>
      </div>
      <div className={styles.mainimage}>
        <Image src={bulb} alt={"bulb"} height={500} />
      </div>
    </div>
  );
};

export default Banner;
