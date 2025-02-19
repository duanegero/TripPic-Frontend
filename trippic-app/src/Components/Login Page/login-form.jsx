import React, { useState } from "react"; //importing react and useState
import { useNavigate } from "react-router-dom"; //importing use nav to go from page to page

//importing helper function to use in app
import submitLogin from "./Helpers/submitLogin";
import loginButtonClassName from "../Buttons/btn-styles";

export default function LoginForm() {
  //useState variables to set and handle user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //variable to handle navigation through app
  const navigate = useNavigate();

  //variable to be called when user submits
  const handleSubmit = (event) => {
    //call helper function with passed in variables
    submitLogin(event, email, setEmail, password, setPassword, navigate);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-fit pt-28">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-96 border-2 border-gray-300 p-0 rounded-lg shadow-lg"
      >
        <div className="bg-blue-400 w-full flex justify-center items-center pt-10 pb-6 pl-4">
          <p className="text-6xl font-swanky text-white tracking-widest">
            Login
          </p>
        </div>
        <div className="flex flex-col mt-10">
          <label className="font-swanky tracking-widest text-2xl">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Type your email"
            className="p-1 mb-6 mt-1 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform focus:scale-105"
          ></input>
        </div>
        <div className="flex flex-col pt-6 mb-8">
          <label className="font-swanky tracking-widest text-2xl">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Type your password"
            className="p-1 mb-6 mt-1 w-60 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform focus:scale-105"
          ></input>
        </div>
        <div className="mb-10">
          <button class={loginButtonClassName()}>Login</button>
        </div>
      </form>
      <button>Register</button>
    </div>
  );
}
