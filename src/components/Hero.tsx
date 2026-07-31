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
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
          }}
          className="absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-pink-300/40 blur-3xl"
        />

        <motion.div
          animate={{
            y: [0, -80, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-violet-300/40 blur-3xl"
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border border-blue-200 bg-white/70 px-6 py-2 shadow-lg backdrop-blur-xl"
        >
          <p className="text-sm font-semibold tracking-wide text-blue-700">
            🚀 Building The Future Student Community
          </p>
        </motion.div>

        {/* Welcome */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-2xl font-semibold text-gray-700"
        >
          👋 Welcome CGCians
        </motion.h3>

        {/* Logo */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="relative mt-10"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-300 opacity-50 blur-[90px]"></div>

          <div className="relative rounded-full border border-white/60 bg-white/50 p-5 shadow-2xl backdrop-blur-2xl">
            <Image
              src="/logo.png"
              alt="The Next Chapter"
              width={220}
              height={220}
              priority
              className="rounded-full"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-6xl font-black text-gray-900 md:text-8xl"
        >
          The Next Chapter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-5 text-xl text-gray-600 md:text-2xl"
        >
          Learn • Connect • Grow Together
        </motion.p>

        {/* Rotating Text */}
        <div className="mt-10 h-10">
          <motion.h2
            key={currentWord}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
          >
            {words[currentWord]}
          </motion.h2>
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 w-full max-w-3xl rounded-[32px] border border-white/50 bg-white/60 p-8 shadow-2xl backdrop-blur-2xl"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Founder
              </p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                Ansh Sharma
              </h3>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Founded On
              </p>
              <h3 className="mt-3 text-2xl font-bold text-blue-600">
                30 July 2026
              </h3>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                Location
              </p>
              <h3 className="mt-3 text-2xl font-bold text-purple-600">
                CGC Landran
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 max-w-4xl text-center text-lg leading-9 text-gray-700 md:text-xl"
        >
          The Next Chapter is more than just a student community. It's a place
          where students collaborate, learn cutting-edge technologies, participate
          in hackathons, discover internships, build meaningful connections, and
          create unforgettable memories together.
        </motion.p>

        {/* Buttons */}
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
              boxShadow: "0 15px 40px rgba(59,130,246,.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-10 py-4 text-lg font-bold text-white"
          >
            🚀 Explore Community
          </motion.a>

          <motion.a
            href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(34,197,94,.35)",
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 text-lg font-bold text-white"
          >
            💚 Join WhatsApp
          </motion.a>
        </motion.div>

        {/* Feature Pills */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {[
            "AI",
            "Hackathons",
            "Internships",
            "Networking",
            "Events",
            "Workshops",
            "Certificates",
            "Growth",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{
                scale: 1.08,
              }}
              className="rounded-full border border-white/50 bg-white/70 px-5 py-3 shadow-lg backdrop-blur-xl"
            >
              <span className="font-semibold text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid w-full max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {[
            {
              number: "100+",
              title: "Students",
              color: "from-blue-500 to-cyan-500",
            },
            {
              number: "20+",
              title: "Future Events",
              color: "from-purple-500 to-pink-500",
            },
            {
              number: "3",
              title: "Communities",
              color: "from-green-500 to-emerald-500",
            },
            {
              number: "∞",
              title: "Opportunities",
              color: "from-orange-500 to-red-500",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/50 bg-white/60 p-8 shadow-2xl backdrop-blur-xl"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${item.color}`}
              >
                <span className="text-2xl font-black text-white">
                  {item.number}
                </span>
              </div>

              <h3 className="mt-6 text-center text-xl font-bold text-gray-800">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-4xl"
        >
          <p className="text-center text-2xl font-semibold italic text-gray-700 md:text-3xl">
            "Every great journey begins with a single step. Your next chapter starts today."
          </p>
        </motion.div>

        {/* Scroll Indicator */}
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
          <span className="mb-4 text-sm font-semibold tracking-[0.3em] text-gray-500">
            SCROLL
          </span>

          <div className="flex h-16 w-10 justify-center rounded-full border-2 border-gray-400">
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
              }}
              className="mt-2 h-4 w-2 rounded-full bg-blue-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}