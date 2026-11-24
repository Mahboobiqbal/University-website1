import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Error 404</p>
      <h1 className="mt-4 text-4xl font-light text-charcoal text-balance md:text-6xl">
        This page could not be found
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
        The page you are looking for may have moved, been renamed, or never existed. You can return
        to the homepage or search the University of Swat website.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          <ArrowLeft aria-hidden="true" size={16} />
          Back to homepage
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
        >
          <Search aria-hidden="true" size={16} />
          Search the website
        </Link>
      </div>
    </section>
  );
}
