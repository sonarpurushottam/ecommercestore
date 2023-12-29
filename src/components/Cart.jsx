// Cart.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, quantity } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id, type) => {
    dispatch(removeFromCart({ id, type }));
  };

  const handleIncreaseQuantity = (id, type) => {
    dispatch(increaseQuantity({ id, type }));
  };

  const handleDecreaseQuantity = (id, type) => {
    dispatch(decreaseQuantity({ id, type }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={`${item.type}-${item.id}`}>
              <img src={item.img} alt={`${item.type} ${item.id}`} />
              <p>
                {item.type}: {item.quantity}
              </p>
              <p>Price per unit: ${item.price}</p>
              <p>Total: ${item.quantity * item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id, item.type)}>
                Remove from Cart
              </button>
              <button
                onClick={() => handleIncreaseQuantity(item.id, item.type)}
              >
                Increase Quantity
              </button>
              <button
                onClick={() => handleDecreaseQuantity(item.id, item.type)}
              >
                Decrease Quantity
              </button>
            </div>
          ))}
          <p>Total Quantity: {quantity}</p>
          <p>Total Price: ${total}</p>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
