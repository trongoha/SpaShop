import React, { useState } from "react";
import "./login.scss";
import { login } from "../../api/AuthApi"; // Đảm bảo đường dẫn chính xác đến AuthApi.js

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Để hiển thị lỗi nếu có
  const [loading, setLoading] = useState(false); // Để kiểm tra trạng thái loading

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngừng hành động mặc định của form
    setLoading(true); // Bật trạng thái loading
    setError(""); // Reset lỗi khi người dùng gửi form lại

    try {
      const response = await login({ email, password }); // Gọi hàm login từ API
      console.log("Đăng nhập thành công:", response);

      // Lưu token vào localStorage (hoặc sessionStorage)
      localStorage.setItem("token", response.token); // Giả sử API trả về token trong response

      // Chuyển hướng đến trang chính sau khi đăng nhập thành công
      window.location.href = "/"; // Thay bằng đường dẫn tới trang bạn muốn điều hướng
    } catch (err) {
      console.error("Đăng nhập không thành công:", err);
      setError("Đăng nhập không thành công. Vui lòng thử lại.");
    } finally {
      setLoading(false); // Tắt trạng thái loading
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
        </button>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Hiển thị lỗi nếu có */}
        <p>
          Chưa có tài khoản? <a href="/register">Đăng ký ngay</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
