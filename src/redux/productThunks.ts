// src/store/productThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // API URL ni to'g'ri qo'ying
      const response = await axios.get('https://api.example.com/products'); 
      return response.data; // Ma'lumotlarni qaytaradi
    } catch (error: any) {
      // Xato haqida to'liq ma'lumot
      console.error('Error fetching products:', error);
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);
