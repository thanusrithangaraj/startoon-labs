// module.exports = {
//   mongoURI: 'mongodb://localhost:27017/web',
//   jwtSecret: 'webapp',
// };


// src/axiosConfig.js

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token'); // Add the token if available

export default axios;
