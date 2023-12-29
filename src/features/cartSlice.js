import { createSlice } from "@reduxjs/toolkit";
import productData from "../db/productData";
const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
cartSlice.js;
cartSlice.js;
cartSlice.js;
