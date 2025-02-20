import React, { useEffect } from "react";
import NewUserHeader from "../Components/NewUser Page/newuser-header";
import NewUserForm from "../Components/NewUser Page/newuser-form";

export default function NewUser() {
  useEffect(() => {
    document.title = "New User";
  });

  return (
    <>
      <NewUserHeader />
      <NewUserForm />
    </>
  );
}
