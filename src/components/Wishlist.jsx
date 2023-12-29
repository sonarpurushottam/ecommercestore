// Wishlist.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/cartSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.cart.wishlist);

  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlistItems.map((item) => (
            <li
              key={`${item.id}-${item.type}`}
              className="bg-white rounded-lg p-4 shadow-md"
            >
              <img
                src={item.img}
                alt={item.type}
                className="w-full h-32 object-cover mb-2"
              />
              <p className="text-lg font-semibold mb-2">{item.type}</p>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              <p className="text-gray-800">Price: ${item.price}</p>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md"
                >
                  Add to Wishlist
                </button>
                <button
                  onClick={() => handleRemoveFromWishlist(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Remove from Wishlist
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
