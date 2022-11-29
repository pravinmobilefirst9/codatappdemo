import React from "react";
import Modal from "./Modal";

const AddCompanyName = ({ platformName }) => {
  return (
    <div>
      <div className="w-[100vw] xl:w-[50vw] p-5 h-[50vh] xl:h-[100vh] flex items-center justify-center flex-col">
        <div className="text-4xl mx-5">New Company</div>
        <div className="text-lg m-5">Add comany name to the popup box.</div>
        <Modal platformName={platformName} />
      </div>
    </div>
  );
};

export default AddCompanyName;
