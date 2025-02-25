import axios from "axios"; //imporing axios to make api calls

const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

//geting the token from local storeage
const token = localStorage.getItem("token");

//defining async helper function with passed in variables
const submitUpdatedUser = async (
  event,
  userId,
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

  //if all fields are filled alret user
  if (!firstName || !lastName || !email || !password) {
    alert("All feilds must be completed to continue.");
    return;
  }

  //creating a update user object to send with axios request
  const updatedUser = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
  };

  try {
    //varriable to axios request
    const response = await axios.put(
      `${apiUrl}/usersRoute/${userId}`,
      updatedUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    //if response clear fields, alert user and return
    if (response) {
      alert("User updated!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      return;
    }
  } catch (error) {
    //catch and log if any errors
    console.error("Update user error.", error.message, error.stack);
  }
};

//export function to use else where in app
export default submitUpdatedUser;
