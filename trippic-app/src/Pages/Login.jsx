import React, { useEffect } from "react";
import HomeHeader from "../Components/Home Page/home-header";
import LoginForm from "../Components/Login Page/login-form";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <HomeHeader />
      <LoginForm />
    </>
  );
}
