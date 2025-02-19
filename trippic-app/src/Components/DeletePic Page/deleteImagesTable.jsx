import React, { useState, useEffect } from "react"; //importing react and usestate
import { useLocation } from "react-router-dom"; //importing uselocation

import getImageData from "../UpdatePic Page/Helpers/getImageData";
import submitDeletePic from "./Helpers/submitDeletePic";

//import dayjs and relativetime to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { RiDeleteBin2Line } from "react-icons/ri";

export default function DeleteImagesTable() {
  //creating a variable to handle location
  const location = useLocation();

  const [imageData, setImageData] = useState("");
  const [error, setError] = useState(null);

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //user effect used to get images base of user ID
  useEffect(() => {
    if (userId) {
      //variable to define async function
      const getImages = async () => {
        try {
          //variable to handle helper function with passed in variable
          const data = await getImageData(userId);
          //log and set image data with returned data
          console.log("Fetched Data", data);
          setImageData(data);
        } catch (error) {
          //catch and log if any error, set error
          console.error("Error fetching image data.");
          setError("Failed to fetch image data.");
        }
      };
      //immediately call the async function to fetch data
      getImages();
    }
    //run when ever user ID changes
  }, [userId]);

  const handleDelete = async (s3_url) => {
    //ask user to confirm
    const isConfirmed = window.confirm("Are you sure you want to delete pic?");
    if (!isConfirmed) {
      return;
    }

    try {
      //variable to handle helper function
      const result = await submitDeletePic({ s3_url });
      //if results return set image data with deleted filtered out
      if (result) {
        setImageData(imageData.filter((item) => item.s3_url !== s3_url));
        alert("pic deleted successfully.");
      }
    } catch (error) {
      //catch if error log and alert user
      console.error("Error deleting pic:", error);
      alert("An error occurred while deleting image.");
    }
  };

  return (
    <>
      <div className="overflow-auto max-h-[500px] border border-blue-400 rounded-lg mt-10">
        {error && <p className="text-red-600">{error}</p>}
        <table className="min-w-full text-center">
          <thead className="bg-blue-400 sticky top-0 text-white text-3xl font-swanky tracking-wider">
            <tr>
              <th>name:</th>
              <th>created at:</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-blue-400 bg-white">
            {imageData.length > 0 ? (
              imageData.map((item, index) => (
                <tr className="even:bg-gray-100" key={index}>
                  <td className="px-4 py-4 font-sigmar tracking-wider">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 font-sigmar tracking-wider">
                    {dayjs(item.created_at).fromNow()}
                  </td>
                  <td>
                    <button
                      className="cursor-pointer text-3xl text-red-600"
                      onClick={() => handleDelete(item.s3_url)}
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">No image data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
