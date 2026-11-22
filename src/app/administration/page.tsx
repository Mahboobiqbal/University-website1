import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { NAVIGATION } from "@/data/navigation";

const administration = NAVIGATION.main.find((item) => item.label === "Administration");

export const metadata = {
  title: "Administration | University of Swat",
  description: "University offices, directorates, and student support services at the University of Swat.",
};

export default function AdministrationPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          University services
        </p>
        <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
          Administration
        </h1>
        <p className="mb-10 max-w-3xl leading-relaxed text-gray-600">
          Connect with the offices and services that support the University of Swat community.
          Select an area to find the related information.
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          {administration?.mega?.columns.map((column) => (
            <section key={column.heading} className="border-t-2 border-brand pt-5">
              <h2 className="mb-4 text-xl font-medium text-charcoal">{column.heading}</h2>
              <ul className="divide-y divide-gray-200">
                {column.links.map((item) => {
                  const external = "external" in item && item.external;
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-3 py-3 text-sm text-gray-700 transition-colors hover:text-brand"
                      >
                        {item.label}
                        {external ? (
                          <ArrowUpRight aria-hidden="true" size={15} className="shrink-0" />
                        ) : (
                          <ArrowRight
                            aria-hidden="true"
                            size={15}
                            className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
                          />
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
