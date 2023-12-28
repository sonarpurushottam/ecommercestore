import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search-input" />
      <div className="search-icon">
        <CiSearch />
      </div>
    </div>
  );
};

export default SearchInput;
