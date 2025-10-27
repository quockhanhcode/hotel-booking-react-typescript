export default function CommentsManagement() {
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
  return (
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
                animation: `fadeInUp 0.5s ease-out ${idx * 100}ms forwards`,
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
  );
}
