"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, MapPin, Search, X } from "lucide-react";
import {
  getInfoButtons,
  LEVEL_LABELS,
  LEVEL_SHORT_LABELS,
  ROADMAPS,
  TEST_GUIDANCE,
  type AdmissionLevel,
} from "@/data/bahria-admissions";

interface Props {
  level: AdmissionLevel;
  initialCampus?: string;
}

export function AdmissionRoadmapBahria({ level, initialCampus }: Props) {
  const campuses = ROADMAPS[level];
  const [openCampus, setOpenCampus] = React.useState<string | null>(initialCampus ?? null);
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({});
  const [query, setQuery] = React.useState("");

  const normalized = query.trim().toLowerCase();
  const results = React.useMemo(() => {
    if (!normalized) return [];
    return campuses.flatMap((campus) =>
      campus.groups.flatMap((group) =>
        group.programmes
          .filter((programme) =>
            `${programme.name} ${group.name} ${campus.name}`.toLowerCase().includes(normalized)
          )
          .map((programme) => ({ campus, group, programme }))
      )
    );
  }, [campuses, normalized]);

  const totalProgrammes = campuses.reduce(
    (total, campus) => total + campus.groups.reduce((sum, group) => sum + group.programmes.length, 0),
    0
  );

  function updateUrl(campusId: string | null) {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (campusId) url.searchParams.set("campus", campusId);
    else url.searchParams.delete("campus");
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  }

  function toggleCampus(campusId: string) {
    const next = openCampus === campusId ? null : campusId;
    setOpenCampus(next);
    updateUrl(next);
  }

  function toggleGroup(key: string) {
    setOpenGroups((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <article className="bg-white">
      <header className="relative overflow-hidden bg-[#17231d] px-6 py-12 text-white sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#233623] via-[#233623]/95 to-[#17231d]" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <span aria-hidden="true">←</span> Admissions
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">
              Admission roadmap
            </p>
            <h1 className="mt-3 text-3xl font-light sm:text-4xl lg:text-5xl">
              {LEVEL_LABELS[level]}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
              Explore programmes campus by campus, then open a programme for eligibility, learning
              outcomes and semester-wise course structure.
            </p>
          </div>
          <a
            href="https://cms1.uswat.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-[#233623] transition-colors hover:bg-[#e8efe9]"
          >
            Apply now <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <label htmlFor="programme-search" className="text-sm font-medium text-charcoal">
              Search programmes, subjects or campuses
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 px-4 focus-within:border-[#233623]">
              <Search aria-hidden="true" size={18} className="shrink-0 text-[#233623]" />
              <input
                id="programme-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="e.g. Computer Science, Psychology, Women Campus"
                className="w-full bg-transparent py-3 text-sm text-charcoal outline-none placeholder:text-gray-400"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="rounded p-1 text-gray-500 transition-colors hover:text-[#233623]"
                >
                  <X aria-hidden="true" size={17} />
                </button>
              )}
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-[#233623]">{totalProgrammes}</span> programmes across{" "}
            <span className="font-semibold text-[#233623]">{campuses.length}</span> campuses
          </p>
        </div>

        <div className={`mt-8 border-l-4 border-[#233623] bg-[#f7f8f6] p-5 sm:p-6 ${level === "undergraduate" ? "border-[#7fa587]" : ""}`}>
          <h2 className="text-lg font-medium text-charcoal">
            {level === "undergraduate"
              ? "Undergraduate admission testing"
              : `${LEVEL_SHORT_LABELS[level]} entry test`}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-gray-700">
            {TEST_GUIDANCE[level]}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium text-[#233623]">
            <Link href="/admissions/guide/test-subjects" className="hover:underline">
              Test subjects
            </Link>
            <Link href="/admissions/guide/test-exemption" className="hover:underline">
              Test exemption
            </Link>
            <Link href="/admissions/guide/how-to-apply" className="hover:underline">
              How to apply
            </Link>
          </div>
        </div>

        {normalized ? (
          <section className="mt-10" aria-live="polite">
            <h2 className="text-xl font-medium text-charcoal">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query.trim()}”
            </h2>
            {results.length === 0 ? (
              <div className="mt-5 border border-gray-200 bg-[#f7f8f6] p-6">
                <h3 className="font-medium text-charcoal">No programmes found</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Try a different keyword or browse the campus lists below.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-4 inline-flex items-center gap-2 border border-[#233623] px-4 py-2 text-sm font-medium text-[#233623] hover:bg-[#e8efe9]"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <ul className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
                {results.map(({ campus, group, programme }) => (
                  <li key={`${campus.id}-${programme.slug}`}>
                    <Link
                      href={`/admissions/${level}/${campus.id}/${programme.slug}`}
                      className="group flex flex-wrap items-center justify-between gap-3 py-4 transition-colors hover:text-[#233623]"
                    >
                      <span>
                        <span className="block font-medium text-charcoal group-hover:text-[#233623]">
                          {programme.name}
                        </span>
                        <span className="mt-1 block text-xs text-gray-500">
                          {campus.name} · {group.name}
                        </span>
                      </span>
                      <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-[#233623]" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ) : (
          <section className="mt-10 space-y-4" aria-label="Campus admission options">
            {campuses.map((campus) => {
              const isOpen = openCampus === campus.id;
              const count = campus.groups.reduce((sum, group) => sum + group.programmes.length, 0);
              return (
                <div key={campus.id} className="border border-gray-200 bg-white shadow-[0_6px_18px_rgba(27,35,27,0.04)]">
                  <button
                    type="button"
                    onClick={() => toggleCampus(campus.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 bg-[#233623] px-5 py-4 text-left text-white transition-colors hover:bg-[#1c2b1c] sm:px-6"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <MapPin aria-hidden="true" size={19} className="shrink-0 text-[#b9d2bd]" />
                      <span className="min-w-0">
                        <span className="block text-base font-medium leading-snug sm:text-lg">
                          {campus.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-white/65">{count} programmes</span>
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      size={20}
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-200 bg-[#fbfcfa] p-4 sm:p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#233623]">
                        Admission information
                      </h3>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        {getInfoButtons(level).map((button) => (
                          <Link
                            key={button.href}
                            href={`${button.href}?level=${level}&campus=${campus.id}`}
                            className="flex items-center justify-between gap-2 border border-[#cddace] bg-white px-4 py-3 text-sm font-medium text-[#233623] transition-colors hover:border-[#233623] hover:bg-[#e8efe9]"
                          >
                            {button.label}
                            <ArrowUpRight aria-hidden="true" size={15} className="shrink-0" />
                          </Link>
                        ))}
                      </div>

                      <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-[#233623]">
                        Programmes by department
                      </h3>
                      <div className="mt-3 space-y-3">
                        {campus.groups.map((group) => {
                          const key = `${campus.id}-${group.name}`;
                          const groupOpen = openGroups[key] ?? false;
                          return (
                            <div key={key} className="border border-gray-200 bg-white">
                              <button
                                type="button"
                                onClick={() => toggleGroup(key)}
                                aria-expanded={groupOpen}
                                className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-medium text-charcoal transition-colors hover:text-[#233623] sm:px-5"
                              >
                                <span>{group.name}</span>
                                <span className="flex items-center gap-2 text-xs text-gray-500">
                                  {group.programmes.length}
                                  <ChevronDown
                                    aria-hidden="true"
                                    size={17}
                                    className={`transition-transform ${groupOpen ? "rotate-180" : ""}`}
                                  />
                                </span>
                              </button>
                              {groupOpen && (
                                <div className="grid gap-2 border-t border-gray-200 p-3 sm:grid-cols-2 sm:p-4">
                                  {group.programmes.map((programme) => (
                                    <Link
                                      key={programme.slug}
                                      href={`/admissions/${level}/${campus.id}/${programme.slug}`}
                                      className="group flex items-center justify-between gap-3 border border-gray-200 px-4 py-3 transition-colors hover:border-[#233623] hover:bg-[#f7f8f6]"
                                    >
                                      <span className="min-w-0">
                                        <span className="block text-sm font-medium leading-snug text-charcoal group-hover:text-[#233623]">
                                          {programme.name}
                                        </span>
                                        <span className="mt-1 block text-xs text-gray-500">
                                          Duration: {programme.duration} · Credit hours: {programme.credits}
                                        </span>
                                      </span>
                                      <ArrowUpRight aria-hidden="true" size={16} className="shrink-0 text-[#233623]" />
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}
      </div>
    </article>
  );
}
