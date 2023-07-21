import dynamic from "next/dynamic";
import styles from "../app/page.module.css";
import { useState } from "react";

export const Skills = () => {
  const [reshuffle, setReshuffle] = useState();
  const Loader = dynamic(() => import("./Shuffle"), {
    ssr: false,
  });
  return (
    <>
      <div className={styles.skills} onMouseOver={reshuffle}>
        <Loader />
      </div>
    </>
  );
};
