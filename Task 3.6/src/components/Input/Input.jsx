import React, { useState } from "react";
import styles from "./Input.module.scss";

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
  if (isFocused) inputClass += ` ${styles.focused}`;
  if (isFilled) inputClass += ` ${styles.filled}`;
  if (disabled) inputClass += ` ${styles.disabled}`;
  if (error) inputClass += ` ${styles.error}`;

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        className={inputClass}
        value={value}
        onChange={disabled ? undefined : onChange}
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
