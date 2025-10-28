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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  const menuItems = [
    { id: "overview", label: "Tổng Quan", icon: BarChart3, link: "" },
    {
      id: "comments",
      label: "Bình Luận",
      icon: MessageSquare,
      link: "comment-management",
    },
    {
      id: "bookings",
      label: "Đặt Phòng",
      icon: Calendar,
      link: "booking-management",
    },
    { id: "users", label: "Người Dùng", icon: Users, link: "user-management" },
    { id: "rooms", label: "Phòng", icon: Home, link: "room-management" },
    {
      id: "locations",
      label: "Vị Trí",
      icon: MapPin,
      link: "location-management",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
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
                activeTab === item.id ? "bg-blue-600 border-l-4 border-blue-400 shadow-lg" : "hover:bg-gray-700"
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
            <p className="text-gray-600">Quản lý thông tin hệ thống thanhlv</p>
          </div>

          <Outlet />
        </div>
      </main>
    </div>
  );
}
