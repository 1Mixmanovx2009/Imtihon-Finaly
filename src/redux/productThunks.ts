import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.example.com/products'); 
      return response.data; 
    } catch (error: any) {
      console.error('Error fetching products:', error);
      return rejectWithValue(error.message || 'Something went wrong');
    }
  }
);
