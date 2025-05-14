import React from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ label, checked, onChange, disabled = false }) => {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.checkbox}
      />
      <span className={styles.customCheckbox}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default Checkbox;
