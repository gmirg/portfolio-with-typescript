"use client";
import { useEffect, useState } from "react";
import Html from "./skills/Html";
import CSS from "./skills/CSS";
import JS from "./skills/JS";
import TS from "./skills/TS";
import Node from "./skills/Node";
import Reakt from "./skills/Reakt";
import Mongo from "./skills/Mongo";
import Sql from "./skills/Sql";
import Jest from "./skills/Jest";
import Vite from "./skills/Vite";
import Next from "./skills/Next";
import Nest from "./skills/Nest";
import styles from "../app/page.module.css";
import { TiltCard } from "./TiltCard";

const Shuffle = () => {
  const skills = [
    <Html />,
    <CSS />,
    <JS />,
    <TS />,
    <Node />,
    <Reakt />,
    <Mongo />,
    <Sql />,
    <Jest />,
    <Vite />,
    <Nest />,
    <Next />,
  ];

  const shuffle = (array: any[]) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const Squares = ({ shuffledSquares }: { shuffledSquares: any }) =>
    shuffledSquares.map((square: any, i: any) => (
      <TiltCard key={`${square}-${i}`}>
        <div>{square}</div>
      </TiltCard>
    ));
  const [shuffledSkills, setShuffledSkills] = useState(shuffle(skills));

  const reshuffleSkills = () => {
    const newShuffledSkills = shuffle(skills);
    setShuffledSkills(newShuffledSkills);
    console.log(shuffledSkills);
  };

  return (
    <>
    <div className="buttonContainer">
        <button
          onClick={reshuffleSkills}
          className={styles.button}
          type="button"
        >
          Reshuffle!!
        </button>
      </div>
    <div className={styles.shuffler}>     
        <Squares shuffledSquares={shuffledSkills} />
    </div>
    </>
  );
};
export default Shuffle;
