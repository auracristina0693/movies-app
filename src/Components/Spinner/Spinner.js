import React from "react";
import { ImSpinner6 } from "react-icons/im";
import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner6 className={styles.spinning} Size={60} />
    </div>
  );
};
