import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "entities/event/eventSlice";

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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="modal-form"
        style={{ background: "#fff", padding: 20, minWidth: 300 }}
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
          Час:
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

        <div style={{ marginTop: 10 }}>
          <button type="submit">Save it</button>
          <button type="button" onClick={onClose} style={{ marginLeft: 10 }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventModal;
