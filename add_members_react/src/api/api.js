import axios from 'axios';

const BASE_URL = "http://localhost:8084/api/members/add"; // Backend endpoint

// Send cookies along with requests for authentication
axios.defaults.withCredentials = true;

export const addChild = (username, password) => {
  return axios.post(BASE_URL, { username, password });
};