const openUpdatePicWindow = (userId) => {
  const url = `/update?userId=${userId}`;

  window.open(url, "_blank", "width=700,height=1200 resizable=no");
};

export default openUpdatePicWindow;
