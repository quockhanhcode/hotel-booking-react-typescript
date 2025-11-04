import React from "react";

export default function CommentLayout() {
  return (
    <div className="w-full mx-auto p-6 bg-[#DBEAFE] text-gray-100 rounded-xl">
      {/* Title section */}
      <div className="mb-6 flex items-center gap-3 border-b border-gray-700 pb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3h6m-6 3h3m10.125 1.754A11.959 11.959 0 0112 21c-2.486 0-4.795-.758-6.708-2.054a9.744 9.744 0 01-.417-.3A11.955 11.955 0 012.25 12c0-2.52.782-4.847 2.124-6.746.127-.172.262-.34.403-.504A11.958 11.958 0 0112 3c2.486 0 4.795.758 6.708 2.054.144.1.285.203.423.309A11.955 11.955 0 0121.75 12a11.96 11.96 0 01-2.125 6.754z"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-amber-950">
          Bình luận <span className="text-gray-400">(38)</span>
        </h1>
        <div className="ml-auto flex gap-2">
          <button className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:bg-gray-800">
            Bình luận
          </button>
          <button className="px-3 py-1 border border-gray-600 rounded-lg text-sm hover:bg-gray-800">
            Đánh giá
          </button>
        </div>
      </div>

      {/* Comment form */}
      <section className="bg-white rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <img
            src="https://i.pravatar.cc/50?u=bang92"
            className="w-10 h-10 rounded-full"
            alt="avatar"
          />
          <div className="text-black">
            <p className="font-medium">Bình luận với tên</p>
            <p className="font-semibold">Khánh Huỳnh Quốc</p>
          </div>
        </div>
        <textarea
          rows="5"
          maxLength="1000"
          className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-sm resize-none text-gray-200 placeholder-gray-500"
          placeholder="Viết bình luận"
        ></textarea>
        <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" className="accent-yellow-400" />
            <span>Tiết lộ?</span>
          </label>
          <button className="text-yellow-400 font-medium flex items-center gap-1">
            Gửi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 12h13.5m0 0l-6.75-6.75M18.75 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Comments list */}
      <section className="space-y-6">
        {/* Comment item */}
        {[
          {
            name: "Yeu nham me vo",
            time: "3 ngày trước",
            text: "** phim tâm lí biến thái vkl hối hận khi xem",
            img: "https://i.pravatar.cc/40?img=68",
            likes: 1,
          },
          {
            name: "Le Tu",
            time: "8 ngày trước",
            text: "Phim hay 7/10 nhé. Có một đoạn reference với as above so below :)).",
            img: "https://i.pravatar.cc/40?img=12",
            likes: 1,
          },
          {
            name: "Long Trường",
            time: "8 ngày trước",
            text: "coi series này giải trí phết, lại hóng các mùa sau",
            img: "https://i.pravatar.cc/40?img=45",
            likes: 0,
          },
        ].map((c, i) => (
          <article key={i} className="flex gap-3">
            <img src={c.img} className="w-10 h-10 rounded-full" alt="avatar" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-amber-950">{c.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v18m9-9H3"
                  />
                </svg>
                <span className="text-sm text-gray-400">{c.time}</span>
              </div>
              <p className="text-amber-950 text-sm">{c.text}</p>
              <div className="flex items-center gap-4 mt-2 text-gray-400 text-sm">
                <button className="flex items-center gap-1 hover:text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 9l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span>{c.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12c0 4.418-4.03 8-9 8a9 9 0 01-4.89-.93L3 20l1.07-3.11A8.965 8.965 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  Trả lời
                </button>
                <button className="flex items-center gap-1 hover:text-yellow-400">
                  Thêm
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
