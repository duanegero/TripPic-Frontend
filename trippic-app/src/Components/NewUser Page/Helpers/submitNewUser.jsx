import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

//defining async function to use as helper in app
const submitNewUser = async (
  event,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword
) => {
  event.preventDefault();

  //if all fields aren't filled alert user
  if (!firstName || !lastName || !email || !password) {
    alert("All fields need to be filled in order to create new user.");
    return;
  }

  //creating an object to send with axios request
  const newUser = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  };

  try {
    //vaiable to handle respose from axios post request
    const response = await axios.post(`${apiUrl}/usersRoute/`, newUser);

    //if respone alert success and clear inputs
    if (response) {
      alert("New user created.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      return;
    }
  } catch (error) {
    //catah and log if any errors
    console.error("Error creating new user.", error.message, error.stack);
  }
};

//export function to use else where
export default submitNewUser;
