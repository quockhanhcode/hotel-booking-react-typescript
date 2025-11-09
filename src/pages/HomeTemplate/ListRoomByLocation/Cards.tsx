import {
  Heart,
  Users,
  Bed,
  Bath,
  Wifi,
  Wind,
  Tv,
  Zap,
  ParkingCircle,
  Waves,
  UtensilsCrossed,
  AlertCircle,
  MapPin,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getRoomListApi } from "@/services/room.api";
import { useQuery } from "@tanstack/react-query";
import PaginationLayout from "@/layouts/Pagination";

export default function RoomListing() {
  const { data: rooms = [] } = useQuery({
    queryKey: ["getRoomsList"],
    queryFn: getRoomListApi,
  });

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
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="text-sm text-slate-600 ml-2">
            {/* ({filteredRooms.length} phòng) */}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms?.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={room.hinhAnh}
                  alt={room.tenPhong}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 items-center justify-center">
                  <AlertCircle className="text-slate-400" size={48} />
                </div>
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-slate-100 transition-colors">
                  <Heart size={20} className="text-red-500" />
                </button>
                <Badge className="absolute bottom-3 left-3 bg-red-500 hover:bg-red-600">
                  Phổ biến
                </Badge>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h3 className="font-semibold text-slate-900 mb-1 line-clamp-2 text-sm">
                  {room.tenPhong}
                </h3>

                {/* Basic Info */}
                <div className="flex gap-3 mb-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>{room.khach} khách</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed size={14} />
                    <span>{room.giuong} giường</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={14} />
                    <span>{room.phongTam} phòng tắm</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {room.wifi && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Wifi size={14} /> <span>Wi-fi</span>
                    </div>
                  )}
                  {room.tivi && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Tv size={14} /> <span>TV</span>
                    </div>
                  )}
                  {room.dieuHoa && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Wind size={14} /> <span>Điều hòa</span>
                    </div>
                  )}
                  {room.mayGiat && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Zap size={14} /> <span>Máy giặt</span>
                    </div>
                  )}
                  {room.doXe && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <ParkingCircle size={14} /> <span>Đỗ xe</span>
                    </div>
                  )}
                  {room.hoBoi && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Waves size={14} /> <span>Hồ bơi</span>
                    </div>
                  )}
                  {room.bep && (
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <UtensilsCrossed size={14} /> <span>Bếp</span>
                    </div>
                  )}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                  <div>
                    <span className="text-lg font-bold text-slate-900">
                      ${room.giaTien}
                    </span>
                    <span className="text-xs text-slate-600 ml-1">/đêm</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-700 hover:bg-blue-400 text-white cursor-pointer"
                  >
                    Xem chi tiết
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PaginationLayout />
      </div>
    </div>
  );
}
