import { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS, slugifyFacultyName } from "@/data/departments";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find an Expert | University of Swat",
  description: "Search University of Swat faculty and academic experts.",
};

export default function ExpertsPage({ searchParams }: { searchParams: Promise<{ q?: string; department?: string }> }) {
  return <ExpertsContent searchParams={searchParams} />;
}

async function ExpertsContent({ searchParams }: { searchParams: Promise<{ q?: string; department?: string }> }) {
  const params = await searchParams;
  const query = (params.q || "").toLowerCase().trim();
  const departmentFilter = params.department || "";
  const experts = DEPARTMENTS.flatMap((department) =>
    department.facultyMembers.map((member) => ({ department, member }))
  ).filter(({ department, member }) => {
    const text = `${member.name} ${member.title} ${department.name} ${member.researchInterests?.join(" ") || ""}`.toLowerCase();
    return (!query || text.includes(query)) && (!departmentFilter || department.id === departmentFilter);
  });

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Faculty directory</p>
        <h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Find an Expert</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Search University of Swat faculty by name, department, designation, or research interest.</p>

        <form className="mt-8 grid gap-3 rounded-none border border-[#e7e5df] bg-[#f7f7f5] p-4 md:grid-cols-[1fr_280px_auto]">
          <input name="q" defaultValue={params.q || ""} placeholder="Search name or research area" className="border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-brand" />
          <select name="department" defaultValue={departmentFilter} className="border border-gray-200 bg-white px-4 py-3 text-sm text-charcoal outline-none focus:border-brand">
            <option value="">All departments</option>
            {DEPARTMENTS.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
          </select>
          <button type="submit" className="bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover">Search Experts</button>
        </form>

        <div className="mt-8 flex items-center justify-between border-b border-[#e7e5df] pb-4">
          <p className="text-sm text-gray-600">{experts.length} faculty profile{experts.length === 1 ? "" : "s"} found</p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map(({ department, member }) => (
            <article key={`${department.id}-${member.name}`} className="group border border-[#e7e5df] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,.10)]">
              <Link href={`/faculty/${department.id}/${slugifyFacultyName(member.name)}`} className="block">
                <div className="relative h-56 overflow-hidden bg-[#233623]">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl font-light text-white/70">{member.name.charAt(0)}</div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{member.title}</p>
                  <h2 className="mt-2 text-xl font-medium text-charcoal group-hover:text-brand">{member.name}</h2>
                  <p className="mt-2 text-sm text-gray-600">{department.name}</p>
                  {(member.researchInterests?.length ?? 0) > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(member.researchInterests ?? []).slice(0, 3).map((interest) => <span key={interest} className="border border-brand/15 bg-brand/5 px-2 py-1 text-xs text-brand">{interest}</span>)}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
