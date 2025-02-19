import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

//defining a async function with passed in variables
const submitLogin = async (
  event,
  email,
  setEmail,
  password,
  setPassword,
  navigate
) => {
  event.preventDefault();

  //alret if fields are fulled
  if (!email || !password) {
    alert("Enter both email and password.");
    return;
  }

  //create object with user data
  const user = {
    email: email,
    password: password,
  };

  try {
    //try axios request with aPI url and user object
    const response = await axios.post(`${apiUrl}/loginRoute`, user);

    //getting the token and ID from response
    const token = response.data.token;
    const userId = response.data.userId;
    //storing token to use later
    localStorage.setItem("token", token);

    //set the feilds to empty strings
    setEmail("");
    setPassword("");

    //go to home page with userid in URL
    navigate(`/home?userId=${userId}`);
  } catch (error) {
    //log if any errors
    console.error("Login Error", error.message, error.stack);

    //alert user if any errors, use status
    if (error.response && error.response.status === 401) {
      alert("Invalid email or password. Please try again.");
    } else if (error.response && error.response.status === 500) {
      alert("Server error. Please try again later.");
    } else {
      alert("An unexpected error occurred. Please try again.");
    }

    //clear input fields
    setEmail("");
    setPassword("");
  }
};

export default submitLogin;
