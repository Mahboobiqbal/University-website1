import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { VC_MESSAGE } from "@/data/home";

export const metadata = {
  title: "Vice Chancellor's Message | University of Swat",
  description: `Message from ${VC_MESSAGE.name}, Vice Chancellor of the University of Swat.`,
};

export default function ViceChancellorPage() {
  return (
    <InnerPageLayout>
      <article className="grid bg-white lg:grid-cols-12">
        <div className="relative min-h-[360px] bg-[#233623] sm:min-h-[500px] lg:col-span-5 lg:min-h-[650px]">
          <Image
            src={VC_MESSAGE.portrait}
            alt={VC_MESSAGE.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/85 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-xl font-medium">{VC_MESSAGE.name}</p>
            <p className="mt-1 text-sm text-white/75">{VC_MESSAGE.title}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:col-span-7 lg:px-14 lg:py-16">
          <Quote aria-hidden="true" size={30} className="mb-6 text-brand" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            A message from university leadership
          </p>
          <h1 className="mb-6 text-4xl font-light text-charcoal text-balance md:text-5xl">
            {VC_MESSAGE.heading}
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">{VC_MESSAGE.excerpt}</p>
          <p className="mt-5 leading-relaxed text-gray-600">
            The University of Swat aims to grow as a center of academic excellence, research, and
            community engagement. The full message and current university updates are available
            through the official website.
          </p>
          <a
            href="https://uswat.edu.pk/vice-chancellors-message-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
          >
            Read the official message <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </article>
    </InnerPageLayout>
  );
}
