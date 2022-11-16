import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import { quickbookModalFormData } from "../../data/data";

const QuickbookModal = ({
  modalData,
  setModalData,
  showModal,
  setShowModal,
}) => {
  const [dataTrue, setDataTrue] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [paymentType, setPaymentType] = useState("credit card");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [note, setNote] = useState("note");

  const modalClose = () => {
    setDataTrue(false);
    setError(false);
    setLoader(false);
    setShowModal(false);
    setPaymentAmount("");
    setNote("");
    setPaymentType("Credit Card");
  };

  const handlePayment = () => {
    setDataTrue(true);
    console.log(paymentAmount, paymentType, note);
  };

  return (
    <div>
      <div>
        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto absolute top-0 z-50 lg:outline-none lg:focus:outline-none">
              <div className="relative w-auto my-6 mx-auto lg:min-w-[860px] lg:max-w-[860px]">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl lg:text-3xl font-semibold">
                      Payment
                    </h3>
                    <button
                      className="p-1 -mt-2 ml-auto bg-transparent border-0 text-black float-right text-4xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => modalClose()}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {dataTrue ? (
                    <>
                      <div className="w-[30vw]"></div>
                    </>
                  ) : (
                    <>
                      {" "}
                      {/*body*/}
                      <div className="relative p-6 lg:flex lg:flex-wrap">
                        {quickbookModalFormData.map((data, idx) => {
                          return (
                            <div
                              key={idx}
                              className="mx-5 lg:w-[360px] text-lg"
                            >
                              <span className="text-gray-700 font-semibold dark:text-gray-400">
                                {data?.title}
                              </span>

                              {data?.title === "Note" ? (
                                <>
                                  <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                    <textarea
                                      className="block w-full mt-1 text-lg dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                                      placeholder={`Please Enter ${data?.title}`}
                                      onChange={(e) => setNote(e.target.value)}
                                    />
                                  </div>
                                </>
                              ) : (
                                <>
                                  {data?.title === "Payment Method" ? (
                                    <>
                                      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                                        <select
                                          onChange={(e) =>
                                            setPaymentType(e.target.value)
                                          }
                                          className="block w-full mt-1 text-lg dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                                        >
                                          <option>Credit Card</option>
                                          <option>Bank Transfer</option>
                                          <option>Cheque</option>
                                          <option>Cash</option>
                                        </select>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className={`px-4 py-3 mb-8 ${
                                          data?.title === "Payment Amount"
                                            ? "bg-white"
                                            : "bg-slate-200"
                                        } rounded-lg shadow-md dark:bg-gray-800`}
                                      >
                                        <input
                                          className={`${
                                            data?.title === "Payment Amount"
                                              ? "bg-white dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray"
                                              : "bg-slate-200"
                                          } w-full mt-1 text-lg`}
                                          placeholder={`Please Enter ${data?.title}`}
                                          onChange={(e) =>
                                            setPaymentAmount(e.target.value)
                                          }
                                          disabled={
                                            data?.title === "Payment Amount"
                                              ? false
                                              : true
                                          }
                                          value={
                                            data?.title === "Invoice Id"
                                              ? modalData?.Id
                                              : data?.title === "Balance"
                                              ? modalData?.Balance +
                                                " " +
                                                modalData?.CurrencyRef?.value
                                              : data?.title === "Due Date"
                                              ? modalData?.DueDate
                                              : data?.title === "Total Amount"
                                              ? modalData?.TotalAmt +
                                                " " +
                                                modalData?.CurrencyRef?.value
                                              : null
                                          }
                                        />
                                      </div>
                                    </>
                                  )}
                                </>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/*footer*/}
                  <div className="flex flex-col items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    {dataTrue ? (
                      <></>
                    ) : (
                      <>
                        <button
                          className="bg-indigo-500 min-w-[150px] min-h-[50px] flex items-center justify-center text-white hover:bg-indigo-600  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => handlePayment()}
                          disabled={
                            loader ? true : paymentAmount > 0 ? false : true
                          }
                        >
                          {loader ? (
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
                          ) : (
                            "Payment"
                          )}
                        </button>
                      </>
                    )}

                    <div>
                      {dataTrue && (
                        <div
                          className="text-2xl pt-10 mb-10"
                          style={{ color: "green", marginTop: "2px" }}
                        >
                          Payment done successfully!
                        </div>
                      )}
                      {error && (
                        <div style={{ color: "red", marginTop: "2px" }}>
                          data is not available
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuickbookModal;
