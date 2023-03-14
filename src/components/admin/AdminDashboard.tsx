import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";

type Props = {};

const AdminDashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="flex justify-center my-10 col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
