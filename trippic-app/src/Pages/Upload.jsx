import React, { useEffect } from "react";
import UploadHeader from "../Components/Upload Page/upload-header";
import UploadFrom from "../Components/Upload Page/upload-form";

export default function Upload() {
  useEffect(() => {
    document.title = "Upload";
  });

  return (
    <>
      <UploadHeader />
      <UploadFrom />
    </>
  );
}
