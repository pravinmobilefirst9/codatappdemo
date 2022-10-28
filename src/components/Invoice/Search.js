import React from "react";

const Search = ({ setQuery }) => {
  return (
    <div className="relative">
      <label></label>
      <input
        className="shadow h-12 appearance-none border mt-0 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Status..."
      />
    </div>
  );
};

export default Search;
