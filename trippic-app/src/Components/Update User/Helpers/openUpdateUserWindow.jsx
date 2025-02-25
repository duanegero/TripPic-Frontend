//defining a function
const openUpdateUserWindow = (userId) => {
  //variable to handle the URL
  const url = `/updateuser?userId=${userId}`;

  //open window with url
  window.open(url, "_blank", "width=500,height=700 resizable=no");
};

//export function to use in app
export default openUpdateUserWindow;
