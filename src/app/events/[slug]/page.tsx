import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { EVENTS } from "@/data/home";

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

function getEvent(slug: string) {
  return EVENTS.items.find((event) => event.href === `/events/${slug}`);
}

export function generateStaticParams() {
  return EVENTS.items.map((event) => ({ slug: event.href.split("/").pop() || "" }));
}

export async function generateMetadata({ params }: EventDetailProps) {
  const { slug } = await params;
  const event = getEvent(slug);
  return {
    title: event ? `${event.title} | University of Swat` : "Event | University of Swat",
    description: event
      ? `${event.title} — ${event.month} ${event.day}, ${event.year}.`
      : "University of Swat event information.",
  };
}

export default async function EventDetailPage({ params }: EventDetailProps) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <InnerPageLayout>
      <article className="bg-white">
        <div className="relative min-h-[280px] bg-[#233623] sm:min-h-[420px]">
          <Image
            src={event.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/90 via-[#17231d]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1000px] px-6 pb-8 text-white sm:px-10 sm:pb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              University event · {event.month} {event.day}, {event.year}
            </p>
            <h1 className="max-w-4xl text-3xl font-light leading-tight text-balance sm:text-4xl lg:text-5xl">
              {event.title}
            </h1>
          </div>
        </div>
        <div className="mx-auto max-w-[900px] px-6 py-10 sm:px-10 lg:py-14">
          <p className="text-lg leading-relaxed text-gray-700">
            This event listing is shared for reference. Please check the University of Swat&apos;s
            official event notices for the latest schedule, venue, registration details, or
            updates.
          </p>
          <a
            href="https://uswat.edu.pk/category/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            View official event notices <ExternalLink aria-hidden="true" size={16} />
          </a>
          <div className="mt-10 border-t border-gray-200 pt-6">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Back to events
            </Link>
          </div>
        </div>
      </article>
    </InnerPageLayout>
  );
}
