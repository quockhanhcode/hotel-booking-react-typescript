import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthTemplate() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Outlet />
    </div>
  );
}
