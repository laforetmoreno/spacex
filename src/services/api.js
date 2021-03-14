import axios from 'axios';

const api = axios.create({
  baseURL: process.env.SPACE_X_URL,
});

export default api;
