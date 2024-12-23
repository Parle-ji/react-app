import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions) => {
      // state.push(actions.payload);
      const itemExits = state.items.some(
        (item) => item.id === actions.payload.id
      );
      if (!itemExits) {
        state.items.push(actions.payload);
      }
    },
    removeItem: (state, actions) => {
      // state.items.filter((item => item.id !== actions.payload))
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { removeItem, addItem } = CartSlice.actions;
export default CartSlice.reducer;
