import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../data/const";

const LinkAccount = () => {
  const [status, setStatus] = useState();
  const [state, setState] = useState(true);
  const [check, setCheck] = useState(false);
  const companyId = localStorage.getItem("companyId");
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (status === "Linked") {
  //     navigate("/invoice");
  //     setStatus("");
  //   }
  // });

  useEffect(() => {
    setTimeout(() => {
      if (check) {
        authApiCall();
        if (status === "Linked") {
          navigate("/invoice");
          setStatus("");
        }
      }
      setState(!state);
    }, 5000);
  }, [state]);

  const authApiCall = () => {
    axios
      .get(baseURL + `api/InitializeConnection/${companyId}`)
      .then((response) => {
        setStatus(Object.values(response?.data)[0].results[0]?.status);
        setCheck(true);
      })
      .catch((err) => {
        console.log(err);
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
            disabled={status === "Linked" ? false : true}
            className={`${
              status === "Linked"
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
