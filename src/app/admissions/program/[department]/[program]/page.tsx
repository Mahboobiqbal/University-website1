import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import {
  ADMISSION_NOTICES,
  WOMEN_CAMPUS_FALL_2026_PROGRAMS,
  slugifyAdmissionProgram,
} from "@/data/admissions";
import { DEPARTMENTS, getDepartmentById } from "@/data/departments";

interface Props {
  params: Promise<{ department: string; program: string }>;
  searchParams: Promise<{ campus?: string }>;
}

function getProgram(departmentId: string, programSlug: string) {
  if (departmentId === "home-economics" && programSlug === "bs-home-economics") {
    return {
      name: "BS Home Economics",
      level: "Undergraduate",
      department: "Home Economics (Women Campus)",
      curriculum: [],
    };
  }

  const department = getDepartmentById(departmentId);
  const program = department?.programs.find(
    (item) =>
      slugifyAdmissionProgram(item.name) === programSlug ||
      slugifyAdmissionProgram(item.name).replace(/^bs-in-/, "bs-") === programSlug
  );
  return department && program
    ? {
        name: program.name,
        level: program.level,
        department: department.name,
        curriculum: department.curriculum.filter((item) => item.title),
      }
    : undefined;
}

export function generateStaticParams() {
  const listedPrograms = DEPARTMENTS.flatMap((department) =>
    department.programs.map((program) => ({
      department: department.id,
      program: slugifyAdmissionProgram(program.name),
    }))
  );
  const campusPrograms = WOMEN_CAMPUS_FALL_2026_PROGRAMS.map((program) => ({
    department: program.departmentId,
    program: slugifyAdmissionProgram(program.name),
  }));
  const uniquePrograms = new Map(
    [...listedPrograms, ...campusPrograms].map((item) => [
      `${item.department}/${item.program}`,
      item,
    ])
  );
  return [
    ...uniquePrograms.values(),
  ];
}

export async function generateMetadata({ params }: Props) {
  const { department, program } = await params;
  const item = getProgram(department, program);
  return {
    title: item
      ? `${item.name} Admissions | University of Swat`
      : "Programme Admissions | University of Swat",
  };
}

export default async function AdmissionProgramPage({ params, searchParams }: Props) {
  const { department: departmentId, program: programSlug } = await params;
  const { campus } = await searchParams;
  const program = getProgram(departmentId, programSlug);
  if (!program) notFound();

  const campusName =
    campus === "women-campus"
      ? "Women Campus"
      : "Main Campus, Charbagh";
  const isPostgraduate = program.level !== "Undergraduate";

  return (
    <InnerPageLayout>
      <article className="bg-white">
        <header className="bg-[#233623] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <Link
            href={`/admissions/${isPostgraduate ? (program.level === "PhD" ? "phd" : "masters") : "undergraduate"}?campus=${campus || "main-campus"}`}
            className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to {program.level} admissions
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            {campusName} · {program.level}
          </p>
          <h1 className="mt-3 text-3xl font-light sm:text-4xl">{program.name}</h1>
          <p className="mt-3 text-white/75">{program.department}</p>
        </header>

        <div className="grid gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1fr_300px] lg:px-14 lg:py-12">
          <div className="space-y-4">
            <details open className="group border border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal">
                Important for all candidates
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gray-200 px-5 py-4">
                <p className="leading-relaxed text-gray-600">
                  Confirm programme availability, eligibility, required documents, fees, and deadlines
                  in the latest official admission notice. The most recent notices located are listed
                  below; their application windows have passed.
                </p>
                <ul className="mt-4 space-y-3">
                  {ADMISSION_NOTICES.map((notice) => (
                    <li key={notice.href}>
                      <a
                        href={notice.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-2 text-sm font-medium text-brand hover:underline"
                      >
                        <ExternalLink aria-hidden="true" size={15} className="mt-0.5 shrink-0" />
                        <span>
                          {notice.title} <span className="text-gray-500">({notice.status})</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <details className="group border border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal">
                Programme learning outcomes (PLOs)
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gray-200 px-5 py-4">
                <p className="leading-relaxed text-gray-600">
                  Programme-specific PLO tables are not included in the department data available in
                  this website. Check the official Board of Studies or scheme-of-studies document
                  below; the programme learning outcomes can vary by programme and curriculum version.
                </p>
              </div>
            </details>

            <details className="group border border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal">
                Eligibility criteria
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gray-200 px-5 py-4">
                <p className="leading-relaxed text-gray-600">
                  Eligibility is set by the current admission notice and programme. The local
                  programme records do not contain verified subject-wise marks or degree requirements.
                  Review the official notice or contact the Directorate before applying.
                </p>
                <Link
                  href="/admissions/information/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
                >
                  Contact Admissions <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </details>

            <details className="group border border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal">
                Semester-wise course structure
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="border-t border-gray-200 px-5 py-4">
                {program.curriculum.length ? (
                  <>
                    <p className="leading-relaxed text-gray-600">
                      The following official department curriculum documents are available. Open
                      the document matching this programme and your admission year to view its
                      semester tables and credit hours. A verified total subject count is not
                      available in the programme records on this website.
                    </p>
                    <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                      {program.curriculum.map((document) => (
                        <li key={`${document.title}-${document.url}`} className="py-3">
                          {document.url ? (
                            <a
                              href={document.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3 text-sm font-medium text-brand hover:underline"
                            >
                              <BookOpen aria-hidden="true" size={17} className="mt-0.5 shrink-0" />
                              <span>
                                {document.title}
                                <span className="mt-1 block text-xs font-normal text-gray-500">
                                  Open official curriculum document
                                </span>
                              </span>
                              <ArrowUpRight aria-hidden="true" size={15} className="ml-auto mt-0.5 shrink-0" />
                            </a>
                          ) : (
                            <span className="text-sm text-gray-600">
                              {document.title} (document link unavailable)
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="leading-relaxed text-gray-600">
                    A programme-specific scheme of studies or semester table was not found in the
                    available records, and a total subject count could not be verified. Contact the
                    department or Directorate of Admissions for the current curriculum.
                  </p>
                )}
              </div>
            </details>
          </div>

          <aside className="h-fit border border-gray-200 bg-[#f7f8f6] p-5">
            <h2 className="text-lg font-medium text-charcoal">Admissions &amp; guidance</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Application dates in the notices may have passed. Check for a newer intake before
              starting an application.
            </p>
            <a
              href="https://cms1.uswat.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-brand px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Open admission portal <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <Link
              href="/admissions/information/fee-structure"
              className="mt-3 inline-flex w-full items-center justify-center border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
            >
              Fee information
            </Link>
            <Link
              href="/admissions/information/scholarships"
              className="mt-3 inline-flex w-full items-center justify-center border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
            >
              Scholarships
            </Link>
          </aside>
        </div>
      </article>
    </InnerPageLayout>
  );
}
