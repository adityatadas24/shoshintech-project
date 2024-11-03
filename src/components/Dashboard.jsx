import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full min-h-screen">
      <div className=" lg:w-1/5">
        <Sidebar />
      </div>

      <div className="w-full lg:w-5/6">
        <Navbar />

        <Home />
      </div>
    </div>
  );
};

export default Dashboard;
