import React, { useRef } from "react";

const UncontrolledFormWithRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log("Submitted:", { name, email });

    // reset
    nameRef.current.value = "";
    emailRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Uncontrolled (With Ref)</h2>
        <input type="text" ref={nameRef} placeholder="Name" />
        <input type="text" ref={emailRef} placeholder="Email" /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormWithRef;
