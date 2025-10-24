import { useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router";
import {
  Menu,
  X,
  BarChart3,
  MessageSquare,
  Calendar,
  Users,
  Home,
  MapPin,
} from "lucide-react";
import DashboardPage from "./DashboardPage";
import UsersManagement from "./UsersManagement";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  let navigate = useNavigate();

  const comments = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      content: "Phòng rất sạch sẽ và thoải mái",
      date: "2025-01-15",
    },
    {
      id: 2,
      user: "Trần Thị B",
      content: "Dịch vụ tuyệt vời, sẽ quay lại",
      date: "2025-01-14",
    },
    { id: 3, user: "Lê Văn C", content: "Giá cả hợp lý", date: "2025-01-13" },
  ];

  const bookings = [
    {
      id: 1,
      room: "Phòng 101",
      guest: "Nguyễn Văn D",
      checkIn: "2025-01-20",
      checkOut: "2025-01-23",
      status: "Đã xác nhận",
    },
    {
      id: 2,
      room: "Phòng 205",
      guest: "Phạm Thị E",
      checkIn: "2025-01-21",
      checkOut: "2025-01-24",
      status: "Chờ xác nhận",
    },
    {
      id: 3,
      room: "Phòng 312",
      guest: "Hoàng Văn F",
      checkIn: "2025-01-22",
      checkOut: "2025-01-25",
      status: "Đã xác nhận",
    },
  ];

  const rooms = [
    {
      id: 1,
      name: "Phòng 101",
      type: "Đơn",
      giá: "300.000₫",
      status: "Có sẵn",
    },
    {
      id: 2,
      name: "Phòng 205",
      type: "Đôi",
      giá: "500.000₫",
      status: "Đã đặt",
    },
    {
      id: 3,
      name: "Phòng 312",
      type: "VIP",
      giá: "800.000₫",
      status: "Có sẵn",
    },
  ];

  const locations = [
    {
      id: 1,
      name: "Hà Nội",
      address: "Quận Ba Đình",
      rooms: 45,
      status: "Hoạt động",
    },
    {
      id: 2,
      name: "TP. Hồ Chí Minh",
      address: "Quận 1",
      rooms: 68,
      status: "Hoạt động",
    },
    {
      id: 3,
      name: "Đà Nẵng",
      address: "Quận Hải Châu",
      rooms: 32,
      status: "Hoạt động",
    },
  ];

  const menuItems = [
    { id: "overview", label: "Tổng Quan", icon: BarChart3, link: "" },
    { id: "comments", label: "Bình Luận", icon: MessageSquare, link: "" },
    { id: "bookings", label: "Đặt Phòng", icon: Calendar, link: "" },
    { id: "users", label: "Người Dùng", icon: Users, link: "user-management" },
    { id: "rooms", label: "Phòng", icon: Home, link: "" },
    { id: "locations", label: "Vị Trí", icon: MapPin, link: "" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.5s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s ease-out;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-500 ease-in-out flex flex-col shadow-2xl animate-slide-in-left`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <h1 className="text-xl font-bold transition-all duration-300 animate-fade-in-up">
              Dashboard
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hover:bg-gray-700 p-2 rounded transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="flex-1">
          {menuItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                navigate(item.link);
              }}
              className={`w-full flex items-center px-6 py-3 transition-all duration-300 hover:pl-8 ${
                activeTab === item.id
                  ? "bg-blue-600 border-l-4 border-blue-400 shadow-lg"
                  : "hover:bg-gray-700"
              } group`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <item.icon
                size={20}
                className={`transition-transform duration-300 ${
                  activeTab === item.id ? "scale-110" : "group-hover:scale-110"
                }`}
              />
              {sidebarOpen && (
                <span className="ml-3 transition-all duration-300">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-500">
              {menuItems.find((m) => m.id === activeTab)?.label}
            </h2>
            <p className="text-gray-600">Quản lý thông tin hệ thống</p>
          </div>

          <Outlet />
          {/* {activeTab === "overview" && <DashboardPage/>} */}

          {/* Comments Tab */}
          {/* {activeTab === "comments" && (
            <div className="bg-white rounded-lg shadow overflow-hidden animate-fade-in-up">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Người Dùng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Nội Dung
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Ngày
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Hành Động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comments.map((comment, idx) => (
                    <tr
                      key={comment.id}
                      className="border-b hover:bg-blue-50 transition-all duration-300 transform hover:scale-101 hover:pl-2 cursor-pointer"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          idx * 100
                        }ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 transition-colors duration-300">
                        {comment.user}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 transition-colors duration-300">
                        {comment.content}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 transition-colors duration-300">
                        {comment.date}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-red-600 hover:text-red-800 transition-all duration-300 hover:scale-110 active:scale-95">
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}

          {/* Bookings Tab */}
          {/* {activeTab === "bookings" && (
            <div className="bg-white rounded-lg shadow overflow-hidden animate-fade-in-up">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Phòng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Khách
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Nhận Phòng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Trả Phòng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Trạng Thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, idx) => (
                    <tr
                      key={booking.id}
                      className="border-b hover:bg-green-50 transition-all duration-300 cursor-pointer"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          idx * 100
                        }ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {booking.room}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {booking.guest}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {booking.checkIn}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {booking.checkOut}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 inline-block hover:scale-110 ${
                            booking.status === "Đã xác nhận"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}

          {/* Rooms Tab */}
          {/* {activeTab === "rooms" && (
            <div className="bg-white rounded-lg shadow overflow-hidden animate-fade-in-up">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Tên Phòng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Loại
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Giá
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Trạng Thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, idx) => (
                    <tr
                      key={room.id}
                      className="border-b hover:bg-orange-50 transition-all duration-300 cursor-pointer"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          idx * 100
                        }ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {room.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {room.type}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                        {room.giá}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 inline-block hover:scale-110 ${
                            room.status === "Có sẵn"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {room.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}

          {/* Locations Tab */}
          {/* {activeTab === "locations" && (
            <div className="bg-white rounded-lg shadow overflow-hidden animate-fade-in-up">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Tên Địa Điểm
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Địa Chỉ
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Số Phòng
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                      Trạng Thái
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location, idx) => (
                    <tr
                      key={location.id}
                      className="border-b hover:bg-indigo-50 transition-all duration-300 cursor-pointer"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          idx * 100
                        }ms forwards`,
                        opacity: 0,
                      }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {location.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {location.address}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {location.rooms}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 transition-all duration-300 inline-block hover:scale-110">
                          {location.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )} */}
        </div>
      </main>
    </div>
  );
}
