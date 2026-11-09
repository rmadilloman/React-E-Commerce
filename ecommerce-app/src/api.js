import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

// this should utomatically attach the token if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;