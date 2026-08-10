"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  MapPin,
  MessageCircle,
  Users,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Opportunities", href: "#opportunities" },
  { name: "Groups", href: "#groups" },
  { name: "Memories", href: "#memories" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="page-aurora relative overflow-hidden bg-slate-950 text-white">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue / Cyan left glow */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 -top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]"
        />

        {/* Purple / Pink right glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-pink-500/10 blur-[120px]"
        />

        {/* Bottom purple glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-200px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]"
        />

        {/* Floating dots */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[10%] top-[25%] h-2.5 w-2.5 rounded-full bg-cyan-400"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[35%] h-3 w-3 rounded-full bg-pink-400"
        />

      </div>

      {/* ================= MAIN FOOTER ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {/* ================= BRAND ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <motion.div
              whileHover={{
                y: -3,
              }}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >

              <motion.div
                animate={{
                  y: [0, -4, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/20"
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  The Next Chapter
                </h2>

                <p className="text-sm text-slate-400">
                  Learn • Connect • Build
                </p>
              </div>

            </motion.div>

            <p className="mt-7 max-w-md leading-8 text-slate-400">
              A student community dedicated to learning, collaboration,
              innovation and creating opportunities together. Every great
              journey begins with the next chapter.
            </p>

            {/* Community Badge */}

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3 backdrop-blur-xl"
            >

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Users className="h-5 w-5 text-cyan-400" />
              </motion.div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Student Community
                </p>

                <p className="text-xs text-slate-500">
                  Built with students, for students
                </p>
              </div>

            </motion.div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            <div className="flex items-center gap-3">

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg"
              >
                <BookOpen className="h-5 w-5 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white">
                Quick Links
              </h3>

            </div>

            <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4">

              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                >

                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </Link>

                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* ================= CONTACT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >

            <h3 className="text-xl font-bold text-white">
              Stay Connected
            </h3>

            <div className="mt-7 flex flex-col gap-5">

              {/* WhatsApp */}

              <motion.a
                whileHover={{
                  x: 6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSSUZujz1zI"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-green-400"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10 transition-all duration-300 group-hover:bg-green-500/20">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <span>WhatsApp Community</span>

                <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />

              </motion.a>

              {/* LinkedIn */}

              <motion.a
                whileHover={{
                  x: 6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="https://linkedin.com/in/ansh-sharma-2754b4348"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-cyan-400"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 transition-all duration-300 group-hover:bg-cyan-500/20">
                  <span className="text-sm font-bold text-cyan-400">
                    in
                  </span>
                </div>

                <span>Connect with Founder</span>

                <ArrowUpRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />

              </motion.a>

            </div>

            {/* Campus Address */}

            <motion.div
              whileHover={{
                y: -3,
              }}
              className="mt-8 flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.025] p-3 text-slate-400 backdrop-blur-xl"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <MapPin className="h-5 w-5 text-cyan-400" />
              </div>

              <p className="leading-7">
                Chandigarh Group of Colleges (CGC), Landran
                <br />
                Sector 112, Kharar-Banur Highway
                <br />
                Mohali, Punjab – 140307
              </p>

            </motion.div>
          </motion.div>

        </div>

        {/* ================= BOTTOM BAR ================= */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <p className="text-center text-sm leading-7 text-slate-500 md:text-left">
              © 2026 The Next Chapter. All Rights Reserved.
              <br />
              Built with ❤️ for students, by students.
            </p>

            {/* Back To Top */}

            <motion.a
              href="#hero"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </motion.a>

          </div>

        </div>
      </div>
    </footer>
  );
}