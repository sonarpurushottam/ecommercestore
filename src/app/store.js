// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../features/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,

//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

// Import your wishlistReducer
import wishlistReducer from "../features/cartSlice"; // Assuming you have a wishlistSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer, // Include wishlistReducer in the store
  },
});
