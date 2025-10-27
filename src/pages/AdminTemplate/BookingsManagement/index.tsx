export default function BookingsManagement() {
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
  return (
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
                animation: `fadeInUp 0.5s ease-out ${idx * 100}ms forwards`,
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
  );
}
