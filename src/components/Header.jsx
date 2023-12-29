import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="hidden lg:flex space-x-4">
          <NavLink to="/" className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-8" />
          </NavLink>
          <div className="space-x-4 hidden md:flex">
            <NavLink
              to="/"
              activeClassName="text-white"
              className="text-gray-300 hover:text-white"
            >
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-300">
              About
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-300">
              Contact
            </NavLink>
            <NavLink to="/search" className="hover:text-gray-300">
              <SearchInput />
            </NavLink>
            <NavLink
              to="/cart"
              className="flex items-center hover:text-gray-300"
            >
              Cart
              <FaShoppingCart className="ml-1" />
              {cartQuantity > 0 && (
                <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs ml-1">
                  {cartQuantity}
                </span>
              )}
            </NavLink>
          </div>
        </nav>

        <nav className="lg:hidden">
          <NavLink to="/mobiles" className="hover:text-gray-300">
            Mobiles
          </NavLink>
          <NavLink to="/headphones" className="hover:text-gray-300">
            Headphones
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
