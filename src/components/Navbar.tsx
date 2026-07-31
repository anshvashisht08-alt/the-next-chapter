"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Groups", href: "#groups" },
    { name: "Memories", href: "#memories" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-2xl shadow-lg border-b border-white/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <a href="#" className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="The Next Chapter"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />

          <div>

            <h1 className="text-xl font-black text-gray-800">
              The Next Chapter
            </h1>

            <p className="text-xs text-gray-500">
              Learn • Connect • Grow
            </p>

          </div>

        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">

          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-gray-700 font-medium group"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

            </motion.a>
          ))}

        </nav>

        {/* Right Buttons */}

        <div className="hidden items-center gap-4 md:flex">

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="https://linkedin.com/in/ansh-sharma-2754b4348"
            target="_blank"
            className="rounded-full border border-gray-300 bg-white/60 px-5 py-2 font-medium text-gray-700 backdrop-blur-xl"
          >
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(34,197,94,.35)",
            }}
            whileTap={{ scale: 0.95 }}
            href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
            target="_blank"
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold text-white"
          >
            Join Community
          </motion.a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white/90 backdrop-blur-xl md:hidden"
          >

            <div className="flex flex-col gap-5 px-6 py-6">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-700"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://linkedin.com/in/ansh-sharma-2754b4348"
                target="_blank"
                className="rounded-full border px-5 py-3 text-center"
              >
                LinkedIn
              </a>

              <a
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                target="_blank"
                className="rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white"
              >
                Join Community
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}