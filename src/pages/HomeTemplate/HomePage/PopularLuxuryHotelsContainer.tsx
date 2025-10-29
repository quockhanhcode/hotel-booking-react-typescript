import React, { useRef } from "react";
import { MapPin, Star, ChevronRight, TrendingUp } from "lucide-react";

export default function PopularLuxuryHotelsContainer() {
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
  return (
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
                      <span className="text-sm text-slate-500 ml-1">/đêm</span>
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
  );
}
