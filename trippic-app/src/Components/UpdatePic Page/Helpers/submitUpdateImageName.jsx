import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

const token = localStorage.getItem("token");

const submitUpdateImageName = async (imageId, name, setName, event) => {
  event.preventDefault();

  //if no image ID or new name alert user
  if (!imageId || !name) {
    alert("Need image ID and new name to update image.");
    return;
  }

  try {
    //variable to handle axios request
    const response = await axios.put(
      `${apiUrl}/imageRoute/${imageId}`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`, //
        },
      }
    );
    //set hame field to empty string
    setName("");
    //return response to use in app
    return response;
  } catch (error) {
    //catch and log if errors
    console.error("Update Error", error.message, error.stack);
  }
};

//export function to use in app
export default submitUpdateImageName;
