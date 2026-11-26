import Link from "next/link";
import { ArrowUpRight, Clock3, LibraryBig, Mail } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Central Library | University of Swat",
  description:
    "Contact the University of Swat Central Library for research support, borrowing, and library services.",
};

export default function LibraryPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Academic resources
            </p>
            <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
              Central Library
            </h1>
            <p className="max-w-2xl leading-relaxed text-gray-600">
              The Central Library supports learning and research at the University of Swat. The
              university lists library staff and contact details through its official library
              office page.
            </p>
          </div>
          <aside className="flex flex-col justify-between bg-[#233623] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12">
            <LibraryBig aria-hidden="true" size={32} className="text-white/75" />
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Central Library Office
              </p>
              <h2 className="mt-3 text-2xl font-light">Main Campus, Charbagh</h2>
              <a
                href="mailto:librarian@uswat.edu.pk"
                className="mt-5 inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" size={16} />
                librarian@uswat.edu.pk
              </a>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/75">
                <Clock3 aria-hidden="true" size={16} />
                Monday–Friday, 8:30 AM–4:30 PM
              </p>
            </div>
            <a
              href="https://uswat.edu.pk/central-library-office/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border-t border-white/20 pt-5 text-sm text-white/85 transition-colors hover:text-white"
            >
              Library staff and official information <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </aside>
        </section>
        <section className="border-t border-gray-200 px-6 py-7 sm:px-10 lg:px-14">
          <Link
            href="/downloads"
            className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            Browse department curricula and documents
          </Link>
        </section>
      </article>
    </InnerPageLayout>
  );
}
