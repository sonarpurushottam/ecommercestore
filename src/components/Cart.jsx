import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  return (
    <>
      <div>
        {cart.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="img" />
            <h2>{data.title}</h2>
            <h3>{data.price}</h3>
            <input type="text" value={data.quantity} />
          </div>
        ))}

        <h2>
          {totalQuantity} <span>TotalQun</span>
        </h2>

        <h2>
          {totalPrice} <span>TOtal price</span>
        </h2>
      </div>
    </>
  );
};

export default Cart;
