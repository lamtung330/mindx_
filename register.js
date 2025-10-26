// Xử lý đăng ký người dùng
document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form reload lại trang

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirmpassword").value.trim();

  // Kiểm tra thông tin
  if (!name || !email || !password || !confirm) {
    alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("❌ Email không hợp lệ!");
    return;
  }

  // Kiểm tra mật khẩu xác nhận
  if (password !== confirm) {
    alert("❌ Mật khẩu xác nhận không khớp!");
    return;
  }

  // Lấy danh sách user đã có trong localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Kiểm tra email đã tồn tại chưa
  const exists = users.find((u) => u.email === email);
  if (exists) {
    alert("⚠️ Email này đã được đăng ký!");
    return;
  }

  // Lưu người dùng mới vào localStorage
  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");

  // Chuyển sang trang đăng nhập (bạn sẽ tạo sau)
  window.location.href = "login.html";
});
