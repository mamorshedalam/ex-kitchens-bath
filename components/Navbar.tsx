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
    <div className="top-header md:hidden">
      <span>(267) 400 4003</span>
      <span>We offer full remodeling services</span>
    </div>
      <nav className="flex items-center flex-wrap xl:px-6 md:px-4 p-2.5 pt-0">
        <div>
          <Link href={`/`}>
            <Logo />
          </Link>
        </div>
        <div className="flex-grow basis-0">
          <div className="top-header lg:flex hidden">
            <span>(267) 400 4003</span>
            <span>We offer full remodeling services</span>
            <MoveRight size={14} />
            <Link className="font-medium" href={`/consultation`}>
              Book your consultation
            </Link>
          </div>
          <div className="flex items-center lg:justify-evenly justify-end">
            <div className="nav-main">
              <ul className="flex items-center">
                <li className="group relative">
                  <Link href={`https://tribecacabinetry.com`} className="nav-item">
                    Kitchen Design
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`/`} className="nav-item">
                    Flooring
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`https://saloni.furniture/collection/dressing-rooms`} className="nav-item">
                    Closet Design
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`/`} className="nav-item">
                    Blinds
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`https://www.instagram.com/arts.by.naz?igsh=ODNkYTh0M3I3NWk0`} className="nav-item">
                    Custom Art
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`https://saloni.furniture`} className="nav-item">
                    Furniture
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="group relative">
                  <Link href={`/`} className="nav-item">
                    Remodeling
                  </Link>
                  <ul className="nav-sub-menu">
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 1
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 2
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 3
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 4
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-sub-item" href={``}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center justify-end md:gap-2">
              <div className="sm:w-auto w-full text-end sm:order-1 order-2">
                <Link href={`/consultation`}>
                  <button className="btn-black">Book your consultation</button>
                </Link>
              </div>
              <div className="sm:order-2 order-1 flex flex-wrap items-center justify-end md:gap-2">
                <a href="sms:(267)4004003" className="btn-icon">
                  <MessageSquareText size={21} />
                </a>
                <a
                  href="mailto:info@expresskitchensandbath.com"
                  className="btn-icon"
                >
                  <Mail size={21} />
                </a>
                <a href="tel:(267)4004003" className="btn-icon">
                  <Phone size={21} />
                </a>
                <button
                  onClick={() => setMenu(!menu)}
                  className="lg:hidden block ml-2"
                >
                  <AlignRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          menu
            ? "opacity-100 visible h-full md:p-4 p-2"
            : "opacity-0 invisible h-0"
        } lg:hidden bg-white shadow-md duration-300 transition-all ease-out`}
      >
        <ul className="flex flex-col gap-2">
          <li className="group relative">
            <Link href={`https://tribecacabinetry.com`} className="nav-item">
              Kitchen Design
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`/`} className="nav-item">
              Flooring
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`https://saloni.furniture/collection/dressing-rooms`} className="nav-item">
              Closet Design
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`/`} className="nav-item">
              Blinds
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`https://www.instagram.com/arts.by.naz?igsh=ODNkYTh0M3I3NWk0`} className="nav-item">
              Custom Art
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`https://saloni.furniture`} className="nav-item">
              Furniture
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link href={`/`} className="nav-item">
              Remodeling
            </Link>
            <ul>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 1
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 2
                </Link>
              </li>
              <li>
                <Link href={`/`} className="nav-sub-item">
                  Item 3
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
