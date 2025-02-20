import axios from "axios";
import React, { useEffect, useState } from "react";
const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

//importing icons from react
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";

const token = localStorage.getItem("token");

export default function ImagesTable({ userId }) {
  //usestate variables to set later in app
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //useEffect hook to rendering or userID change
  useEffect(() => {
    //async function to fetch images
    const fetchImages = async () => {
      try {
        //variable to handle axios request to api
        const response = await axios.get(
          `${apiUrl}/imageRoute/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        //set images with response from api
        setImages(response.data.userImages);
      } catch (error) {
        //catch and log if any errors
        console.error("Error fetching images.", error);
      }
    };
    //only fecth if userId passed
    if (userId) {
      fetchImages();
    }
    //if userId changes run function
  }, [userId]);

  //function to handle next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  //function to handle previous button click
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {images.length === 0 ? (
        <p>No images available</p>
      ) : (
        <div className="relative">
          <div className="flex justify-center items-center">
            <p className="font-swanky text-4xl tracking-wider mb-4">
              {images[currentIndex].name}
            </p>
          </div>

          <img
            src={images[currentIndex].s3_url}
            alt={`Image ${currentIndex + 1}`}
            className="w-96 h-84 object-cover rounded-lg shadow-lg"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="px-8 py-2 bg-blue-400 text-white text-4xl  rounded-lg shadow-md hover:bg-blue-300 cursor-pointer"
            >
              <TbPlayerTrackPrev />
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-2 bg-blue-400 text-white text-4xl  rounded-lg shadow-md hover:bg-blue-300 cursor-pointer"
            >
              <TbPlayerTrackNext />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
