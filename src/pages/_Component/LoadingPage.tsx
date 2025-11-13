export default function LoadingPage({ message = 'Đang tải dữ liệu...' }) {
 
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo hoặc icon */}
        <div className="mb-8 relative">
          <div className="w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-8 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-8 border-blue-600 rounded-full border-t-transparent border-r-transparent animate-spin"></div>
            <div className="absolute inset-4 border-8 border-purple-400 rounded-full border-b-transparent border-l-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
        </div>
        
        {/* Text */}
        <h2 className="text-2xl font-bold text-slate-800 mb-2">{message}</h2>
        <p className="text-slate-600">Vui lòng đợi trong giây lát...</p>
        
        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
