"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  LinkIcon,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="page-aurora relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">

      {/* ================= ANIMATED BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue left glow */}
        <motion.div
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -25, 20, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-300/25 blur-[110px]"
        />

        {/* Cyan middle glow */}
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -15, 0],
            scale: [1, 0.95, 1.08, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[25%] top-[35%] h-[300px] w-[300px] rounded-full bg-cyan-300/20 blur-[100px]"
        />

        {/* Pink right glow */}
        <motion.div
          animate={{
            x: [0, -35, 15, 0],
            y: [0, 20, -25, 0],
            scale: [1, 1.1, 0.94, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-pink-300/25 blur-[115px]"
        />

        {/* Purple bottom glow */}
        <motion.div
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-150px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-purple-300/15 blur-[110px]"
        />

        {/* Floating dots */}

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-blue-400/50"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[30%] h-4 w-4 rounded-full bg-pink-400/40"
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[8%] h-2 w-2 rounded-full bg-violet-400/50"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-500/10 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            LET&apos;S CONNECT
          </motion.div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Let&apos;s build the
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Next Chapter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Have a question, idea, suggestion or want to be part of the
            community? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">

          {/* COMMUNITY CARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            animate={{ y: [0, -4, 0] }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/65 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-9"
          >

            {/* Card glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-300/20 blur-[70px]" />

            <div className="relative z-10">

              <div className="flex items-start gap-5">

                <motion.div
                  animate={{
                    rotate: [0, 3, -3, 0],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-sm"
                >
                  <MessageCircle className="h-7 w-7" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Join the Community
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Connect with fellow students, ask doubts, share ideas and
                    grow together.
                  </p>
                </div>

              </div>

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSSUzijzI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-green-200/60 transition hover:bg-green-600"
              >
                Join WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

            </div>
          </motion.div>

          {/* FOUNDER CARD */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            animate={{ y: [0, 4, 0] }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="group relative overflow-hidden rounded-[30px] border border-white/70 bg-white/65 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-9"
          >

            {/* Card glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-300/20 blur-[70px]" />

            <div className="relative z-10">

              <div className="flex items-start gap-5">

                <motion.div
                  animate={{
                    rotate: [0, -3, 3, 0],
                    y: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm"
                >
                  <LinkIcon className="h-7 w-7" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Connect With Founder
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    Want to share an idea or collaborate? Connect with the
                    founder of The Next Chapter.
                  </p>
                </div>

              </div>

              <motion.a
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                href="https://linkedin.com/in/ansh-sharma-2754b4348"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200/60 transition hover:bg-blue-700"
              >
                Connect on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* ================= CAMPUS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          whileHover={{ y: -5 }}
          className="relative mt-6 overflow-hidden rounded-[30px] border border-white/70 bg-white/55 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl md:p-9"
        >

          {/* Campus glow */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-purple-300/20 blur-[90px]"
          />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-start gap-5">

              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/90 text-purple-600 shadow-md"
              >
                <MapPin className="h-7 w-7" />
              </motion.div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Our Campus
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Chandigarh Group of Colleges (CGC), Landran
                  <br />
                  Sector 112, Kharar–Banur Highway
                  <br />
                  Sahibzada Ajit Singh Nagar (Mohali)
                  <br />
                  Punjab 140307
                </p>
              </div>

            </div>

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              className="rounded-2xl border border-white/80 bg-white/75 px-5 py-4 text-center shadow-md backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-slate-400">
                COMMUNITY
              </p>

              <p className="mt-1 font-bold text-slate-900">
                CGC Landran Students
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* ================= FINAL CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >

          <motion.p
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400"
          >
            Learn • Connect • Build • Grow
          </motion.p>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
            Your next chapter starts with
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              one connection.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Come be a part of something bigger. Together, we learn,
            support and grow.
          </p>

        </motion.div>

      </div>
    </section>
  );
}