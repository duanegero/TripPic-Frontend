import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

const submitRequest = async (event, request, setRequest, userId) => {
  event.preventDefault();
  //if no request and user ID in body alert user
  if (!request || !userId) {
    alert("Need both request and user ID.");
    return;
  }

  //creating a object with user data to send in axios request
  const userRequest = {
    request: request,
    userId: userId,
  };

  try {
    //variable to handle axios request
    const response = await axios.post(`${apiUrl}/supportRoute`, userRequest);

    //if there's a response aler user of success
    if (response) {
      alert("Your request has been sent to our team.");
      setRequest("");
    }

    //return response to use in app
    return response;
  } catch (error) {
    //catch if error log error
    console.error("Request Error", error.message, error.stack);

    //check if server error
    if (error.response && error.response.status === 500) {
      alert("Server error. Please try again later.");
    } else {
      alert("An error occurred. Please try again.");
    }
  }
};
//export function to use in app
export default submitRequest;
