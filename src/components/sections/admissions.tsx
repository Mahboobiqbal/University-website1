"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Search,
  X,
  CalendarDays,
  FileText,
  BadgeCheck,
  Mail,
} from "lucide-react";
import { DEPARTMENTS, slugifyProgramName } from "@/data/departments";
import {
  ADMISSION_NOTICES,
  slugifyAdmissionProgram,
} from "@/data/admissions";

type AdmissionLevel = "Undergraduate" | "MS/MPhil" | "PhD";


const admissionCategories: {
  level: AdmissionLevel;
  label: string;
  description: string;
  href: string;
}[] = [
  {
    level: "Undergraduate",
    label: "Undergraduate",
    description: "BS Programs",
    href: "/admissions/undergraduate",
  },
  {
    level: "MS/MPhil",
    label: "Masters",
    description: "MS/MPhil Programs",
    href: "/admissions/masters",
  },
  {
    level: "PhD",
    label: "PhD",
    description: "Doctoral Programs",
    href: "/admissions/phd",
  },
];

const programLevelValues: Record<string, AdmissionLevel> = {
  undergraduate: "Undergraduate",
  "ms-mphil": "MS/MPhil",
  phd: "PhD",
};

const announcements = ADMISSION_NOTICES.map((notice) => ({
  title: notice.title,
  body: notice.detail,
  href: notice.href,
  status: notice.status,
}));

const documentLists: Record<AdmissionLevel, string[]> = {
  Undergraduate: [
    "CNIC or B-Form",
    "Recent photographs",
    "Matric certificate and transcript",
    "Intermediate certificate and transcript",
  ],
  "MS/MPhil": [
    "CNIC",
    "Recent photographs",
    "Matric certificate and transcript",
    "Intermediate certificate and transcript",
    "Bachelor's degree and transcript",
    "Equivalence certificate, if applicable",
  ],
  PhD: [
    "CNIC",
    "Recent photographs",
    "Matric certificate and transcript",
    "Intermediate certificate and transcript",
    "Bachelor's degree and transcript",
    "Master's degree and transcript",
    "Equivalence certificate, if applicable",
    "Research proposal, where required",
  ],
};

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "Choose your study level and program, review the official notice, prepare the required documents, and submit the application through the current University of Swat application procedure.",
  },
  {
    question: "Is an entry test required for BS admissions?",
    answer:
      "Undergraduate applicants should follow the requirements in the current BS admission notice. Do not assume that postgraduate test requirements apply to undergraduate programmes.",
  },
  {
    question: "Is an entry test required for MS/MPhil admissions?",
    answer:
      "Test requirements depend on the current programme admission notice. A current test-subject list and exemption policy were not verified in the official material reviewed.",
  },
  {
    question: "Is an entry test required for PhD admissions?",
    answer:
      "Test and research evaluation requirements depend on the current PhD admission notice. A current test-subject list and exemption policy were not verified in the official material reviewed.",
  },
  {
    question: "How can I check the merit list?",
    answer:
      "Merit lists are published through official University of Swat announcements. Check the university notice and admission portal for the latest intake.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Merit-based scholarships and need-based financial assistance may be available according to current university and government policy.",
  },
];

