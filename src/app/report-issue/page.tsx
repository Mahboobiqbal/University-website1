import Link from "next/link";
import { ArrowRight, Flag } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Report an Issue | University of Swat",
  description:
    "Report a technical issue, broken link, or incorrect content on the University of Swat website.",
};

export default function ReportIssuePage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="px-6 py-12 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 text-brand">
            <Flag aria-hidden="true" size={20} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Website support
            </p>
          </div>
          <h1 className="mt-4 mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Report an issue
          </h1>
          <p className="max-w-2xl leading-relaxed text-gray-600">
            If you have found a broken link, incorrect information, a
            misbehaving page, or any other problem on this website, please let
            us know. Include the page address, what you expected to see, and
            what actually happened.
          </p>

          <div className="mt-10 max-w-2xl border border-gray-200 bg-[#f7f7f5] p-6">
            <h2 className="text-lg font-medium text-charcoal">How to report</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-600">
              <li>
                <span className="font-medium text-charcoal">Email:</span>{" "}
                info@uswat.edu.pk
              </li>
              <li>
                <span className="font-medium text-charcoal">Phone:</span> +92
                946-949114–18
              </li>
              <li>
                <span className="font-medium text-charcoal">In person:</span>{" "}
                University of Swat, UoSm Campus, Main G.T. Road, Swat
              </li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              Contact the university
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/complaints"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              Submit a formal complaint
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </article>
    </InnerPageLayout>
  );
}
