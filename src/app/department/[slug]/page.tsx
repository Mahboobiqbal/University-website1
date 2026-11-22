import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, FileText, ArrowLeft } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS, getDepartmentById } from "@/data/departments";
import { slugifyFacultyName } from "@/data/departments";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return DEPARTMENTS.map((dept) => ({ slug: dept.id }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartmentById(slug);
  return {
    title: dept ? `${dept.name} | University of Swat` : "Department | University of Swat",
    description: dept?.description.slice(0, 155) || "Department at University of Swat.",
  };
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const dept = getDepartmentById(slug);
  if (!dept) notFound();

  return (
    <InnerPageLayout>
      <Link
        href="/departments"
        className="inline-flex items-center gap-2 text-sm text-brand hover:text-charcoal transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> All Departments
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src={dept.image}
              alt={dept.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          <p className="text-xs font-medium text-brand uppercase tracking-wider mb-3">{dept.faculty}</p>
          <h1 className="text-3xl md:text-5xl font-light text-charcoal mb-6 text-balance">
            {dept.name}
          </h1>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-charcoal mb-3 top-line">Introduction</h2>
            <p className="text-gray-600 font-light leading-relaxed whitespace-pre-line">
              {dept.description}
            </p>
          </section>

          {dept.vision && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-3 top-line">Vision</h2>
              <p className="text-gray-600 font-light leading-relaxed">{dept.vision}</p>
            </section>
          )}

          {dept.mission && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-3 top-line">Mission</h2>
              <p className="text-gray-600 font-light leading-relaxed">{dept.mission}</p>
            </section>
          )}

          {dept.programs.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-4 top-line">Degree Programs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dept.programs.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between gap-3 p-4 rounded-lg border border-gray-200 hover:border-brand transition-colors"
                  >
                    <span className="text-sm font-medium text-charcoal">{p.name}</span>
                    <span className="text-xs text-brand font-medium shrink-0">{p.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {dept.curriculum.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-4 top-line">Curriculum</h2>
              <div className="space-y-2">
                {dept.curriculum.map((c) => (
                  <a
                    key={c.url}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand hover:bg-gray-50 transition-colors group"
                  >
                    <FileText className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-sm text-charcoal flex-1">{c.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {dept.facultyMembers.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-charcoal mb-4 top-line">Faculty Members</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dept.facultyMembers.map((member) => (
                  <div
                    key={member.name}
                    className="group flex items-center gap-4 p-4 rounded-lg border border-gray-200 transition-all hover:border-brand hover:shadow-sm"
                  >
                    {member.image ? (
                      <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden bg-gray-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-light text-xl">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <Link
                      href={`/faculty/${dept.id}/${slugifyFacultyName(member.name)}`}
                      className="min-w-0 flex-1"
                    >
                      <h3 className="text-sm font-medium text-charcoal group-hover:text-brand">{member.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{member.title}</p>
                    </Link>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="hidden text-xs text-brand hover:underline sm:block"
                        aria-label={`Email ${member.name}`}
                      >
                        Email
                      </a>
                    )}
                    <Link
                      href={`/faculty/${dept.id}/${slugifyFacultyName(member.name)}`}
                      aria-label={`View ${member.name} profile`}
                    >
                      <ArrowUpRight className="ml-auto w-4 h-4 shrink-0 text-gray-300 group-hover:text-brand" />
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold text-charcoal mb-5">Contact Information</h2>
            {dept.contact.office && (
              <div className="flex gap-3 mb-4">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 font-light">{dept.contact.office}</p>
              </div>
            )}
            {dept.contact.email && (
              <div className="flex gap-3 mb-4">
                <Mail className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <a
                  href={`mailto:${dept.contact.email}`}
                  className="text-sm text-brand hover:underline break-all"
                >
                  {dept.contact.email}
                </a>
              </div>
            )}
          </div>
        </aside>
      </div>
    </InnerPageLayout>
  );
}
