import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCalendar,
  updateCalendar,
  deleteCalendar,
  toggleCalendarVisibility,
} from "entities/calendar/calendarSlice";
import CreateCalendarModal from "../../features/calendar/CreateCalendarModal";

const CalendarList = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCalendar, setEditingCalendar] = useState(null);

  const openNewModal = () => {
    setEditingCalendar(null);
    setModalOpen(true);
  };

  const openEditModal = (calendar) => {
    setEditingCalendar(calendar);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingCalendar(null);
  };

  const handleSave = (data) => {
    if (data.id) {
      dispatch(updateCalendar(data));
    } else {
      dispatch(addCalendar(data));
    }
  };

  return (
    <div>
      <h2>Calendars</h2>
      {calendars.map((cal) => (
        <div
          key={cal.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
            borderBottom: "1px solid #ccc",
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={cal.visible}
              onChange={() => dispatch(toggleCalendarVisibility(cal.id))}
            />
            <span
              style={{ marginLeft: 8, color: cal.color, fontWeight: "bold" }}
            >
              {cal.name}
            </span>
          </div>
          <div>
            {cal.id !== "default" && (
              <>
                <button onClick={() => openEditModal(cal)}>Редагувати</button>
                <button
                  onClick={() => dispatch(deleteCalendar(cal.id))}
                  style={{ marginLeft: 8, color: "red" }}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      ))}

      <button onClick={openNewModal} style={{ marginTop: 10 }}>
        Add calendar
      </button>

      {modalOpen && (
        <CreateCalendarModal
          onClose={closeModal}
          onSave={handleSave}
          initialData={editingCalendar}
        />
      )}
    </div>
  );
};

export default CalendarList;
