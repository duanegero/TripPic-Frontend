import React, { useEffect } from "react";
import UpdatePicHeader from "../Components/UpdatePic Page/updatePic-header";
import AllImagesTable from "../Components/UpdatePic Page/allImagesTable";

export default function UpdatePicDetails() {
  useEffect(() => {
    document.title = "Update";
  });

  return (
    <>
      <UpdatePicHeader />
      <AllImagesTable />
    </>
  );
}
