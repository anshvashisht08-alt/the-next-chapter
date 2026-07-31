"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";

const groups = [
  {
    title: "Opportunities Hub",
    image: "/opportunities.png",
    color: "from-cyan-500 to-blue-600",
    description:
      "Explore AI, internships, hackathons, certifications, projects and career opportunities.",
    link:"https://chat.whatsapp.com/HaydNSTKyW9DAMKwdni1xj?s=cl&p=i&ilr=2",
    button: "Join Opportunities Hub",
  },
  {
    title: "Doubt Corner",
    image: "/doubt.png",
    color: "from-purple-500 to-pink-500",
    description:
      "Ask coding doubts, academic questions and learn together with seniors and peers.",
    link:"https://chat.whatsapp.com/JtPsOKEMnAVEVvZVopZseu?s=cl&p=i&ilr=2",
    button: "Join Doubt Corner",
  },
  {
    title: "Chill Zone",
    image: "/chill.png",
    color: "from-emerald-500 to-teal-500",
    description:
      "Fun discussions, networking, events, memes and building amazing friendships.",
    link:"https://chat.whatsapp.com/LLr1vZlu4RxHUvr3hgjfis?s=cl&p=i&ilr=2",
    button: "Join Chill Zone",
  },
];

export default function Groups() {
  return (
    <section
      id="groups"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
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
              OUR COMMUNITIES
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Groups
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Join specialized communities where learning, collaboration,
            networking and opportunities come together to help you grow.
          </p>
        </motion.div>

        {/* Groups Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-8 lg:grid-cols-3"
        >
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 transition-all duration-500 group-hover:opacity-10`}
              />

              <div className="relative z-10 p-8">
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${group.color} p-5 shadow-xl`}
                >
                  <Image
                    src={group.image}
                    alt={group.title}
                    width={70}
                    height={70}
                    className="rounded-xl"
                  />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {group.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-cyan-300">
                  <Users className="h-5 w-5" />
                  <span>Active Student Community</span>
                </div>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${group.color} px-6 py-3 font-bold text-white shadow-lg transition`}
                >
                  {group.button}
                  <ArrowRight className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >
          <div className="text-center">
            <h3 className="text-4xl font-black text-white">
              Why Join Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Communities?
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Every community is designed to help you learn faster, build better
              projects, discover opportunities and connect with passionate
              students who share the same vision.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-8 text-center">
              <div className="text-5xl font-black text-cyan-400">100+</div>
              <h4 className="mt-4 text-2xl font-bold text-white">
                Active Members
              </h4>
              <p className="mt-3 text-slate-300">
                Growing every day with passionate learners.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-8 text-center">
              <div className="text-5xl font-black text-purple-400">24/7</div>
              <h4 className="mt-4 text-2xl font-bold text-white">
                Community Support
              </h4>
              <p className="mt-3 text-slate-300">
                Get help, guidance and answers whenever you need them.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-8 text-center">
              <div className="text-5xl font-black text-emerald-400">∞</div>
              <h4 className="mt-4 text-2xl font-bold text-white">
                Endless Opportunities
              </h4>
              <p className="mt-3 text-slate-300">
                Internships, hackathons, projects and lifelong networking.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-500/30"
            >
              Join The Next Chapter
              <ArrowRight className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}