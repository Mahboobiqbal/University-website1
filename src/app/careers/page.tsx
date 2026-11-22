import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, ExternalLink } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Careers | University of Swat",
  description:
    "Find official University of Swat job advertisements and application information.",
};

export default function CareersPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Work with us
            </p>
            <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
              Careers at the University of Swat
            </h1>
            <p className="max-w-2xl leading-relaxed text-gray-600">
              The university publishes vacancies, eligibility criteria, deadlines, and application
              instructions through its official announcements. Check the latest notice before
              submitting an application.
            </p>
            <a
              href="https://uswat.edu.pk/category/jobs/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Browse official job notices <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="flex min-h-[280px] flex-col justify-between bg-[#233623] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12">
            <BriefcaseBusiness aria-hidden="true" size={30} className="text-white/75" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Recruitment information
              </p>
              <h2 className="mt-3 text-2xl font-light">Follow the official notice</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Recruitment requirements and submission procedures vary by position. Refer to the
                specific vacancy announcement for accurate details.
              </p>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 px-6 py-8 sm:px-10 lg:px-14">
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
        </section>
      </article>
    </InnerPageLayout>
  );
}
