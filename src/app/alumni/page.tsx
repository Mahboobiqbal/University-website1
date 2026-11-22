import Link from "next/link";
import { ArrowRight, ExternalLink, GraduationCap, UsersRound } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Alumni | University of Swat",
  description:
    "Stay connected with the University of Swat Alumni Association and the university community.",
};

export default function AlumniPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              University of Swat Alumni Association
            </p>
            <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
              A community that continues beyond campus
            </h1>
            <p className="max-w-2xl leading-relaxed text-gray-600">
              Alumni are an enduring part of the University of Swat community. Keep in touch with
              the university, follow its official news, and explore opportunities to reconnect with
              fellow graduates.
            </p>
            <a
              href="https://www.facebook.com/universityofswat/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Follow official university updates <ExternalLink aria-hidden="true" size={16} />
            </a>
          </div>
          <div className="flex min-h-[300px] flex-col justify-between bg-[#233623] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12">
            <UsersRound aria-hidden="true" size={32} className="text-white/75" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Stay connected
              </p>
              <h2 className="mt-3 text-2xl font-light">Your university network</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Follow announcements, campus activities, and opportunities shared by the
                University of Swat.
              </p>
            </div>
          </div>
        </section>
        <section className="grid gap-4 border-t border-gray-200 px-6 py-8 sm:grid-cols-2 sm:px-10 lg:px-14">
          <Link
            href="/news"
            className="group flex items-center justify-between border border-gray-200 p-5 transition-colors hover:border-brand"
          >
            <span className="flex items-center gap-3">
              <GraduationCap aria-hidden="true" size={21} className="text-brand" />
              <span className="text-sm font-medium text-charcoal">University news</span>
            </span>
            <ArrowRight
              aria-hidden="true"
              size={17}
              className="text-brand transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center justify-between border border-gray-200 p-5 transition-colors hover:border-brand"
          >
            <span className="text-sm font-medium text-charcoal">Contact the university</span>
            <ArrowRight
              aria-hidden="true"
              size={17}
              className="text-brand transition-transform group-hover:translate-x-1"
            />
          </Link>
        </section>
      </article>
    </InnerPageLayout>
  );
}
