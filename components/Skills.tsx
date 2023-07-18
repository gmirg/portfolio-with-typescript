import dynamic from "next/dynamic";
import styles from "../app/page.module.css";
import { useState } from "react";


const Loader = dynamic(() => import("./Shuffle"), {
  ssr: false,
});
const [reshuffle, setReshuffle] = useState();

export const Skills = () => {
  return (
    <>
      <div className={styles.skills} onMouseOver={reshuffle}>
        <Loader />
      </div>
    </>
  );
};
