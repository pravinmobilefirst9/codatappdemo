import React, { useEffect } from "react";

const Pagination = ({ users, setData, page, setPage, query }) => {
  const tableData = users.filter((post) => {
    if (query === "") {
      return post;
    } else if (post.status.toLowerCase().includes(query.toLowerCase())) {
      return post;
    }
  });

  const arr = [];
  const pageNumberlength = Math.ceil(tableData.length / 10);
  if (pageNumberlength > 1) {
    for (var i = 1; i <= pageNumberlength; i++) {
      arr.push(i);
    }
  }

  useEffect(() => {
    const pagevalue = page === 0 ? 0 : page * 10;
    const items = users.slice(pagevalue, pagevalue + 10);
    const items2 = tableData.slice(pagevalue, pagevalue + 10);
    setData(items2);
    if (query.length > 0 && query.includes("r")) {
      setPage(0);
    }
  }, [users, page, query]);

  const onClickPagination = (idx) => {
    setPage(idx);
  };

  const onClickPrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onClickNext = () => {
    if (page < arr.length - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              <button
                className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Previous"
                onClick={onClickPrevious}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {arr.map((number, idx) => {
              return (
                <div id={idx}>
                  <li>
                    <button
                      className={`${
                        page === idx
                          ? "text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                          : "rounded-md focus:outline-none focus:shadow-outline-purple"
                      } px-3 py-1 `}
                      onClick={() => {
                        onClickPagination(idx);
                      }}
                    >
                      {idx + 1}
                    </button>
                  </li>
                </div>
              );
            })}

            <li>
              <button
                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                aria-label="Next"
                onClick={onClickNext}
              >
                <svg
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Pagination;
