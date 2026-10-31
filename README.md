# 🎓 HỆ THỐNG THI THỬ & GAME QUIZ - TIẾNG ANH 8 & TOÁN 8

Ứng dụng web thi thử trắc nghiệm và game quiz thông minh bám sát chương trình Giáo dục Phổ thông Lớp 8, tổng hợp trọn bộ 10 đề thi giữa kỳ, đề cương ôn tập từ Cô Trang Anh, các trường THCS Cẩm Hưng, THCS Tam Hiệp và bộ đề Toán 8 Tinh Hoa của Thầy Nguyễn Đình Khiêm.

Được tối ưu để triển khai 1-click trên **Vercel**, **GitHub Pages** hoặc chạy máy chủ nội bộ trên mạng gia đình.

---

## 🌟 Tính Năng Nổi Bật

1. **Thi Thử Chuẩn (Exam Mode)**:
   - Giao diện phòng thi trực quan với đồng hồ đếm ngược có cảnh báo.
   - Bảng câu hỏi ma trận 1..N (Question Palette Sidebar) theo dõi trực tiếp trạng thái câu đã làm, chưa làm, đánh dấu xem lại.
   - Phân loại chủ đề rõ ràng (Ngữ pháp, Từ vựng, Đọc hiểu, Hình học...).
   - Hộp thoại xác nhận trước khi nộp bài.

2. **Game Quiz Luyện Tập (Instant Feedback Mode)**:
   - Phản hồi Đúng/Sai tức thì ngay khi chọn đáp án.
   - Chuỗi thắng liên tiếp (Streak Combo 🔥 x3, x5, x10).
   - Hiệu ứng âm thanh chân thực bằng Web Audio API tích hợp sẵn.
   - Popup chúc mừng bouncy pop sinh động.

3. **Chấm Điểm & Lời Giải Chi Tiết**:
   - Thang điểm 10, phần trăm chính xác, thời gian làm bài, xếp loại học lực.
   - Bộ lọc xem lại: Tất cả, Câu làm sai ❌, Câu làm đúng ✔️, Câu chưa làm ⚪.
   - Lời giải thích chi tiết và phân tích kiến thức trọng tâm cho từng câu.
   - Chức năng **Làm lại các câu sai**: Tự động tạo đề ôn tập lại những câu đã sai.

4. **Quà Tặng Bài Thi & Giấy Khen Danh Dự**:
   - **Hộp Quà May Mắn 3D 🎁**: Nổ pháo hoa rực rỡ khi mở thưởng.
   - **Giấy Khen Danh Dự Mạ Vàng**: Cho phép nhập tên học sinh, hiển thị điểm số, con dấu vàng, có thể in hoặc lưu PDF.
   - **Phiếu Thưởng May Mắn Vui Nhộn (Voucher)**: Đổi quà giải trí (Miễn làm việc nhà 1 ngày, khao trà sữa, chơi game...).

5. **📱 Tối Ưu Điện Thoại & Chia Sẻ**:
   - Responsive 100% trên màn hình điện thoại (Mobile First).
   - Thanh điều hướng thông minh dưới đáy và bảng chọn câu vuốt trượt (Bottom Sheet Drawer).
   - Tích hợp QR Code và nút copy link để truy cập trên điện thoại.

6. **Lưu Lịch Sử Điểm**:
   - Tự động lưu toàn bộ các lần làm bài vào `localStorage` của trình duyệt.
   - Xem lại bảng thành tích và thống kê tiến bộ học tập.

---

## 📁 Cấu Trúc Dự Án

```
├── index.html                  # Giao diện chính ứng dụng
├── styles.css                  # CSS và Animation
├── app.js                      # Logic xử lý thi, âm thanh, quà tặng
├── server.js                   # Node.js server phát IP mạng nội bộ
├── vercel.json                 # Cấu hình triển khai Vercel
├── package.json                # Metadata dự án
├── data/                       # Ngân hàng 10 đề thi & lời giải chi tiết
│   ├── data-english-tranganh2.js
│   ├── data-english-camhung.js
│   ├── data-english-tamhiep.js
│   ├── data-english-hk1-2024.js
│   ├── data-english-decuong.js
│   ├── data-math-trungtu1.js
│   ├── data-math-tinhhoa1.js
│   ├── data-math-tinhhoa2.js
│   ├── data-math-tinhhoa3.js
│   ├── data-math-tinhhoa4.js
│   └── exams-registry.js
└── Chay-Quiz-App.bat           # File khởi động nhanh 1-click
```

---

## 🚀 Hướng Dẫn Triển Khai Lên Vercel

1. Đăng nhập [Vercel](https://vercel.com) bằng tài khoản GitHub của bạn.
2. Bấm **"Add New Project"** -> Chọn repository **`ON-TAP-LOP-8`**.
3. Tại phần cài đặt Build & Output Settings: Giữ nguyên mặc định (Framework Preset: Other / Static).
4. Bấm **"Deploy"**. Vercel sẽ build và cung cấp link web trực tuyến trong 5 giây!

---

*Học tập thông minh • Tiến bộ mỗi ngày*
