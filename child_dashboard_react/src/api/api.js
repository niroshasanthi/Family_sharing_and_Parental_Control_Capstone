import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8087/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Login function: sends username and password, returns username string if successful
export const login = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/login", { username, password });
    return response.data; // assume backend returns username string
  } catch (error) {
    throw error; // let caller handle error (e.g., display invalid credentials)
  }
};

export default apiClient;