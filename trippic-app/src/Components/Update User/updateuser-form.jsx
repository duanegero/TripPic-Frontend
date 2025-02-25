import axios from "axios";
import React, { useEffect, useState } from "react"; //importing react and useState
const apiUrl = "http://localhost:3005"; //setting variable to handle calls to api

//import helper function
import submitUpdatedUser from "./Helpers/submitUpdatedUser";

//getting the token from the loacl storage
const token = localStorage.getItem("token");

export default function UpdateUserForm() {
  //getting the user ID from URL
  const userId = new URLSearchParams(window.location.search).get("userId");

  //use state functions to handle user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //variable to handle fetched user data
  const [userDeatils, setUserDetails] = useState([]);

  useEffect(() => {
    //async function to handle api call
    const fetchUserDetails = async () => {
      try {
        //variable to handle axios request
        const respone = await axios.get(`${apiUrl}/usersRoute/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //setting data with returned data
        setUserDetails(respone.data);
      } catch (error) {
        //catch and log if any errors
        console.error("Error fetching user details.", error);
      }
    };
    //if theres a user ID to start run function
    if (userId) {
      fetchUserDetails();
    }
    //run everytime the user ID changes
  }, [userId]);

  //defining a function to handle submit from form
  const handleSubmit = (event) => {
    submitUpdatedUser(
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
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label className="font-sigmar text-xl text-red-700">
            First Name:
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
            placeholder={userDeatils ? userDeatils.first_name : "First Name"}
          ></input>
          <label className="font-sigmar text-xl text-red-700">Last Name:</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
            placeholder={userDeatils ? userDeatils.last_name : "Last Name"}
          ></input>
          <label className="font-sigmar text-xl text-red-700">Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
            placeholder={userDeatils ? userDeatils.email : "Email"}
          ></input>
          <label className="font-sigmar text-xl text-red-700">Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 border rounded-lg p-2 cursor-pointer"
            placeholder="Password"
          ></input>
          <button
            type="submit"
            className="cursor-pointer mt-8 border-2 rounded-4xl px-10 py-4 font-swanky bg-green-400 text-white text-2xl tracking-widest hover:bg-green-300 hover:text-3xl hover:font-extrabold"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
