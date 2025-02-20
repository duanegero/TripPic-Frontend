import React, { useState, useEffect } from "react"; //importing react and usestate
import { useLocation } from "react-router-dom"; //importing uselocation

import getImageData from "./Helpers/getImageData";
import openUpdateName from "./Helpers/openUpdateName";

//import dayjs and relativetime to adjust time in app
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { GrUpdate } from "react-icons/gr";

export default function AllImagesTable() {
  //creating a variable to handle location
  const location = useLocation();

  const [imageData, setImageData] = useState("");
  const [error, setError] = useState(null);

  // Extract userId from query params
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Get the userId parameter

  //use effect used to get images
  useEffect(() => {
    if (userId) {
      //variable to handle async function
      const getImages = async () => {
        try {
          //variable to handle helper function call with passed in user ID
          const data = await getImageData(userId);
          //log and set data for user
          console.log("Fetched Data", data);
          setImageData(data);
        } catch (error) {
          //catch and log if any errors
          console.error("Error fetching image data.");
          setError("Failed to fetch image data.");
        }
      };
      //call function as soon as window opens
      getImages();
    }
    //re-call function when ever the user ID changes
  }, [userId]);

  return (
    <>
      <div className="overflow-auto max-h-[500px] border border-blue-400 rounded-lg mt-10">
        {error && <p className="text-red-600">{error}</p>}
        <table className="min-w-full text-center">
          <thead className="bg-blue-400 sticky top-0 text-white text-3xl font-swanky tracking-wider">
            <tr>
              <th>name:</th>
              <th>created at:</th>
              <th>update</th>
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
                      className="cursor-pointer text-2xl"
                      onClick={() => openUpdateName(item.id)}
                    >
                      <GrUpdate />
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
