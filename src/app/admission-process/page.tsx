import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Admission Process | University of Swat" };

const steps = [
  ["01", "Explore Programs", "Review departments and academic pathways."],
  ["02", "Check Criteria", "Confirm level-specific eligibility and documents."],
  ["03", "Download Requirements", "Prepare academic records, CNIC and photographs."],
  ["04", "Apply Online", "Complete the guided frontend application journey."],
  ["05", "Track the Notice", "Follow merit lists and official fee announcements."],
  ["06", "Enroll", "Complete verification and fee submission through official channels."],
];

export default function AdmissionProcessPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Admission roadmap</p>
        <h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Admission Process</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Follow the six-step journey from program discovery to enrollment.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="border border-[#e7e5df] bg-white p-6 transition-all hover:border-brand hover:shadow-[0_12px_28px_rgba(35,54,35,.08)]"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center bg-[#233623] text-sm font-semibold text-white">{number}</span><h2 className="text-lg font-medium text-charcoal">{title}</h2></div><p className="mt-4 text-sm leading-6 text-gray-600">{text}</p></article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/apply" className="bg-brand px-5 py-3 text-sm font-medium text-white hover:bg-brand-hover">Start Application</Link><Link href="/admissions" className="border border-brand px-5 py-3 text-sm font-medium text-brand hover:bg-brand/5">View Admissions</Link></div>
      </section>
    </InnerPageLayout>
  );
}
