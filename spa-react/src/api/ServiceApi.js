// import axios from "axios";
// import { API_BASE_URL } from "../api/apiConfig";

// export const getOrders = async () => {
//   const response = await axios.get(`${API_BASE_URL}/services`);
//   return response.data;
// };

// export const createOrder = async (data) => {
//   const response = await axios.post(`${API_BASE_URL}/services`, data);
//   return response.data;
// };

import axios from "axios";
import { API_BASE_URL } from "../api/apiConfig";

// const BASE_URL = "http://localhost:8080/v1/service"; // Cấu hình URL cơ bản

export const getAllService = async () => {
  // Lấy danh sách toàn bộ dịch vụ
  return await axios.get(`${API_BASE_URL}/v1/service`);
};

export const getServiceById = async (id) => {
  // Lấy chi tiết dịch vụ theo ID
  return await axios.get(`${API_BASE_URL}/v1/service/${id}`);
};

export const createService = async (data) => {
  // Thêm mới dịch vụ
  return await axios.post(`${API_BASE_URL}/v1/service`, data);
};

export const updateService = async (id, data) => {
  // Cập nhật dịch vụ theo ID
  return await axios.put(`${API_BASE_URL}/v1/service/${id}`, data);
};

export const deleteService = async (id) => {
  // Xóa dịch vụ theo ID
  return await axios.delete(`${API_BASE_URL}/v1/service/${id}`);
};
