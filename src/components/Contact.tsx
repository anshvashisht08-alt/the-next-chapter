"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  LinkIcon,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
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
              CONTACT US
            </span>
          </div>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Let's Build The{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next Chapter
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're looking to learn, collaborate, build amazing
            projects, prepare for hackathons, or discover exciting
            opportunities, our community is always open for passionate
            students.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <h3 className="text-3xl font-bold text-white">
              Become a Part of Our Journey 🚀
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              The Next Chapter is more than just a student community.
              It's a place where students collaborate, solve doubts,
              discover internships, participate in hackathons, build
              innovative projects and grow together.
            </p>

            <p className="mt-6 leading-8 text-slate-300">
              Join today and become one of the founding members helping
              shape the future of our community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://chat.whatsapp.com/LrbdpXMaG3j67zSZUizjzI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg shadow-green-500/30"
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="https://linkedin.com/in/ansh-sharma-2754b4348"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 font-bold text-cyan-300 backdrop-blur-xl"
              >
                <LinkIcon className="h-5 w-5" />
                Connect with Founder
              </motion.a>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-cyan-500/15 p-4">
                <MapPin className="h-7 w-7 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Visit Our Campus
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Chandigarh Group of Colleges (CGC), Landran
                  <br />
                  Sector 112, Kharar–Banur Highway
                  <br />
                  Sahibzada Ajit Singh Nagar (Mohali)
                  <br />
                  Punjab – 140307
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6">
              <h4 className="text-xl font-bold text-white">
                Growing Every Day 🌱
              </h4>

              <p className="mt-3 leading-7 text-slate-300">
                Every new member brings fresh ideas, new friendships,
                and exciting opportunities. Join us today and help write
                the next chapter of our community.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-slate-900/80 to-purple-500/10 p-10 backdrop-blur-2xl"
        >
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-4xl font-black text-white md:text-5xl">
              Your Journey Starts{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Today
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Every successful journey begins with a single step. Join{" "}
              <span className="font-semibold text-cyan-300">
                The Next Chapter
              </span>
              , meet passionate students, learn together, build impactful
              projects, and create unforgettable memories that will last
              throughout your college life.
            </p>

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
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-green-500/30"
            >
              <MessageCircle className="h-6 w-6" />
              Join WhatsApp Community
            </motion.a>

            <p className="mt-8 text-sm tracking-wide text-slate-400">
              Learn • Connect • Build • Grow Together 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}