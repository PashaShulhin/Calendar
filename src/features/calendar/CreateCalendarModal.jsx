import { useState } from "react";
import "./CreateCalendarModal.css";

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
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="modal-form"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{initialData.id ? "Edit calendar" : "New calendar"}</h3>

        <label>
          Name:
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

        <div className="modal-actions">
          <button className="buttonSave" type="submit">
            Save
          </button>
          <button className="buttonCancel" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCalendarModal;
