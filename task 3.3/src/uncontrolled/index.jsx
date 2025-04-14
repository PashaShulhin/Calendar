import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      alert("Uncontrolled: Passwords do not match!");
      return;
    }

    alert(`Uncontrolled: Name: ${name}, Email: ${email}`);
  };

  return (
    <form className="uncontrolledForm" onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>

      <input className="element" type="text" placeholder="Name" ref={nameRef} />

      <input
        className="element"
        type="email"
        placeholder="Email"
        ref={emailRef}
      />

      <input
        className="element"
        type="password"
        placeholder="Enter your password"
        ref={passwordRef}
      />

      <input
        className="element"
        type="password"
        placeholder="Confirm your password"
        ref={confirmPasswordRef}
      />

      <button className="buttonUncontrolled" type="submit">
        Register
      </button>
    </form>
  );
}

export default UncontrolledForm;
