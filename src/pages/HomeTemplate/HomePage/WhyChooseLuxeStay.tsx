import { Award, HeadphonesIcon, ShieldCheck, CreditCard } from "lucide-react";

export default function WhyChooseLuxeStay() {
  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Thanh toán bảo mật",
      description:
        "Mọi giao dịch được mã hóa SSL và bảo vệ bởi các đối tác thanh toán uy tín hàng đầu",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Giá tốt nhất đảm bảo",
      description:
        "Cam kết hoàn trả chênh lệch nếu bạn tìm thấy giá tốt hơn trong vòng 24h sau khi đặt",
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      title: "Hỗ trợ 24/7",
      description:
        "Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Hủy phòng miễn phí",
      description:
        "Nhiều lựa chọn hủy phòng linh hoạt, không mất phí cho hầu hết các đặt phòng",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Tại Sao Chọn LuxeStay?
          </h2>
          <p className="text-slate-600 text-lg">
            Chúng tôi cam kết mang đến trải nghiệm đặt phòng tốt nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-slate-50 transition"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl mb-6 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
