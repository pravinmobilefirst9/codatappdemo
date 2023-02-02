import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL, logoImg } from "../data/const";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const Redirect = () => {
  const [state, setState] = useState(true);
  const [link, setLink] = useState(false);
  const companyId = localStorage.getItem("companyId");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      authApiCall();
      if (link) {
        toast.success("Authentication done", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/invoice");
          setLink(false);
        }, 1000);
      }
      setState(!state);
    }, 5000);
  }, [state]);

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
        if (Object.values(response?.data)[0].results[0]?.status === "Linked") {
          setLink(true);
        }
        if (Object.values(response?.data)[0].results[1]?.status === "Linked") {
          setLink(true);
        }
      })
      .catch((err) => {
        toast.error(
          "Some Error happning please try again later or refresh the page !",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="relative w-[100vw] p-5 bg-slate-50 h-[100vh] flex items-center justify-center flex-col">
          <div className="text-4xl mx-5">Redirect to Invoice page</div>
          <div className="m-10">
            <Oval
              height={30}
              width={30}
              color="white"
              wrapperStyle={{}}
              wrapperclassName=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="purple"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
          <div className="text-lg">
            Please do not close this page. Wait for some time to redirect to
            invoice page.
          </div>
          <div>
            {/* <button
              onClick={authApiCall}
              className={` active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple px-5 mt-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg`}
            > */}

            {/* </button> */}
          </div>
          <div className="absolute top-2 left-2 md:top-5 md:left-5 xl:top-10 xl:left-10 text-4xl">
            <img
              src={logoImg}
              alt="codat logo"
              className="w-40 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
