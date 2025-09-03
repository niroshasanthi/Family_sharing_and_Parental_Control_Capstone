import axios from 'axios';

// eslint-disable-next-line
const USERNAME = process.env.REACT_APP_API_USERNAME || 'parentUser';
// eslint-disable-next-line
const PASSWORD = process.env.REACT_APP_API_PASSWORD || 'password';

const api = axios.create({
  baseURL: 'http://localhost:8085/api',
  withCredentials: true,  // THIS SENDS COOKIES WITH EACH REQUEST
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;