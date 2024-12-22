import Link from "next/link";
import Logo from "./Logo";
import { Mail, MessageSquareText, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100">
      <div className="max-w-screen-2xl text-center md:p-9 p-4 mx-auto ">
        <Logo />
        <div className="flex flex-wrap items-center justify-center md:gap-2 md:my-4 my-2">
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
              <div className="w-full">
                <Link href={`/`}><button className="btn-black">Book your consultation</button></Link>
              </div>
        </div>
        <p className="font-medium leading-4">(267) 400 4003</p>
        <p className="font-medium leading-4">36 Chestnut Rd, Paoli, PA 19301</p>
      </div>
    </footer>
  );
}
