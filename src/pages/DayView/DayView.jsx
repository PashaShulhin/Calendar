import { useState } from "react";
import DayGrid from "widgets/DayGrid/DayGrid";
import DatePicker from "shared/ui/DatePicker/DatePicker";
import CreateEventModal from "features/event/CreateEventModal";
import CalendarList from "widgets/CalendarList/CalendarList";
import "./DayView.css";
import icon from "assets/icon.png";

const DayView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dayView">
      <div className="sidebar">
        <CalendarList />
      </div>

      <div className="mainContent">
        <h1>Day</h1>
        <DatePicker selectedDate={selectedDate} onChange={setSelectedDate} />

        <button className="addEventBtn" onClick={() => setIsModalOpen(true)}>
          <img src={icon} alt="Create" width={20} height={20} />
          Create
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
