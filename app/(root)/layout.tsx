import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="sm:mt-[96px] mt-[112px]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
