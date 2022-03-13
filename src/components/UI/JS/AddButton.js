import React from "react";
import styles from "../CSS/AddButton.module.css";

const AddButton = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default AddButton;
