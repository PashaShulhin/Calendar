import React, { useState } from "react";
import Link from "./components/Links/Link";
import Input from "./components/Input/Input";
import Textarea from "./components/Textarea/Textarea";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import checkIcon1 from "./assets/Icons/Icon.png";
import checkIcon2 from "./assets/Icons/Icon (1).png";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import Dropdown from "./components/Dropdown/Dropdown";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Modal from "./components/Modal/Modal";
import Datepicker from "./components/Datepicker/Datepicker";
import Toast from "./components/Toast/Toast";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [color, setColor] = useState("#ff0000");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [showToast, setShowToast] = useState(false);

  const timeOptions = [
    { label: "09:00", value: "09:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
    { label: "13:00", value: "13:00" },
  ];

  return (
    <>
      <div>
        <Button variant="primary" onClick={() => alert("Clicked!")}>
          Button
        </Button>

        <Button variant="primary" disabled>
          Button
        </Button>

        <Button variant="primary" onClick={() => alert("Clicked!")}>
          <img
            src={checkIcon1}
            alt="icon"
            style={{ width: "16px", height: "16px" }}
          />
          Button
        </Button>

        <Button variant="primary" disabled>
          <img
            src={checkIcon1}
            alt="icon"
            style={{ width: "16px", height: "16px" }}
          />
          Button
        </Button>

        <Button variant="secondary" onClick={() => alert("Clicked!")}>
          Button
        </Button>

        <Button variant="secondary" disabled>
          Button
        </Button>

        <Button variant="secondary" onClick={() => alert("Clicked!")}>
          <img
            src={checkIcon2}
            alt="icon"
            style={{ width: "16px", height: "16px" }}
          />
          Button
        </Button>

        <Button variant="secondary" disabled>
          <img
            src={checkIcon2}
            alt="icon"
            style={{ width: "16px", height: "16px" }}
          />
          Button
        </Button>
      </div>

      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <section style={{ marginBottom: "2rem" }}>
          <h2>🔗 Link</h2>
          <Link href="https://google.com" target="_blank">
            Link
          </Link>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2>🔤 Input</h2>
          <Input
            label="Username*"
            placeholder="Enter your username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            error={inputValue.length < 4}
            errorMessage={inputValue.length < 4 ? "Username is too short" : ""}
          />

          <Input
            label="Password*"
            type="password"
            placeholder="Enter your password"
            value=""
            onChange={() => {}}
            error
            errorMessage="Password is required"
          />
        </section>

        <section>
          <h2>📝 Textarea</h2>
          <Textarea
            placeholder="Enter your message"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </section>

        <section>
          <h2>☑️ Checkbox</h2>
          <Checkbox
            label="I agree to terms"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </section>

        <section>
          <h2>🔽 SelectMenu</h2>
          <SelectMenu
            label="Choose a time"
            options={timeOptions}
            onChange={() => {}}
          />
          <br />
          <SelectMenu
            label="Disabled menu"
            options={[
              { label: "Item 1", value: "1" },
              { label: "Item 2", value: "2" },
            ]}
            disabled
          />
        </section>

        <section>
          <h2>⬇️ Dropdown</h2>
          <Dropdown label="Week">
            <Dropdown.Item onClick={() => alert("Day clicked")}>
              Day
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Week clicked")}>
              Week
            </Dropdown.Item>
          </Dropdown>
        </section>

        <section>
          <h2>🎨 ColorPicker</h2>
          <ColorPicker value={color} onChange={setColor} />
          <p>Selected color: {color}</p>
        </section>

        <section>
          <h2>📅 Datepicker</h2>
          <Datepicker value={selectedDate} onChange={setSelectedDate} />
          <p>Selected date: {selectedDate}</p>
        </section>

        <section>
          <h2>💬 Modal</h2>
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h3>Hello from Modal!</h3>
            <p>This is some modal content.</p>
          </Modal>
        </section>

        <section>
          <h2>📢 Toast</h2>
          <Button variant="secondary" onClick={() => setShowToast(true)}>
            Show Toast
          </Button>
          {showToast && (
            <Toast
              type="success"
              message="This is a toast message!"
              onClose={() => setShowToast(false)}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default App;
