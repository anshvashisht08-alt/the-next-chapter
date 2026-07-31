"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

            <Image
              src="/logo.png"
              alt="The Next Chapter"
              width={170}
              height={170}
              priority
              className="relative rounded-full"
            />
          </motion.div>

          {/* Community Name */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 text-center text-5xl font-black text-white"
          >
            The Next Chapter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-xl text-slate-300"
          >
            Learn • Connect • Grow Together
          </motion.p>

          {/* Founder Card */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl"
          >
            <p className="text-center text-sm uppercase tracking-[0.3em] text-slate-400">
              Founder
            </p>

            <h2 className="mt-2 text-center text-2xl font-bold text-white">
              Ansh Sharma
            </h2>

            <div className="mt-6 h-px bg-white/20"></div>

            <p className="mt-6 text-center text-sm uppercase tracking-[0.3em] text-slate-400">
              Founded On
            </p>

            <h3 className="mt-2 text-center text-xl font-semibold text-cyan-300">
              30 July 2026
            </h3>
          </motion.div>

          {/* Loading Bar */}

          <div className="mt-14 h-1 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.2,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-5 text-sm tracking-[0.25em] text-slate-500"
          >
            LOADING EXPERIENCE...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}