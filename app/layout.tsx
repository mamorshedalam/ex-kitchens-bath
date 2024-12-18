import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const omnes = localFont({
  src: [
    {
      path: "./fonts/Omnes Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Omnes Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Omnes SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Omnes Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Omnes Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Omnes Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-omnes",
});

export const metadata: Metadata = {
  title: "Express Kitchens & Bath",
  description: "Express Kitchens & Bath",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={omnes.variable}>{children}</body>
    </html>
  );
}
