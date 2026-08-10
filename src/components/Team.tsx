"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const team = [
  {
    name: "Ansh Sharma",
    role: "Founder",
    image: "/team/ansh.jpeg",
    linkedin: "https://linkedin.com/in/ansh-sharma-2754b4348",
    description:
      "Building The Next Chapter with a vision to create a supportive, opportunity-driven and inspiring student community.",
  },
  {
    name: "Mehakdeep Singh",
    role: "Co-Founder",
    image: "/team/cofounder-1.jpeg",
    linkedin: "https://www.linkedin.com/in/mehakdeep-singh-72914238a",
    description:
      "Helping shape the community, support students and turn ideas into meaningful initiatives.",
  },
  {
    name: "Sakshi Sharma",
    role: "Co-Founder",
    image: "/team/cofounder-2.jpeg",
    linkedin: "https://www.linkedin.com/in/sakshi-sharma-7695913b7",
    description:
      "Contributing to the growth of the community and creating a better student experience together.",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      {/* Soft pastel background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-violet-200/50 blur-[110px]" />
        <div className="absolute right-[-100px] top-32 h-80 w-80 rounded-full bg-cyan-200/50 blur-[110px]" />
        <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 rounded-full bg-pink-200/40 blur-[120px]" />
      </div>

      {/* Decorative dots */}

      <div className="pointer-events-none absolute left-[8%] top-24 h-2 w-2 rounded-full bg-violet-400" />
      <div className="pointer-events-none absolute right-[12%] top-40 h-3 w-3 rounded-full bg-cyan-400" />
      <div className="pointer-events-none absolute bottom-28 left-[15%] h-2 w-2 rounded-full bg-pink-400" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-violet-500" />

            <span className="text-sm font-bold tracking-wider text-violet-600">
              THE PEOPLE BEHIND THE VISION
            </span>
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            Meet The{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Every community begins with a vision and grows with people who
            believe in it. Meet the team helping shape The Next Chapter.
          </p>
        </motion.div>

        {/* Team Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={`${member.role}-${index}`}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(124,58,237,0.16)]"
            >
              {/* Top gradient */}

              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400" />

              {/* Photo */}

              <div className="relative overflow-hidden rounded-[24px] bg-slate-100">
                <div className="relative aspect-[4/4.2] w-full">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Soft image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-70" />

                  {/* Role badge */}

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full border border-white/50 bg-white/85 px-4 py-2 text-xs font-bold text-slate-800 shadow-lg backdrop-blur-md">
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="px-2 pb-2 pt-6">
                <h3 className="text-2xl font-black text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {member.description}
                </p>

                {/* LinkedIn */}

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-sm font-bold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom message */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <div className="rounded-[28px] border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-cyan-50 px-7 py-8 shadow-sm">
            <p className="text-lg font-bold text-slate-800 md:text-xl">
              Great communities are not built by one person.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-600 md:text-base">
              They are built by people who share a vision, support each other,
              and keep moving forward together.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}