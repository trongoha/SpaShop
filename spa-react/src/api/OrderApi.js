import axios from "axios";
import { API_BASE_URL } from "../api/apiConfig";

// export const getOrders = async () => {
//   const response = await axios.get(`${API_BASE_URL}/order`);
//   return response.data;
// };

// export const createOrder = async (data) => {
//   const response = await axios.post(`${API_BASE_URL}/order`, data);
//   return response.data;
// };

export const createOrder = async (data) => {
  // Thêm mới dịch vụ vào giỏ hàng
  return await axios.post(`${API_BASE_URL}/v1/order`, data);
};

export const getOrderById = async (id) => {
  // Lấy chi tiết giỏ hàng
  return await axios.get(`${API_BASE_URL}/v1/order`);
};

export const deleteOrder = async (id) => {
  // Xóa giỏ hàng theo ID
  return await axios.delete(`${API_BASE_URL}/v1/order/${id}`);
};