export function AdmissionsSection({ compact = false }: { compact?: boolean }) {
  const [openAnnouncement, setOpenAnnouncement] = React.useState(0);
  const [level, setLevel] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [query, setQuery] = React.useState("");
  const [searchedLevel, setSearchedLevel] = React.useState("");
  const [searchedDepartment, setSearchedDepartment] = React.useState("");
  const [searchedQuery, setSearchedQuery] = React.useState("");
  const [documentLevel, setDocumentLevel] = React.useState<AdmissionLevel>("Undergraduate");
  const [checkedDocuments, setCheckedDocuments] = React.useState<string[]>([]);
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const departments = React.useMemo(
    () => DEPARTMENTS.map((item) => item.name).sort((a, b) => a.localeCompare(b)),
    []
  );

  const programs = React.useMemo(
    () =>
      DEPARTMENTS.flatMap((dept) =>
        dept.programs.map((program) => ({
          ...program,
          department: dept.name,
          departmentId: dept.id,
          href: `/admissions/program/${dept.id}/${slugifyAdmissionProgram(program.name)}?campus=main-campus`,
        }))
      ),
    []
  );

  const filteredPrograms = React.useMemo(() => {
    const levelFilter = searchedLevel ? programLevelValues[searchedLevel] : undefined;
    const normalizedQuery = searchedQuery.trim().toLowerCase();
    return programs.filter((program) => {
      if (levelFilter && program.level !== levelFilter) return false;
      if (searchedDepartment && program.department !== searchedDepartment) return false;
      if (normalizedQuery && !`${program.name} ${program.department}`.toLowerCase().includes(normalizedQuery)) return false;
      return true;
    });
  }, [programs, searchedDepartment, searchedLevel, searchedQuery]);

  const runProgramSearch = () => {
    setSearchedLevel(level);
    setSearchedDepartment(department);
    setSearchedQuery(query);
  };

  const clearProgramSearch = () => {
    setLevel("");
    setDepartment("");
    setQuery("");
    setSearchedLevel("");
    setSearchedDepartment("");
    setSearchedQuery("");
  };

  const toggleDocument = (documentName: string) => {
    setCheckedDocuments((current) =>
      current.includes(documentName)
        ? current.filter((item) => item !== documentName)
        : [...current, documentName]
    );
  };


  return (
    <div id="admissions">
      <section className="relative isolate overflow-hidden bg-[#17231d] py-12 text-white lg:py-16">
        <Image
          src="/class-picture.jpg"
          alt="University of Swat students"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#233623]/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17231d]/20 via-transparent to-[#17231d]/55" />
        <div className="relative mx-auto max-w-[1280px] px-4 lg:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] sm:text-4xl">
              Admissions
            </h2>
            <p className="mt-3 text-sm font-medium sm:text-base">
              Your Journey Towards Academic Excellence Starts Here!
            </p>
          </div>
          <div className="mt-8 grid overflow-hidden border-y border-white/55 md:grid-cols-3">
            {admissionCategories.map((category) => (
              <Link
                key={category.level}
                href={category.href}
                className="group flex min-h-36 flex-col items-center justify-center border-b border-white/55 px-5 text-center transition-all duration-300 hover:bg-white/12 md:min-h-44 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#233623] transition-transform duration-300 group-hover:-translate-y-1">
                  <GraduationCap aria-hidden="true" size={23} />
                </span>
                <span className="text-lg font-bold uppercase tracking-wide sm:text-xl">
                  {category.label}
                </span>
                <span className="mt-1 text-sm text-white/80">{category.description}</span>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-semibold tracking-wide text-white">
            Follow the requirements published for your programme and admission intake.
          </p>
        </div>
      </section>


      {!compact && (
        <>
      <section className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden">
            <Image
              src="/class-picture.jpg"
              alt="University of Swat admission information"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#17231d]/20" />
            <div className="absolute bottom-0 left-0 max-w-md bg-[#233623] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Official University of Swat information
              </p>
              <h3 className="mt-2 text-2xl font-light sm:text-3xl">
                Find the program that fits your goals
              </h3>
              <Link
                href="/admissions/undergraduate"
                className="mt-5 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm font-medium"
              >
                Explore programs <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
          <div className="bg-[#233623] px-6 py-8 text-white sm:px-8 lg:px-10">
            {announcements.map((item, index) => {
              const open = openAnnouncement === index;
              return (
                <div key={item.title} className="border-b border-white/20">
                  <button
                    type="button"
                    onClick={() => setOpenAnnouncement(open ? -1 : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold sm:text-base"
                  >
                    <span>
                      {item.title}
                      <span className="mt-1 block text-xs font-normal text-white/60">
                        {item.status}
                      </span>
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      size={18}
                      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <div className="pb-5 text-sm leading-relaxed text-white/75">
                      <p>{item.body}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 font-medium text-white underline underline-offset-4"
                      >
                        Read official notice <ArrowUpRight aria-hidden="true" size={14} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-4 py-14 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              How to apply
            </p>
            <h3 className="text-3xl font-light text-charcoal">Admission process</h3>
          </div>
          <ol className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Explore programs"],
              ["02", "Check eligibility"],
              ["03", "Prepare documents"],
              ["04", "Submit application"],
              ["05", "Complete admission"],
            ].map(([number, title]) => (
              <li key={number} className="min-h-36 bg-white p-5">
                <span className="text-sm font-semibold text-brand">{number}</span>
                <h4 className="mt-5 font-medium text-charcoal">{title}</h4>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-gray-600">
            Selection, tests, and interviews are determined by the current official notice for each programme and level. Do not apply postgraduate test rules to undergraduate admissions.
          </p>
        </div>
      </section>

      <section id="program-finder" className="bg-white px-4 py-14 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Program finder
            </p>
            <h3 className="text-3xl font-light text-charcoal">Find your program</h3>
          </div>
          <div className="grid gap-3 border border-gray-200 bg-[#f7f8fa] p-4 md:grid-cols-[180px_1fr_1fr_auto]">
            <label className="text-xs font-medium text-gray-500">
              Degree level
              <select
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                className="mt-2 h-12 w-full border border-gray-200 bg-white px-3 text-sm text-charcoal outline-none focus:border-brand"
              >
                <option value="">All levels</option>
                <option value="undergraduate">BS</option>
                <option value="ms-mphil">MS/MPhil</option>
                <option value="phd">PhD</option>
              </select>
            </label>
            <label className="text-xs font-medium text-gray-500">
              Department
              <select
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                className="mt-2 h-12 w-full border border-gray-200 bg-white px-3 text-sm text-charcoal outline-none focus:border-brand"
              >
                <option value="">All departments</option>
                {departments.map((name) => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </label>
            <label className="text-xs font-medium text-gray-500">
              Program name
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") runProgramSearch();
                }}
                placeholder="Search programs"
                className="mt-2 h-12 w-full border border-gray-200 bg-white px-3 text-sm text-charcoal outline-none placeholder:text-gray-400 focus:border-brand"
              />
            </label>
            <div className="flex items-end gap-2">
              <button
                type="button"
                onClick={runProgramSearch}
                className="inline-flex h-12 items-center gap-2 bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
              >
                <Search aria-hidden="true" size={16} /> Search
              </button>
              <button
                type="button"
                onClick={clearProgramSearch}
                aria-label="Clear program filters"
                className="inline-flex h-12 w-12 items-center justify-center border border-gray-200 text-gray-500 transition-colors hover:border-brand hover:text-brand"
              >
                <X aria-hidden="true" size={17} />
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(searchedLevel || searchedDepartment || searchedQuery
              ? filteredPrograms
              : programs
            ).slice(0, 9).map((program) => (
              <article key={`${program.department}-${program.name}`} className="border border-gray-200 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {program.level}
                  </span>
                  <h4 className="mt-3 min-h-12 text-lg font-medium leading-snug text-charcoal">
                    <Link
                      href={`/programs/${slugifyProgramName(program.name)}`}
                      className="hover:text-brand transition-colors"
                    >
                      {program.name}
                    </Link>
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">{program.department}</p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
                  <Link
                    href={`/programs/${slugifyProgramName(program.name)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:underline"
                  >
                    About Program &rarr;
                  </Link>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-brand"
                  >
                    Admissions <ArrowUpRight aria-hidden="true" size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div id="undergraduate" className="px-6 py-14 sm:px-10 lg:px-[clamp(3rem,7vw,7rem)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Undergraduate
          </p>
          <h3 className="text-3xl font-light text-charcoal">BS Admissions</h3>
          <p className="mt-5 font-semibold text-[#233623]">Check the current undergraduate admission notice</p>
          <p className="mt-3 leading-relaxed text-gray-600">
            BS applicants should review the programme availability, eligibility, selection process, required documents, fees, and deadlines in the official intake notice.
          </p>
        </div>
        <div id="postgraduate" className="bg-[#233623] px-6 py-14 text-white sm:px-10 lg:px-[clamp(3rem,7vw,7rem)]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            Postgraduate
          </p>
          <h3 id="phd" className="text-3xl font-light">MS/MPhil & PhD Admissions</h3>
          <p className="mt-5 font-semibold text-white">Programme-specific test requirements</p>
          <p className="mt-3 leading-relaxed text-white/75">
            MS/MPhil and PhD test requirements, subjects, exemptions, and evaluation stages must be confirmed from the relevant current admission notice.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f8fa] px-4 py-14 lg:px-6 lg:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Document checklist
            </p>
            <h3 className="text-3xl font-light text-charcoal">Prepare your documents</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {(["Undergraduate", "MS/MPhil", "PhD"] as AdmissionLevel[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setDocumentLevel(item);
                    setCheckedDocuments([]);
                  }}
                  className={`border px-4 py-2 text-sm font-medium ${
                    documentLevel === item
                      ? "border-brand bg-brand text-white"
                      : "border-gray-200 bg-white text-charcoal"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {documentLists[documentLevel].map((documentName) => (
                <label key={documentName} className="flex cursor-pointer items-center gap-3 border border-gray-200 bg-white p-4 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={checkedDocuments.includes(documentName)}
                    onChange={() => toggleDocument(documentName)}
                    className="h-4 w-4 accent-[#74201e]"
                  />
                  {documentName}
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Scholarships
            </p>
            <h3 className="text-3xl font-light text-charcoal">Financial assistance</h3>
            <div className="mt-6 grid gap-4">
              {[
                ["KPEF Merit-cum-Inaffordability Scheme 2025–26", "The University published this scheme in November 2026. Verify the notice for eligibility and application-window status."],
                  ["HEC Need-Based Scholarships", "HEC need-based schemes are announced through separate University notices. Check the latest announcement before applying."],
              ].map(([title, body]) => (
                <div key={title} className="border-l-2 border-brand bg-white p-5">
                  <h4 className="font-medium text-charcoal">{title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <Link href="/admissions/information/important-dates" className="flex items-center gap-2 border border-gray-200 bg-white p-4 text-charcoal hover:border-brand hover:text-brand">
                <CalendarDays aria-hidden="true" size={17} /> Admission schedule
              </Link>
              <Link href="/admissions/information/sample-papers" className="flex items-center gap-2 border border-gray-200 bg-white p-4 text-charcoal hover:border-brand hover:text-brand">
                <FileText aria-hidden="true" size={17} /> Downloads
              </Link>
              <Link href="/admissions/information/scholarships" className="flex items-center gap-2 border border-gray-200 bg-white p-4 text-charcoal hover:border-brand hover:text-brand">
                <BadgeCheck aria-hidden="true" size={17} /> Find a program
              </Link>
              <Link href="/admissions/information/contact" className="flex items-center gap-2 border border-gray-200 bg-white p-4 text-charcoal hover:border-brand hover:text-brand">
                <Mail aria-hidden="true" size={17} /> Contact admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 lg:px-6 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Frequently asked questions
          </p>
          <h3 className="mb-8 text-3xl font-light text-charcoal">Admissions FAQ</h3>
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : index)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-charcoal"
                  >
                    {faq.question}
                    <ChevronDown aria-hidden="true" size={18} className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <p className="pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
        </>
      )}
    </div>
  );
}
