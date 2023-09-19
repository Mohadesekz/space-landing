"use client"; // This is a client component 👈🏽
import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Home/Hero";
import About from "@/components/About/About";
import Galleris from "@/components/Galleries/Galleries";
import History from "@/components/History/History";
export default function Home() {
  const [activeLink, setActiveLink] = useState(null);
  useEffect(() => {
    // console.log(activeLink);
  }, [activeLink]);
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between px-8 md:px-20 pb-14 bg-black"
      dir="rtl"
    >
      <Header setParentActiveLink={setActiveLink} />
      <Hero />
      <About activeLink={activeLink} />
      <Galleris activeLink={activeLink} />
      <History />
    </main>
  );
}
