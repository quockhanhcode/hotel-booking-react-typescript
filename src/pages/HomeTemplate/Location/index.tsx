import { Heart } from "lucide-react";
import React from "react";

export default function LocationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Khám phá các điểm đến nổi bật
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt1.jpg"
              alt="Quận 1"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-top from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Quận 1</h3>
            <p className="text-sm text-gray-600">Hồ Chí Minh, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt2.jpg"
              alt="Cái Răng"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-top from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Cái Răng</h3>
            <p className="text-sm text-gray-600">Cần Thơ, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt3.jpg"
              alt="Hòn Rùa"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Hòn Rùa</h3>
            <p className="text-sm text-gray-600">Nha Trang, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt4.jpg"
              alt="Hoàn Kiếm"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Hoàn Kiếm</h3>
            <p className="text-sm text-gray-600">Hà Nội, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt5.jpg"
              alt="Hòn Tằm"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Hòn Tằm</h3>
            <p className="text-sm text-gray-600">Phú Quốc, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg"
              alt="Hải Châu"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Hải Châu</h3>
            <p className="text-sm text-gray-600">Đà Nẵng, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt7.jpg"
              alt="Langbiang"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Langbiang</h3>
            <p className="text-sm text-gray-600">Đà Lạt, Việt Nam</p>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-xl transition-shadow duration-300">
            <img
              src="https://airbnbnew.cybersoft.edu.vn/images/vt8.jpg"
              alt="Mũi Né"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
              <Heart className="far fa-heart text-gray-700" />
            </button>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-gray-900">Mũi Né</h3>
            <p className="text-sm text-gray-600">Phan Thiết, Việt Nam</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors">
          Xem thêm vị trí
        </button>
      </div>
    </div>
  );
}
