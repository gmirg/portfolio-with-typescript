import React from "react";
import styles from "../../app/page.module.css";

const Reakt = () => {
  return (
    <svg
    className={styles.react}
    width="275"
    height="275"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-12.5 -10 25 20"
  >
    <circle cx="0" cy="0" r="2.05" fill="#fff" />
    <g stroke="#fff" stroke-width="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
  )
}

export default Reakt
