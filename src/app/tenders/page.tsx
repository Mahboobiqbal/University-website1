import { ArrowUpRight, FileText } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ANNOUNCEMENTS } from "@/data/home";

export const metadata = {
  title: "Tenders | University of Swat",
  description:
    "Browse University of Swat tender notices and verify procurement details on the official website.",
};

export default function TendersPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Procurement
          </p>
          <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Tender Notices
          </h1>
          <p className="leading-relaxed text-gray-600">
            Check the official tender listing for complete documents, amendments, deadlines, and
            submission requirements. The summary links below open the university&apos;s published
            notices.
          </p>
        </div>
        <div className="grid gap-3">
          {ANNOUNCEMENTS.tenders.map((notice) => (
            <a
              key={`${notice.title}-${notice.date}`}
              href={notice.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 border border-gray-200 p-5 transition-colors hover:border-brand"
            >
              <FileText aria-hidden="true" size={20} className="mt-0.5 shrink-0 text-brand" />
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-charcoal transition-colors group-hover:text-brand">
                  {notice.title}
                </span>
                <span className="mt-2 block text-xs text-gray-500">{notice.date}</span>
              </span>
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-brand" />
            </a>
          ))}
        </div>
        <p className="mt-6 border-l-2 border-brand bg-[#f7f7f5] p-4 text-sm leading-relaxed text-gray-600">
          Notice summaries may not reflect amendments or closing dates. Always verify the latest
          tender documents on the official University of Swat website.
        </p>
      </section>
    </InnerPageLayout>
  );
}
