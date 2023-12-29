import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/MainHeader";

import Headphones from "./pages/Headphones";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shoes from "./pages/Shoes";
import Wishlist from "./components/Wishlist";
import ProductDes from "./components/ProductDes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route element={<Home />}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Headphones" element={<Headphones />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/ProductDes/:productId" element={<ProductDes />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
