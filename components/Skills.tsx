import dynamic from "next/dynamic";
import styles from "../app/page.module.css";
import Shuffle from "./Shuffle";

const Loader = dynamic(() => import("./Shuffle"), {
  ssr: false,
});

export const Skills = () => {
  return (
    <>
      <div className={styles.skills}>
        <Loader />
      </div>
    </>
  );
};
