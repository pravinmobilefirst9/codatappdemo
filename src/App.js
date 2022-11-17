import React from "react";
import AddCompany from "./views/AddCompany";
import Accounting from "./views/Accounting";
import Invoice from "./views/Invoice";
import Redirect from "./views/Redirect";
import InvoicesQuickBooks from "./views/InvoicesQuickBooks";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/add-company" exact element={<AddCompany />} />
      <Route path="/auth" exact element={<Accounting />} />
      <Route path="/invoice" exact element={<Invoice />} />
      <Route path="/redirect" exact element={<Redirect />} />
      <Route
        path="/invoices-quickbooks"
        exact
        element={<InvoicesQuickBooks />}
      />
      <Route path="/" element={<Navigate replace to="/auth" />} />
    </Routes>
  );
}

export default App;
