import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

const submitUpdateImageName = async (imageId, name, event) => {
  event.preventDefault();

  if (!imageId || !name) {
    alert("Need image ID and new name to update image.");
    return;
  }

  try {
    const response = await axios.put(`${apiUrl}/imageRoute/${imageId}`, {
      name,
    });
    return response;
  } catch (error) {
    console.error("Update Error", error.message, error.stack);
  }
};

export default submitUpdateImageName;
