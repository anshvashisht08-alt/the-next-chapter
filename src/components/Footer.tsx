"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  BookOpen,
  LinkIcon,
  MapPin,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Groups", href: "#groups" },
  { name: "Memories", href: "#memories" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 p-3">
                <BookOpen className="h-7 w-7 text-white" />
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">
                  The Next Chapter
                </h2>

                <p className="text-slate-400">
                  Learn • Connect • Build
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-slate-300">
              A student community dedicated to learning, collaboration,
              innovation and creating opportunities together. Every great
              journey begins with the next chapter.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Stay Connected
            </h3>

            <div className="mt-8 flex flex-col gap-5">
              <motion.a
                whileHover={{ x: 6 }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-green-400"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Community
              </motion.a>

              <motion.a
                whileHover={{ x: 6 }}
                href="https://linkedin.com/in/ansh-sharma-2754b4348"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
              >
                <LinkIcon className="h-5 w-5" />
                Connect with Founder
              </motion.a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />

                <p>
                  Chandigarh Group of Colleges (CGC), Landran
                  <br />
                  Sector 112, Kharar–Banur Highway
                  <br />
                  Mohali, Punjab – 140307
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-slate-400">
              © 2026 The Next Chapter. All Rights Reserved.
              <br />
              Built with ❤️ for students, by students.
            </p>

            <motion.a
              whileHover={{
                y: -4,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#hero"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}