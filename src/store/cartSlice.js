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
                // If item already exists, update its quantity
                // existingItem.quantity += 1;
                existingItem.addedQuantity += 1;
            } else {
                state.items.push({ ...item, addedQuantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        },

    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
