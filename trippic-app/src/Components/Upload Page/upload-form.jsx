import React, { useState } from "react";
import sendUploadImage from "./Helpers/sendUploadImage";

export default function UploadFrom() {
  //creating useState variables to use and set in app
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  //getting user ID from URL
  const userId = new URLSearchParams(window.location.search).get("userId");

  //variable to call when uploading file
  const handleFileChange = (e) => {
    //variable to extract first file from file list
    const file = e.target.files[0];
    //if the file exists
    if (file) {
      //set selected file to be file
      setSelectedFile(file);
    }
  };

  //async function called when user submits
  const handleSubmit = async (event) => {
    event.preventDefault();

    //if no file or name alert user
    if (!selectedFile || !fileName) {
      alert("Please select a image and provide a name");
      return;
    }

    try {
      //variable to handle helper function with passed in variables
      const response = sendUploadImage(
        selectedFile,
        setSelectedFile,
        fileName,
        setFileName,
        userId,
        event
      );
      //log with resopnse if successful
      console.log("File uploaded successfully", response);
    } catch (error) {
      //catch if error and log
      console.error("Error uploading file.", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-sigmar text-xl text-red-700">
            Upload a File:
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
        </div>
        <div className="flex flex-col">
          <label className="font-sigmar text-xl text-red-700">File Name:</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
          ></input>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="cursor-pointer mt-8 border-2 rounded-4xl px-10 py-4 font-swanky bg-blue-400 text-white text-xl tracking-widest hover:bg-blue-300 hover:text-2xl hover:font-extrabold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
