export default function Loading({ text = "Đang tải dữ liệu" }) {
  return (
    <div className="flex justify-center items-end gap-2 h-fit">
      <span>{text}</span>
      <div className="flex items-center justify-center gap-1 mb-1.5">
        <div
          className="size-1 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="size-1 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="size-1 bg-blue-600 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
}
