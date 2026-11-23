import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { getAllPrograms } from "@/data/departments";

export const metadata = {
  title: "Academic Programs | University of Swat",
  description:
    "Explore undergraduate, MS/MPhil, and doctoral degree programs offered by the University of Swat's academic departments.",
};

interface ProgramsPageProps {
  searchParams: Promise<{ level?: string }>;
}

const LEVEL_LABELS: Record<string, string> = {
  undergraduate: "Undergraduate",
  "ms-mphil": "MS/MPhil",
  phd: "PhD",
};

export default async function ProgramsPage({ searchParams }: ProgramsPageProps) {
  const { level } = await searchParams;
  const selectedLevel = level ? LEVEL_LABELS[level.toLowerCase()] : undefined;
  const programs = getAllPrograms().filter(
    (program) => !selectedLevel || program.level === selectedLevel
  );

  const filters = [
    { label: "All programs", href: "/programs", value: undefined },
    { label: "Undergraduate", href: "/programs?level=undergraduate", value: "Undergraduate" },
    { label: "MS/MPhil", href: "/programs?level=ms-mphil", value: "MS/MPhil" },
    { label: "PhD", href: "/programs?level=phd", value: "PhD" },
  ];

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Academics
          </p>
          <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Academic Programs
          </h1>
          <p className="max-w-2xl leading-relaxed text-gray-600">
            Browse degree programs listed by University of Swat departments. Select a study level
            to narrow the list, or visit a department for its curriculum and contact information.
          </p>
        </div>

        <nav aria-label="Filter programs by study level" className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = selectedLevel === filter.value;
            return (
              <Link
                key={filter.label}
                href={filter.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "border-[#74201e] bg-[#74201e] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#74201e] hover:text-[#74201e]"
                }`}
              >
                {filter.label}
              </Link>
            );
          })}
        </nav>

        {programs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Link
                key={`${program.departmentId}-${program.slug}`}
                href={program.href}
                className="group flex min-h-40 flex-col justify-between border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-[#74201e] hover:shadow-[0_12px_30px_rgba(35,54,35,0.08)]"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                    {program.level}
                  </span>
                  <h2 className="mt-3 text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-brand">
                    {program.name}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">{program.departmentName}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  About Program
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="border border-gray-200 bg-[#f7f7f5] p-6 text-gray-600">
            No programs are currently listed for this study level. Please explore all programs or
            contact the relevant department.
          </p>
        )}
      </section>
    </InnerPageLayout>
  );
}
