import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Campuses | University of Swat",
  description:
    "Find information about the University of Swat Main Campus, Women Campus, and Shangla Campus.",
};

const campuses = [
  {
    id: "main-campus",
    name: "Main Campus, Charbagh",
    category: "Main campus",
    description:
      "The main academic campus and administrative offices of the University of Swat are located in Charbagh, Swat.",
    image: "/class-picture.jpg",
    href: "https://uswat.edu.pk/maincampus/",
  },
  {
    id: "women-campus",
    name: "Women Campus",
    category: "Constituent campus",
    description:
      "The Women Campus brings academic opportunities closer to women students in Swat. Check the university's official updates for current programs and facilities.",
    image:
      "/uos/campus-detail.jpg",
    href: "https://uswat.edu.pk/women-campus/",
  },
  {
    id: "shangla-campus",
    name: "Shangla Campus",
    category: "Campus information",
    description:
      "The University of Swat publishes information about its Shangla Campus. Refer to the official campus page for current announcements and details.",
    image: "/uos/campus-main.jpg",
    href: "https://uswat.edu.pk/shangla-campus/",
  },
];

export default function CampusesPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            University of Swat
          </p>
          <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Our Campuses
          </h1>
          <p className="leading-relaxed text-gray-600">
            The university&apos;s academic community is based in Swat, with the Main Campus and
            administrative offices in Charbagh. Campus pages and announcements provide the latest
            information about each location.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {campuses.map((campus) => (
            <article
              id={campus.id}
              key={campus.name}
              className="group overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-brand hover:shadow-[0_14px_36px_rgba(35,54,35,0.1)]"
            >
              <div className="relative h-56 overflow-hidden bg-[#233623]">
                <Image
                  src={campus.image}
                  alt={campus.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/70 to-transparent" />
                <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                  {campus.category}
                </span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-medium text-charcoal">{campus.name}</h2>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-gray-600">
                  {campus.description}
                </p>
                {campus.name === "Main Campus, Charbagh" && (
                  <p className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <MapPin aria-hidden="true" size={16} className="text-brand" />
                    Charbagh, Swat, Khyber Pakhtunkhwa
                  </p>
                )}
                <Link
                  href={campus.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  Official campus information
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
