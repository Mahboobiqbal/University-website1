import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { NAVIGATION } from "@/data/navigation";

const studentLife = NAVIGATION.main.find((item) => item.label === "Student Life");

const campusLinks = [
  { label: "Main Campus", href: "/campuses#main-campus" },
  { label: "Women Campus", href: "/campuses#women-campus" },
  { label: "Shangla Campus", href: "/campuses#shangla-campus" },
  { label: "Central Library", href: "/library" },
  { label: "Alumni Association", href: "/alumni" },
];

export const metadata = {
  title: "Student Life | University of Swat",
  description: "Explore campus life, student services, online resources, and university campuses.",
};

export default function StudentLifePage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          Campus and community
        </p>
        <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
          Student Life
        </h1>
        <p className="mb-10 max-w-3xl leading-relaxed text-gray-600">
          Find campus information and online resources for students and the wider University of
          Swat community.
        </p>
        <div className="grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 border-t-2 border-brand pt-5 text-xl font-medium text-charcoal">
              Campuses and community
            </h2>
            <ul className="divide-y divide-gray-200">
              {campusLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-3 text-sm text-gray-700 transition-colors hover:text-brand"
                  >
                    {item.label}
                    <ArrowRight aria-hidden="true" size={15} className="text-brand" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          {studentLife?.mega?.columns.map((column) => (
            <section key={column.heading}>
              <h2 className="mb-4 border-t-2 border-brand pt-5 text-xl font-medium text-charcoal">
                {column.heading}
              </h2>
              <ul className="divide-y divide-gray-200">
                {column.links.map((item) => {
                  const external = "external" in item && item.external;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between gap-3 py-3 text-sm text-gray-700 transition-colors hover:text-brand"
                      >
                        {item.label}
                        {external && (
                          <ArrowUpRight aria-hidden="true" size={15} className="shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
