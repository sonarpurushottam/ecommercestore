// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import SearchInput from "./SearchInput";

// const Header = () => {
//   return (
//     <>
//       <header className="">
//         <nav className="">
//           <NavLink to="/" className="">
//             <img src="logo.png" alt="Logo" className="" />
//           </NavLink>
//           <NavLink to="/" className="">
//             Home
//           </NavLink>
//           <NavLink to="/about" className="">
//             About
//           </NavLink>
//           <NavLink to="/contact" className="">
//             Contact
//           </NavLink>
//           <NavLink className="">
//             <SearchInput />
//           </NavLink>

//           <NavLink to="/cart" className="">
//             Cart <FaShoppingCart className="" />
//           </NavLink>
//         </nav>
//       </header>

//       <header>
//         <nav className="">
//           <NavLink to="/mobiles" className="">
//             Mobiles
//           </NavLink>
//           <NavLink to="/headphones" className="">
//             Headphones
//           </NavLink>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <>
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
              <NavLink className="hover:text-gray-300">
                <SearchInput />
              </NavLink>
              <NavLink
                to="/cart"
                className="flex items-center hover:text-gray-300"
              >
                Cart <FaShoppingCart className="ml-1" />
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <header className="bg-pink-800 text-white p-4">
        <nav className="container mx-auto flex items-center space-x-4">
          <NavLink to="/mobiles" className="hover:text-gray-300">
            Mobiles
          </NavLink>
          <NavLink to="/headphones" className="hover:text-gray-300">
            Headphones
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
