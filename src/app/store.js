// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "../features/cartSlice1";

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

// store.js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
