import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/parents';

axios.defaults.withCredentials = true;  // Send cookies with every request

export const loginParent = async (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};