// Shoes.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Shoes = () => {
  const shoesData = useSelector((state) => state.cart.shoes);
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(addToCart({ category: "shoes", id }));
  };

  return (
    <div>
      <h2>Shoes</h2>
      {shoesData.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt="shoes imgs" />
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

export default Shoes;
