import React, { useEffect } from "react";
import DeletePicHeader from "../Components/DeletePic Page/deletePic-header";
import DeleteImagesTable from "../Components/DeletePic Page/deleteImagesTable";

export default function DeletePic() {
  useEffect(() => {
    document.title = "Delete";
  });

  return (
    <>
      <DeletePicHeader />
      <DeleteImagesTable />
    </>
  );
}
