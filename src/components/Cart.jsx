// // Cart.jsx
// import React from "react";
// import { useSelector } from "react-redux";

// const Cart = () => {
//   const items = useSelector((state) => state.cart.items);
//   const total = useSelector((state) => state.cart.total);
//   const quantity = useSelector((state) => state.cart.quantity);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

//       {items.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {items.map((item) => (
//               <li
//                 key={item.id}
//                 className="border p-4 rounded-md bg-white shadow-md"
//               >
//                 <img
//                   src={item.img}
//                   alt={item.type}
//                   className="w-full h-32 object-cover mb-2"
//                 />
//                 <p className="text-lg font-bold">{item.type}</p>
//                 <p className="text-gray-500">${item.price}</p>
//                 <p className="text-gray-700">Quantity: {item.quantity}</p>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8">
//             <p className="text-xl font-bold">Total: ${total}</p>
//             <p className="text-gray-700">Total Items: {quantity}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// Cart.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const quantity = useSelector((state) => state.cart.quantity);

  const handleRemove = (id, type) => {
    dispatch(removeFromCart({ id, type }));
  };

  const handleIncrease = (id, type) => {
    dispatch(increaseQuantity({ id, type }));
  };

  const handleDecrease = (id, type) => {
    dispatch(decreaseQuantity({ id, type }));
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
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="border p-4 rounded-md bg-white shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.type}
                  className="w-full h-32 object-cover mb-2"
                />
                <p className="text-lg font-bold">{item.type}</p>
                <p className="text-gray-500">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrease(item.id, item.type)}
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrease(item.id, item.type)}
                    className="bg-gray-200 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id, item.type)}
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove
                </button>
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
