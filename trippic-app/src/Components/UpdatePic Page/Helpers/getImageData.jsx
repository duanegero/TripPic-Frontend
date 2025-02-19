import axios from "axios"; //importing axios to make api calls

const apiUrl = "http://localhost:3005"; //creating a veriable to handle the api URL

const getImageData = async (userId) => {
  try {
    const response = await axios.get(`${apiUrl}/imageRoute/user/${userId}`);
    return response.data.userImages;
  } catch (error) {
    console.error("Error fetching images data.", error);
    throw error;
  }
};

export default getImageData;
