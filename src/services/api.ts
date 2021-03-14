import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SPACE_X_URL,
});

export default api;
