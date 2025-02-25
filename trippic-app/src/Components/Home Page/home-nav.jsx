import { useState } from "react";

//import helper function to use in app
import ImagesTable from "../Images/getImagesTable";
import openUploadWindow from "../Upload Page/Helpers/openUploadWindows";
import openUpdatePicWindow from "../UpdatePic Page/Helpers/openUpdatePicWindow";
import openDeletePicWindow from "../DeletePic Page/Helpers/openDeletePicWindow";
import openUpdateUserWindow from "../Update User/Helpers/openUpdateUserWindow";
import { useNavigate } from "react-router-dom";

export default function HomeNav() {
  //useState variable to set and use in app
  const [activeTab, setActiveTab] = useState("");
  //getting the user ID from URL
  const userId = new URLSearchParams(window.location.search).get("userId");
  //variable to handle navigation through app
  const navigate = useNavigate();

  return (
    <div>
      <nav className="">
        <ul className="flex flex-col justify-items-start items-start p-4">
          <li
            onClick={() => setActiveTab("images")}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Get Pics
          </li>
          <li
            onClick={() => openUploadWindow(userId)}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Upload Pic
          </li>
          <li
            onClick={() => openUpdatePicWindow(userId)}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Update Pic Details
          </li>
          <li
            onClick={() => openDeletePicWindow(userId)}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Delete Pic
          </li>
          <li
            onClick={() => openUpdateUserWindow(userId)}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Update User Profile
          </li>
          <li
            onClick={() => navigate(`/support?userId=${userId}`)}
            className="hover:underline hover:font-extrabold cursor-pointer font-swanky text-3xl tracking-wider mb-3"
          >
            Support
          </li>
        </ul>
      </nav>
      <div>{activeTab === "images" && <ImagesTable userId={userId} />}</div>
    </div>
  );
}
