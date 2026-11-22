import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { FACULTIES } from "@/data/faculties";

export const metadata = {
  title: "Faculties & Departments | University of Swat",
  description:
    "Explore University of Swat faculties, academic departments, and their degree programs.",
};

export default function FacultiesPage() {
  const departmentCount = FACULTIES.reduce((count, faculty) => count + faculty.departments.length, 0);

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Academic community
            </p>
            <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
              Faculties &amp; Departments
            </h1>
            <p className="leading-relaxed text-gray-600">
              Explore the University of Swat&apos;s academic groups and the teaching departments
              represented in the university directory.
            </p>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            Browse programs <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="mb-8 grid grid-cols-2 border-y border-gray-200 py-5 sm:grid-cols-3">
          <div>
            <span className="block text-3xl font-light text-[#233623]">{FACULTIES.length}</span>
            <span className="mt-1 block text-xs uppercase tracking-wider text-gray-500">
              Academic groups
            </span>
          </div>
          <div>
            <span className="block text-3xl font-light text-[#233623]">{departmentCount}</span>
            <span className="mt-1 block text-xs uppercase tracking-wider text-gray-500">
              Directory entries
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FACULTIES.map((faculty, index) => (
            <article
              key={faculty.id}
              className="flex flex-col border border-gray-200 bg-white transition-all duration-300 hover:border-brand hover:shadow-[0_12px_30px_rgba(35,54,35,0.08)]"
            >
              <div className="flex items-start gap-4 border-b border-gray-100 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#f7f7f5] text-brand">
                  <BookOpen aria-hidden="true" size={19} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                    Academic group {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 text-lg font-medium leading-snug text-charcoal">
                    {faculty.name}
                  </h2>
                </div>
              </div>
              <ul className="flex-1 divide-y divide-gray-100 px-5">
                {faculty.departments.map((department) => (
                  <li key={department.id}>
                    <Link
                      href={department.href}
                      className="group flex items-start justify-between gap-3 py-3 text-sm text-gray-600 transition-colors hover:text-brand"
                    >
                      <span>{department.name}</span>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={15}
                        className="mt-0.5 shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/departments"
                className="border-t border-gray-100 px-5 py-3 text-xs font-medium text-brand transition-colors hover:text-brand-hover"
              >
                View all departments
              </Link>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
