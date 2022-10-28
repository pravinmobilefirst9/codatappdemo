import React, { useEffect, useState } from "react";
import Table from "../components/Invoice/Table";
import Sidebar from "../components/comman/Sidebar";
import { useNavigate } from "react-router-dom";

const Invoice = () => {
  const companyId = localStorage.getItem("companyId");
  const navigate = useNavigate();

  useEffect(() => {
    // if (!companyId) {
      // navigate("/");
    // }
  });
  return (
    <div className="relative flex items-start justify-start">
      <div className="fixed top-0 left-0">
        <Sidebar />
      </div>
      <div className="w-screen lg:ml-[250px]">
        <Table />
      </div>
    </div>
  );
};

export default Invoice;
