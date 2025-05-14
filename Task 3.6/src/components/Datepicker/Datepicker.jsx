import styles from "./Datepicker.module.css";

export function Datepicker({ value, onChange }) {
  return (
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.input}
    />
  );
}
export default Datepicker;