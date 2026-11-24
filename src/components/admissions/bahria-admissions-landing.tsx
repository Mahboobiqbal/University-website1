import type { ElementType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Award, BookOpen, Globe, GraduationCap, Library, Layers } from "lucide-react";
import {
  ADMISSION_CATEGORIES,
  ROADMAPS,
  TEST_GUIDANCE,
  type AdmissionLevel,
} from "@/data/bahria-admissions";
import { ADMISSION_ANNOUNCEMENTS } from "@/data/bahria-guide";

const CATEGORY_ICONS: Record<string, ElementType> = {
  undergraduate: GraduationCap,
  masters: BookOpen,
  phd: Award,
  "lifelong-learning": Layers,
  odl: Library,
};

export function AdmissionsLanding() {
  const levels: AdmissionLevel[] = ["undergraduate", "masters", "phd"];
  const programmeCount = levels.reduce(
    (total, level) =>
      total +
      ROADMAPS[level].reduce(
        (sum, campus) =>
          sum + campus.groups.reduce((count, group) => count + group.programmes.length, 0),
        0
      ),
    0
  );
  const highlights = [
    { value: String(new Set(levels.flatMap((level) => ROADMAPS[level].map((campus) => campus.id))).size), label: "Campuses & institutes" },
    { value: String(programmeCount), label: "Programmes listed" },
    { value: "3", label: "Degree levels" },
  ];

  return (
    <article className="bg-white">
      <section className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden bg-[#17231d] px-4 pb-16 pt-28 text-center text-white sm:px-8 sm:pb-20 sm:pt-36 lg:min-h-[500px] lg:pb-24 lg:pt-44 xl:pt-[185px]">
        <Image
          src="/class-picture.jpg"
          alt="Students on campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#17231d]/85" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#233623]/90 via-[#233623]/70 to-[#17231d]/60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9d2bd]">
            University of Swat
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
            Admissions
          </h1>
          <p className="mt-4 text-lg font-light text-white/90 sm:text-xl">
            Explore University of Swat admission pathways and official notices.
          </p>
          <dl className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/25 pt-6">
            {highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-2xl font-medium text-white sm:text-3xl">{item.value}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-white/70 sm:text-xs">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#233623]">
            Choose your route
          </p>
          <h2 className="mt-3 text-3xl font-light text-charcoal sm:text-4xl">
            Find the right admission pathway
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ADMISSION_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.key] ?? GraduationCap;
            return (
              <Link
                key={category.key}
                href={category.href}
                className="group flex min-h-[230px] flex-col border border-[#e7e5df] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#233623] hover:shadow-[0_12px_30px_rgba(35,54,35,0.12)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8efe9] text-[#233623] transition-colors group-hover:bg-[#233623] group-hover:text-white">
                  <Icon aria-hidden="true" size={24} strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-medium leading-snug text-charcoal">{category.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{category.subtitle}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#233623]">
                  Explore <ArrowUpRight aria-hidden="true" size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-4 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#233623]">
              Plan ahead
            </p>
            <h2 className="mt-3 text-3xl font-light text-charcoal">Admission plans &amp; notices</h2>
            <ul className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
              {ADMISSION_ANNOUNCEMENTS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 py-4 text-sm font-medium leading-relaxed text-charcoal transition-colors hover:text-[#233623]"
                  >
                    {item.title}
                    <ArrowUpRight aria-hidden="true" size={17} className="mt-0.5 shrink-0 text-[#233623]" />
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/admissions/guide/important-dates"
              className="mt-6 inline-flex items-center gap-2 border border-[#233623] px-5 py-3 text-sm font-medium text-[#233623] transition-colors hover:bg-[#233623] hover:text-white"
            >
              View important dates <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className="border border-[#e7e5df] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Globe aria-hidden="true" size={22} className="text-[#233623]" />
              <h2 className="text-xl font-medium text-charcoal">Entry tests: know the difference</h2>
            </div>
            <div className="mt-5 space-y-5 text-sm leading-relaxed text-gray-700">
              <div className="border-l-2 border-[#7fa587] pl-4">
                <h3 className="font-medium text-charcoal">Undergraduate</h3>
                <p className="mt-1">{TEST_GUIDANCE.undergraduate}</p>
                <Link href="/admissions/guide/test-subjects" className="mt-2 inline-block font-medium text-[#233623] hover:underline">
                  Undergraduate test details
                </Link>
              </div>
              <div className="border-l-2 border-[#233623] pl-4">
                <h3 className="font-medium text-charcoal">Masters &amp; PhD</h3>
                <p className="mt-1">
                  {TEST_GUIDANCE.masters} {TEST_GUIDANCE.phd}
                </p>
                <Link href="/admissions/guide/test-exemption" className="mt-2 inline-block font-medium text-[#233623] hover:underline">
                  Entry test &amp; exemption rules
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 border border-[#e7e5df] bg-white p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <h2 className="text-lg font-medium text-charcoal">Looking for local admission notices?</h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              University of Swat admission guidance, deadlines and directorate contacts remain available.
            </p>
          </div>
          <Link
            href="/admissions/information/how-to-apply"
            className="inline-flex shrink-0 items-center gap-2 bg-[#233623] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2a1a]"
          >
            University of Swat guidance <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>
    </article>
  );
}
