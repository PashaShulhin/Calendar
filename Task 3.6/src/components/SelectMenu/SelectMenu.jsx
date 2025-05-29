import React from "react";

function SelectMenu({ label, options = [], onChange, disabled }) {
  return (
    <div>
      <label>{label}</label>
      <select onChange={(e) => onChange(e.target.value)} disabled={disabled}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectMenu;
