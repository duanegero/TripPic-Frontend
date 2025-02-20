import React, { useEffect } from "react";
import SupportHeader from "../Components/Support Page/support-header";
import SupportForm from "../Components/Support Page/support-form";

export default function Support() {
  useEffect(() => {
    document.title = "Support";
  });

  return (
    <>
      <SupportHeader />
      <SupportForm />
    </>
  );
}
