import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { EVENTS } from "@/data/home";

export const metadata = {
  title: "Events | University of Swat",
  description: "Upcoming events at University of Swat.",
};

export default function EventsPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Campus life
            </p>
            <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
              {EVENTS.heading}
            </h1>
            <p className="leading-relaxed text-gray-600">
              Browse event listings shared by the University of Swat. Dates and schedules may
              change; follow the official notice for the latest information.
            </p>
          </div>
          <a
            href="https://uswat.edu.pk/category/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            Official event notices <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.items.map((event) => (
            <article
              key={event.href}
              className="group overflow-hidden border border-gray-200 transition-all duration-300 hover:border-brand hover:shadow-[0_12px_30px_rgba(35,54,35,0.08)]"
            >
              <Link href={event.href} className="relative block h-52 overflow-hidden bg-[#233623]">
                <Image
                  src={event.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex min-w-14 flex-col items-center bg-white px-3 py-2 text-[#233623] shadow-sm">
                  <span className="text-2xl font-light leading-none">{event.day}</span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider">
                    {event.month}
                  </span>
                </span>
              </Link>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-brand">
                  {event.month} {event.year}
                </p>
                <h2 className="mt-3 text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-brand">
                  <Link href={event.href}>{event.title}</Link>
                </h2>
                <Link
                  href={event.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand"
                >
                  Event information <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
