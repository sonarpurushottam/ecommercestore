// ProductCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { earbud1 } from "../assets/images/headphonesImgs";

const ProductCard = ({ product }) => {
  const {
    name: defaultName,
    description: defaultDescription,
    price: defaultPrice,
    image: defaultImage,
    rating: defaultRating,
  } = {
    name: "Default Product",
    description: "This is the default product description.",
    price: 19.99,
    image: earbud1,
    rating: 3,
    ...product,
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < defaultRating ? "#ffc107" : "#e4e5e9"}
          size={20}
          className="inline-block"
        />
      );
    }
    return stars;
  };

  const handleAddToCart = () => {
    console.log(`Added ${defaultName} to the cart`);
  };

  const handleAddToWishlist = () => {
    console.log(`Added ${defaultName} to the wishlist`);
  };

  return (
    <motion.div className="product-card p-4 md:w-1/2 lg:w-1/3 xl:w-1/4 border border-gray-300 rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <img
        className="w-full h-32 object-cover mb-4"
        src={defaultImage}
        alt={defaultName}
      />
      <div className="product-info">
        <h3 className="text-lg font-semibold">{defaultName}</h3>
        <p className="text-gray-600">{defaultDescription}</p>
        <p className="text-lg font-semibold text-blue-500">${defaultPrice}</p>
        <div className="rating mt-1">{renderStars()}</div>
        <div className="actions mt-2">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-full mr-2"
            onClick={handleAddToCart}
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full"
            onClick={handleAddToWishlist}
          >
            <FaHeart /> Add to Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
