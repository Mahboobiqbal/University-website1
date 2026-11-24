"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ExternalLink, Search } from "lucide-react";
import {
  ADMISSION_CAMPUSES,
  ADMISSION_INFO,
  ADMISSION_NOTICES,
  WOMEN_CAMPUS_FALL_2026_PROGRAMS,
  slugifyAdmissionProgram,
  type AdmissionTopic,
} from "@/data/admissions";
import { DEPARTMENTS } from "@/data/departments";

export type AdmissionLevel = "Undergraduate" | "MS/MPhil" | "PhD";

interface AdmissionRoadmapProps {
  level: AdmissionLevel;
  initialCampus?: string;
}

const resourceTopics: AdmissionTopic[] = [
  "how-to-apply",
  "admission-quota",
  "test-subjects",
  "test-exemptions",
  "fee-structure",
  "sample-papers",
  "scholarships",
  "important-dates",
  "international-admissions",
  "contact",
];

function getPrograms(campusId: string, level: AdmissionLevel) {
  if (campusId === "women-campus") {
    if (level !== "Undergraduate") return [];
    return WOMEN_CAMPUS_FALL_2026_PROGRAMS.map((item) => ({
      name: item.name,
      departmentId: item.departmentId,
      departmentName:
        DEPARTMENTS.find((department) => department.id === item.departmentId)?.name ??
        "Women Campus",
    }));
  }

  return DEPARTMENTS.flatMap((department) =>
    department.programs
      .filter((program) => {
        if (level === "Undergraduate") return program.level === "Undergraduate";
        if (level === "PhD") return program.level.toLowerCase().includes("phd");
        return (
          program.level.toLowerCase().includes("ms") ||
          program.level.toLowerCase().includes("m.phil") ||
          program.level.toLowerCase().includes("mphil") ||
          program.level.toLowerCase().includes("master")
        );
      })
      .map((program) => ({
        name: program.name,
        departmentId: department.id,
        departmentName: department.name,
      }))
  );
}

