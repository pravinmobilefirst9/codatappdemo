import React from "react";
import { useNavigate } from "react-router-dom";
import { buttonData } from "../../data/data";

const SoftwareButton = () => {
  const navigate = useNavigate();
  const selectAuth = (data) => {
    if (data?.name === "sandbox" || data?.name === "quickbooksonline") {
      navigate("/add-company", { state: data?.name });
    }
  };
  return (
    <div>
      <div className="mt-10 text-lg font-bold">
        Please Select Accounting Software you can use to connect
      </div>
      <div className="flex flex-wrap">
        {buttonData.map((data, idx) => {
          return (
            <div
              key={idx}
              className="mr-16 mt-5 w-40"
              onClick={() => selectAuth(data)}
            >
              <img
                className={`bg-white p-2  rounded-lg object-fill ${
                  idx === 4 || idx === 3
                    ? "opacity-100 drop-shadow-lg cursor-pointer"
                    : "opacity-40"
                }`}
                src={data?.imgSrc}
                alt="logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareButton;
