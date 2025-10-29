import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import clsx from "clsx";
import {
  Download,
  Edit,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Trash2,
  User,
  UserPlus,
} from "lucide-react";

export default function UsersManagement() {
  const users = [
    {
      id: 1,
      name: "erjhhY",
      email: "admin@gmail.com",
      password: "",
      phone: null,
      birthday: "29/11/1993",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
      gender: true,
      role: "ADMIN",
    },
    {
      id: 45047,
      name: "Updated Name",
      email: "updated@example.com",
      password: "",
      phone: null,
      birthday: "12/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
      gender: false,
      role: "USER",
    },
    {
      id: 45048,
      name: "hodydab",
      email: "qitosu@mailinator.com",
      password: "",
      phone: null,
      birthday: "05/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
      gender: false,
      role: "ADMIN",
    },
    {
      id: 45049,
      name: "xudabor",
      email: "nekacipyp@mailinator.com",
      password: "",
      phone: null,
      birthday: "05/02/2025",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
      gender: true,
      role: "USER",
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    return clsx({
      "bg-purple-100 text-purple-800": role === "ADMIN",
      "bg-gray-100 text-gray-800": role === "USER",
    });
  };

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in-up">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Tổng người dùng</p>
              <p className="text-3xl font-bold text-blue-800">{users.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Quản lí</p>
              <p className="text-3xl font-bold text-purple-600">
                {users.filter((u) => u.role === "Admin").length}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👑</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Người dùng</p>
              <p className="text-3xl font-bold text-gray-600">20</p>
            </div>
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-slate-200 animate-fade-in-up max-sm:p-5">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex max-sm:flex-col flex-1 gap-4 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <Input
              type="text"
              placeholder="Tìm kiếm theo tên hoặc email..."
              className="pl-10 h-11"
            />
          </div>

          {/* Filter Select */}
          <div className="relative w-[180px] max-sm:w-full">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
            <Select defaultValue="all">
              <SelectTrigger className="pl-10 !h-11 w-full">
                <SelectValue placeholder="Tất cả vai trò" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả vai trò</SelectItem>
                <SelectItem value="admin">Quản lí</SelectItem>
                <SelectItem value="user">Người dùng</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* ⚙️ Actions */}
        <div className="flex gap-3 max-sm:flex-col">
          <Button
            variant="outline"
            className="flex items-center gap-2 h-11 border-slate-300 hover:bg-slate-50"
          >
            <Download className="w-4 h-4" />
            Xuất file
          </Button>
          <Button className="flex items-center gap-2 h-11 bg-blue-600 hover:bg-blue-700 shadow-sm">
            <Plus className="w-4 h-4" />
            Thêm người dùng
          </Button>
        </div>
      </div>
    </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 animate-fade-in-up">
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 w-2/12 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Người dùng
                </th>
                <th className="px-6 py-4 w-3/12 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 w-3/12 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Mật khẩu
                </th>
                <th className="px-6 py-4 w-2/12 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Vai trò
                </th>
                <th className="px-6 py-4 w-2/12 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {users.map((user, i) => (
                <tr
                  key={user.id}
                  className="hover:bg-slate-50 transition-colors"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${i * 100}ms forwards`,
                    opacity: 0,
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full bg-slate-200"
                      />
                      <div>
                        <div className="font-medium text-slate-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-slate-500">
                          ID: {user.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-slate-900">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-slate-900">{user.password}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeColor(
                        user.role
                      )}`}
                    >
                      {user.role === "ADMIN" ? "Quản lí" : "Người dùng"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
