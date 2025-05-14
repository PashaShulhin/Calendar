import React from "react";
import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  const classNames = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
