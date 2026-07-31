"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

const memories = [
  {
    image: "/memories/campus-1.jpg",
    title: "Campus Life",
  },
  {
    image: "/memories/campus-2.jpg",
    title: "Learning Together",
  },
  {
    image: "/memories/campus-3.jpg",
    title: "Innovation",
  },
  {
    image: "/memories/campus-4.jpg",
    title: "Student Community",
  },
  {
    image: "/memories/campus-5.jpg",
    title: "Future Begins Here",
  },
];

export default function Memories() {
  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute right-10 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[130px]" />
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
            <span className="text-sm font-semibold tracking-wider text-cyan-300">
              OUR MEMORIES
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Every Great Journey{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Starts Here
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            These moments reflect our beautiful campus today. Tomorrow, this
            gallery will proudly showcase workshops, hackathons, meetups,
            achievements and unforgettable memories created together by our
            community.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 ${
                index === 0 || index === 3 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 || index === 3 ? "h-[420px]" : "h-[320px]"
                }`}
              >
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                  <span className="text-sm font-semibold text-white">
                    CGC Campus
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-cyan-500/20 p-2 backdrop-blur-xl">
                      <Camera className="h-5 w-5 text-cyan-300" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {memory.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-300">
                        The Next Chapter Community
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
        >
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl shadow-cyan-500/30">
              <Camera className="h-10 w-10 text-white" />
            </div>

            <h3 className="mt-8 text-4xl font-black text-white md:text-5xl">
              Today's Campus,{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tomorrow's Memories
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This gallery currently showcases our beautiful campus. As our
              community grows, it will be filled with real moments from
              workshops, hackathons, tech talks, celebrations, meetups and
              unforgettable memories created together.
            </p>

            <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 p-8">
              <h4 className="text-2xl font-bold text-white">
                📸 Your Story Could Be Featured Here
              </h4>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
                Every workshop you attend, every hackathon you participate in,
                every friendship you build and every achievement you unlock
                becomes a memory worth celebrating.
                <br />
                <br />
                <span className="font-semibold text-cyan-300">
                  Join The Next Chapter today and become a part of our journey.
                </span>
              </p>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-cyan-500/30"
              >
                Join Our Community
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}