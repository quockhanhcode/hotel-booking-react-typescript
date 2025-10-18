import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthTemplate() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
