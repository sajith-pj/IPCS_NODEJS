import React from "react";
import Table from "../../Components/Table";

const UserList = () => {
  let headers = [
    {
      header: "User Name",
    },
    {
      header: "User Id",
    },
    {
      header: "User Place",
    },
  ];

  let userList = [
    {
      userid: "123",
      name: "Sajith",
      state: "Palakkad",
    },
  ];

  return (
    <div>
      <Table 
      tableHeaders={headers} 
      tableData={userList}
    />
    </div>
  );
};

export default UserList;
