import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

const academicAreas = [
  {
    title: "Programs",
    description: "Explore undergraduate, graduate, and doctoral study options.",
    href: "/programs",
  },
  {
    title: "Faculties",
    description: "Browse the academic faculties and their areas of study.",
    href: "/faculties",
  },
  {
    title: "Departments",
    description: "Find teaching departments and their academic offerings.",
    href: "/departments",
  },
  {
    title: "Admissions",
    description: "Review admissions information and applicant resources.",
    href: "/admissions",
  },
];

export const metadata = {
  title: "Academics | University of Swat",
  description: "Explore faculties, departments, programs, and admissions at the University of Swat.",
};

export default function AcademicsPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Learning at Swat
        </p>
        <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
          Academics
        </h1>
        <p className="mb-10 max-w-3xl leading-relaxed text-gray-600">
          Discover the academic pathways, disciplines, and resources that support learning at the
          University of Swat.
        </p>
        <div className="grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2">
          {academicAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex min-h-44 flex-col justify-between bg-white p-6 transition-colors hover:bg-[#f7f8f6] sm:p-8"
            >
              <div>
                <h2 className="text-xl font-medium text-charcoal">{area.title}</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                  {area.description}
                </p>
              </div>
              <ArrowRight
                aria-hidden="true"
                size={18}
                className="mt-6 text-brand transition-transform group-hover:translate-x-1"
              />
            </Link>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
