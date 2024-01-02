import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/cartSlice";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const quantity = useSelector((state) => state.cart.quantity);

  const handleRemove = (id, title) => {
    dispatch(removeFromCart({ id, title }));
  };

  const handleIncrease = (id, title) => {
    dispatch(increaseQuantity({ id, title }));
  };

  const handleDecrease = (id, title) => {
    dispatch(decreaseQuantity({ id, title }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 border-solid border-2 border-sky-500 ">
            {items.map((item) => (
              <li
                key={item.id}
                className="mt-4 px-5 pb-5 flex flex-col items-center justify-between  rounded-[14px] border-solid border-2 border-sky-500 "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  // className="w-full h-40 m-2  rounded-[14px] border-solid border-2 border-sky-500"
                  className="object-cover w-full h-full"
                />
                <div>
                  <div className="w-full h-6 m-2 flex items-center justify-center font-bold gap-2">
                    <p>{item.title}</p>
                    <div>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 gap-4 font-bold italic">
                  <button
                    onClick={() => handleDecrease(item.id, item.title)}
                    className="flex justify-center items-center gap-2 w-10 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                  >
                    <FaMinus />
                  </button>
                  <button
                    onClick={() => handleIncrease(item.id, item.title)}
                    className="flex justify-center items-center gap-2 w-10 h-6 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                  >
                    <FaPlus />
                  </button>
                  <div>Quantity: {item.quantity}</div>
                </div>
                <divf className="flex items-center mt-2 gap-4">
                  <button
                    onClick={() => handleRemove(item.id, item.title)}
                    className="flex justify-center items-center gap-2 w-24 h-10 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                  >
                    <FaTrash />
                    Remove
                  </button>
                  <div>Subtotal::{item.quantity * item.price}</div>
                </divf>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-4"
            >
              Clear Cart
            </button>
            <p className="text-xl font-bold">Total: ${total}</p>
            <p className="text-gray-700">Total Items: {quantity}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
