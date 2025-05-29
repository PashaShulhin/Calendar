import React, { useState } from "react";
import styles from "./Input.module.css";

const Input = ({
  value,
  onChange,
  placeholder = "Enter text",
  disabled = false,
  error = false,
  errorMessage = "",
  label = "",
  type = "text",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = value && value.trim().length > 0;

  let inputClass = styles.input;
  switch (true) {
    case isFocused:
      inputClass += ` ${styles.focused}`;
      break;
    case isFilled:
      inputClass += ` ${styles.filled}`;
      break;
    case disabled:
      inputClass += ` ${styles.disabled}`;
      break;
    case error:
      inputClass += ` ${styles.error}`;
      break;
    default:
      break;
  }

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        value={value}
        onChange={!disabled && onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => !disabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {error && errorMessage && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
