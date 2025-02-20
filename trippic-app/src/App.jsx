import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Upload from "./Pages/Upload";
import UpdatePicDetails from "./Pages/UpdatePicDetails";
import UpdateName from "./Pages/UpdateName";
import DeletePic from "./Pages/DeletePic";
import Support from "./Pages/Support";
import NewUser from "./Pages/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="upload" element={<Upload />} />
        <Route path="update" element={<UpdatePicDetails />} />
        <Route path="updatename" element={<UpdateName />} />
        <Route path="deletepic" element={<DeletePic />} />
        <Route path="support" element={<Support />} />
        <Route path="newuser" element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
