import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Controlled: Passwords do not match!");
      return;
    }

    alert(`Controlled: Name: ${name}, Email: ${email}`);
  };

  return (
    <form className="controlledForm" onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <input
        className="element"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="element"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="element"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        className="element"
        type="password"
        placeholder="Confirm your password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button className="buttonControlled" type="submit">
        Register
      </button>
    </form>
  );
}

export default ControlledForm;
