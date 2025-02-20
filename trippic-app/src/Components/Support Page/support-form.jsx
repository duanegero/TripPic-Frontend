import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import submitRequest from "./Helpers/submitRequest";
import { FiSend } from "react-icons/fi";

export default function SupportForm() {
  //variable to handle page locatioan
  const location = useLocation();
  //use state variable to set and handle request
  const [request, setRequest] = useState("");

  //variables to get and handle user ID
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId");

  //function to handle submit from form
  const handleSubmit = (event) => {
    submitRequest(event, request, setRequest, userId);
  };

  return (
    <div className="mt-28">
      <div className="flex flex-col justify-center items-center font-sigmar text-xl text-red-600">
        <p className="text-center max-w-md">
          detail the problem you're have and our support team will get back to
          you.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-16">
          <label className="text-3xl tracking-wider font-bold font-swanky mb-4">
            Request:
          </label>
          <textarea
            onChange={(e) => setRequest(e.target.value)}
            value={request}
            type="text"
            placeholder="Type here..."
            class="w-1/2 h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
          <button className="text-2xl mt-6 border-2 rounded-3xl px-10 hover:text-red-600 hover:bg-gray-100 cursor-pointer">
            <FiSend />
          </button>
        </div>
      </form>
    </div>
  );
}
