import React, { useEffect } from "react";
import UpdateUserHeader from "../Components/Update User/updateuser-header";
import UpdateUserForm from "../Components/Update User/updateuser-form";

export default function UpdateUser() {
  useEffect(() => {
    document.title = "Update User";
  });

  return (
    <>
      <UpdateUserHeader />
      <UpdateUserForm />
    </>
  );
}
