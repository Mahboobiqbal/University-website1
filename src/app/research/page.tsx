import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { RESEARCH } from "@/data/home";

export const metadata = {
  title: "Research and Innovation | University of Swat",
  description: "Research centers, journals and funded projects at University of Swat.",
};

export default function ResearchPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Knowledge into impact
          </p>
          <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
            {RESEARCH.heading}
          </h1>
          <p className="leading-relaxed text-gray-600">{RESEARCH.subtext}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {RESEARCH.cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="group relative block aspect-[4/3] overflow-hidden border border-gray-200 bg-[#233623]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/95 via-[#17231d]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <h2 className="text-lg font-medium leading-snug text-white">{card.title}</h2>
                <ArrowUpRight aria-hidden="true" size={18} className="mb-1 shrink-0 text-white" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}