"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { experience } from "@/app/data/site";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-[calc(100svh-var(--header-h))] md:h-screen md:snap-start flex items-center px-6">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Experience</h2>
        {/* <p className="mt-2 text-slate-600 text-center">Roles + impact.</p> */}

        <ol className="mt-10">
          {experience.map((item, idx) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="grid md:grid-cols-12 gap-4 md:gap-6 items-start mb-6"
            >
              <div className="md:col-span-3 text-xs font-medium text-slate-500 pt-2">{item.date}</div>
              <div className="md:col-span-9 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="font-medium">{item.title}</div>
                <ul className="mt-2 text-sm text-slate-700 list-disc pl-5 space-y-1">
                  {item.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <a href="#top" className="absolute left-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronUp className="w-5 h-5" />
      </a>
      <a href="#education" className="absolute right-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
