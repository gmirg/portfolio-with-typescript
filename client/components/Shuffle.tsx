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
 
    
  // // Fischer-Yates/Knuth shuffle algorithm
  // const shuffle : any | string = (array : any[] = []) => {
  //   let randIndex;
  //   for (
  //     let currentIndex = array.length - 1;
  //     currentIndex > 0;
  //     currentIndex--
  //   ) {
  //     randIndex = Math.floor(Math.random() * (currentIndex + 1));
  //     [array[currentIndex], array[randIndex]] = [
  //       array[randIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // };
  const shuffle = (array:any[]) => {
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
  // const Squares = ( {shuffledSquares  = [] } : any ) =>
  //   shuffledSquares.map((square: ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined, i: any) => (
  //     <div key={`${square}-${i}`}>{square}</div>
  //   ));
  const Squares = ({ shuffledSquares }: any ) =>
  shuffledSquares.map((square : any, i: any) => (
    <div key={`${square}-${i}`}>{square}</div>
  ));

  const SkillsShuffler = () => {
    const [shuffledSkills, setShuffledSkills] = useState(() => shuffle(skills));
    
    return <Squares shuffledSquares={shuffledSkills} />;
  };
 
  return (
    <div className={styles.shuffler}>
      <SkillsShuffler />
    </div>
  );
  
};
export default Shuffle ;