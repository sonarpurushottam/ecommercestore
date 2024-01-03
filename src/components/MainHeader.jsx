import React from "react";

import { Outlet } from "react-router-dom";

import Header from "./Header";
import { NavBar } from "./NavBar";
import { Search } from "lucide-react";
import HeaderBottom from "./HeaderBottom";

const MainHeader = () => {
  return (
    <>
      <NavBar />
      <HeaderBottom />
      <Outlet />
    </>
  );
};

export default MainHeader;
