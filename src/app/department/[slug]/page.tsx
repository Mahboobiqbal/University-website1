import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, FileText, ArrowLeft, Wallet, Info } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS, getDepartmentById, slugifyFacultyName, slugifyProgramName } from "@/data/departments";
import { getDepartmentFees, formatFee } from "@/data/department-fees";

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

  const fees = getDepartmentFees(dept.id, dept.programs);

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <Link
          href="/departments"
          className="inline-flex items-center gap-2 text-sm text-brand hover:text-charcoal transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> All Departments
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="relative w-full h-64 md:h-80 rounded-none border border-[#e7e5df] overflow-hidden mb-8">
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
                  <Link
                    key={p.name}
                    href={`/programs/${slugifyProgramName(p.name)}`}
                    className="group flex items-center justify-between gap-3 p-4 rounded-none border border-[#e7e5df] hover:border-brand hover:bg-[#fafaf8] transition-all"
                  >
                    <div>
                      <span className="text-sm font-medium text-charcoal group-hover:text-brand transition-colors">
                        {p.name}
                      </span>
                      <span className="block text-xs text-brand font-normal mt-0.5 opacity-80 group-hover:opacity-100">
                        About Program &rarr;
                      </span>
                    </div>
                    <span className="text-xs text-brand font-medium shrink-0 bg-brand/5 px-2.5 py-1 rounded-none border border-brand/20">
                      {p.level}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {fees.programs.length > 0 && (
            <section id="fee-structure" className="mb-10 scroll-mt-32">
              <h2 className="text-xl font-semibold text-charcoal mb-4 top-line">Fee Structure</h2>
              <div className="rounded-none border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8] overflow-hidden">
                <div className="flex items-start gap-3 px-4 py-4 border-b border-[#e7e5df] bg-white sm:px-5">
                  <Wallet className="w-4 h-4 text-brand shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-charcoal">
                      Tuition &amp; dues for {dept.name.replace(/^Department of |^Faculty of /, "")}
                    </p>
                    <p className="mt-1 flex items-start gap-1.5 text-xs text-gray-500 leading-relaxed">
                      <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                      {fees.note}
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-white text-xs uppercase tracking-wide text-gray-600">
                      <tr>
                        <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Program</th>
                        <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Level</th>
                        <th scope="col" className="px-4 py-3 font-semibold text-right sm:px-5">Admission Fee</th>
                        <th scope="col" className="px-4 py-3 font-semibold text-right sm:px-5">Per Semester</th>
                        <th scope="col" className="px-4 py-3 font-semibold text-right sm:px-5">Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e7e5df] bg-white">
                      {fees.programs.map((fee) => (
                        <tr key={`${fee.program}-${fee.level}`} className="hover:bg-[#fafaf8] transition-colors">
                          <td className="px-4 py-3.5 text-charcoal font-medium sm:px-5">
                            {fee.program}
                          </td>
                          <td className="px-4 py-3.5 sm:px-5">
                            <span className="inline-block border border-brand/20 bg-brand/5 px-2 py-0.5 text-xs text-brand">
                              {fee.level}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right text-gray-600 whitespace-nowrap sm:px-5">
                            {formatFee(fee.admissionFee)}
                          </td>
                          <td className="px-4 py-3.5 text-right text-gray-600 whitespace-nowrap sm:px-5">
                            {formatFee(fee.perSemesterFee)}
                          </td>
                          <td className="px-4 py-3.5 text-right font-semibold text-charcoal whitespace-nowrap sm:px-5">
                            {formatFee(fee.annualFee)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e7e5df] bg-white px-4 py-4 sm:px-5">
                  <p className="text-xs text-gray-500 max-w-md leading-relaxed">
                    One-time admission fee is payable at enrolment. Semester dues are charged twice a year.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-medium">
                    <a
                      href="https://uswat.edu.pk/fee-structure/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover"
                    >
                      Official fee page <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:admissions@uswat.edu.pk"
                      className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover"
                    >
                      Ask Admissions
                    </a>
                  </div>
                </div>
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
                    className="flex items-center gap-3 p-3 rounded-none border border-[#e7e5df] hover:border-brand hover:bg-[#fafaf8] transition-colors group"
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
                    className="group flex items-center gap-4 p-4 rounded-none border border-[#e7e5df] transition-all hover:border-brand hover:shadow-xs bg-white"
                  >
                    {member.image ? (
                      <div className="relative w-16 h-16 shrink-0 rounded-none border border-gray-200 overflow-hidden bg-gray-100">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          unoptimized={Boolean(member.image?.includes("uswat.edu.pk"))}
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 shrink-0 rounded-none border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-400 font-light text-xl">
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
          <div className="rounded-none border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8] p-6 lg:sticky lg:top-28 shadow-xs">
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
      </section>
    </InnerPageLayout>
  );
}
