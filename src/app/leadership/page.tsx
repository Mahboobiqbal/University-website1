import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Leadership | University of Swat" };

export default function LeadershipPage() {
  return (
    <InnerPageLayout>
      <section className="bg-[#233623] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b9d2bd]">University leadership</p><h1 className="mt-3 text-4xl font-light md:text-5xl">Prof. Dr. Husnul Amin</h1><p className="mt-2 text-lg text-white/75">Vice Chancellor</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]"><div className="relative aspect-[4/5] overflow-hidden border border-white/15"><Image src="/vc-leather-armchair.png" alt="Prof. Dr. Husnul Amin" fill className="object-cover object-top" /></div><div><p className="leading-8 text-white/85">It is with immense pride and responsibility that I serve the University of Swat at a pivotal moment in its journey. We remain committed to excellence, innovation, research, regional relevance and transformative education.</p><Link href="/vice-chancellor" className="mt-6 inline-flex border border-white/40 px-5 py-3 text-sm font-medium hover:bg-white hover:text-[#233623]">Read Full Message</Link></div></div>
      </section>
    </InnerPageLayout>
  );
}