export function AdmissionRoadmap({ level, initialCampus }: AdmissionRoadmapProps) {
  const [openCampus, setOpenCampus] = useState<string | null>(initialCampus ?? null);
  const [query, setQuery] = useState("");
  const isUndergraduate = level === "Undergraduate";

  const filteredPrograms = useMemo(() => {
    if (!openCampus) return [];
    const normalizedQuery = query.trim().toLowerCase();
    return getPrograms(openCampus, level).filter((program) =>
      `${program.name} ${program.departmentName}`.toLowerCase().includes(normalizedQuery)
    );
  }, [level, openCampus, query]);

  return (
    <main className="bg-white">
      <header className="bg-[#233623] px-5 pb-10 pt-28 text-white sm:px-8 sm:pb-12 sm:pt-36 lg:px-12 lg:pb-14 lg:pt-44 xl:pt-[185px]">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/75">
            <Link href="/admissions" className="transition-colors hover:text-white">
              Admissions
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page">{level}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            University of Swat
          </p>
          <h1 className="mt-3 text-3xl font-light sm:text-4xl">{level} admissions</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
            Select a campus to review programme listings and official admission resources. Campus
            and programme availability is determined by the latest University admission notice.
          </p>
          <div className="mt-6 border-l-2 border-white/40 pl-4 text-sm leading-relaxed text-white/75">
            {isUndergraduate
              ? "Undergraduate candidates must follow the requirements in the current BS admission notice. Postgraduate test rules do not automatically apply to BS admissions."
              : "MS/MPhil and PhD test requirements, subjects, and exemptions depend on the current programme notice. A current subject list or exemption policy was not verified."}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-12 lg:py-11">
        <section aria-labelledby="campus-heading">
          <div className="mb-5">
            <h2 id="campus-heading" className="text-2xl font-medium text-charcoal">
              Choose a campus
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              The programme directory may include options not offered in the latest intake. Always
              confirm from the linked official notice.
            </p>
          </div>

          <div className="space-y-3">
            {ADMISSION_CAMPUSES.map((campus) => {
              const isOpen = openCampus === campus.id;
              const campusPrograms = getPrograms(campus.id, level);
              const matchingPrograms = isOpen ? filteredPrograms : campusPrograms;

              return (
                <section key={campus.id} className="border border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => {
                      setOpenCampus(isOpen ? null : campus.id);
                      setQuery("");
                    }}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#f7f8f6]"
                  >
                    <span>
                      <span className="block text-lg font-medium text-charcoal">{campus.name}</span>
                      <span className="mt-1 block text-sm text-gray-500">
                        {campusPrograms.length
                          ? `${campusPrograms.length} directory programme${campusPrograms.length === 1 ? "" : "s"}`
                          : "No current programme list verified"}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      size={20}
                      className={`shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`campus-panel-${campus.id}`}
                      className="border-t border-gray-200 px-5 py-5"
                    >
                      <p className="leading-relaxed text-gray-600">{campus.description}</p>
                      <a
                        href={campus.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                      >
                        Campus information <ExternalLink aria-hidden="true" size={14} />
                      </a>

                      {campusPrograms.length > 0 ? (
                        <>
                          <label
                            htmlFor={`program-search-${campus.id}`}
                            className="mt-6 block text-sm font-medium text-charcoal"
                          >
                            Programmes
                          </label>
                          <div className="relative mt-2">
                            <Search
                              aria-hidden="true"
                              size={17}
                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                            <input
                              id={`program-search-${campus.id}`}
                              type="search"
                              value={isOpen ? query : ""}
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="Search programmes or departments"
                              className="w-full border border-gray-300 py-2.5 pl-10 pr-3 text-sm outline-none transition-colors focus:border-brand"
                            />
                          </div>

                          {matchingPrograms.length ? (
                            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                              {matchingPrograms.map((program) => (
                                <li key={`${program.departmentId}-${program.name}`}>
                                  <Link
                                    href={`/admissions/program/${program.departmentId}/${slugifyAdmissionProgram(program.name)}?campus=${campus.id}`}
                                    className="flex h-full items-center justify-between gap-3 border border-gray-200 px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
                                  >
                                    <span>
                                      <span className="block">{program.name}</span>
                                      <span className="mt-1 block text-xs font-normal text-gray-500">
                                        {program.departmentName}
                                      </span>
                                    </span>
                                    <ArrowUpRight
                                      aria-hidden="true"
                                      size={16}
                                      className="shrink-0"
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="mt-4 text-sm text-gray-600" role="status">
                              No programmes match “{query}”.
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="mt-5 border-l-2 border-brand bg-[#f7f8f6] px-4 py-3 text-sm leading-relaxed text-gray-600">
                          No current {level} programme list for this campus was verified in the
                          official notices reviewed. Contact Admissions before selecting a campus.
                        </p>
                      )}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </section>

        <aside className="h-fit border border-gray-200 bg-[#f7f8f6] p-5">
          <h2 className="text-xl font-medium text-charcoal">Admission resources</h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Official information, verified notices, and clear guidance where a current policy was
            not available.
          </p>
          <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
            {resourceTopics.map((topic) => (
              <li key={topic}>
                <Link
                  href={`/admissions/information/${topic}`}
                  className="flex items-center justify-between gap-3 py-3 text-sm font-medium text-charcoal transition-colors hover:text-brand"
                >
                  {ADMISSION_INFO[topic].title}
                  <ArrowUpRight aria-hidden="true" size={15} className="shrink-0" />
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-7 text-base font-medium text-charcoal">Published notices</h3>
          <ul className="mt-2 space-y-3">
            {ADMISSION_NOTICES.map((notice) => (
              <li key={notice.href}>
                <a
                  href={notice.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm font-medium leading-relaxed text-brand hover:underline"
                >
                  {notice.title}
                  <span className="mt-0.5 block text-xs font-normal text-gray-500">
                    {notice.status}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
