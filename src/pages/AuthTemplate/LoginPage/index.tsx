import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (email && password) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="mx-auto">
      {/* Login Card */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Đăng Nhập</h1>
            <p className="text-slate-400 text-sm">Chào mừng bạn quay lại</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Mật Khẩu
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-slate-400 hover:text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-purple-500 cursor-pointer"
                />
                <span className="ml-2">Ghi nhớ tôi</span>
              </label>
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                Quên mật khẩu?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Đang xử lý...
                  </>
                ) : (
                  "Đăng Nhập"
                )}
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-800/50 text-slate-400">
                Hoặc tiếp tục với
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="py-2 px-4 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700 hover:border-slate-500 transition-all font-medium text-sm">
              Google
            </button>
            <button className="py-2 px-4 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-300 hover:bg-slate-700 hover:border-slate-500 transition-all font-medium text-sm">
              GitHub
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-slate-400 text-sm mt-6">
            Chưa có tài khoản?{" "}
            <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              Đăng ký ngay
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
