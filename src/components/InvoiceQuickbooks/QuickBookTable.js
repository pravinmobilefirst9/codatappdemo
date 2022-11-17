import React, { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagination from "../Invoice/Pagination";
import QuickbookModal from "./QuickbookModal";
import { headerDataQuickbook } from "../../data/data";
import { quickbookinvoice } from "../../data/const";
import Search from "../Invoice/Search";
import { dummydata } from "./dummydata";

const QuickBookTable = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [selectedOptionbalance, setSelectedOptionbalance] = useState(false);
  const [query, setQuery] = useState("");

  //   console.log(dummydata[0]?.QueryResponse?.Invoice);
  const randomnumber = Math.floor(Math.random() * 100 + 1);
  const fetchInvoice = () => {
    setLoader(true);
    axios
      .get(quickbookinvoice + randomnumber)
      .then((response) => {
        if (response?.data?.Invoice) {
          setUsers(response?.data?.Invoice);
        }
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchInvoice();
  }, []);

  const onClickbalance = () => {
    setSelectedOptionbalance(!selectedOptionbalance);
    let sortData = [...users].sort((a, b) => {
      if (
        selectedOptionbalance
          ? parseInt(a.Balance, 10) < parseInt(b.Balance, 10)
          : parseInt(a.Balance, 10) > parseInt(b.Balance, 10)
      ) {
        return -1;
      }
      if (
        !selectedOptionbalance
          ? parseInt(a.Balance, 10) > parseInt(b.Balance, 10)
          : parseInt(a.Balance, 10) < parseInt(b.Balance, 10)
      ) {
        return 1;
      }
      return 0;
    });
    setUsers(sortData);
    setPage(0);
  };

  const formModalData = (data) => {
    setShowModal(true);
    setModalData(data);
    console.log(data);
  };

  return (
    <div className="p-5 mt-10 lg:mt-2 lg:p-10">
      <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        Invoices list
      </h4>

      {/* modal */}
      <QuickbookModal
        showModal={showModal}
        setShowModal={setShowModal}
        setModalData={setModalData}
        modalData={modalData}
      />

      <div className="float-right m-5 w-48 sm:w-64">
        {/* <Search setQuery={setQuery} /> */}
      </div>
      {loader && (
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
              {headerDataQuickbook.map((data, idx) => {
                return (
                  <th className="px-4 py-3" key={idx}>
                    {data?.title}
                  </th>
                );
              })}
            </tr>
          </thead>
        </table>
      )}

      {loader ? (
        <div className="mt-16 flex items-center justify-center w-screen lg:w-[75vw]">
          <Oval
            height={80}
            width={80}
            color="purple"
            wrapperStyle={{}}
            wrapperclassName=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="white"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  {headerDataQuickbook.map((data, idx) => {
                    return (
                      <th className="px-4 py-3" key={idx}>
                        {data?.title === "Status" ? (
                          <>
                            <button
                              //   onClick={onClickStatus}
                              className="uppercase flex items-center justify-center focus:border-none"
                            >
                              {data?.title}
                              {/* {selectedOption ? (
                                <div className="h-0 w-0 ml-1 border-x-8 border-x-transparent border-b-[10px] border-b-black-500"></div>
                              ) : (
                                <div className="h-0 w-0 ml-1 border-x-8 border-x-transparent border-t-[10px] border-t-black-500"></div>
                              )} */}
                            </button>
                          </>
                        ) : (
                          <>
                            {data?.title === "balance" ? (
                              <>
                                <button
                                  onClick={onClickbalance}
                                  className="uppercase flex items-center justify-center focus:border-none"
                                >
                                  {data?.title}
                                  {!selectedOptionbalance ? (
                                    <div className="h-0 w-0 ml-1 border-x-8 border-x-transparent border-b-[10px] border-b-black-500"></div>
                                  ) : (
                                    <div className="h-0 w-0 ml-1 border-x-8 border-x-transparent border-t-[10px] border-t-black-500"></div>
                                  )}
                                </button>
                              </>
                            ) : (
                              <>{data?.title}</>
                            )}
                          </>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {users.length > 0 ? (
                  <></>
                ) : (
                  <div className="font-bold flex items-center justify-center text-gray-700 dark:text-gray-400">
                    <div className="px-4 py-3">No Data Found</div>
                  </div>
                )}
                {data.map((data, idx) => {
                  return (
                    <tr key={idx} className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">{page * 10 + idx + 1}</td>
                      <td className="px-4 py-3">{data?.CustomerRef?.name}</td>
                      <td className="px-4 py-3">{data?.Id}</td>
                      <td className="px-4 py-3">
                        {data?.MetaData?.CreateTime}
                      </td>
                      <td className="px-4 py-3">{data?.DueDate}</td>
                      <td className="px-4 py-3">
                        {data?.Balance.toString().replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        ) +
                          " " +
                          data?.CurrencyRef?.value}
                      </td>
                      <td className="px-4 py-3">
                        {data?.TotalAmt.toString().replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          ","
                        ) +
                          " " +
                          data?.CurrencyRef?.value}
                      </td>
                      <td className="px-4 py-3">{data?.CurrencyRef?.value}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => formModalData(data)}
                          disabled={false}
                          className={`opacity-100 hover:bg-purple-700 px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600  focus:outline-none focus:shadow-outline-purple`}
                        >
                          Click Here
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              users={users}
              setData={setData}
              page={page}
              setPage={setPage}
              query={query}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickBookTable;
