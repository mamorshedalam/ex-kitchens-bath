"use client";
import { AlignRight, Mail, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="relative max-w-screen-2xl mx-auto">
      <div className="top-header">
        <span>Want talk with expert</span>
        <MoveRight size={14} />
        <Link
          className="font-medium text-rose-200 hover:text-white"
          href={`/contact`}
        >
          Contact
        </Link>
      </div>
      <nav className="flex items-center justify-between xl:px-6 md:p-4 p-2.5 shadow-md">
        <div>
          <Link href={`/`}>
            <Logo />
          </Link>
        </div>
        <div className={`nav-main ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
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
        <div className="flex items-center md:gap-2">
          <Link href={`/`}>
            <button className="btn-black mr-1.5">Text Us</button>
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
      </nav>
    </header>
  );
}
