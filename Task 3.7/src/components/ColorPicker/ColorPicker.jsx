import styles from "./ColorPicker.module.css";

export function ColorPicker({ value, onChange }) {
  return (
    <label>
      Choose a color
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.colorInput}
      />
    </label>
  );
}
export default ColorPicker;
