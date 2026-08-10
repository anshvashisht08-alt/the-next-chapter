"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Groups", href: "#groups" },
  { name: "Memories", href: "#memories" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="The Next Chapter"
              width={48}
              height={48}
              className="rounded-full object-cover"
              priority
            />

            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                The Next Chapter
              </h1>

              <p className="text-xs text-gray-500">
                Learn • Connect • Grow
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-3">

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://www.linkedin.com/in/ansh-sharma-2754b4348"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              LinkedIn
            </motion.a>

            {/* Join Community */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              Join Community
            </motion.a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block w-6 h-0.5 bg-gray-700 transition-transform ${
                  menuOpen ? "-rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-6 space-y-5">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">

                <a
                  href="https://www.linkedin.com/in/ansh-sharma-2754b4348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-full border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700"
                >
                  LinkedIn
                </a>

                <a
                  href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-sm font-semibold text-white"
                >
                  Join Community
                </a>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}