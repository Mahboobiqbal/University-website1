"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pb-20 pt-36 sm:px-8 lg:pt-44">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Something went wrong</p>
      <h1 className="mt-4 text-4xl font-light text-charcoal text-balance md:text-6xl">
        An unexpected error occurred
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-gray-600">
        We could not load this page. Please try again. If the problem continues, contact the
        University web team or return to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
        >
          <RotateCcw aria-hidden="true" size={16} />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-3 text-sm font-medium text-charcoal transition-colors hover:border-brand hover:text-brand"
        >
          <AlertTriangle aria-hidden="true" size={16} />
          Go to homepage
        </Link>
      </div>
    </section>
  );
}
