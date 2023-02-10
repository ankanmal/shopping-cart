import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      //check is item already exist
      let found = 0;
      state.map((x) => {
        if (x.id === action.payload.id) {
          found = x;
        }
      });
      if (found !== 0) {
        found.qty += 1;
        found = 0;
      } else {
        state.push({
          ...action.payload,
          qty: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((x) => x.id !== action.payload);
    },
    addQty: (state, action) => {
      let found = 0;
      state.find((x) => {
        if (x.id === action.payload) {
          found = x;
        }
      });
      if (found !== 0) {
        found.qty += 1;
        found = 0;
      }
    },
    removeQty: (state, action) => {
      let found = 0;
      state.map((x) => {
        if (x.id === action.payload) {
          found = x;
        }
      });
      if (found !== 0) {
        found.qty -= 1;
        found = 0;
      }
    },
  },
});

export const { addToCart, removeFromCart, addQty, removeQty } =
  cartSlice.actions;
export default cartSlice.reducer;
