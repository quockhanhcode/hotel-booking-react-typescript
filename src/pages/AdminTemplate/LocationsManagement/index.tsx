export default function LocationsManagement() {
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
  return (
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
                animation: `fadeInUp 0.5s ease-out ${idx * 100}ms forwards`,
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
  );
}
