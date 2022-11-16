import React, { useEffect, useState } from "react";
import QuickbookTable from "../components/InvoiceQuickbooks/QuickBookTable";
import Sidebar from "../components/comman/Sidebar";

const InvoicesQuickBooks = () => {
  return (
    <div>
      <div className="relative flex items-start justify-start">
        <div className="fixed top-0 left-0">
          <Sidebar />
        </div>
        <div className="w-screen lg:ml-[250px]">
          <QuickbookTable />
        </div>
      </div>
    </div>
  );
};

export default InvoicesQuickBooks;
