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
import BinaryBackground from "@/components/BinaryBackground";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen bg-white overflow-hidden">
      <BinaryBackground />

      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col items-center mb-16">
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
