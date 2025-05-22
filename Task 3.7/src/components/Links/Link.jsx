import React from "react";
import styles from "./Link.module.css";

const Link = ({ href, children, disabled, target = "_self" }) => {
  if (disabled) {
    return <span className={styles.disabled}>{children}</span>;
  }

  return (
    <a href={href} target={target} className={styles.link}>
      {children}
    </a>
  );
};

export default Link;
