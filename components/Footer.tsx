import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative max-w-screen-2xl text-center md:p-9 p-4 mx-auto bg-gray-100">
      <Logo />
      <div className="flex items-center justify-center md:gap-2 md:mt-4 mt-2">
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
      </div>
      <p className="font-medium">36 Chestnut Rd, Paoli, PA 19301</p>
    </footer>
  );
}
