import React, { useEffect } from "react";
import UpdateNameForm from "../Components/UpdatePic Page/updateName-form";

export default function UpdateName() {
  useEffect(() => {
    document.title = "Update Name";
  });

  return (
    <>
      <UpdateNameForm />
    </>
  );
}
