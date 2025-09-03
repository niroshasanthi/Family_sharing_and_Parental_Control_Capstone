import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/api'; // Change as needed

export const signupParent = async (parentData) => {
  return axios.post(`${API_BASE_URL}/parents/signup`, parentData);
};