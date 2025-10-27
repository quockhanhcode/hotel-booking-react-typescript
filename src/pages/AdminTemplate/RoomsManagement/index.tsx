export default function RoomsManagement() {
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
  return (
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
                animation: `fadeInUp 0.5s ease-out ${idx * 100}ms forwards`,
                opacity: 0,
              }}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {room.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{room.type}</td>
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
  );
}
