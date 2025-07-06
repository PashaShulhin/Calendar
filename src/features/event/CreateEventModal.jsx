import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "entities/event/eventSlice";
import "./CreateEventModal.css";

const CreateEventModal = ({ onClose, selectedDate }) => {
  const dispatch = useDispatch();
  const calendars = useSelector((state) => state.calendar.calendars);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("10:00");
  const [calendarId, setCalendarId] = useState("default");

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateStr = selectedDate.toISOString().split("T")[0];
    const date = `${dateStr}T${time}`;
    dispatch(addEvent({ title, description, date, calendarId }));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form
        className="modal-form"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>New event</h3>

        <label>
          Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Calendar:
          <select
            value={calendarId}
            onChange={(e) => setCalendarId(e.target.value)}
          >
            {calendars.map((cal) => (
              <option key={cal.id} value={cal.id}>
                {cal.name}
              </option>
            ))}
          </select>
        </label>

        <div className="modal-actions">
          <button type="submit" className="buttonSave">
            Save
          </button>
          <button type="button" className="buttonCancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventModal;
