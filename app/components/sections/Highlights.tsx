"use client";

import { Award, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { highlights } from "@/app/data/site";

function Tile({
  icon,
  title,
  line1,
  line2,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2?: string;
  href?: string;
}) {
  const inner = (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
          <div className="font-medium tracking-tight">{title}</div>
          <div className="mt-2 text-sm text-slate-600 whitespace-pre-line">
            {line1}
          </div>
          {line2 ? (
            <div className="mt-1 text-sm text-slate-600 whitespace-pre-line">
              {line2}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      className="block"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Highlights() {
  const pub = highlights.publication;
  const a1 = highlights.awards[0];
  const a2 = highlights.awards[1];

  return (
    <section id="highlights" className="relative min-h-[calc(100svh-var(--header-h))] md:h-screen md:snap-start flex items-start py-16 md:py-0 md:items-center px-6">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center">Highlights</h2>
        {/* <p className="mt-2 text-slate-600 text-center">A compact snapshot: paper + awards.</p> */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Tile
            icon={<FileText className="w-5 h-5" />}
            title="Publications"
            line1={pub.title}
            line2={`${pub.venue} · ${pub.year}`}
            href={pub.link}
          />

          <Tile
            icon={<Award className="w-5 h-5" />}
            title={a1.title}
            line1={a1.description}
            line2={`${a1.org} · ${a1.year}`}
            href={a1.link}
          />

          <Tile
            icon={<Award className="w-5 h-5" />}
            title={a2.title}
            line1={a2.description}
            line2={`${a2.org} · ${a2.year}`}
            href={a2.link}
          />
        </div>
      </div>

      <a
        href="#education"
        className="absolute left-6 bottom-6 inline-flex items-start py-16 md:py-0 md:items-center text-slate-600 hover:text-slate-800"
      >
        <ChevronUp className="w-5 h-5" />
      </a>
      <a
        href="#projects"
        className="absolute right-6 bottom-6 inline-flex items-start py-16 md:py-0 md:items-center text-slate-600 hover:text-slate-800"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
