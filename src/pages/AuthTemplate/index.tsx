import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthTemplate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6">
      <Outlet />
    </div>
  );
}
