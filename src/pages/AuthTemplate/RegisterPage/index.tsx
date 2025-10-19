import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  const [currentPage, setCurrentPage] = useState("signup"); // 'login' or 'signup'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginSubmit = () => {
    if (loginData.email && loginData.password) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const handleSignupSubmit = () => {
    if (
      signupData.fullName &&
      signupData.email &&
      signupData.password &&
      signupData.confirmPassword
    ) {
      if (signupData.password !== signupData.confirmPassword) {
        alert("Mật khẩu không trùng khớp!");
        return;
      }
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Background decoration */}
      <div className="inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Auth Card */}
      <div className="relative w-full max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8 md:p-10 relative">
          {currentPage === "signup" && (
            <button className="absolute top-6 left-6 text-slate-400 hover:text-slate-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          {currentPage === "login" ? (
            <>
              {/* LOGIN FORM */}
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
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
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
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
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
                  onClick={handleLoginSubmit}
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Đang xử lý...
                    </span>
                  ) : (
                    "Đăng Nhập"
                  )}
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
                <button
                  onClick={() => setCurrentPage("signup")}
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Đăng ký ngay
                </button>
              </p>
            </>
          ) : (
            <>
              {/* SIGNUP FORM */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Đăng Ký</h1>
                <p className="text-slate-400 text-sm">
                  Tạo tài khoản mới của bạn
                </p>
              </div>

              <div className="space-y-4">
                {/* Full Name Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Họ và Tên
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="text"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      placeholder="Nguyễn Văn A"
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
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
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
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

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Xác Nhận Mật Khẩu
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 w-5 h-5 text-slate-500" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          confirmPassword: e.target.value,
                        })
                      }
                      placeholder="••••••••"
                      className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-3.5 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <label className="flex items-start text-slate-400 hover:text-slate-300 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded bg-slate-700 border-slate-600 text-purple-500 cursor-pointer mt-1"
                  />
                  <span className="ml-2">
                    Tôi đồng ý với các{" "}
                    <span className="text-purple-400">điều khoản dịch vụ</span>{" "}
                    và{" "}
                    <span className="text-purple-400">chính sách bảo mật</span>
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  onClick={handleSignupSubmit}
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Đang xử lý...
                    </span>
                  ) : (
                    "Đăng Ký"
                  )}
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-slate-800/50 text-slate-400">
                    Hoặc đăng ký với
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

              {/* Login Link */}
              <p className="text-center text-slate-400 text-sm mt-6">
                Đã có tài khoản?{" "}
                <button
                  onClick={() => setCurrentPage("login")}
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Đăng nhập
                </button>
              </p>
            </>
          )}
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
      </div>
    </div>
  );
}
