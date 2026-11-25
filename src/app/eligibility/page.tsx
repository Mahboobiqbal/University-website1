import { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Eligibility Criteria | University of Swat" };

const levels = [
  ["Undergraduate / BS", "HSSC or equivalent qualification with required subject combination and an aggregate generally of at least 50%, subject to the current department and admissions notification."],
  ["MS / MPhil", "Relevant sixteen-year qualification or equivalent from an HEC-recognized institution, with required CGPA or percentage and entry-test requirements where applicable."],
  ["PhD", "Relevant MS/MPhil degree or equivalent, required CGPA, admission test or university interview, and availability of an HEC-approved supervisor."],
];

export default function EligibilityPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Admissions guidance</p><h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Eligibility Criteria</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">General guidance by study level. Final eligibility is determined by the current official admission notice and program scheme.</p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">{levels.map(([title, text]) => <article key={title} className="border border-[#e7e5df] border-t-2 border-t-brand p-6"><h2 className="text-xl font-medium text-charcoal">{title}</h2><p className="mt-4 text-sm leading-7 text-gray-600">{text}</p></article>)}</div>
      </section>
    </InnerPageLayout>
  );
}
