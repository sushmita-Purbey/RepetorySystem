// src/api/index.js
import axios from 'axios';

const API = axios.create({ 
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchPayments = async () => {
  try {
    console.log('Making API request...');
    const response = await API.get('/payments');
    console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};