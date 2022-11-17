import React, { useEffect, useState } from "react";
import QuickbookTable from "../components/InvoiceQuickbooks/QuickBookTable";
import Sidebar from "../components/comman/Sidebar";

const InvoicesQuickBooks = () => {
  var current = new Date();
  var date = current.getDate();
  var hour = current.getHours();
  var min = current.getMinutes();
  var sec = current.getSeconds();

  var randomNumber =
    date.toString() + hour.toString() + min.toString() + sec.toString();

  const response = fetch(
    "https://codatquickbook.betabularasa.com/quickbookapi.php?v=" +
      randomNumber,
    {
      method: "GET",
      mode: "cors",
      headers: {
        // Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    }
  );

  console.log(response);
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
