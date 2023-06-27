import styles from "../app/page.module.css";
import Html from "./skills/Html"
import CSS from "./skills/CSS"
import JS from "./skills/JS"
import TS from "./skills/TS"
import Node from "./skills/Node";
import Reakt from "./skills/Reakt";
import Mongo from "./skills/Mongo";
import Sql from "./skills/Sql";
import React from "react";
import Jest from "./skills/Jest";
import Vite from "./skills/Vite";
import Next from "./skills/Next";
import Nest from "./skills/Nest";

export const Skills = () => {
  return (
    <div className={styles.skills}>
      <Html/>
      <CSS/>
      <JS />
      <TS />
      <Node />
      <Reakt />
      <Mongo />
      <Sql />
      <Jest />
      <Vite />
      <Next />
      <Nest />
    </div>
  );
};
