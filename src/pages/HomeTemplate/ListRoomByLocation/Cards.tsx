import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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
  Sparkles,
} from "lucide-react";

export default function Cards() {
  const [rooms] = useState([
    {
      id: 241228,
      tenPhong: "test-111",
      khach: 2,
      phongNgu: 1,
      giuong: 1,
      phongTam: 1,
      moTa: "tesst2tesst2 tesst2tesst2tesst2",
      giaTien: 1,
      mayGiat: true,
      banLa: false,
      tivi: true,
      dieuHoa: true,
      wifi: true,
      bep: true,
      doXe: true,
      hoBoi: false,
      banUi: true,
      maViTri: 11334,
      hinhAnh:
        "https://anh.24h.com.vn/upload/3-2015/images/2015-08-06/1438857166-1438580960-3-alcatraz-prison.jpg",
      rating: 4.8,
      reviews: 124,
      badge: "Hot",
    },
    {
      id: 241235,
      tenPhong: "test2",
      khach: 2,
      phongNgu: 2,
      giuong: 2,
      phongTam: 2,
      moTa: "tesst04",
      giaTien: 2,
      mayGiat: false,
      banLa: false,
      tivi: false,
      dieuHoa: true,
      wifi: false,
      bep: false,
      doXe: false,
      hoBoi: true,
      banUi: false,
      maViTri: 11334,
      hinhAnh:
        "https://airbnbnew.cybersoft.edu.vn/avatar/25-09-2025-10-47-21-e8b9b909-de52-4128-bbe7-885ee4928c7d.jpg",
      rating: 4.5,
      reviews: 89,
      badge: "New",
    },
  ]);
  const [favorites, setFavorites] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const getAmenities = (room) => {
    const amenities = [];
    if (room.wifi)
      amenities.push({ icon: Wifi, label: "Wifi", color: "text-blue-500" });
    if (room.tivi)
      amenities.push({ icon: Tv, label: "TV", color: "text-purple-500" });
    if (room.dieuHoa)
      amenities.push({ icon: Wind, label: "Điều hòa", color: "text-cyan-500" });
    if (room.bep)
      amenities.push({
        icon: UtensilsCrossed,
        label: "Bếp",
        color: "text-orange-500",
      });
    if (room.doXe)
      amenities.push({ icon: Car, label: "Đỗ xe", color: "text-green-500" });
    if (room.hoBoi)
      amenities.push({ icon: Waves, label: "Hồ bơi", color: "text-blue-400" });
    return amenities;
  };

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case "Hot":
        return "bg-gradient-to-r from-red-500 to-orange-500";
      case "New":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gradient-to-r from-blue-500 to-indigo-500";
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {rooms.map((room) => {
        const amenities = getAmenities(room);
        const isFavorite = favorites.includes(room.id);
        const isHovered = hoveredCard === room.id;

        return (
          <div
            key={room.id}
            className="group relative"
            onMouseEnter={() => setHoveredCard(room.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className={`bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                isHovered ? "shadow-2xl scale-105 -rotate-1" : "shadow-xl"
              }`}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={room.hinhAnh}
                  alt={room.tenPhong}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge */}
                {room.badge && (
                  <div
                    className={`absolute top-4 left-4 ${getBadgeStyle(
                      room.badge
                    )} px-4 py-1 rounded-full shadow-lg animate-pulse`}
                  >
                    <span className="text-white font-bold text-sm flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      {room.badge}
                    </span>
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(room.id)}
                  className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 ${
                    isHovered ? "scale-110" : "scale-100"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 transition-all duration-300 ${
                      isFavorite
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-gray-600"
                    }`}
                  />
                </button>

                {/* Price Tag */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-xl">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      ${room.giaTien}
                    </span>
                    <span className="text-gray-600 text-sm font-medium">
                      /đêm
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Rating */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">
                    {room.tenPhong}
                  </h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-900">
                      {room.rating}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Vị trí #{room.maViTri}</span>
                  <span className="text-xs text-gray-400 ml-auto">
                    ({room.reviews} đánh giá)
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.moTa}
                </p>

                {/* Room Info */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-3 py-2 rounded-xl">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">
                      {room.khach} khách
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 px-3 py-2 rounded-xl">
                    <Bed className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-900">
                      {room.phongNgu} PN
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-pink-50 to-pink-100 px-3 py-2 rounded-xl">
                    <Bath className="w-5 h-5 text-pink-600" />
                    <span className="text-sm font-semibold text-pink-900">
                      {room.phongTam} PT
                    </span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <div className="flex flex-wrap gap-2">
                    {amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-xl transition-colors"
                      >
                        <amenity.icon className={`w-4 h-4 ${amenity.color}`} />
                        <span className="text-xs font-medium text-gray-700">
                          {amenity.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r bg-[#1945CC] text-white py-7 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10">Đặt phòng ngay</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            {/* Floating particles effect */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <div
                  className="absolute top-20 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
