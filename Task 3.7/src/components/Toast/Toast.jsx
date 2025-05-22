import { useEffect } from "react";
import styles from "./Toast.module.css";

export function Toast({ type = "info", message, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <div className={`${styles.toast} ${styles[type]}`}>{message}</div>;
}
export default Toast;
