import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../data/const";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LinkAccount = () => {
  const [status, setStatus] = useState();
  const companyId = localStorage.getItem("companyId");
  const navigate = useNavigate();
  useEffect(() => {
    if (status === "Linked") {
      navigate("/invoice");
      setStatus("");
    }
  });

  const authApiCall = () => {
    axios
      .get(baseURL + `api/InitializeConnection/${companyId}`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      })
      .then((response) => {
        setStatus(Object.values(response?.data)[0].results[0]?.status);
        toast.success(`Redirect to the invoice page`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message + ` Please try to create new company`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div>
      <div className="relative w-[100vw] xl:w-[50vw] p-5 bg-slate-50 h-[50vh] xl:h-[100vh] flex items-center justify-center flex-col">
        <div className="text-4xl mx-5">Redirect to Invoice page</div>
        <div className="text-lg m-5">
          Click below button after authenticate your account
        </div>
        <div>
          <button
            onClick={authApiCall}
            disabled={companyId ? false : true}
            className={`${
              companyId
                ? "active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                : "opacity-50"
            } px-5 mt-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg`}
          >
            <>Click Here to go Invoice page</>
          </button>
        </div>
        <div className="absolute top-10 left-10 text-4xl">CODAT.IO</div>
      </div>
    </div>
  );
};

export default LinkAccount;
