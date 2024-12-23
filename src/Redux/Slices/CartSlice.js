import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (item) => {
        console.log(item)
    },
    addItem: (item) => {
        console.log(item)
    },
  },
});

export const {removeItem, addItem} = CartSlice.actions;
export default CartSlice.reducer;