import React, { useState } from "react";
import styles from "../Footer/Footer.module.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="accordion-item" className={styles["accordion-item"]}>
      <button
        id="accordion-button"
        aria-expanded="true"
        onClick={() => setIsActive(!isActive)}
      >
        <span id="accordion-title" className={styles["accordion-title"]}>
          {title}
        </span>
        <span id="accordion-icon" className={styles["icon"]} aria-hidden="true">
          {isActive ? "-" : "+"}
        </span>
      </button>
      {isActive && (
        <div id="accordion-content" className={styles["accordion-content"]}>
          <p id="content">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
