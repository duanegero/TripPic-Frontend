import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

const token = localStorage.getItem("token");

//define async function to use in app
const submitDeletePic = async ({ s3_url }) => {
  //if not url passed in alert user
  if (!s3_url) {
    alert("Need url key to proceed.");
    return;
  }

  //function to extract key from url
  const extractFileKey = (url) => {
    const urlParts = url.split("amazonaws.com/");
    if (urlParts.length > 1) {
      return urlParts[1];
    }
    return null;
  };

  //variable to handle extracted key from url
  const fileKey = extractFileKey(s3_url);

  //if no key alert user
  if (!fileKey) {
    alert("Invalid S3 URL. Could not extract the file key.");
    return;
  }

  try {
    //variable to handle axios request
    const response = await axios.delete(`${apiUrl}/imageRoute/${fileKey}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    //if status 200 ok alert and return to user
    if (response.status === 200) {
      alert("Pic deleted successfully.");
      return response.data;
    } else {
      alert("Failed to delete pic.");
    }
  } catch (error) {
    //catch if any errors and alert user
    console.error("Error deleting image:", error);
    alert("An error occurred while deleting the image.");
  }
};

//export to use else where in app
export default submitDeletePic;
