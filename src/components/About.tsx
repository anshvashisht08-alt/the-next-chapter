"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Lightbulb,
  Users,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Connect",
    text: "Meet students, seniors and like-minded people who are building their own journey.",
    style: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: Lightbulb,
    title: "Learn",
    text: "Discover resources, guidance, opportunities and practical knowledge beyond the classroom.",
    style: "bg-cyan-50 text-cyan-600 border-cyan-100",
  },
  {
    icon: Heart,
    title: "Grow",
    text: "Support each other, collaborate on ideas and make your college journey more meaningful.",
    style: "bg-pink-50 text-pink-600 border-pink-100",
  },
];

export default function About() {
  return (
    <section className="page-aurora relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">

      {/* ================= BACKGROUND ================= */}

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

        {/* Cyan glow */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
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
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-200/70 bg-white/70 px-5 py-2 shadow-lg shadow-violet-500/10 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-violet-500" />

            <span className="text-sm font-bold tracking-wider text-violet-600">
              ABOUT THE NEXT CHAPTER
            </span>
          </motion.div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            More Than Just a{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Community
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            The Next Chapter is a student-driven community created to make
            college life more connected, supportive and full of opportunities.
          </p>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CARD */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/65 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10">

              {/* Card glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-300/20 blur-[70px]" />

              <div className="relative">

                <div className="flex items-center gap-4">

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
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20"
                  >
                    <Users className="h-7 w-7 text-white" />
                  </motion.div>

                  <div>
                    <p className="text-sm font-semibold text-violet-600">
                      OUR PURPOSE
                    </p>

                    <h3 className="text-2xl font-black text-slate-900">
                      Built by Students, for Students
                    </h3>
                  </div>

                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  College is not only about classrooms, exams and assignments.
                  It is also about the people you meet, the ideas you explore,
                  the opportunities you discover and the experiences you create.
                </p>

                <p className="mt-5 leading-8 text-slate-600">
                  The Next Chapter brings these experiences together in one
                  supportive student community where everyone can learn,
                  contribute, ask questions, share opportunities and grow
                  together.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700"
                  >
                    Student Driven
                  </motion.span>

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700"
                  >
                    Opportunity Focused
                  </motion.span>

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full bg-pink-50 px-4 py-2 text-sm font-semibold text-pink-700"
                  >
                    Community First
                  </motion.span>

                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid gap-5"
          >

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  animate={{
                    y: [0, index % 2 === 0 ? -4 : 4, 0],
                  }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  className="group relative flex gap-5 overflow-hidden rounded-3xl border border-white/70 bg-white/65 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(124,58,237,0.14)]"
                >

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${item.style}`}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </motion.div>
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <motion.div
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-r from-violet-50/90 via-white/80 to-cyan-50/90 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl md:p-8"
          >

            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">

              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  Your next chapter starts with us.
                </h3>

                <p className="mt-2 text-slate-600">
                  Learn something new, meet someone inspiring and build
                  something meaningful.
                </p>
              </div>

              <motion.a
                href="#groups"
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-violet-700 hover:shadow-violet-500/20"
              >
                Explore Community
                <ArrowRight className="h-4 w-4" />
              </motion.a>

            </div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}