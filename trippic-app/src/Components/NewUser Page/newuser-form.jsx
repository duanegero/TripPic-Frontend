import React, { useState } from "react";
import submitNewUser from "./Helpers/submitNewUser";

export default function NewUserForm() {
  //creating use state variables to handle user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //defining async function to run on submit, with passed in variables
  const handleSubmit = async (event) => {
    submitNewUser(
      event,
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      password,
      setPassword
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-sigmar text-xl text-red-700">
            First Name:
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
          <label className="font-sigmar text-xl text-red-700">Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
          <label className="font-sigmar text-xl text-red-700">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
          <label className="font-sigmar text-xl text-red-700">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
          <button
            type="submit"
            className="cursor-pointer mt-8 border-2 rounded-4xl px-10 py-4 font-swanky bg-green-400 text-white text-2xl tracking-widest hover:bg-green-300 hover:text-3xl hover:font-extrabold"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
