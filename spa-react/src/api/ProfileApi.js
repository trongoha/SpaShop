import axios from "axios";
import { API_BASE_URL } from "../api/apiConfig";

// export const getOrders = async () => {
//   const response = await axios.get(`${API_BASE_URL}/profile`);
//   return response.data;
// };

// export const createOrder = async (data) => {
//   const response = await axios.post(`${API_BASE_URL}/profile`, data);
//   return response.data;
// };

export const updateProfile = async (id, data) => {
  // Cập nhật thông tin người dùng theo ID
  return await axios.put(`${API_BASE_URL}/v1/profile/${id}`, data);
};

export const getProfileById = async (id) => {
  // Lấy thông tin người dùng theo ID
  return await axios.get(`${API_BASE_URL}/v1/profile/${id}`);
};
