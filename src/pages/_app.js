// src/pages/_app.js
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <><Navbar /><main className={`${inter.variable} ${montserrat.variable} min-h-screen font-sans`}>
      <Component {...pageProps} />
    </main><Footer /></>
  );
}

