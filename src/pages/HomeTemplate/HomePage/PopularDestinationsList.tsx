import React from "react";
import { ChevronRight, Plane, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PopularDestinationsList() {
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
  return (
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
          <Button className="cursor-pointer !p-0 hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 bg-transparent hover:bg-transparent">
            Xem tất cả <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
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
  );
}
