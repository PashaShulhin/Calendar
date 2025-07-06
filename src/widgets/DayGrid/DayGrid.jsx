import { useSelector } from "react-redux";
import { format, parseISO } from "date-fns";
import "./DayGrid.css";

const DayGrid = ({ selectedDate }) => {
  const events = useSelector((state) => state.event.events);
  const calendars = useSelector((state) => state.calendar.calendars);

  const visibleCalendarIds = calendars
    .filter((calendar) => calendar.visible)
    .map((calendar) => calendar.id);

  const selectedDateStr = format(selectedDate, "yyyy-MM-dd");

  const eventsForDay = events.filter((event) => {
    const eventDate = parseISO(event.date);
    return (
      format(eventDate, "yyyy-MM-dd") === selectedDateStr &&
      visibleCalendarIds.includes(event.calendarId)
    );
  });

  return (
    <div className="dayGrid">
      <h2>Events for {selectedDateStr}</h2>
      {eventsForDay.length === 0 && (
        <p className="dayGrid__noEvents">You don’t have events for today.</p>
      )}
      {eventsForDay.map((event) => {
        const eventDate = parseISO(event.date);
        const calendar = calendars.find((c) => c.id === event.calendarId);

        return (
          <div
            key={event.id}
            className="dayGrid__event"
            style={{
              borderColor: calendar?.color || "gray",
            }}
          >
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{format(eventDate, "HH:mm")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DayGrid;
