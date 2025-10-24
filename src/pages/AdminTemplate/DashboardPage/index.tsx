import { MessageSquare, Calendar, Users, Home } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      label: "Tổng Bình Luận",
      value: "1,250",
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    { label: "Đặt Phòng", value: "348", icon: Calendar, color: "bg-green-500" },
    {
      label: "Người Dùng",
      value: "2,847",
      icon: Users,
      color: "bg-purple-500",
    },
    { label: "Phòng", value: "156", icon: Home, color: "bg-orange-500" },
  ];
  const StatCard = ({ label, value, Icon, color, delay }) => (
    <div
      className={`bg-white rounded-lg shadow p-6 flex items-center transform transition-all duration-700 ease-out hover:shadow-lg hover:scale-105 opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`${color} p-3 rounded-lg mr-4 transition-transform duration-300 hover:rotate-12`}
      >
        <Icon className="text-white" size={24} />
      </div>
      <div>
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
  return (
    <div className="wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <StatCard
            key={idx}
            label={stat.label}
            value={stat.value}
            Icon={stat.icon}
            color={stat.color}
            delay={idx * 100}
          />
        ))}
      </div>
    </div>
  );
}
