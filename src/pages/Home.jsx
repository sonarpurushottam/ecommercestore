import React from "react";

import Aos from "aos";
import Hero from "../components/Hero/Hero";
import HomeHero from "../components/Hero/HomeHero";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
        <HomeHero />
      </div>
    </>
  );
};

export default Home;
