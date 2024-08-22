import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this matches your backend URL
});

export default instance;
