import React, { useState } from "react";
import {
  Heart,
  Users,
  Bed,
  Bath,
  Wifi,
  Tv,
  Wind,
  Car,
  Waves,
  UtensilsCrossed,
  Star,
  MapPin,
  Share2,
  Shield,
  Key,
  Briefcase,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Sparkles,
  MessageCircle,
  Phone,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function RoomDetail() {
  const [open1, setOpen1] = React.useState(false);
  const [date1, setDate1] = React.useState<Date | undefined>(undefined);
  const [open2, setOpen2] = React.useState(false);
  const [date2, setDate2] = React.useState<Date | undefined>(undefined);
  const [roomData] = useState({
    statusCode: 200,
    content: {
      id: 2,
      tenPhong: "STUDIO MỚI NETFLIX MIỄN PHÍ/ĐỖ XE MIỄN PHÍ",
      khach: 2,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "Không gian riêng để làm việc\r\nMột khu vực chung có Wi-fi, phù hợp để làm việc.\r\nTự nhận phòng\r\nTự nhận phòng bằng khóa thông minh.\r\nKim Nam là Chủ nhà siêu cấp\r\nChủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
      giaTien: 21,
      mayGiat: true,
      banLa: true,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: false,
      hoBoi: false,
      banUi: false,
      maViTri: 1,
      hinhAnh: "https://airbnbnew.cybersoft.edu.vn/images/phong2.png",
    },
    dateTime: "2025-10-30T11:01:39.1557655+07:00",
  });

  const room = roomData.content;
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [guests, setGuests] = useState(1);

  // Mock multiple images for gallery
  const images = [room.hinhAnh, room.hinhAnh, room.hinhAnh, room.hinhAnh];

  const amenities = [
    {
      icon: Wifi,
      label: "Wifi miễn phí",
      available: room.wifi,
      description: "Tốc độ cao 100Mbps",
    },
    {
      icon: Tv,
      label: "TV & Netflix",
      available: room.tivi,
      description: "Smart TV 4K",
    },
    {
      icon: Wind,
      label: "Điều hòa",
      available: room.dieuHoa,
      description: "Nhiệt độ thoải mái",
    },
    {
      icon: UtensilsCrossed,
      label: "Bếp đầy đủ",
      available: room.bep,
      description: "Dụng cụ nấu ăn",
    },
    {
      icon: Car,
      label: "Đỗ xe miễn phí",
      available: room.doXe,
      description: "Chỗ đỗ an toàn",
    },
    {
      icon: Waves,
      label: "Hồ bơi",
      available: room.hoBoi,
      description: "Hồ bơi riêng",
    },
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Không gian làm việc",
      desc: "Khu vực riêng với Wi-fi tốc độ cao",
    },
    {
      icon: Key,
      title: "Tự nhận phòng",
      desc: "Khóa thông minh, checkin dễ dàng",
    },
    {
      icon: Award,
      title: "Chủ nhà siêu cấp",
      desc: "Đánh giá cao, kinh nghiệm lâu năm",
    },
    { icon: Shield, title: "An toàn & Bảo mật", desc: "Camera an ninh 24/7" },
  ];

  const rules = [
    { label: "Nhận phòng", value: "Sau 14:00", icon: Clock },
    { label: "Trả phòng", value: "Trước 12:00", icon: Clock },
    { label: "Hủy đặt phòng", value: "Miễn phí trước 48h", icon: Calendar },
    {
      label: "Chính sách",
      value: "Không hút thuốc, Không thú cưng",
      icon: Shield,
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Image Gallery */}
      <div className="relative">
        {/* Back Button */}
        <button className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
            <Share2 className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"}`}
            />
          </button>
        </div>

        {/* Main Image Carousel */}
        <div
          className="relative h-[500px] overflow-hidden group cursor-pointer"
          onClick={() => setShowImageGallery(true)}
        >
          <img
            src={images[currentImageIndex]}
            alt={room.tenPhong}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Hot Badge */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 rounded-full shadow-xl animate-pulse">
            <span className="text-white font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Đặt nhiều nhất tuần này
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Rating */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    {room.tenPhong}
                  </h1>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-5 h-5" />
                      <span>Vị trí #{room.maViTri}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-900">4.9</span>
                      <span className="text-gray-600">(127 đánh giá)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Stats */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-3 rounded-2xl">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-sm text-blue-900 font-semibold">
                      {room.khach} khách
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-purple-100 px-5 py-3 rounded-2xl">
                  <Bed className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="text-sm text-purple-900 font-semibold">
                      {room.phongNgu} phòng ngủ
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-pink-100 px-5 py-3 rounded-2xl">
                  <Bed className="w-6 h-6 text-pink-600" />
                  <div>
                    <div className="text-sm text-pink-900 font-semibold">
                      {room.giuong} giường
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-green-100 px-5 py-3 rounded-2xl">
                  <Bath className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-sm text-green-900 font-semibold">
                      {room.phongTam} phòng tắm
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Điểm nổi bật
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-gray-600">{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mô tả chi tiết
              </h2>
              <div className="prose prose-lg max-w-none">
                {room.moTa.split("\r\n").map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tiện nghi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                      amenity.available
                        ? "border-green-200 bg-green-50 hover:border-green-300"
                        : "border-gray-200 bg-gray-50 opacity-50"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        amenity.available ? "bg-green-100" : "bg-gray-200"
                      }`}
                    >
                      <amenity.icon
                        className={`w-6 h-6 ${amenity.available ? "text-green-600" : "text-gray-400"}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {amenity.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {amenity.description}
                      </div>
                    </div>
                    {amenity.available ? (
                      <Check className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quy định & Chính sách
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <rule.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">
                        {rule.label}
                      </div>
                      <div className="text-sm text-gray-600">{rule.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-purple-100">
                {/* Price */}
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ${room.giaTien}
                    </span>
                    <span className="text-gray-600 text-lg">/đêm</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">4.9</span>
                    <span className="text-gray-600">· 127 đánh giá</span>
                  </div>
                </div>

                {/* Booking Form */}
                <div className="space-y-4 mb-6">
                 

                  <div className="border-2 border-gray-200 rounded-xl p-3 hover:border-purple-300 transition-colors">
                    <label className="text-xs font-semibold text-gray-600 block mb-1">
                      Số khách
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full text-sm font-semibold outline-none"
                    >
                      {[...Array(room.khach)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} khách
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mb-4 relative overflow-hidden group">
                  <span className="relative z-10">Đặt phòng ngay</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <p className="text-center text-sm text-gray-600 mb-6">
                  Bạn sẽ chưa bị trừ tiền
                </p>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-gray-700">
                    <span>${room.giaTien} x 5 đêm</span>
                    <span>${room.giaTien * 5}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Phí dịch vụ</span>
                    <span>$10</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                    <span>Tổng cộng</span>
                    <span className="text-purple-600">
                      ${room.giaTien * 5 + 10}
                    </span>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    <MessageCircle className="w-5 h-5" />
                    Chat
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-50 to-green-100 text-green-700 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                    <Phone className="w-5 h-5" />
                    Gọi
                  </button>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">
                  Đặt phòng an toàn
                </h3>
                <p className="text-sm text-gray-600">
                  Thanh toán bảo mật và chính sách hoàn tiền linh hoạt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showImageGallery && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowImageGallery(false)}
            className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={images[currentImageIndex]}
            alt={room.tenPhong}
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute left-6 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
