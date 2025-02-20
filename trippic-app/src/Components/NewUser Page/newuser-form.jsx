import React, { use, useState } from "react";

export default function NewUserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>New User Form</h1>
        <div>
          <label>First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label>Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
