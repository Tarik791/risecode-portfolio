import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react"; // ikone
import logo from "@public/logo.svg";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-transparent border-transparent shadow-none"
          : "bg-white border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-[1280px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="RiseCode Logo" width={50} height={50} priority />
          <span className="font-semibold text-2xl tracking-tight">
            <span className="text-green-600">Rise</span>Code
          </span>
        </div>

        {/* Desktop linkovi */}
        <div className="hidden md:flex items-center gap-10">
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
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Slide-in meni desno */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <span className="font-semibold text-xl">
            <span className="text-green-600">Rise</span>Code
          </span>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col px-6 py-6 gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`text-lg transition-colors ${
                router.pathname === href
                  ? "text-green-600 font-medium"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
