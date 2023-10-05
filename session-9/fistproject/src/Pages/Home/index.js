import React from "react";
import Navbar from "../../Components/Navbar";
import Table from "../../Components/Table";
import products from "../../constant";
const Home = () => {
  let tableHeader = [
    {
      header: "Name",
    },
    {
      header: "Category",
    },
    {
      header: "Price",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <Table tableHeaders={tableHeader} tableData={products} />
      </div>
    </div>
  );
};
Home.getLayout = (page) => {
  console.log("Layout");
};
export default Home;
