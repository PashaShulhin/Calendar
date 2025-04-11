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
    const passwordRef = passwordRef.current.value;
    const confirmPasswordRef = confirmPasswordRef.current.value;
    alert(`Uncontrolled: Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <input type="text" placeholder="Name" ref={nameRef} />
      <br></br>
      <input type="email" placeholder="Email" ref={emailRef} />
      <br></br>
      <input
        type="password"
        placeholder="Enter your password"
        ref={passwordRef}
      />
      <br></br>
      <input
        type="password"
        placeholder="Enter your password"
        ref={confirmPasswordRef}
      />
      <br></br>
      <button className="button1" type="submit">
        Register
      </button>
    </form>
  );
}

export default UncontrolledForm;
