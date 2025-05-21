import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({ placeholder, value, onChange, ...rest }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Textarea;
