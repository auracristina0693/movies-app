import React from "react";
import { ImSad } from "react-icons/im";
import styles from "../Empty/Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.empty}>
      <div>
        <ImSad size={50} />
      </div>
      <h2 className={styles.title}>No results</h2>
    </div>
  );
};
