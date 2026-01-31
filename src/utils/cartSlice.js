import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.filter((item) => item.id !== action.payload);

      // The logic for removing only a single copy and not all of the same books from the cart.
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
