import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://csis-3380-be.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
