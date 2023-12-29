// Headphones.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Headphones = () => {
  const items = useSelector((state) => state.cart.items);
  const productData = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();

  const [filterCategory, setFilterCategory] = useState("all");

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  // Filter headphones based on the selected category
  const filteredHeadphonesData =
    filterCategory === "all"
      ? productData.filter((product) => product.type === "headphones")
      : productData.filter((product) => product.category === filterCategory);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to the cart!`);
  };

  return (
    <>
      <ToastContainer />
      <div className="mb-4">
        <button
          className={`mr-2 ${
            filterCategory === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilter("all")}
        >
          All Headphones
        </button>
        <button
          className={`mr-2 ${
            filterCategory === "earbud"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleFilter("earbud")}
        >
          Earbuds
        </button>
        <button
          className={`mr-2 ${
            filterCategory === "onear"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleFilter("onear")}
        >
          On-Ear
        </button>
        <button
          className={`${
            filterCategory === "speaker"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleFilter("speaker")}
        >
          Speaker
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {filteredHeadphonesData.map((product) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5 bg-white shadow-md"
            key={product.id}
          >
            <a
              className="relative flex h-100 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover w-full h-full"
                src={product.img}
                alt="product image"
              />
            </a>
            <div className="mt-4 px-5 pb-5 flex flex-col items-center justify-between">
              <a href="#" className="text-xl tracking-tight text-slate-900">
                {product.title}
              </a>
              <div className="mt-2 mb-5 flex items-center justify-center">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    {product.price}
                  </span>
                  <span className="text-sm text-slate-900 line-through ml-2">
                    $699
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Headphones;
