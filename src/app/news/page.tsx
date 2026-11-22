import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { NEWS } from "@/data/home";

export const metadata = {
  title: "Newsroom | University of Swat",
  description: "Latest University of Swat news and official university updates.",
};

const articles = [NEWS.featured, ...NEWS.list];

export default function NewsPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Official updates
            </p>
            <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
              Newsroom
            </h1>
            <p className="leading-relaxed text-gray-600">
              Stories and announcements from the University of Swat. Visit the source article for
              the full official update.
            </p>
          </div>
          <a
            href="https://uswat.edu.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            Official university website <ExternalLink aria-hidden="true" size={15} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.href}
              className="group flex h-full flex-col overflow-hidden border border-gray-200 transition-all duration-300 hover:border-brand hover:shadow-[0_12px_30px_rgba(35,54,35,0.08)]"
            >
              <Link href={article.href} className="relative block h-52 overflow-hidden bg-[#233623]">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-brand">
                  {article.date} {article.month}
                </span>
                <h2 className="mt-3 text-lg font-medium leading-snug text-charcoal transition-colors group-hover:text-brand">
                  <Link href={article.href}>{article.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand"
                  >
                    Read story <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                  <a
                    href={article.officialHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read official source for ${article.title}`}
                    className="text-gray-500 transition-colors hover:text-brand"
                  >
                    <ExternalLink aria-hidden="true" size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
