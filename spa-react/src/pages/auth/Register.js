import React, { useState } from "react";
import "./register.scss";
import { register } from "../../api/AuthApi"; // Import hàm register từ AuthApi

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Để hiển thị lỗi nếu có
  const [loading, setLoading] = useState(false); // Để kiểm tra trạng thái loading

  const handleSubmit = async (e) => {
    e.preventDefault(); // Ngừng hành động mặc định của form
    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp!");
      return; // Nếu mật khẩu không khớp thì dừng việc gửi yêu cầu
    }

    setLoading(true); // Bật trạng thái loading
    setError(""); // Reset lỗi khi người dùng gửi form lại

    try {
      const response = await register({
        email,
        password,
      }); // Gọi API đăng ký
      console.log("Đăng ký thành công:", response);

      // Chuyển hướng người dùng đến trang đăng nhập hoặc trang chính
      window.location.href = "/login"; // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
    } catch (err) {
      console.error("Đăng ký không thành công:", err);
      setError("Đăng ký không thành công. Vui lòng thử lại.");
    } finally {
      setLoading(false); // Tắt trạng thái loading
    }
  };

  return (
    <div className="register-container">
      <h2>Đăng Ký</h2>
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
        <div className="input-group">
          <label>Xác nhận mật khẩu</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng Ký"}
        </button>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Hiển thị lỗi nếu có */}
        <p>
          Đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
