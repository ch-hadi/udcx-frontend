import React, { useEffect } from "react";
import SearchNav from "../../components/CNavbar/SearchNav";
import CTable from "../../components/CTable/CTable";
const Home = () => {

  const getData = () => {

  }
  useEffect(() => {

  }, [])
  return (
    <div style={{ width: "100%" }}>
      <SearchNav />
      <div style={{ padding: "0px 20px" }}>
        <CTable />
      </div>
    </div>
  );
};

export default Home;
