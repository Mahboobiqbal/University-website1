import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS } from "@/data/departments";

export const metadata = {
  title: "Downloads | University of Swat",
  description:
    "Browse available official department curricula and academic documents from the University of Swat.",
};

const curriculumFiles = DEPARTMENTS.flatMap((department) =>
  department.curriculum.map((file) => ({
    ...file,
    department: department.name,
  }))
);

export default function DownloadsPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Student resources
          </p>
          <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Downloads &amp; Documents
          </h1>
          <p className="leading-relaxed text-gray-600">
            Access the curriculum documents currently listed by University of Swat departments.
            Admission forms, policies, and other notices should be checked on the official
            university website.
          </p>
        </div>

        <div className="grid gap-3">
          {curriculumFiles.map((file) => (
            <a
              key={file.url}
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-gray-200 p-4 transition-colors hover:border-brand sm:p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#f7f7f5] text-brand transition-colors group-hover:bg-[#74201e]/10">
                <FileText aria-hidden="true" size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium text-charcoal transition-colors group-hover:text-brand">
                  {file.title}
                </span>
                <span className="mt-1 block truncate text-xs text-gray-500">{file.department}</span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>

        {curriculumFiles.length === 0 && (
          <p className="border border-gray-200 bg-[#f7f7f5] p-5 text-sm text-gray-600">
            No curriculum files are currently listed. Visit the official University of Swat website
            for current documents.
          </p>
        )}

        <div className="mt-8 border-t border-gray-200 pt-6">
          <Link
            href="/admissions"
            className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            View admissions information
          </Link>
        </div>
      </section>
    </InnerPageLayout>
  );
}
