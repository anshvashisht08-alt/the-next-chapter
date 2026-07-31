"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Users,
  Trophy,
  Rocket,
  GraduationCap,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI & Technology",
    desc: "Learn Artificial Intelligence, Machine Learning, Web Development and emerging technologies together.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "Participate in national hackathons, competitions and build real-world innovative projects.",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    desc: "Internships, placements, resume building and interview preparation with community support.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with talented students, seniors and mentors across different domains.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-semibold tracking-wide text-cyan-300">
              ABOUT OUR COMMUNITY
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            More Than A{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Student Community
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            The Next Chapter is a premium student community where ambitious
            students collaborate, innovate, learn cutting-edge skills,
            participate in hackathons, build meaningful friendships and
            accelerate their careers together.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid gap-10 lg:grid-cols-2"
        >
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-10 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Rocket className="h-8 w-8 text-cyan-400" />
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              To create one of India's most active student communities where
              students learn, build projects, participate in hackathons,
              discover internships, improve communication skills and grow
              together without limits.
            </p>
          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-10 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              To become the most inspiring student ecosystem where innovation,
              leadership, collaboration and lifelong learning help every member
              unlock their full potential.
            </p>
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >
          <div className="grid gap-10 md:grid-cols-4 text-center">
            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                100+
              </h3>
              <p className="mt-3 text-slate-300">Active Members</p>
            </div>

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                20+
              </h3>
              <p className="mt-3 text-slate-300">Future Events</p>
            </div>

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                3
              </h3>
              <p className="mt-3 text-slate-300">Community Groups</p>
            </div>

            <div>
              <h3 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                ∞
              </h3>
              <p className="mt-3 text-slate-300">Opportunities</p>
            </div>
          </div>
        </motion.div>

        {/* Why Join CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-black text-white">
            Why Join{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Next Chapter?
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're a beginner or an experienced developer, you'll find
            a supportive environment to learn, collaborate, build impactful
            projects, explore internships, prepare for placements and create
            lifelong friendships.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            href="#groups"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-500/30 transition"
          >
            Explore Our Groups
            <Rocket className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}