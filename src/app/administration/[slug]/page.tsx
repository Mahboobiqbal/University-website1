import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import {
  ADMINISTRATION_ENTRIES,
  getAdministrationEntry,
} from "@/data/administration";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ADMINISTRATION_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const entry = getAdministrationEntry(slug);
  return {
    title: entry
      ? `${entry.label} | Administration | University of Swat`
      : "Administration | University of Swat",
    description: entry
      ? entry.summary
      : "University of Swat administration offices, directorates, and units.",
  };
}

export default async function AdministrationEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getAdministrationEntry(slug);
  if (!entry) notFound();

  return (
    <InnerPageLayout>
      <article className="bg-white">
        <div className="border-b border-gray-200 px-5 py-4 sm:px-8">
          <Link
            href="/administration"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to Administration
          </Link>
        </div>

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {entry.category}
          </p>
          <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            {entry.label}
          </h1>
          <p className="max-w-3xl leading-relaxed text-gray-600">
            {entry.summary}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
            <section className="border-t-2 border-brand pt-5">
              {entry.officer && (
                <div className="mb-8 flex items-center gap-5 border-b border-gray-200 pb-8">
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gray-100">
                    <Image
                      src={entry.officer.image}
                      alt={entry.officer.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                      Administrative Officer
                    </p>
                    <h2 className="mt-1 text-2xl font-medium text-charcoal">
                      {entry.officer.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">{entry.officer.title}</p>
                    {entry.officer.email && (
                      <a
                        href={`mailto:${entry.officer.email}`}
                        className="mt-2 inline-block text-sm text-brand hover:underline"
                      >
                        {entry.officer.email}
                      </a>
                    )}
                  </div>
                </div>
              )}

              {entry.message && (
                <div className="mb-8 border-l-4 border-brand bg-[#f7f7f5] px-6 py-5">
                  <h2 className="mb-3 text-xl font-medium text-charcoal">
                    Message to Students
                  </h2>
                  {entry.message.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mb-3 last:mb-0 text-sm leading-7 text-gray-700"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {entry.officer && (
                    <p className="mt-4 text-sm font-medium text-charcoal">
                      {entry.officer.name}, {entry.officer.title}
                    </p>
                  )}
                </div>
              )}

              <h2 className="mb-4 text-xl font-medium text-charcoal">
                Responsibilities
              </h2>
              <ul className="space-y-3">
                {entry.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-gray-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {entry.staff && (
                <section className="mt-8 border-t border-gray-200 pt-6">
                  <h2 className="mb-4 text-xl font-medium text-charcoal">Staff</h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {entry.staff.map((person) => (
                      <li
                        key={person}
                        className="border-l-2 border-brand/40 py-1 pl-3 text-sm text-gray-700"
                      >
                        {person}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </section>

            <aside className="h-fit border border-gray-200 bg-[#f7f7f5] p-6">
              <h2 className="mb-4 text-lg font-medium text-charcoal">
                Contact
              </h2>
              <a
                href={`mailto:${entry.contact?.email ?? "info@uswat.edu.pk"}`}
                className="flex gap-3 border-b border-gray-200 pb-4 text-sm text-gray-700 transition-colors hover:text-brand"
              >
                <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span className="break-all">{entry.contact?.email ?? "info@uswat.edu.pk"}</span>
              </a>
              <a
                href={`tel:${(entry.contact?.phone ?? "+92946949114").replace(/[^+\d]/g, "")}`}
                className="flex gap-3 py-4 text-sm text-gray-700 transition-colors hover:text-brand"
              >
                <Phone aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{entry.contact?.phone ?? "+92 946-949114–18"}</span>
              </a>
              <p className="border-t border-gray-200 pt-4 text-xs leading-relaxed text-gray-500">
                University of Swat, UoSm Campus, Main G.T. Road, Swat,
                Khyber Pakhtunkhwa, Pakistan.
              </p>
            </aside>
          </div>
        </section>
      </article>
    </InnerPageLayout>
  );
}
