"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

const memories = [
  // Meetup Photos
  {
    src: "/memories/meetup-1.jpeg",
    alt: "The Next Chapter Meetup 1",
  },
  {
    src: "/memories/meetup-2.jpeg",
    alt: "The Next Chapter Meetup 2",
  },
  {
    src: "/memories/meetup-3.jpeg",
    alt: "The Next Chapter Meetup 3",
  },

  // College Photos
  {
    src: "/memories/campus-1.jpg",
    alt: "CGC Landran Campus",
  },
  {
    src: "/memories/campus-2.jpg",
    alt: "CGC Landran Campus",
  },
];

export default function Memories() {
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
          animate={{
            y: [0, -18, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-blue-400/50"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[15%] top-[30%] h-4 w-4 rounded-full bg-pink-400/40"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[8%] h-2 w-2 rounded-full bg-violet-400/50"
        />

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-5 py-2 text-sm font-bold tracking-wider text-blue-600 shadow-lg shadow-blue-500/10 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            MEMORIES
          </motion.div>

          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Moments We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Share
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            A collection of moments, meetups and memories from our journey
            together.
          </p>

          <motion.div
            animate={{
              width: ["64px", "90px", "64px"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          />

        </motion.div>

        {/* ================= PHOTO GRID ================= */}

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {memories.map((memory, index) => (
            <motion.div
              key={memory.src}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              animate={{
                y: [0, index % 2 === 0 ? -4 : 4, 0],
              }}
              whileHover={{
                y: -10,
                scale: 1.025,
              }}
              className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/60 p-2 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(99,102,241,0.18)]"
            >

              {/* Image container */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">

                <Image
                  src={memory.src}
                  alt={memory.alt}
                  fill
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
                />

                {/* Dark gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-80" />

                {/* Hover shine */}

                <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                {/* Camera badge */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white shadow-lg backdrop-blur-md"
                >
                  <Camera className="h-5 w-5" />
                </motion.div>

              </div>

              {/* Bottom memory label */}

              <div className="px-3 pb-3 pt-4">

                <p className="text-sm font-semibold text-slate-500">
                  {index < 3 ? "Community Meetup" : "Campus Moments"}
                </p>

                <div className="mt-1 flex items-center justify-between">

                  <p className="font-bold text-slate-900">
                    {index < 3
                      ? `Meetup Memory ${index + 1}`
                      : `Campus ${index - 2}`}
                  </p>

                  <motion.span
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg text-violet-500"
                  >
                    →
                  </motion.span>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

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
            delay: 0.2,
          }}
          className="mt-14 text-center"
        >

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
            Every moment becomes a memory.
          </p>

          <h3 className="mt-3 text-2xl font-black text-slate-900 md:text-3xl">
            And every memory becomes part of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
              our story.
            </span>
          </h3>

        </motion.div>

      </div>
    </section>
  );
}