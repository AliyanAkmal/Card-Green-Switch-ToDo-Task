import React from "react";
import Header from "../Header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ height: "250vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
