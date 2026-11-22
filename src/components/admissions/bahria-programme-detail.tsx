import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, ExternalLink, FileText } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { LEVEL_SHORT_LABELS, type AdmissionCampus, type AdmissionLevel, type Programme, type ProgrammeGroup } from "@/data/bahria-admissions";
import { getProgrammeDetail, type CourseRow, type PloRow, type Semester } from "@/data/bahria-programme-details";

interface Props {
  level: AdmissionLevel;
  campus: AdmissionCampus;
  group: ProgrammeGroup;
  programme: Programme;
}

function Accordion({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details open={open} className="group border border-gray-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-charcoal transition-colors hover:bg-[#f7f8f6] sm:px-6">
        {title}
        <span aria-hidden="true" className="text-xl font-light text-[#233623] transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="border-t border-gray-200 px-5 py-5 sm:px-6">{children}</div>
    </details>
  );
}

function CourseTable({ courses, total }: { courses: CourseRow[]; total: string }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[#eef3ee] text-charcoal">
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Sr. No.</th>
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Pre-requisite Course Code</th>
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Course Code</th>
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Course Title</th>
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Credit Hours</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={`${course.code}-${course.title}-${index}`} className="odd:bg-white even:bg-[#fafbf9]">
              <td className="border border-gray-300 px-3 py-2.5 text-gray-700">{course.sr}</td>
              <td className="border border-gray-300 px-3 py-2.5 text-gray-700">{course.prerequisite || "—"}</td>
              <td className="border border-gray-300 px-3 py-2.5 font-medium text-charcoal">{course.code}</td>
              <td className="border border-gray-300 px-3 py-2.5 text-gray-700">{course.title}</td>
              <td className="border border-gray-300 px-3 py-2.5 text-gray-700">{course.credits}</td>
            </tr>
          ))}
          <tr className="bg-[#eef3ee] font-semibold text-charcoal">
            <td colSpan={4} className="border border-gray-300 px-3 py-2.5 text-right">Total Credit Hours</td>
            <td className="border border-gray-300 px-3 py-2.5">{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PloTable({ rows }: { rows: PloRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-[#eef3ee] text-charcoal">
            <th scope="col" className="w-16 border border-gray-300 px-3 py-2.5 text-xs font-semibold">S. No</th>
            <th scope="col" className="w-56 border border-gray-300 px-3 py-2.5 text-xs font-semibold">Programme Learning Outcomes (PLOs)</th>
            <th scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.no} className="odd:bg-white even:bg-[#fafbf9]">
              <td className="border border-gray-300 px-3 py-2.5 text-gray-700">{row.no}</td>
              <td className="border border-gray-300 px-3 py-2.5 font-medium text-charcoal">{row.outcome}</td>
              <td className="border border-gray-300 px-3 py-2.5 leading-relaxed text-gray-700">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SemesterAccordion({ semester, defaultOpen }: { semester: Semester; defaultOpen: boolean }) {
  return (
    <details open={defaultOpen} className="group border border-gray-200 bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-[#f7f8f6] px-5 py-4 text-center font-medium text-charcoal transition-colors hover:bg-[#eef3ee] sm:px-6">
        <span className="mx-auto">{semester.name} — {semester.total} credit hours</span>
        <Chevron aria-hidden="true" className="shrink-0 text-[#233623]" />
      </summary>
      <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
        <CourseTable courses={semester.courses} total={semester.total} />
        {semester.note && <p className="mt-3 text-xs leading-relaxed text-gray-600">{semester.note}</p>}
      </div>
    </details>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={`h-4 w-4 transition-transform group-open:rotate-180 ${className}`}>
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProgrammeDetailBahria({ level, campus, group, programme }: Props) {
  const detail = getProgrammeDetail(programme.detailKey);
  const backHref = `/admissions/${level}?campus=${campus.id}`;
  const officialUrl = detail?.sourceUrl ?? programme.sourceUrl;

  return (
    <InnerPageLayout
      className="!bg-white"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Admissions", href: "/admissions" },
        { label: LEVEL_SHORT_LABELS[level], href: backHref },
        { label: campus.name, href: backHref },
        { label: programme.name },
      ]}
    >
      <article className="bg-white">
        <header className="bg-[#17231d] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to {LEVEL_SHORT_LABELS[level]} admissions
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">
            {campus.name} · {LEVEL_SHORT_LABELS[level]}
          </p>
          <h1 className="mt-3 text-3xl font-light sm:text-4xl">{programme.name}</h1>
          <p className="mt-3 text-white/75">{group.name}</p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays aria-hidden="true" size={17} className="text-[#b9d2bd]" />
              <div><dt className="text-white/60">Duration</dt><dd className="font-medium">{programme.duration}</dd></div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen aria-hidden="true" size={17} className="text-[#b9d2bd]" />
              <div><dt className="text-white/60">Credit hours</dt><dd className="font-medium">{programme.credits}</dd></div>
            </div>
          </dl>
        </header>

        <div className="grid gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1fr_300px] lg:px-14 lg:py-12">
          <div className="min-w-0 space-y-4">
            {detail ? (
              <>
                <Accordion title="Important for all candidates" open>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                    {detail.important.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </Accordion>

                {detail.plos && detail.plos.length > 0 && (
                  <Accordion title="Programme Learning Outcomes (PLOs)" open>
                    <PloTable rows={detail.plos} />
                  </Accordion>
                )}

                {detail.outcomes && detail.outcomes.length > 0 && (
                  <Accordion title="Programme learning outcomes" open>
                    <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                      {detail.outcomes.map((item) => <li key={item}>{item}</li>)}
                    </ol>
                  </Accordion>
                )}

                <Accordion title="Eligibility criteria" open>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                    {detail.eligibility.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </Accordion>

                {detail.deficiency && detail.deficiency.length > 0 && (
                  <Accordion title="Prerequisite / deficiency courses">
                    <CourseTable courses={detail.deficiency} total={String(detail.deficiency.reduce((sum, course) => sum + Number(course.credits || 0), 0))} />
                    {detail.note && <p className="mt-3 text-xs leading-relaxed text-gray-600">{detail.note}</p>}
                  </Accordion>
                )}

                <section aria-labelledby="semester-heading">
                  <h2 id="semester-heading" className="mb-3 text-xl font-medium text-charcoal">
                    Semester-wise course structure
                  </h2>
                  <div className="space-y-3">
                    {detail.semesters.map((semester, index) => (
                      <SemesterAccordion key={semester.name} semester={semester} defaultOpen={index === 0} />
                    ))}
                  </div>
                </section>

                {detail.extraLists?.map((list) => (
                  <Accordion key={list.title} title={list.title}>
                    <ul className="grid list-disc gap-2 pl-5 text-sm leading-relaxed text-gray-700 sm:grid-cols-2">
                      {list.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </Accordion>
                ))}

                {detail.note && !detail.deficiency && (
                  <p className="border-l-2 border-[#7fa587] bg-[#f7f8f6] px-4 py-3 text-xs leading-relaxed text-gray-600">
                    {detail.note}
                  </p>
                )}
              </>
            ) : (
              <div className="space-y-4">
                <Accordion title="Important for all candidates" open>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                    <li>Confirm programme availability, eligibility, required documents, fees, and deadlines in the current University of Swat admission notice.</li>
                    <li>Follow the admission requirements for this programme and degree level; do not rely on requirements from a previous intake.</li>
                    <li>Current test subjects and exemptions were not verified in the official material reviewed. Check the relevant admission notice or contact the Directorate.</li>
                  </ul>
                </Accordion>
                <div className="border border-gray-200 bg-[#f7f8f6] p-6">
                  <div className="flex items-center gap-3">
                    <FileText aria-hidden="true" size={22} className="text-[#233623]" />
                    <h2 className="text-lg font-medium text-charcoal">Detailed curriculum</h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    Programme-specific PLOs, detailed eligibility, and semester tables were not
                    verified in the University of Swat information available for this page. They
                    are not filled with sample data. Open the official department page for its
                    published scheme of studies and contact Admissions for current intake details.
                  </p>
                  <a
                    href={officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-[#233623] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2a1a]"
                  >
                    Official programme details <ExternalLink aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>

          <aside className="h-fit border border-gray-200 bg-[#f7f8f6] p-5">
            <h2 className="text-lg font-medium text-charcoal">Admissions &amp; guidance</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Check that the programme is offered at {campus.name} for the intake you are applying to.
            </p>
            <a
              href="https://cms1.uswat.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#233623] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1a2a1a]"
            >
              Apply now <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <div className="mt-4 space-y-2">
              {[
                { label: "How to apply", href: "/admissions/guide/how-to-apply" },
                { label: "Fee structure", href: level === "undergraduate" ? "/admissions/guide/fee-undergraduate" : level === "masters" ? "/admissions/guide/fee-masters" : "/admissions/guide/fee-phd" },
                { label: "Scholarships", href: "/admissions/guide/scholarships" },
                { label: "Entry test rules", href: "/admissions/guide/test-subjects" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={`${item.href}?level=${level}&campus=${campus.id}`}
                  className="flex w-full items-center justify-between border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-[#233623] transition-colors hover:border-[#233623]"
                >
                  {item.label} <ArrowUpRight aria-hidden="true" size={15} />
                </Link>
              ))}
            </div>
            <a
              href={officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#233623] hover:underline"
            >
              Official programme page <ExternalLink aria-hidden="true" size={15} />
            </a>
          </aside>
        </div>
      </article>
    </InnerPageLayout>
  );
}
