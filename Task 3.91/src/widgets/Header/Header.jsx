import { useState } from "react";
import CreateEventModal from "features/event/CreateEventModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <h2>📅 Your day</h2>
      <button onClick={() => setOpen(true)}>➕ Add event</button>
      {open && <CreateEventModal onClose={() => setOpen(false)} />}
    </div>
  );
};

export default Header;
