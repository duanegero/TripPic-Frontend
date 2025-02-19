//defining a function with passed in variable
const openDeletePicWindow = (userId) => {
  //creating a url to handle page url
  const url = `/deletepic?userId=${userId}`;

  //open window with URL and size
  window.open(url, "_blank", "width=700,height=1200 resizable=no");
};

//export function to use else where
export default openDeletePicWindow;
