"use client";
import {
  AlignRight,
  Mail,
  MessageSquareText,
  MoveRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-[999] bg-white shadow-md">
      <div className="top-header">
        <span>(267) 400 4003</span>
        <span>We offer full remodeling services</span>
        <MoveRight size={14} />
        <Link
          className="font-medium text-rose-200 hover:text-white"
          href={`/contact`}
        >
          book an appointment
        </Link>
      </div>
      <nav className="flex items-center justify-between xl:px-6 md:p-4 p-2.5">
        <div>
          <Link href={`/`}>
            <Logo />
          </Link>
        </div>
        <div
          className={`nav-main ${
            menu ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="lg:flex items-center">
            <li>
              <Link href={`/`} className="nav-item">
                Kitchen Design
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Flooring
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Closet Design
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Blinds
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Custom Art
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Furniture
              </Link>
            </li>
            <li>
              <Link href={`/`} className="nav-item">
                Remodeling
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-end md:gap-2">
          <div className="sm:w-auto w-full text-end sm:order-1 order-2">
            <Link href={`/`}>
              <button className="btn-black">Book your consultation</button>
            </Link>
          </div>
          <div className="sm:order-2 order-1 flex flex-wrap items-center justify-end md:gap-2">
            <Link href={`/`}>
              <button className="btn-icon">
                <MessageSquareText size={21} />
              </button>
            </Link>
            <Link href={`/`}>
              <button className="btn-icon">
                <Mail size={21} />
              </button>
            </Link>
            <Link href={`/`}>
              <button className="btn-icon">
                <Phone size={21} />
              </button>
            </Link>
            <button
              onClick={() => setMenu(!menu)}
              className="lg:hidden block ml-2"
            >
              <AlignRight size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
