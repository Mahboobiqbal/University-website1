import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  Download,
  ExternalLink,
  Mail,
  Landmark,
  Microscope,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import {
  DEPARTMENTS,
  getFacultyMember,
  slugifyFacultyName,
} from "@/data/departments";

interface Props {
  params: Promise<{ department: string; member: string }>;
}

export function generateStaticParams() {
  return DEPARTMENTS.flatMap((department) =>
    department.facultyMembers.map((member) => ({
      department: department.id,
      member: slugifyFacultyName(member.name),
    }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { department, member } = await params;
  const profile = getFacultyMember(department, member);
  return {
    title: profile
      ? `${profile.member.name} | University of Swat`
      : "Faculty Profile | University of Swat",
    description: profile
      ? `${profile.member.name}, ${profile.member.title} in ${profile.department.name}.`
      : "University of Swat faculty profile.",
  };
}

export default async function FacultyProfilePage({ params }: Props) {
  const { department, member } = await params;
  const profile = getFacultyMember(department, member);
  if (!profile) notFound();

  const { department: dept, member: faculty } = profile;
  const initial = faculty.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s*/i, "").charAt(0);

  return (
    <InnerPageLayout>
      <article className="overflow-hidden bg-white">
        <div className="border-b border-gray-200 px-5 py-4 sm:px-8">
          <Link
            href={`/department/${dept.id}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to {dept.name}
          </Link>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr]">
          <aside className="border-b border-gray-200 p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-[#233623]">
              {faculty.image ? (
                <Image
                  src={faculty.image}
                  alt={faculty.name}
                  fill
                  priority
                  unoptimized={Boolean(faculty.image?.includes("uswat.edu.pk"))}
                  sizes="(max-width: 1024px) 280px, 320px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-6xl font-light text-white/75">
                  {initial}
                </div>
              )}
            </div>

            <div className="mx-auto mt-6 max-w-[280px] border-t border-gray-200">
              {faculty.email && (
                <a
                  href={`mailto:${faculty.email}`}
                  className="flex gap-3 border-b border-gray-200 py-4 text-sm text-gray-700 transition-colors hover:text-brand"
                >
                  <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                  <span>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Email
                    </span>
                    <span className="break-all">{faculty.email}</span>
                  </span>
                </a>
              )}
              {faculty.cvUrl ? (
                <Link
                  href={`/faculty/${dept.id}/${slugifyFacultyName(faculty.name)}/cv`}
                  className="flex items-center gap-3 border-b border-gray-200 py-4 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  <Download aria-hidden="true" size={16} className="shrink-0" />
                  <span>Download CV (PDF)</span>
                </Link>
              ) : (
                <div className="border-b border-gray-200 py-4 text-sm text-gray-500">
                  CV not available in the published faculty records.
                </div>
              )}
              <div className="flex gap-3 border-b border-gray-200 py-4 text-sm text-gray-700">
                <Building2 aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Office location
                  </span>
                  {dept.contact.office || "University of Swat"}
                </span>
              </div>
              <div className="flex gap-3 py-4 text-sm text-gray-700">
                <Landmark aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-brand" />
                <Link
                  href={`/department/${dept.id}`}
                  className="transition-colors hover:text-brand"
                >
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Department
                  </span>
                  {dept.name}
                </Link>
              </div>
            </div>
          </aside>

          <div className="px-5 py-8 sm:px-8 lg:px-10 lg:py-10 xl:px-12">
            <h1 className="text-3xl font-light text-charcoal text-balance sm:text-4xl xl:text-5xl">
              {faculty.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand">{faculty.title}</p>

            <div className="mt-8 grid border-y border-gray-200 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:border-gray-200 sm:pr-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Entity
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-charcoal">
                  University of Swat
                </p>
              </div>
              <div className="border-t border-gray-200 py-5 sm:border-t-0 sm:pl-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  Faculty / Division
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-charcoal">
                  {dept.faculty}
                </p>
                <p className="mt-1 text-sm text-gray-600">{dept.name}</p>
              </div>
            </div>

            <section className="mt-8">
              <h2 className="mb-3 text-xl font-medium text-charcoal">Profile Overview</h2>
              <p className="leading-relaxed text-gray-600">
                {faculty.name} is listed as <strong>{faculty.title}</strong> at the {dept.name},
                University of Swat. Individual biography details are not included in the published
                faculty records currently available.
              </p>
            </section>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <details open className="group border-b border-gray-200">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-lg font-medium text-charcoal sm:px-8">
              Research &amp; Publications
              <span className="text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid gap-8 px-5 pb-6 sm:grid-cols-2 sm:px-8">
              <section>
                <h3 className="flex items-center gap-2 font-medium text-charcoal">
                  <Microscope aria-hidden="true" size={17} className="text-brand" />
                  Research interests
                </h3>
                {faculty.researchInterests?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {faculty.researchInterests.map((interest) => (
                      <li
                        key={interest}
                        className="border border-gray-200 bg-[#f7f8f6] px-3 py-2 text-sm text-gray-700"
                      >
                        {interest}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Research interests have not been published in the available official profile data.
                  </p>
                )}
              </section>

              <section>
                <h3 className="font-medium text-charcoal">Selected publications</h3>
                {faculty.publications?.length ? (
                  <ul className="mt-3 space-y-3">
                    {faculty.publications.map((publication) => (
                      <li
                        key={`${publication.title}-${publication.year ?? ""}`}
                        className="border-l-2 border-brand pl-4 text-sm leading-relaxed text-gray-700"
                      >
                        {publication.url ? (
                          <a
                            href={publication.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-start gap-1 font-medium text-brand hover:underline"
                          >
                            {publication.title}
                            <ExternalLink aria-hidden="true" size={13} className="mt-1 shrink-0" />
                          </a>
                        ) : (
                          <span className="font-medium text-charcoal">{publication.title}</span>
                        )}
                        {publication.journal && (
                          <span className="block text-gray-600">{publication.journal}</span>
                        )}
                        {publication.year && (
                          <span className="block text-xs text-gray-500">{publication.year}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Publication records have not been published in the available official profile data.
                  </p>
                )}
              </section>
            </div>
          </details>

          <details open className="group border-b border-gray-200">
            <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-lg font-medium text-charcoal sm:px-8">
              Academic Position
              <span className="text-brand transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid gap-4 px-5 pb-6 sm:grid-cols-2 sm:px-8">
              <div>
                <p className="text-sm font-medium text-charcoal">{faculty.title}</p>
                <p className="mt-1 text-sm text-gray-500">{dept.name}</p>
              </div>
              {faculty.email && (
                <a href={`mailto:${faculty.email}`} className="text-sm text-brand hover:underline">
                  {faculty.email}
                </a>
              )}
            </div>
          </details>

          {dept.vision && (
            <details className="group border-b border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-lg font-medium text-charcoal sm:px-8">
                Department Vision
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-6 leading-relaxed text-gray-600 sm:px-8">{dept.vision}</p>
            </details>
          )}

          {dept.mission && (
            <details className="group border-b border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-lg font-medium text-charcoal sm:px-8">
                Department Mission
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="px-5 pb-6 leading-relaxed text-gray-600 sm:px-8">{dept.mission}</p>
            </details>
          )}

          {dept.programs.length > 0 && (
            <details className="group border-b border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 text-lg font-medium text-charcoal sm:px-8">
                Academic Programs
                <span className="text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="grid gap-2 px-5 pb-6 sm:grid-cols-2 sm:px-8">
                {dept.programs.map((program) => (
                  <Link
                    key={program.name}
                    href={`/programs?level=${program.level === "Undergraduate" ? "undergraduate" : program.level === "MS/MPhil" ? "ms-mphil" : "phd"}`}
                    className="flex items-center justify-between gap-3 border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-brand hover:text-brand"
                  >
                    <span>{program.name}</span>
                    <span className="text-xs text-gray-400">{program.level}</span>
                  </Link>
                ))}
              </div>
            </details>
          )}
        </div>
      </article>
    </InnerPageLayout>
  );
}
