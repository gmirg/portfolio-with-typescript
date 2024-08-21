import dynamic from "next/dynamic";
import styles from "../app/page.module.css";
import Shuffle from "./Shuffle";
import { useState } from "react";

export const Skills = () => {
  const [showLoader, setShowLoader] = useState(false);
  const Loader = dynamic(() => import("./Shuffle"), {
    ssr: false,
  });
  return (
        <Loader />
  );
};
