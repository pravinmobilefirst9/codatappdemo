import React, { useEffect } from "react";
import LinkAccount from "../components/AddCompany/LinkAccount";
import AddCompanyName from "../components/AddCompany/AddCompanyName";
import { useLocation, useNavigate } from "react-router-dom";

const AddCompany = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // useEffect(() => {
    // if (!location?.state) {
      // navigate("/");
    // }
  // });
  return (
    <div>
      <div className="flex items-center justify-center flex-col xl:flex-row">
        <div>
          <LinkAccount />
        </div>
        <div>
          <AddCompanyName platformName={location?.state} />
        </div>
      </div>
    </div>
  );
};

export default AddCompany;
