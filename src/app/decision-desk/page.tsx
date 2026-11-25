import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { getAllPrograms } from "@/data/departments";

export const metadata: Metadata = { title: "Admission Decision Desk | University of Swat" };

export default function DecisionDeskPage({ searchParams }: { searchParams: Promise<{ level?: string; program?: string }> }) {
  return <DecisionDesk searchParams={searchParams} />;
}

async function DecisionDesk({ searchParams }: { searchParams: Promise<{ level?: string; program?: string }> }) {
  const params = await searchParams;
  const level = params.level || "Undergraduate";
  const programs = getAllPrograms().filter((program) => level === "Undergraduate" ? program.level === "Undergraduate" : level === "MS/MPhil" ? program.level === "MS/MPhil" : program.level === "PhD");
  const selected = programs.find((program) => program.slug === params.program) || programs[0];

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Admission shortcut</p>
        <h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">One-Screen Decision Desk</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Choose a study level and program to view a quick eligibility, fee, and application summary.</p>

        <div className="mt-8 border border-[#e7e5df] bg-[#f7f7f5] p-5">
          <form className="grid gap-4 md:grid-cols-3">
            <label className="text-sm font-medium text-charcoal">Study level
              <select name="level" defaultValue={level} className="mt-2 w-full border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand">
                <option>Undergraduate</option><option>MS/MPhil</option><option>PhD</option>
              </select>
            </label>
            <label className="text-sm font-medium text-charcoal">Program
              <select name="program" defaultValue={selected?.slug} className="mt-2 w-full border border-gray-200 bg-white px-4 py-3 font-normal outline-none focus:border-brand">
                {programs.map((program) => <option key={program.slug} value={program.slug}>{program.name}</option>)}
              </select>
            </label>
            <button type="submit" className="mt-auto bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-hover">View Decision Summary</button>
          </form>
        </div>

        {selected && (
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <article className="border border-[#e7e5df] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Selected program</p><h2 className="mt-3 text-2xl font-medium text-charcoal">{selected.name}</h2><p className="mt-2 text-sm text-gray-600">{selected.departmentName}</p></article>
            <article className="border border-[#e7e5df] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Eligibility snapshot</p><p className="mt-3 leading-7 text-gray-700">HSSC or equivalent for undergraduate study; relevant graduate qualification for MS/MPhil; and an MS/MPhil degree or equivalent for PhD, subject to current university rules.</p></article>
            <article className="border border-[#e7e5df] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Next step</p><p className="mt-3 leading-7 text-gray-700">Confirm the current fee challan and merit-list notice before applying.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/apply" className="bg-brand px-4 py-2.5 text-sm font-medium text-white hover:bg-brand-hover">Apply Now</Link><Link href={`/admissions/program/${selected.departmentId}/${selected.slug}`} className="border border-brand px-4 py-2.5 text-sm font-medium text-brand hover:bg-brand/5">Program Details</Link></div></article>
          </div>
        )}
      </section>
    </InnerPageLayout>
  );
}
