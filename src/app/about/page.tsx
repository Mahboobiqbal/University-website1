import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Mountain } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ABOUT } from "@/data/home";
import { IMAGES } from "@/data/images";

export const metadata = {
  title: "About the University | University of Swat",
  description:
    "Learn about the University of Swat, its history, its role in the Swat Valley, and its academic community.",
};

const milestones = [
  {
    year: "2010",
    detail:
      "The establishment of the University of Swat was announced on May 29; the university formally came into existence in July.",
  },
  {
    year: "Today",
    detail:
      "The university's main academic campus and administrative offices are located in Charbagh, Swat.",
  },
];

export default function AboutPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              University of Swat
            </p>
            <h1 className="mb-6 text-4xl font-light text-charcoal text-balance md:text-5xl">
              {ABOUT.heading}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">{ABOUT.intro}</p>
            <Link
              href="/vice-chancellor"
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-brand pb-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              Read the Vice Chancellor&apos;s message
              <ArrowRight
                aria-hidden="true"
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
          <div className="relative min-h-[300px] bg-[#233623] sm:min-h-[420px]">
            <Image
              src={IMAGES.hero.fallback}
              alt="University of Swat campus in the Swat Valley"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/75 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 flex items-center gap-2 text-sm font-medium text-white sm:bottom-8 sm:left-8">
              <Mountain aria-hidden="true" size={18} />
              Located in the Swat Valley, Khyber Pakhtunkhwa
            </p>
          </div>
        </section>

        <section className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                Our story
              </p>
              <h2 className="mb-5 text-3xl font-light text-charcoal sm:text-4xl">
                Higher education in the heart of Swat
              </h2>
              <p className="leading-relaxed text-gray-600">
                The University of Swat is a public-sector university established to expand access to
                higher education for the people of Swat Valley and beyond. It began with seven
                disciplines and has grown into a multidisciplinary institution. Its academic and
                administrative center is the Main Campus at Charbagh.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="border-l-2 border-brand bg-[#f7f7f5] p-5">
                    <p className="text-sm font-semibold text-brand">{milestone.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {milestone.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="grid gap-4 self-start sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <Link
                href="/faculties"
                className="group flex items-center justify-between gap-5 border border-gray-200 p-6 transition-colors hover:border-brand"
              >
                <span className="flex items-center gap-4">
                  <BookOpen aria-hidden="true" className="text-brand" size={24} />
                  <span>
                    <span className="block font-medium text-charcoal">Academic departments</span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Browse faculties and study areas
                    </span>
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/campuses"
                className="group flex items-center justify-between gap-5 border border-gray-200 p-6 transition-colors hover:border-brand"
              >
                <span className="flex items-center gap-4">
                  <Building2 aria-hidden="true" className="text-brand" size={24} />
                  <span>
                    <span className="block font-medium text-charcoal">Our campuses</span>
                    <span className="mt-1 block text-sm text-gray-500">
                      Find campus information
                    </span>
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-brand transition-transform group-hover:translate-x-1"
                />
              </Link>
            </aside>
          </div>
        </section>
      </article>
    </InnerPageLayout>
  );
}
