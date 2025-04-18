import React, { useState } from "react";
import { useGameStore } from "../store/useGameStore";

const Chat = ({ player }) => {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useGameStore();

  const handleSend = () => {
    if (input.trim()) {
      sendMessage({ from: player, text: input });
      setInput("");
    }
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div key={i}>
            <strong>{m.from}:</strong> {m.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type..."
      />
      <button className="send" onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chat;
