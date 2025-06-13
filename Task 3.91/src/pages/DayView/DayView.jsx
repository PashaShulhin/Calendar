import { useState } from "react";
import DayGrid from "widgets/DayGrid/DayGrid";
import DatePicker from "shared/ui/DatePicker/DatePicker";
import CreateEventModal from "features/event/CreateEventModal";
import CalendarList from "widgets/CalendarList/CalendarList";

const DayView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          flex: "0 0 250px",
          padding: 20,
          borderRight: "1px solid #ccc",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <CalendarList />
      </div>

      <div style={{ flex: 1, padding: 20 }}>
        <h1>Day</h1>

        <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />

        <button
          onClick={() => setIsModalOpen(true)}
          style={{ margin: "10px 0" }}
        >
          ➕ Add event
        </button>

        <DayGrid selectedDate={selectedDate} />

        {isModalOpen && (
          <CreateEventModal
            selectedDate={selectedDate}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default DayView;
