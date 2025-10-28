import React, { useState } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ChevronRight,
  Award,
  HeadphonesIcon,
  ShieldCheck,
  CreditCard,
  Plane,
  Building2,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

export default function HotelBookingHome() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");
  const [destination, setDestination] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredHotels = [
    {
      id: 1,
      name: "The Reverie Saigon",
      location: "Quận 1, TP. Hồ Chí Minh",
      price: 8500000,
      originalPrice: 11000000,
      rating: 4.9,
      reviews: 1847,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      badge: "Luxury",
      discount: 23,
      amenities: ["Spa", "Pool", "Restaurant"],
    },
    {
      id: 2,
      name: "InterContinental Danang",
      location: "Ngũ Hành Sơn, Đà Nẵng",
      price: 6200000,
      originalPrice: 8500000,
      rating: 4.8,
      reviews: 2134,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      badge: "Beachfront",
      discount: 27,
      amenities: ["Beach", "Gym", "Bar"],
    },
    {
      id: 3,
      name: "Ana Mandara Dalat",
      location: "Phường 3, Đà Lạt",
      price: 4800000,
      originalPrice: 6200000,
      rating: 4.7,
      reviews: 986,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
      badge: "Mountain View",
      discount: 23,
      amenities: ["Garden", "Fireplace", "Restaurant"],
    },
    {
      id: 4,
      name: "JW Marriott Hanoi",
      location: "Ba Đình, Hà Nội",
      price: 5500000,
      originalPrice: 7200000,
      rating: 4.8,
      reviews: 1523,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      badge: "Business",
      discount: 24,
      amenities: ["Pool", "Spa", "Meeting Room"],
    },
  ];

  const destinations = [
    {
      name: "Hồ Chí Minh",
      hotels: "2,847",
      image:
        "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&h=400&fit=crop",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      name: "Hà Nội",
      hotels: "2,156",
      image:
        "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=600&h=400&fit=crop",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      name: "Đà Nẵng",
      hotels: "1,432",
      image:
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop",
      icon: <Plane className="w-5 h-5" />,
    },
    {
      name: "Phú Quốc",
      hotels: "876",
      image:
        "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=600&h=400&fit=crop",
      icon: <Plane className="w-5 h-5" />,
    },
  ];

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

  const stats = [
    { value: "2M+", label: "Khách hàng hài lòng" },
    { value: "50K+", label: "Khách sạn đối tác" },
    { value: "100+", label: "Quốc gia & vùng lãnh thổ" },
    { value: "4.8/5", label: "Đánh giá trung bình" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-slate-900 block leading-none">
                  LuxeStay
                </span>
                <span className="text-xs text-slate-500">
                  Premium Hotel Booking
                </span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 font-medium transition"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 font-medium transition"
              >
                Khách sạn
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 font-medium transition"
              >
                Địa điểm
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 font-medium transition"
              >
                Ưu đãi
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-blue-600 font-medium transition"
              >
                Liên hệ
              </a>
            </nav>

            <div className="flex items-center space-x-3">
              <button className="hidden lg:inline-flex text-slate-700 hover:text-blue-600 font-medium px-4 py-2 transition">
                Đăng nhập
              </button>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-md font-medium">
                Đăng ký
              </button>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Trang chủ
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Khách sạn
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Địa điểm
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Ưu đãi
              </a>
              <a
                href="#"
                className="block text-slate-700 hover:text-blue-600 font-medium"
              >
                Liên hệ
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Search */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trải Nghiệm Kỳ Nghỉ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Đẳng Cấp Thế Giới
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Khám phá hơn 50,000 khách sạn cao cấp với giá ưu đãi độc quyền
            </p>
          </div>

          {/* Advanced Search Box */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Địa điểm / Khách sạn
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Bạn muốn đi đâu?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nhận phòng
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Trả phòng
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Khách & Phòng
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 text-slate-400 w-4 h-4" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full pl-9 pr-2 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900 text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full px-3 py-3.5 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none text-slate-900 text-sm"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} phòng
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition shadow-lg flex items-center justify-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Tìm kiếm khách sạn</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Điểm Đến Phổ Biến
              </h2>
              <p className="text-slate-600 text-lg">
                Khám phá những địa điểm du lịch được yêu thích nhất
              </p>
            </div>
            <button className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Xem tất cả <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    {dest.icon}
                    <h3 className="text-2xl font-bold">{dest.name}</h3>
                  </div>
                  <p className="text-blue-200">{dest.hotels} khách sạn</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Ưu đãi hot trong tuần</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Khách Sạn Cao Cấp Được Yêu Thích
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Những lựa chọn hàng đầu với đánh giá xuất sắc từ hàng ngàn khách
              hàng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                    -{hotel.discount}%
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-slate-900">
                      {hotel.rating}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
                    {hotel.badge}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    {hotel.name}
                  </h3>
                  <div className="flex items-center text-slate-500 mb-3 text-sm">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="text-slate-400 text-xs line-through">
                        {hotel.originalPrice.toLocaleString("vi-VN")}₫
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-blue-600">
                          {hotel.price.toLocaleString("vi-VN")}₫
                        </span>
                        <span className="text-sm text-slate-500 ml-1">
                          /đêm
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">
                        {hotel.reviews} đánh giá
                      </div>
                      <div className="text-xs font-semibold text-green-600 mt-0.5">
                        Tuyệt vời
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
              Khám phá thêm khách sạn
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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

      {/* CTA Section */}
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Về chúng tôi</h4>
              <p className="text-gray-400">
                Nền tảng đặt phòng khách sạn hàng đầu Việt Nam với hàng ngàn lựa
                chọn chất lượng.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Liên kết</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Điều khoản
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Chính sách
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Câu hỏi thường gặp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Liên hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trợ giúp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Theo dõi chúng tôi</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <span>f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <span>t</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <span>in</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HotelBooking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
