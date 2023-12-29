// src/components/Search.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setResults } from "../features/searchSlice";
import productData from "../db/productData";

const Search = () => {
  const dispatch = useDispatch();
  const { query, results } = useSelector((state) => state.search);
  // Replace with your actual product data array

  const handleSearch = (e) => {
    const searchTerm = e.target.value ?? "";
    dispatch(setQuery(searchTerm));

    // Perform search logic and update results in the Redux store
    const filteredResults = productData.filter((product) => {
      // Check if product.name is defined and not null
      if (product.title && typeof product.title === "string") {
        // Convert both product.name and searchTerm to lowercase for case-insensitive comparison
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      }

      // If product.name is not a valid string, exclude it from the results
      return false;
    });

    dispatch(setResults(filteredResults));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />

      <ul>
        {results.map((product) => (
          <div>
            <li key={product.id}>{product.title}</li>
            <img src={product.img} alt="imgs" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Search;
