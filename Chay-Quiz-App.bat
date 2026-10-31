@echo off
chcp 65001 >nul
title HỆ THỐNG THI THỬ & GAME QUIZ TIẾNG ANH 8 - TOÁN 8
cd /d "%~dp0"

echo ========================================================
echo    🚀 ĐANG KHỞI ĐỘNG HỆ THỐNG THI THỬ & GAME QUIZ
echo ========================================================
echo.
echo  💻 Đang mở giao diện trên máy tính...
echo  📱 Chia sẻ điện thoại: Bấm nút [Dùng trên điện thoại] để quét mã QR!
echo.

start "" "http://localhost:3000"
node server.js

pause
