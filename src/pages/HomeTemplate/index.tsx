import React from "react";
import Header from "./_components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./_components/Footer";

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
