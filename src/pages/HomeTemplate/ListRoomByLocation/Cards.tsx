import {
  Wifi,
  Wind,
  Tv,
  Waves,
  MapPin,
  Star,
  Utensils,
  Car,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import PaginationLayout from "@/layouts/Pagination";
import { getRoomListApi } from "@/services/room.api";
import { getLocation } from "@/services/location.api";
import type { Location } from "@/interfaces/location.interface";

export default function RoomListing() {
  const { data: rooms } = useQuery({
    queryKey: ["getListRoom"],
    queryFn: () => getRoomListApi(1, 9),
  });
  const { data: locations = [] } = useQuery({
    queryKey: ["getListLocation"],
    queryFn: getLocation,
  });

  const groupByLocations = (locations: Location[]) => {
    return locations.reduce<Record<string, Location[]>>((acc, curr) => {
      const key = curr.tinhThanh;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  };
  // console.log("groupby", groupByLocations(locations));
  const grouped = groupByLocations(locations);
  const listAddress = Object.entries(grouped).map(([key]) => {
    return key;
  });
  const handleSelected = (data: string) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Khám phá khách sạn
          </h1>
          <p className="text-slate-600">
            Tìm kiếm nơi ở hoàn hảo cho kỳ nghỉ của bạn
          </p>
        </div>

        {/* Location Filter */}
        <div className="mb-6 flex items-center gap-3">
          <MapPin className="text-red-500" size={20} />
          <label className="font-semibold text-slate-700">Chọn vị trí:</label>
          <Select onValueChange={handleSelected}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn khu vực" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {listAddress?.map((add, index) => (
                  <SelectItem key={index} value={add}>
                    {add}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="text-sm text-slate-600 ml-2">
            {/* ({filteredRooms.length} phòng) */}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms?.data.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={room.hinhAnh}
                  alt={room.tenPhong}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    {room.maViTri}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-2xl font-bold">${room.giaTien}</p>
                  <p className="text-xs text-blue-100">/đêm</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-bold text-gray-900 text-base mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {room.tenPhong}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    5.0
                  </span>
                  <span className="text-xs text-gray-500">(128)</span>
                </div>

                {/* Room Info */}
                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">
                      {room.phongNgu}
                    </p>
                    <p className="text-xs text-gray-600">Phòng</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">
                      {room.giuong}
                    </p>
                    <p className="text-xs text-gray-600">Giường</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">
                      {room.phongTam}
                    </p>
                    <p className="text-xs text-gray-600">Phòng tắm</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {room.wifi && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Wifi className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        Wifi
                      </span>
                    </div>
                  )}
                  {room.tivi && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Tv className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        TV
                      </span>
                    </div>
                  )}
                  {room.dieuHoa && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Wind className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        Điều hòa
                      </span>
                    </div>
                  )}
                  {room.bep && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Utensils className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        Bếp
                      </span>
                    </div>
                  )}
                  {room.doXe && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Car className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        Đỗ xe
                      </span>
                    </div>
                  )}
                  {room.hoBoi && (
                    <div className="flex items-center justify-center gap-1 bg-blue-50 rounded-lg p-2">
                      <Waves className="w-4 h-4 text-blue-600" />
                      <span className="text-xs text-gray-700 font-medium">
                        Hồ bơi
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {room.moTa}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
        <PaginationLayout />
      </div>
    </div>
  );
}
