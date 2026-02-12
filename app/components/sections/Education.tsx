"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { education } from "@/app/data/site";

export default function Education() {
  return (
    <section id="education" className="h-screen snap-start flex items-center px-6 bg-white">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Education</h2>
        {/* <p className="mt-2 text-slate-600 text-center">Degrees & institutions.</p> */}

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {education.map((e) => (
            <div key={`${e.degree}-${e.school}-${e.year}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm text-slate-500">{e.year}</div>
              <div className="mt-1 text-xl font-medium">{e.degree}</div>
              <div className="text-slate-600">{e.school}</div>
              {e.note ? <div className="mt-3 text-sm text-slate-700">{e.note}</div> : null}
            </div>
          ))}
        </div>
      </div>

      <a href="#experience" className="absolute left-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronUp className="w-5 h-5" />
      </a>
      <a href="#highlights" className="absolute right-6 bottom-6 inline-flex items-center text-slate-600 hover:text-slate-800">
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
