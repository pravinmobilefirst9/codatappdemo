import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../data/const";
import { Oval } from "react-loader-spinner";

export default function Modal({ platformName }) {
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [link, setLink] = useState();
  const [state, setState] = useState();
  const [status, setStatus] = useState();
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const addCompanyName = ({ platformName }) => {
    addCompanyApi();
    setCompanyName("");
  };

  useEffect(() => {
    if (link) {
      window.open(link, "_blank");
    }
  }, [link]);

  const companyId = localStorage.getItem("companyId");

  const authApiCall = () => {
    axios
      .get(baseURL + `api/InitializeConnection/${companyId}`)
      .then((response) => {
        setLink(Object.values(response?.data)[0].results[0]?.linkUrl);
        setStatus(Object.values(response?.data)[0].results[0]?.status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(state);
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

  const addCompanyApi = () => {
    const data = { name: companyName, platformType: platformName };
    axios
      .post(baseURL + "api/addCompany", data)
      .then((response) => {
        console.log(Object.values(response?.data)[0].id);
        axios
          .get(
            baseURL +
              `api/InitializeConnection/${Object.values(response?.data)[0].id}`
          )
          .then((response) => {
            setLink(Object.values(response?.data)[0].results[0]?.linkUrl);
            setCheck(true);
            // setShowModal(false);
          })
          .catch((err) => {
            console.log(err);
          });
        localStorage.setItem("companyId", Object.values(response?.data)[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white hover:bg-pink-600 mt-5 px-5 py-3 font-medium leading-5 transition-colors duration-150 border border-transparent rounded-lg"
        type="button"
        onClick={() => setShowModal(true)}
        disabled={check}
      >
        Click here to add Company name
      </button>
      {showModal ? (
        <>
          {check ? (
            <div className="flex items-center justify-center">
              <Oval
                height={20}
                width={20}
                color="white"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="black"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
              <div className="ml-2">
                Authentication is in progress please wait or
                <a
                  href={link}
                  target="_blank"
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  &nbsp;Click Here...
                </a>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Add new company
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Set up your customers in the Portal by adding them as
                        companies.
                      </p>
                    </div>
                    <div className="m-5 text-lg">
                      <span className="text-gray-700 dark:text-gray-400">
                        Company Name
                      </span>
                      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                        {/* <label className="block text-sm"> */}
                        <input
                          className="block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                          placeholder="e.g. Demo Company Name"
                          onChange={(e) => setCompanyName(e.target.value)}
                          value={companyName}
                        />
                        {/* </label> */}
                      </div>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-indigo-500 text-white hover:bg-indigo-600  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={addCompanyName}
                        disabled={companyName.length > 0 ? false : true}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </>
      ) : null}
    </>
  );
}
