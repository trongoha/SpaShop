import axios from "axios";
import { API_BASE_URL } from "../api/apiConfig";

// export const getCategories = async () => {
//   const response = await axios.get(`${API_BASE_URL}/category`);
//   return response.data;
// };

// export const createCategory = async (data) => {
//   const response = await axios.post(`${API_BASE_URL}/category`, data);
//   return response.data;
// };

export const createCategory = async (data) => {
  // Thêm mới loại dịch vụ
  return await axios.post(`${API_BASE_URL}/v1/category`, data);
};

export const getAllCategory = async () => {
  // Lấy loại toàn bộ loại dịch vụ
  return await axios.get(`${API_BASE_URL}/v1/category`, data);
};

export const updateCategory = async (id, data) => {
  // Cập nhật loại sản phẩm theo ID
  return await axios.put(`${API_BASE_URL}/v1/category/${id}`, data);
};

export const getCategoryById = async (id) => {
  // Lấy loại dịch vụ theo ID
  return await axios.get(`${API_BASE_URL}/v1/category/${id}`);
};

export const deleteCategory = async (id) => {
  // Xóa danh sách theo ID
  return await axios.delete(`${API_BASE_URL}/v1/category/${id}`);
};
