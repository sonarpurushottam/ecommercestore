import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../features/cartSlice";
import { MdFavorite } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Headphones = () => {
  const items = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const productData = useSelector((state) => state.cart.productData);
  const dispatch = useDispatch();

  const [filterCategory, setFilterCategory] = useState("all");

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const filteredHeadphonesData =
    filterCategory === "all"
      ? productData.filter((product) => product.type === "headphones")
      : productData.filter((product) => product.category === filterCategory);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to the cart!`);
  };

  const handleToggleWishlist = (product) => {
    const isWishlistItem = wishlistItems.some(
      (item) => item.id === product.id && item.type === product.type
    );

    if (isWishlistItem) {
      dispatch(removeFromWishlist(product));
      toast.warning(`${product.title} removed from the wishlist.`);
    } else {
      dispatch(addToWishlist(product));
      toast.info(`${product.title} added to the wishlist.`);
    }
  };

  const isItemInWishlist = (product) => {
    return wishlistItems.some(
      (item) => item.id === product.id && item.type === product.type
    );
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
            filterCategory === "onear"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleFilter("onear")}
        >
          On-Ear
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
          className={`${
            filterCategory === "speaker"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleFilter("speaker")}
        >
          Speakers
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {filteredHeadphonesData.map((product) => (
          <div
            className="relative flex flex-col overflow-hidden rounded-lg border border-#3596B5 bg-white shadow-md"
            key={product.id}
          >
            <Link
              to={`/ProductDes/${product.id}`}
              className="relative flex h-100 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover w-full h-full"
                src={product.img}
                alt="product image"
              />

              {/* Tooltip */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 text-white rounded-xl">
                <span>{product.title}</span>
              </div>
            </Link>
            <div className="mt-4 px-5 pb-5 flex flex-col items-center justify-between">
              <Link
                to={`/ProductDes/${product.id}`}
                className="text-xl tracking-tight text-slate-900"
              >
                {product.title}
              </Link>
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
                Add to Cart
              </button>
              <button
                onClick={() => handleToggleWishlist(product)}
                className={`mt-2 flex items-center justify-center rounded-md px-3 py-1.5 text-center text-sm font-medium ${
                  isItemInWishlist(product)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <MdFavorite className="mr-2" />
                {isItemInWishlist(product)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Headphones;
