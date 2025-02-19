const openUploadWindow = (userId) => {
  //variable with custom URL
  const url = `/upload?userId=${userId}`;

  //open window with URL and size
  window.open(url, "_blank", "width=500,height=700 resizable=no");
};

//export function to use else where in app
export default openUploadWindow;
