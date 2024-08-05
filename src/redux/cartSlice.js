import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  track: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    addTrack: (state, action) => {
      state.track = action.payload;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, addTrack, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
