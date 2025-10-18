import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthTemplate() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
