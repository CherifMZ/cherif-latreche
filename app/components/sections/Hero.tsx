"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="h-screen snap-start flex items-center px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-8 items-center w-full">
        <motion.div initial="hidden" animate="show" className="md:col-span-7">
          <motion.h1
            custom={1}
            variants={fade}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 bg-clip-text text-transparent">
              Developer & Researcher
            </span>
          </motion.h1>

          <motion.p custom={2} variants={fade} className="mt-4 text-slate-600 max-w-2xl">
            Building scalable systems across backend, infrastructure, and automation
          </motion.p>

          <motion.div custom={3} variants={fade} className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm hover:opacity-90"
            >
              Explore experience <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm hover:shadow-sm"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <div className="md:col-span-5 relative hidden md:block">
          <motion.div
            aria-hidden="true"
            className="absolute right-[-6rem] top-1/2 -translate-y-1/2 w-[22rem] h-[22rem] rounded-full bg-indigo-200/40 blur-3xl"
            animate={
              reduce
                ? { opacity: 1 }
                : { y: [0, -10, 0], x: [0, -6, 0], opacity: [0.85, 1, 0.85] }
            }
            transition={reduce ? { duration: 0 } : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute right-10 top-1/3 w-44 h-44 rounded-3xl border border-slate-200/70 bg-white/20"
            animate={reduce ? { rotate: 12 } : { y: [0, 8, 0], rotate: [12, 14, 12] }}
            transition={reduce ? { duration: 0 } : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      <a
        href="#experience"
        className="absolute right-6 bottom-6 inline-flex items-center text-slate-500 hover:text-slate-700"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
