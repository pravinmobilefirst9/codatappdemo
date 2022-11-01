import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../data/const";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Redirect = () => {
  const companyId = localStorage.getItem("companyId");
  const navigate = useNavigate();
  const authApiCall = () => {
    axios
      .get(baseURL + `api/InitializeConnection/${companyId}`)
      .then((response) => {
        if (Object.values(response?.data)[0].results[0]?.status === "Linked") {
          navigate("/invoice");
          toast.success("Authentication done", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.error("Some Error happning please try again in some time !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        toast.error("Some Error happning please try again later !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="relative w-[100vw] p-5 bg-slate-50 h-[100vh] flex items-center justify-center flex-col">
          <div className="text-4xl mx-5">Redirect to Invoice page</div>
          <div className="text-lg m-5">
            Click below button after authenticate
          </div>
          <div>
            <button
              onClick={authApiCall}
              className={` active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-5 mt-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg`}
            >
              <>Click Here to go Invoice page</>
            </button>
          </div>
          <div className="absolute top-10 left-10 text-4xl">CODAT</div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
