import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User, Phone, Calendar, UserPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RegisterPage() {
  return (
    <>
      <Card className="w-full max-w-lg shadow-2xl rounded-3xl border-2 border-blue-100 bg-white/90 backdrop-blur">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <UserPlus className="text-white w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Đăng ký tài khoản
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            Điền thông tin bên dưới để tạo tài khoản mới
          </p>
        </CardHeader>

        <CardContent className="space-y-6 mt-4">
          {/* Họ tên */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold text-gray-700">
              Họ và tên
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              <Input
                id="name"
                type="text"
                placeholder="Nhập họ và tên"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

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
                placeholder="Nhập email"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

          {/* Số điện thoại */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-semibold text-gray-700">
              Số điện thoại
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              <Input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

          {/* Ngày sinh */}
          <div className="space-y-2">
            <Label htmlFor="birthday" className="font-semibold text-gray-700">
              Ngày sinh
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              <Input
                id="birthday"
                type="date"
                className="pl-10 border-2 border-blue-100 focus-visible:ring-blue-400 focus-visible:border-blue-400 rounded-xl"
              />
            </div>
          </div>

          {/* Giới tính */}
          <div className="space-y-2">
            <Label className="font-semibold text-gray-700">Giới tính</Label>
            <RadioGroup defaultValue="true" className="flex gap-6 mt-1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="true" id="male" />
                <Label htmlFor="male" className="text-gray-700">
                  Nam
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="false" id="female" />
                <Label htmlFor="female" className="text-gray-700">
                  Nữ
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Mật khẩu */}
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

          {/* Vai trò */}
          <div className="space-y-2">
            <Label htmlFor="role" className="font-semibold text-gray-700">
              Vai trò
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tùy chọn" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">ADMIN</SelectItem>
                  <SelectItem value="banana">USER</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Nút đăng ký */}
          <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 rounded-xl shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
            <UserPlus className="w-4 h-4" />
            Đăng ký
          </Button>

          {/* Chuyển hướng */}
          <div className="text-center mt-4 text-sm text-gray-600">
            <p>
              Đã có tài khoản?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Đăng nhập ngay
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
