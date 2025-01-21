var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchProducts = createAsyncThunk('products/fetchProducts', (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { rejectWithValue }) {
    try {
        const response = yield axios.get('https://api.example.com/products');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching products:', error);
        return rejectWithValue(error.message || 'Something went wrong');
    }
}));
