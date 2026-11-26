import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS } from "@/data/departments";

export const metadata: Metadata = { title: "Fee Structure | University of Swat" };

export default function FeeStructurePage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Admissions information</p><h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Fee Structure</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Select a department and open its official degree-program fee overview. Confirm the current challan and notification before payment.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{DEPARTMENTS.map((department) => <Link key={department.id} href={`/department/${department.id}#fee-structure`} className="group border border-[#e7e5df] p-5 transition-all hover:border-brand hover:shadow-[0_12px_28px_rgba(35,54,35,.08)]"><h2 className="text-lg font-medium text-charcoal group-hover:text-brand">{department.name}</h2><p className="mt-3 text-sm font-medium text-brand">View fee structure &rarr;</p></Link>)}</div>
      </section>
    </InnerPageLayout>
  );
}
