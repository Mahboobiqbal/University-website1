import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ADMISSION_GUIDES } from "@/data/bahria-guide";
import { LEVEL_SHORT_LABELS, ROADMAPS, type AdmissionLevel } from "@/data/bahria-admissions";

interface Props {
  params: Promise<{ topic: string }>;
  searchParams: Promise<{ level?: string; campus?: string }>;
}

const levels: Record<string, AdmissionLevel> = {
  undergraduate: "undergraduate",
  masters: "masters",
  phd: "phd",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(ADMISSION_GUIDES).map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const guide = ADMISSION_GUIDES[topic];
  if (!guide) notFound();
  return {
    title: `${guide.title} | University of Swat`,
    description: guide.intro,
  };
}

export default async function AdmissionGuidePage({ params, searchParams }: Props) {
  const { topic } = await params;
  const { level, campus } = await searchParams;
  const guide = ADMISSION_GUIDES[topic];
  if (!guide) notFound();

  const admissionLevel = level ? levels[level] : undefined;
  const validCampus = admissionLevel && campus && ROADMAPS[admissionLevel].some((item) => item.id === campus)
    ? campus
    : undefined;
  const backHref = admissionLevel
    ? `/admissions/${admissionLevel}${validCampus ? `?campus=${validCampus}` : ""}`
    : "/admissions";
  const backLabel = admissionLevel ? `Back to ${LEVEL_SHORT_LABELS[admissionLevel]} admissions` : "Back to admissions";

  return (
    <InnerPageLayout
      className="!bg-white"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Admissions", href: "/admissions" },
        { label: "Admission guide", href: "/admissions" },
        { label: guide.title },
      ]}
    >
      <article className="bg-white">
        <header className="bg-[#17231d] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white">
            <ArrowLeft aria-hidden="true" size={16} />
            {backLabel}
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">
            Admission guide
          </p>
          <h1 className="mt-3 text-3xl font-light sm:text-4xl">{guide.title}</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">{guide.intro}</p>
        </header>

        <div className="grid gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1fr_300px] lg:px-14 lg:py-12">
          <div className="min-w-0 space-y-8">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="border-b border-[#dfe8df] pb-3 text-xl font-medium text-charcoal">
                  {section.heading}
                </h2>
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-gray-700">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="bg-[#eef3ee] text-charcoal">
                          {section.table.headings.map((heading) => (
                            <th key={heading} scope="col" className="border border-gray-300 px-3 py-2.5 text-xs font-semibold">
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, index) => (
                          <tr key={`${row[0]}-${index}`} className="odd:bg-white even:bg-[#fafbf9]">
                            {row.map((cell, cellIndex) => (
                              <td key={`${cell}-${cellIndex}`} className="border border-gray-300 px-3 py-2.5 leading-relaxed text-gray-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            <div className="border-l-4 border-[#233623] bg-[#f7f8f6] p-5">
              <h2 className="font-medium text-charcoal">Source</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                Guidance on this page is based on the linked official University of Swat admissions sources.
              </p>
              <a
                href={guide.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#233623] hover:underline"
              >
                View official source <ExternalLink aria-hidden="true" size={15} />
              </a>
            </div>
          </div>

          <aside className="h-fit border border-gray-200 bg-[#f7f8f6] p-5">
            <h2 className="text-lg font-medium text-charcoal">Related links</h2>
            <ul className="mt-3 divide-y divide-gray-200">
              {guide.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 py-3 text-sm font-medium leading-relaxed text-[#233623] transition-colors hover:text-[#1a2a1a]"
                  >
                    {link.label}
                    <ArrowUpRight aria-hidden="true" size={15} className="mt-0.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 border-t border-gray-200 pt-5">
              {[
                { label: "How to apply", href: "/admissions/guide/how-to-apply" },
                { label: "Entry test subjects", href: "/admissions/guide/test-subjects" },
                { label: "Test exemption", href: "/admissions/guide/test-exemption" },
                { label: "Important dates", href: "/admissions/guide/important-dates" },
              ]
                .filter((item) => item.href !== `/admissions/guide/${topic}`)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={`${item.href}${admissionLevel ? `?level=${admissionLevel}` : ""}`}
                    className="flex items-center justify-between border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-[#233623] transition-colors hover:border-[#233623]"
                  >
                    {item.label} <ArrowUpRight aria-hidden="true" size={14} />
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </article>
    </InnerPageLayout>
  );
}
