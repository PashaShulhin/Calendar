import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={ref}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {label}
      </button>
      {isOpen && <div className={styles.menu}>{children}</div>}
    </div>
  );
}

Dropdown.Item = function DropdownItem({ children, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      {children}
    </div>
  );
};
export default Dropdown;