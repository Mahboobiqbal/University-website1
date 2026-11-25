import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ANNOUNCEMENTS } from "@/data/home";

export const metadata: Metadata = { title: "Announcements | University of Swat" };

export default function AnnouncementsPage() {
  const all = [
    ...ANNOUNCEMENTS.announcements.map((item) => ({ ...item, category: "Announcement" })),
    ...ANNOUNCEMENTS.jobs.map((item) => ({ ...item, category: "Job" })),
    ...ANNOUNCEMENTS.tenders.map((item) => ({ ...item, category: "Tender" })),
  ];

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Official notices</p>
        <h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Announcements</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Admission updates, university events, career notices and tender announcements.</p>
        <div className="mt-8 divide-y divide-[#e7e5df] border-y border-[#e7e5df]">
          {all.map((item) => (
            <Link key={`${item.category}-${item.title}`} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group grid gap-3 py-5 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <div><span className="border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand">{item.category}</span><p className="mt-2 text-sm text-gray-500">{item.date}</p></div>
              <h2 className="text-lg font-medium text-charcoal group-hover:text-brand">{item.title}</h2>
              <span className="text-sm font-medium text-brand">View &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
