import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", { name, email });

    // reset
    setName("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Controlled Form</h2>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name.."
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email.."
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
