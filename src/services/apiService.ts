import axios from 'axios';

// Axios instance
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Get API request
export const get = async (route: string): Promise<any> => {
  try {
    const response = await api.get(route);
    return response?.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};