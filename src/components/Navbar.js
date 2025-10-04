import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@public/logo.svg";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/about", label: "ABOUT" },
    { href: "/work", label: "WORK" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent border-transparent shadow-none"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-4 w-full max-w-[1280px] mx-auto">
        <div className="flex items-center gap-2 transition-all duration-500">
          <Image
            src={logo}
            alt="RiseCode Logo"
            width={70}
            height={70}
            priority
          />
          <span
            className={`font-semibold text-3xl tracking-tight transition-colors duration-500`}
          >
            <span className="text-green-600">Rise</span>Code
          </span>
        </div>

        <div className="flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest transition-colors duration-500 ${
                router.pathname === href
                  ? "text-green-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`text-sm tracking-widest px-5 py-2 rounded-full transition-all duration-500 ${
              isScrolled
                ? "bg-white text-green-700 hover:bg-green-100"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
