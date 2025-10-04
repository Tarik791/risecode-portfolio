import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.svg";
import php from "@public/icons/php.svg";
import react from "@public/icons/react.svg";
import nextjs from "@public/icons/nextjs.svg";
import nodejs from "@public/icons/nodejs.svg";
import golang from "@public/icons/golang.svg";
import mysql from "@public/icons/mysql.svg";
import postgresql from "@public/icons/postgresql.svg";
import api from "@public/icons/api.svg";
import docker from "@public/icons/docker.svg";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 1400"
          className="w-[1800px] h-[1800px] opacity-[0.08] curved-circle-animate"
        >
          <g stroke="#16a34a" strokeWidth="1" fill="none">
            <path d="M700,350 C900,340 1130,480 1100,700 C1070,920 850,1060 700,1060 C550,1060 330,920 300,700 C270,480 500,360 700,350 Z" />
            <path d="M700,250 C960,270 1220,480 1180,720 C1140,940 880,1160 700,1160 C520,1160 260,940 220,720 C180,480 440,230 700,250 Z" />
            <path d="M700,150 C1000,180 1300,500 1250,780 C1200,1020 900,1260 700,1260 C500,1260 200,1020 150,780 C100,500 400,130 700,150 Z" />
            <path d="M700,50 C1050,90 1380,520 1300,840 C1220,1100 900,1360 700,1360 C500,1360 180,1100 100,840 C20,520 350,40 700,50 Z" />
          </g>
        </svg>
      </div>

      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center mb-16">
        {/* Logo */}
        <div className="mt-24 mb-8">
          <Image
            src={logo}
            alt="RiseCode Logo"
            width={100}
            height={100}
            className="drop-shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          <span className="text-green-600">&lt;R&gt;</span>iseCode
        </h1>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          We build modern, efficient, and scalable software solutions.  
          Empower your business with <strong>RiseCode</strong> — your partner in innovation.
        </p>
        <Link
          href="/work"
          className="px-8 py-3 bg-green-600 text-white rounded-full font-medium tracking-wide hover:bg-green-700 transition-all shadow-md"
        >
          OUR WORK
        </Link>
        <div className="mt-24 bg-gray-50 rounded-2xl p-6 w-full flex flex-wrap justify-center gap-18 shadow-sm">
          {[
            { src: php, alt: "PHP" },
            { src: react, alt: "ReactJS" },
            { src: nextjs, alt: "Next.js" },
            { src: nodejs, alt: "Node.js" },
            { src: golang, alt: "Golang" },
            { src: mysql, alt: "MySQL" },
            { src: postgresql, alt: "PostgreSQL" },
            { src: api, alt: "API" },
            { src: docker, alt: "Docker" },
          ].map((icon, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-sm hover:shadow-md transition hover:scale-105"
            >
              <Image src={icon.src} alt={icon.alt} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
