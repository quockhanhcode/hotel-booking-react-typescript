export default function UsersManagement() {
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A1",
      email: "nguyena@email.com",
      role: "Khách",
      joinDate: "2025-01-01",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "tranb@email.com",
      role: "Khách",
      joinDate: "2025-01-05",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "levanc@email.com",
      role: "Admin",
      joinDate: "2024-12-20",
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden animate-fade-in-up">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Tên
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Vai Trò
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
              Ngày Tham Gia
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={user.id}
              className="border-b hover:bg-purple-50 transition-all duration-300 cursor-pointer"
              style={{
                animation: `fadeInUp 0.5s ease-out ${idx * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {user.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
              <td className="px-6 py-4 text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 inline-block hover:scale-110 ${
                    user.role === "Admin"
                      ? "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {user.joinDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
