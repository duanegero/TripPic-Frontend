const openUpdateName = (id) => {
  const url = `/updatename?id=${id}`;

  window.open(url, "_blank", "width=300,height=450 resizable=no");
};

export default openUpdateName;
