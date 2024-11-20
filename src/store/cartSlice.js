import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                existingItem.addedQuantity += 1;
            } else {
                state.items.push({ ...item, addedQuantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },
        updateQuantity: (state, action) => {
            const { id, addedQuantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem && addedQuantity > 0) {
                existingItem.addedQuantity = addedQuantity;
            }
        },

    },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
