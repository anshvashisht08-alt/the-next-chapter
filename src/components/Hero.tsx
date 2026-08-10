"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "AI Enthusiasts",
  "Developers",
  "Innovators",
  "Creators",
  "Future Leaders",
];

const features = [
  "AI",
  "Hackathons",
  "Internships",
  "Networking",
  "Events",
  "Workshops",
  "Certificates",
  "Growth",
];

const stats = [
  {
    number: "100+",
    title: "Students",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/30",
  },
  {
    number: "20+",
    title: "Future Events",
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/30",
  },
  {
    number: "3",
    title: "Groups",
    color: "from-green-500 to-emerald-500",
    glow: "group-hover:shadow-emerald-500/30",
  },
  {
    number: "∞",
    title: "Opportunities",
    color: "from-orange-500 to-red-500",
    glow: "group-hover:shadow-orange-500/30",
  },
];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-white to-purple-100 pt-28">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Cyan Glow */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl"
        />

        {/* Pink Glow */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-pink-300/40 blur-3xl"
        />

        {/* Violet Glow */}
        <motion.div
          animate={{
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-violet-300/40 blur-3xl"
        />

        {/* Small floating dots */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute left-[12%] top-[25%] h-3 w-3 rounded-full bg-blue-500"
        />

        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute right-[15%] top-[35%] h-4 w-4 rounded-full bg-purple-500"
        />

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">


        {/* ================= BADGE ================= */}

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.04 }}
          className="group rounded-full border border-blue-200/70 bg-white/70 px-6 py-3 shadow-lg shadow-blue-500/10 backdrop-blur-xl"
        >
          <p className="text-sm font-bold tracking-wide text-blue-700">
            🚀 Building The Future Student Community
          </p>
        </motion.div>


        {/* ================= WELCOME ================= */}

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-2xl font-semibold text-gray-700"
        >
          👋 Welcome CGCians
        </motion.h3>


        {/* ================= LOGO ================= */}

        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="relative mt-10"
        >

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-300/60 blur-[90px]" />

          {/* Outer ring */}
          <div className="relative rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px] shadow-2xl shadow-blue-500/20">

            <div className="rounded-full border border-white/70 bg-white/60 p-5 backdrop-blur-2xl">

              <Image
                src="/logo.png"
                alt="The Next Chapter"
                width={220}
                height={220}
                priority
                className="rounded-full"
              />

            </div>
          </div>
        </motion.div>


        {/* ================= HEADING ================= */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-6xl font-black tracking-tight text-gray-900 md:text-8xl"
        >
          The Next{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Chapter
          </span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 text-xl font-medium text-gray-600 md:text-2xl"
        >
          Learn • Connect • Grow Together
        </motion.p>


        {/* ================= ROTATING TEXT ================= */}

        <div className="mt-10 h-12">

          <motion.h2
            key={currentWord}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-black text-transparent md:text-4xl"
          >
            {words[currentWord]}
          </motion.h2>

        </div>


        {/* ================= FOUNDER CARD ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ y: -5 }}
          className="mt-12 w-full max-w-4xl rounded-[32px] border border-white/70 bg-white/60 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl"
        >

          <div className="rounded-[26px] border border-white/70 bg-white/40 p-7 md:p-8">

            <div className="grid gap-4 md:grid-cols-3">

              {/* Founder */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Founder
                </p>

                <h3 className="mt-3 text-2xl font-black text-gray-900">
                  Ansh Sharma
                </h3>
              </motion.div>


              {/* Date */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-purple-100 bg-purple-50/60 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Founded On
                </p>

                <h3 className="mt-3 text-2xl font-black text-blue-600">
                  30 July 2026
                </h3>
              </motion.div>


              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl border border-pink-100 bg-pink-50/60 p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
                  Location
                </p>

                <h3 className="mt-3 text-2xl font-black text-purple-600">
                  CGC Landran
                </h3>
              </motion.div>

            </div>
          </div>
        </motion.div>


        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 max-w-4xl text-center text-lg leading-9 text-gray-700 md:text-xl"
        >
          The Next Chapter is more than just a student community. It's a place
          where students collaborate, learn cutting-edge technologies,
          participate in hackathons, discover internships, build meaningful
          connections, and create unforgettable memories together.
        </motion.p>


        {/* ================= BUTTONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col gap-5 md:flex-row"
        >

          <motion.a
            href="#groups"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 18px 45px rgba(59,130,246,.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/20"
          >
            🚀 Explore Community
          </motion.a>


          <motion.a
            href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 18px 45px rgba(34,197,94,.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-green-500/20"
          >
            💚 Join WhatsApp
          </motion.a>

        </motion.div>


        {/* ================= FEATURE PILLS ================= */}

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

          {features.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.3 + index * 0.05,
              }}
              whileHover={{
                scale: 1.08,
                y: -4,
              }}
              className="rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-md shadow-gray-400/10 backdrop-blur-xl"
            >
              <span className="font-semibold text-gray-700">
                {item}
              </span>
            </motion.div>
          ))}

        </div>


        {/* ================= COMMUNITY STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid w-full max-w-6xl grid-cols-2 gap-5 lg:grid-cols-4"
        >

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/80 bg-white/65 p-6 shadow-xl shadow-gray-500/10 backdrop-blur-xl transition-shadow duration-300 ${item.glow}`}
            >

              {/* top shine */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r opacity-80" />

              {/* number circle */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.08 }}
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
              >
                <span className="text-2xl font-black text-white">
                  {item.number}
                </span>
              </motion.div>

              <h3 className="mt-6 text-center text-xl font-black text-gray-800">
                {item.title}
              </h3>

              <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-gray-200 transition-all duration-300 group-hover:w-20" />

            </motion.div>
          ))}

        </motion.div>


        {/* ================= QUOTE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-4xl rounded-3xl border border-white/70 bg-white/50 px-7 py-8 shadow-xl shadow-gray-400/10 backdrop-blur-xl"
        >

          <div className="mb-4 text-3xl">
            ✨
          </div>

          <p className="text-center text-2xl font-semibold italic leading-relaxed text-gray-700 md:text-3xl">
            "Every great journey begins with a single step. Your next chapter
            starts today."
          </p>

        </motion.div>


        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-20 flex flex-col items-center"
        >

          <span className="mb-4 text-sm font-bold tracking-[0.3em] text-gray-500">
            SCROLL
          </span>

          <div className="flex h-16 w-10 justify-center rounded-full border-2 border-gray-400 bg-white/30 backdrop-blur">

            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="mt-2 h-4 w-2 rounded-full bg-gradient-to-b from-blue-500 to-purple-600"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}