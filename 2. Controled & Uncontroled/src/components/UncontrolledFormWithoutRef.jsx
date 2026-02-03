import React from "react";

const UncontrolledFormWithoutRef = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log("Submitted Without Ref:", { name, email });
    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Uncontrolled (No Ref)</h2>

        <input name="name" placeholder="Name"></input>
        <input name="email" placeholder="Email"></input> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormWithoutRef;
