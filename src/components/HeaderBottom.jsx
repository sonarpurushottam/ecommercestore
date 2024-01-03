import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import productData from "../db/productData";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const cartQuantity = useSelector((state) => state.cart.quantity);
  const wishlistItems = useSelector((state) => state.cart.wishlist);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = productData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
          <input
            className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
            type="text"
            onChange={handleSearch}
            value={searchQuery}
            placeholder="Search your products here"
          />
          <FaSearch className="w-5 h-5" />
          {searchQuery && (
            <div
              className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
            >
              {searchQuery &&
                filteredProducts.map((item) => (
                  <div
                    onClick={() =>
                      navigate(`/ProductDes/${item.id}`, {
                        state: {
                          item: item,
                        },
                      }) &
                      setShowSearchBar(true) &
                      setSearchQuery("")
                    }
                    key={item.id}
                    className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                  >
                    <img className="w-24" src={item.img} alt="productImg" />
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="text-xs">{item.description}</p>
                      <p className="text-sm">
                        Price:{" "}
                        <span className="text-primeColor font-semibold">
                          ${item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )}
          <NavLink
            to="/cart"
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Cart
            </span>

            {cartQuantity > 0 && <span>{cartQuantity}</span>}

            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </NavLink>
          <NavLink
            to="/wishlist"
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Wishlist
            </span>
            <MdFavorite />
            {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
