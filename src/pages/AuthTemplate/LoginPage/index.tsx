import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <>
      <Card className="w-full max-w-md shadow-2xl rounded-3xl border-2 border-blue-100 bg-white/90 backdrop-blur">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <LogIn className="text-white w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Đăng nhập tài khoản
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            Vui lòng nhập thông tin để tiếp tục
          </p>
        </CardHeader>

        <CardContent className="space-y-6 mt-4">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              <Input
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="font-semibold text-gray-700">
              Mật khẩu
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              <Input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

          {/* Button */}
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
            <LogIn className="w-4 h-4" />
            Đăng nhập
          </Button>

          {/* Extra links */}
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>
              Quên mật khẩu?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Khôi phục ngay
              </a>
            </p>
            <p className="mt-2">
              Chưa có tài khoản?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Đăng ký
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
