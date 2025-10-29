import React from "react";

export default function CounterNumber() {
  const stats = [
    { value: "2M+", label: "Khách hàng hài lòng" },
    { value: "50K+", label: "Khách sạn đối tác" },
    { value: "100+", label: "Quốc gia & vùng lãnh thổ" },
    { value: "4.8/5", label: "Đánh giá trung bình" },
  ];
  return (
    <section className="bg-slate-50 py-16 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
