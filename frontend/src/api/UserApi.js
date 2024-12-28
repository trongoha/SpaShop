import axios from "axios";
import { API_BASE_URL } from "../api/apiConfig";

// export const getOrders = async () => {
//   const response = await axios.get(`${API_BASE_URL}/users`);
//   return response.data;
// };

// export const createOrder = async (data) => {
//   const response = await axios.post(`${API_BASE_URL}/users`, data);
//   return response.data;
// };

export const getAllUser = async () => {
  // Lấy danh sách
  return await axios.get(`${API_BASE_URL}/v1/users`);
};

export const getUserById = async (id) => {
  // Lấy user theo ID
  return await axios.get(`${API_BASE_URL}/v1/users/${id}`);
};

// export const createService = async (data) => {
//   // Thêm mới dịch vụ
//   return await axios.post(`${API_BASE_URL}/v1/users`, data);
// };

// export const updateService = async (id, data) => {
//   // Cập nhật dịch vụ theo ID
//   return await axios.put(`${API_BASE_URL}/v1/users/${id}`, data);
// };

export const deleteUser = async (id) => {
  // Xóa user  theo ID
  return await axios.delete(`${API_BASE_URL}/v1/users/${id}`);
};
