import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Event Gallery | University of Swat" };

const events = [
  ["University seminar and academic engagement", "/uos/seminar.jpg", "SEMINAR"],
  ["Student and faculty campus event", "/uos/convocation.jpg", "STUDENT LIFE"],
  ["Academic council and faculty session", "/uos/academic-council.jpg", "ACADEMIC"],
];

export default function EventGalleryPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Campus events</p><h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Event Gallery</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{events.map(([title, src, label]) => <Link key={title} href="/events" className="group overflow-hidden border border-[#e7e5df]"><div className="relative h-64 overflow-hidden"><Image src={src} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-xs font-semibold text-brand">{label}</p><h2 className="mt-2 text-lg font-medium text-charcoal group-hover:text-brand">{title}</h2></div></Link>)}</div>
      </section>
    </InnerPageLayout>
  );
}
