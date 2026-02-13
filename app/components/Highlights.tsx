"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Award, GraduationCap, FileText } from "lucide-react";

export default function Highlights() {
  return (
    <section id="highlights" className="min-h-[calc(100svh-57px)] md:min-h-[calc(100svh-57px)] md:h-screen md:md:snap-start flex items-center px-4 bg-white">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Highlights</h2>
        <p className="mt-2 text-slate-600 text-center">
          A quick snapshot: publication, awards, and education.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Publication */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-medium">Publication</span>
            </div>
            <div className="mt-3 font-medium">Your Paper Title</div>
            <div className="mt-1 text-sm text-slate-600">Venue · 202X</div>
            <div className="mt-3 text-sm text-slate-700">
              One-line contribution (e.g., “RL-based scheduling that reduces tail latency…”).
            </div>
            <div className="mt-4 text-xs font-medium text-indigo-700">PDF / DOI</div>
          </motion.a>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Awards</span>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="text-sm">
                <div className="font-medium">Prize / Award #1</div>
                <div className="text-slate-600">Organization · 202X</div>
              </li>
              <li className="text-sm">
                <div className="font-medium">Prize / Award #2</div>
                <div className="text-slate-600">Organization · 202X</div>
              </li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 text-slate-600">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm font-medium">Education</span>
            </div>

            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="font-medium">PhD in Computer Science</div>
                <div className="text-slate-600">INSA Rennes / IRISA · 2024–Now</div>
              </div>
              <div>
                <div className="font-medium">MSc in Distributed Systems</div>
                <div className="text-slate-600">University X · 2022–2023</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#experience" className="absolute left-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronUp className="w-5 h-5" />
      </a>
      <a href="#work" className="absolute right-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
