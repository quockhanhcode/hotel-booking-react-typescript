import React from "react";

export default function SignupCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Đăng Ký Ngay Để Nhận Ưu Đãi Độc Quyền
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Giảm ngay 15% cho đơn đặt phòng đầu tiên + Tích điểm thành viên
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition shadow-lg whitespace-nowrap">
            Đăng ký
          </button>
        </div>
      </div>
    </section>
  );
}
