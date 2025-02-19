import React, { useState } from "react";

import submitUpdateImageName from "./Helpers/submitUpdateImageName";

export default function UpdateNameForm() {
  const [name, setName] = useState("");

  const imageId = new URLSearchParams(window.location.search).get("id");

  const handleSubmit = (event) => {
    try {
      submitUpdateImageName(imageId, name, event);
      alert("Updated image name:", name);
    } catch (error) {
      console.error("Error submiting new name.", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-24">
          <label className="font-sigmar text-xl text-red-700">Name:</label>
          <input
            className="mb-4 border rounded-lg p-2 cursor-pointer"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <button
            type="submit"
            className="cursor-pointer mt-8 border-2 rounded-4xl px-10 py-4 font-swanky bg-blue-400 text-white text-xl tracking-widest hover:bg-blue-300 hover:text-2xl hover:font-extrabold"
          >
            update image
          </button>
        </div>
      </form>
    </div>
  );
}
