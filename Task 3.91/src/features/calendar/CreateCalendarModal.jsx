import { useState } from "react";

const CreateCalendarModal = ({ onClose, onSave, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [color, setColor] = useState(initialData.color || "#3f51b5");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({ ...initialData, name, color });
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        style={{ background: "#fff", padding: 20, minWidth: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{initialData.id ? "Edit calendar" : "New calendar"}</h3>

        <label>
          Назва:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
        </label>

        <label>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <div style={{ marginTop: 10 }}>
          <button type="submit">Зберегти</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCalendarModal;
