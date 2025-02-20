import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

const token = localStorage.getItem("token");

//async function with passed in variables
const sendUploadImage = async (
  selectedFile,
  setSelectedFile,
  fileName,
  setFileName,
  userId,
  event
) => {
  event.preventDefault();

  //variable to handle data that will be passed in axios request
  const formData = new FormData();
  //appending the fields the api will expect
  formData.append("image", selectedFile);
  formData.append("name", fileName);
  formData.append("user_id", userId);

  try {
    //variable to handle axios request, passed in data
    const uploadResponse = await axios.post(`${apiUrl}/imageRoute`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    //if upload status ok, log, alert and clear the fields
    if (uploadResponse.status === 201) {
      console.log("Image uploaded successfully", uploadResponse.data);
      setSelectedFile([]);
      setFileName("");
      alert("Image uploaded successfully.");
      return uploadResponse.data;
    }
  } catch (error) {
    //catch and log if any hours
    console.error("Error uploading image:", error);
    throw error;
  }
};

//export function to use else where
export default sendUploadImage;
