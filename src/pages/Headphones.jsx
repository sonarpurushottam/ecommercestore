import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Headphones = () => {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (link) => {
    dispatch(addToCart(link));
    toast.success(`${link.title} Added  to the cart!`);
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {items.map((link) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5 bg-white shadow-md"
            key={link.id}
          >
            <a
              className="relative flex h-100 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover w-full h-full"
                src={link.src}
                alt="product image"
              />
            </a>
            <div className="mt-4 px-5 pb-5 flex flex-col items-center justify-between">
              <a href="#" className="text-xl tracking-tight text-slate-900">
                {link.title}
              </a>
              <div className="mt-2 mb-5 flex items-center justify-center">
                <p>
                  <span className="text-3xl font-bold text-slate-900">
                    {link.price}
                  </span>
                  <span className="text-sm text-slate-900 line-through ml-2">
                    $699
                  </span>
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(link)}
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
