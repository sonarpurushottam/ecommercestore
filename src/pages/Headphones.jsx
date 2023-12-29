// Headphones.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Headphones = () => {
  const headphonesData = useSelector((state) => state.cart.headphones);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart({ category: "items", id }));
  };

  return (
    <div>
      <h2>Headphones</h2>
      {headphonesData.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt="headphone imgs" />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleAddToCart(item.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Headphones;
