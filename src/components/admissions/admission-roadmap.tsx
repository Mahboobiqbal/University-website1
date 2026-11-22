"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Search,
} from "lucide-react";
import { DEPARTMENTS } from "@/data/departments";

export type AdmissionLevel = "Undergraduate" | "MS/MPhil" | "PhD";

const levelMeta: Record<AdmissionLevel, { title: string; subtitle: string; entryTest: string }> = {
  Undergraduate: {
    title: "Undergraduate/BS Admission",
    subtitle: "Choose a campus and BS programme",
    entryTest: "NO ENTRY TEST REQUIRED FOR BS ADMISSIONS",
  },
  "MS/MPhil": {
    title: "Graduate/Postgraduate Admission",
    subtitle: "Choose a campus and MS/MPhil programme",
    entryTest: "ADMISSION ENTRY TEST REQUIRED",
  },
  PhD: {
    title: "PhD Admission",
    subtitle: "Choose a campus and doctoral programme",
    entryTest: "ADMISSION ENTRY TEST REQUIRED",
  },
};

export function AdmissionRoadmap({ level }: { level: AdmissionLevel }) {
  const [openCampus, setOpenCampus] = React.useState<"Main Campus" | "Women Campus" | null>("Main Campus");
  const [selectedProgram, setSelectedProgram] = React.useState<{
    name: string;
    level: string;
    department: string;
    curriculum: { title: string; url: string }[];
  } | null>(null);
  const [query, setQuery] = React.useState("");

  const meta = levelMeta[level];
  const programmes = DEPARTMENTS.flatMap((department) =>
    department.programs
      .filter((program) => program.level === level)
      .map((program) => ({
        name: program.name,
        level: program.level,
        department: department.name,
        curriculum: department.curriculum,
      }))
  ).filter((program) =>
    `${program.name} ${program.department}`.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#f7f8f6]">
      <section className="bg-[#233623] pt-[72px] text-white xl:pt-[143px]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-9">
          <div>
            <Link
              href="/admissions"
              className="mb-5 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <ArrowLeft aria-hidden="true" size={16} /> Admissions
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              University of Swat
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              {meta.title}
            </h1>
            <p className="mt-3 text-sm text-white/75 sm:text-base">{meta.subtitle}</p>
          </div>
          <a
            href="https://cms1.uswat.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] items-center justify-center gap-2 bg-white px-6 text-sm font-medium text-[#233623] transition-colors hover:bg-[#f0f2ee]"
          >
            Apply Now <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Select campus
            </p>
            {(["Main Campus", "Women Campus"] as const).map((campus) => {
              const open = openCampus === campus;
              return (
                <div key={campus} className="mb-3 border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenCampus(open ? null : campus);
                      setSelectedProgram(null);
                    }}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between px-5 py-5 text-left"
                  >
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-brand">
                        University of Swat
                      </span>
                      <span className="mt-1 block text-lg font-medium text-charcoal">{campus}</span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      size={18}
                      className={`text-brand transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              );
            })}

            <div className="mt-5 bg-[#233623] p-5 text-white">
              <GraduationCap aria-hidden="true" size={22} className="mb-3" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                Admission notice
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{meta.entryTest}</p>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                Campus availability and current dates must be confirmed in the official admission notice.
              </p>
            </div>
          </aside>

          <section>
            {openCampus ? (
              <>
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                      {openCampus}
                    </p>
                    <h2 className="mt-2 text-2xl font-light text-charcoal sm:text-3xl">
                      {level === "Undergraduate"
                        ? "BS programmes"
                        : level === "MS/MPhil"
                          ? "MS/MPhil programmes"
                          : "PhD programmes"}
                    </h2>
                  </div>
                  <label className="relative block sm:w-[260px]">
                    <Search
                      aria-hidden="true"
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search programme"
                      className="h-11 w-full border border-gray-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-brand"
                    />
                  </label>
                </div>

                {selectedProgram ? (
                  <article className="border border-gray-200 bg-white">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 p-5 sm:p-7">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                          {openCampus} • {selectedProgram.level}
                        </p>
                        <h3 className="mt-2 text-2xl font-light text-charcoal">
                          {selectedProgram.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">{selectedProgram.department}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedProgram(null)}
                        className="text-sm font-medium text-brand"
                      >
                        Change programme
                      </button>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_300px]">
                      <div className="p-5 sm:p-7">
                        <div className="grid gap-4 border-b border-gray-200 pb-6 sm:grid-cols-2 xl:grid-cols-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                              Duration
                            </p>
                            <p className="mt-2 text-sm text-charcoal">Not listed</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                              Eligibility
                            </p>
                            <p className="mt-2 text-sm text-charcoal">See admission notice</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                              Entry test
                            </p>
                            <p className="mt-2 text-sm font-medium text-brand">
                              {level === "Undergraduate" ? "Not required" : "Required"}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                              Total subjects
                            </p>
                            <p className="mt-2 text-sm text-charcoal">See official curriculum</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-xl font-medium text-charcoal">Subjects / Curriculum</h4>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">
                            The number of subjects is not included in the available programme data. Use the
                            department curriculum below to review the subject list and semester plan.
                          </p>
                        </div>
                        {selectedProgram.curriculum.length ? (
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {selectedProgram.curriculum.map((item) => (
                              <li key={`${item.title}-${item.url}`} className="border border-gray-200 px-4 py-3 text-sm text-gray-700">
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-start gap-2 transition-colors hover:text-brand"
                                  >
                                    <BookOpen aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                                    <span>{item.title}</span>
                                  </a>
                                ) : (
                                  <span className="inline-flex items-start gap-2">
                                    <BookOpen aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                                    <span>{item.title} (document link unavailable)</span>
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-4 border border-gray-200 bg-[#f7f8f6] p-4 text-sm leading-relaxed text-gray-600">
                            An official curriculum document is not available in the current department records.
                          </p>
                        )}
                      </div>

                      <aside className="border-t border-gray-200 bg-[#f7f8f6] p-5 sm:p-7 lg:border-l lg:border-t-0">
                        <h4 className="text-lg font-medium text-charcoal">Fee structure</h4>
                        <div className="mt-4 border border-gray-200 bg-white p-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                            Current programme fee
                          </p>
                          <p className="mt-2 text-base font-medium text-charcoal">
                            Not published in the available records
                          </p>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                          Fees can change by admission session. Confirm the current amount and payment breakdown
                          with the University before applying; no fee figure is shown here unless it is officially verified.
                        </p>
                        <Link
                          href="/contact"
                          className="mt-4 inline-flex text-sm font-medium text-brand underline underline-offset-4"
                        >
                          Contact the University for fee details
                        </Link>
                        <a
                          href="https://cms1.uswat.edu.pk/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-hover"
                        >
                          Apply Now <ArrowUpRight aria-hidden="true" size={16} />
                        </a>
                      </aside>
                    </div>
                  </article>
                ) : (
                  <div className="grid gap-3 md:grid-cols-2">
                    {programmes.length ? (
                      programmes.map((program) => (
                        <button
                          key={`${program.department}-${program.name}`}
                          type="button"
                          onClick={() => setSelectedProgram(program)}
                          className="group min-h-44 border border-gray-200 bg-white p-5 text-left transition-all hover:border-brand hover:shadow-[0_10px_24px_rgba(35,54,35,0.08)]"
                        >
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                            {level === "Undergraduate" ? "BS programme" : level}
                          </p>
                          <h3 className="mt-3 text-lg font-medium leading-snug text-charcoal group-hover:text-brand">
                            {program.name}
                          </h3>
                          <p className="mt-3 text-sm text-gray-500">{program.department}</p>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                            View programme <ArrowRight aria-hidden="true" size={15} />
                          </span>
                        </button>
                      ))
                    ) : (
                      <p className="border border-gray-200 bg-white p-6 text-sm text-gray-600 md:col-span-2">
                        No matching programmes found.
                      </p>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex min-h-72 items-center justify-center border border-gray-200 bg-white p-8 text-center text-sm text-gray-500">
                Select Main Campus or Women Campus to view programmes.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
