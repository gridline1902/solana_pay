import React from "react";
import { SideBar } from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <SideBar />
      <main className="flex-1 h-screen overflow-y-scroll">{children}</main>
    </div>
  );
};

export default Layout;
