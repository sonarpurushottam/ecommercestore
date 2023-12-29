import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainHeader from "./components/MainHeader";
import Mobiles from "./pages/Mobiles";
import Electronics from "./pages/Electronics";
import Headphones from "./pages/Headphones";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shoes from "./pages/Shoes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />}></Route>
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Headphones" element={<Headphones />} />
            <Route path="Shoes" element={<Shoes />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route>
            <Route path="Mobiles" element={<Mobiles />} />
            <Route path="Electronics" element={<Electronics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
{
  /* <Router>
  <div className="min-h-screen bg-gray-100">
    <Routes>
      <Route path="/" index element={<Header />} />
    </Routes>
  </div>
</Router>; */
}
{
  /*             
            <Route path="DealsAndOffers" element={<DealsAndOffers />} />
            <Route path="NewArrivals" element={<NewArrivals />} />
            
            <Route path="A" element={<A />} />
            <Route path="B" element={<B />} />
            <Route path="C" element={<C />} />
            <Route path="D" element={<D />} />
            <Route path="Logout" element={<Logout />} /> */
}
