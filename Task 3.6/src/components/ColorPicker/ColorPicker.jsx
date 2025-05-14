import styles from "./ColorPicker.module.css";

export function ColorPicker({ value, onChange }) {
  return (
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.colorInput}
    />
  );
}
export default ColorPicker;