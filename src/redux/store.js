// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
const store = configureStore({
    reducer: {
        products: productsReducer, // Reducerlarni bu yerda qo'shing
    },
});
export default store;
