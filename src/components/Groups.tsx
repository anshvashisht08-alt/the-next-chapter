"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MessageCircleQuestion,
  Sparkles,
  UsersRound,
} from "lucide-react";

const groups = [
  {
    title: "Opportunities Hub",
    shortTitle: "OPPORTUNITIES",
    image: "/opportunities.png",
    icon: BriefcaseBusiness,
    description:
      "Discover internships, hackathons, certifications, projects, career opportunities and useful updates.",
    link: "https://chat.whatsapp.com/HaydNSTKyW9DAMKwdni1xj?s=cl&p=i&ilr=2",
    button: "Join Opportunities Hub",
    accent: "from-violet-500 to-indigo-500",
    soft: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    title: "Doubt Corner",
    shortTitle: "DOUBT SOLVING",
    image: "/doubt.png",
    icon: MessageCircleQuestion,
    description:
      "Ask questions, clear your doubts, learn with your peers and get support whenever you need it.",
    link: "https://chat.whatsapp.com/JtPsOKEMnAVEVvZVopZseu?s=cl&p=i&ilr=2",
    button: "Join Doubt Corner",
    accent: "from-cyan-500 to-blue-500",
    soft: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Chill Zone",
    shortTitle: "COMMUNITY",
    image: "/chill.png",
    icon: UsersRound,
    description:
      "Meet new people, share conversations, enjoy community moments and make college life more memorable.",
    link: "https://chat.whatsapp.com/LLr1vZlu4RxHUvr3hgjfis?s=cl&p=i&ilr=2",
    button: "Join Chill Zone",
    accent: "from-pink-500 to-rose-500",
    soft: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function Groups() {
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
          className="absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-blue-300/25 blur-[110px]"
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
          className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-pink-300/25 blur-[115px]"
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
              FIND YOUR SPACE
            </span>
          </motion.div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            One Community.
            <br />

            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Different Spaces.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Choose the space that matches what you need right now. Learn,
            discover opportunities, solve doubts or simply connect with people
            around you.
          </p>
        </motion.div>

        {/* ================= GROUPS GRID ================= */}

        <div className="mt-16 grid gap-7 lg:grid-cols-3">

          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                animate={{
                  y: [0, index % 2 === 0 ? -4 : 4, 0],
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-white/70 bg-white/65 p-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_28px_75px_rgba(99,102,241,0.16)]"
              >

                {/* Top gradient */}

                <div
                  className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${group.accent}`}
                />

                {/* ================= IMAGE ================= */}

                <div className="relative h-64 w-full overflow-hidden rounded-[25px] bg-white/60">

                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-contain p-2 transition duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Image soft overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Number */}

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/90 text-sm font-black text-slate-800 shadow-lg backdrop-blur-md"
                  >
                    0{index + 1}
                  </motion.div>

                  {/* Category */}

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md">
                    <span className="text-xs font-bold tracking-wider text-slate-800">
                      {group.shortTitle}
                    </span>
                  </div>

                </div>

                {/* ================= CONTENT ================= */}

                <div className="px-3 pb-3 pt-7">

                  <div className="flex items-center gap-3">

                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${group.soft} shadow-sm`}
                    >
                      <Icon
                        className={`h-6 w-6 ${group.iconColor}`}
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-2xl font-black text-slate-900">
                        {group.title}
                      </h3>

                      <p className="text-xs font-medium text-slate-400">
                        The Next Chapter Community
                      </p>
                    </div>

                  </div>

                  <p className="mt-5 min-h-[84px] text-sm leading-7 text-slate-600">
                    {group.description}
                  </p>

                  {/* Join button */}

                  <motion.a
                    whileHover={{
                      scale: 1.025,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${group.accent} px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl`}
                  >
                    {group.button}

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </motion.a>

                </div>
              </motion.article>
            );
          })}

        </div>

        {/* ================= BOTTOM BANNER ================= */}

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
          className="mt-14"
        >
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/60 px-7 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl md:px-10"
          >

            {/* Banner glows */}

            <motion.div
              animate={{
                x: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-200/40 blur-3xl"
            />

            <motion.div
              animate={{
                x: [0, 25, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-cyan-200/40 blur-3xl"
            />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-violet-600">
                  One community • Many possibilities
                </p>

                <h3 className="mt-2 text-2xl font-black text-slate-900">
                  Not sure where to start?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Start anywhere. Every group is a different way to connect
                  with The Next Chapter.
                </p>
              </div>

              <motion.a
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-violet-700"
              >
                Explore Community

                <ArrowUpRight className="h-4 w-4" />
              </motion.a>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}