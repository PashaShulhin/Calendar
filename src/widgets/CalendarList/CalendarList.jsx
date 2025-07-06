import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCalendar,
  updateCalendar,
  deleteCalendar,
  toggleCalendarVisibility,
} from "entities/calendar/calendarSlice";
import CreateCalendarModal from "../../features/calendar/CreateCalendarModal";
import "./CalendarList.css";
import { generateMonthDays } from "../../constants/calendarUtils";

const CalendarList = () => {
  const calendars = useSelector((state) => state.calendar.calendars);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCalendar, setEditingCalendar] = useState(null);

  const today = new Date();
  const days = generateMonthDays(today);

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
    closeModal();
  };

  return (
    <div className="calendarListWrapper">
      <div className="monthCalendar">
        <div className="monthCalendar__header">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <div key={day} className="monthCalendar__dayName">
              {day}
            </div>
          ))}
        </div>

        <div className="monthCalendar__grid">
          {days.map(({ date, isCurrentMonth }, index) => {
            const isToday = date.toDateString() === today.toDateString();
            return (
              <div
                key={index}
                className={`monthCalendar__cell ${isToday ? "today" : ""} ${
                  !isCurrentMonth ? "notCurrentMonth" : ""
                }`}
              >
                {date.getDate()}
              </div>
            );
          })}
        </div>
      </div>

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
                <button
                  className="CalendarListBtnChange"
                  onClick={() => openEditModal(cal)}
                >
                  Change
                </button>
                <button
                  className="CalendarListBtnDelete"
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

      <button
        className="btnAddCalendar"
        onClick={openNewModal}
        
      >
        Add calendar
      </button>

      {modalOpen && (
        <CreateCalendarModal
          onClose={closeModal}
          onSave={handleSave}
          initialData={editingCalendar || {}}
        />
      )}
    </div>
  );
};

export default CalendarList;
