// // cartSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import headphonesData from "../db/headphonesData";
// import shoesData from "../db/shoesData";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: { shoes: shoesData, headphones: headphonesData },
//   reducers: {
//     addToCart: (state, action) => {
//       const { category, id } = action.payload;
//       const existingItem = state[category].find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state[category].push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       const { category, id } = action.payload;
//       state[category] = state[category].filter((item) => item.id !== id);
//     },
//     increaseQuantity: (state, action) => {
//       const { category, id } = action.payload;
//       const item = state[category].find((item) => item.id === id);
//       if (item) item.quantity += 1;
//     },
//     decreaseQuantity: (state, action) => {
//       const { category, id } = action.payload;
//       const item = state[category].find((item) => item.id === id);
//       if (item && item.quantity > 1) item.quantity -= 1;
//     },
//     clearCart: (state) => {
//       state.shoes = [];
//       state.headphones = [];
//       // Add more arrays as needed
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   increaseQuantity,
//   decreaseQuantity,
//   clearCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;
/*---------------------------------------------------------------*/

import { createSlice } from "@reduxjs/toolkit";
import headphonesData from "../db/headphonesData";
import shoesData from "../db/shoesData";
const calculateTotal = (items) => {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return { total, quantity };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    quantity: 0,
    shoes: shoesData,
    headphones: headphonesData,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, type, quantity, price, img } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, type, quantity, price, img });
      }

      const { total, quantity: totalQuantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = totalQuantity;
    },
    removeFromCart: (state, action) => {
      const { id, type } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.type === type)
      );

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    increaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    decreaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
