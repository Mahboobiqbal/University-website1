import { Metadata } from "next";
import Image from "next/image";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Laboratories | University of Swat" };

const labs = [
  { name: "Programming & Software Engineering Lab", discipline: "Computer & Software Technology", image: "/uos/campus-detail.jpg", text: "Programming, software development, version control and testing facilities." },
  { name: "Networking & Systems Lab", discipline: "Computer & Software Technology", image: "/uos/academic-council.jpg", text: "Networking configuration, wireless systems and systems administration practice." },
  { name: "AI & Data Science Lab", discipline: "Computer & Software Technology", image: "/uos/campus-detail.jpg", text: "Machine learning, data analysis and intelligent systems project work." },
  { name: "Environmental Sciences Laboratory", discipline: "Environmental Sciences", image: "/uos/campus-main.jpg", text: "Field-to-laboratory workflow for water, soil and ecological analysis." },
  { name: "Language Resource Lab", discipline: "Languages & Humanities", image: "/uos/convocation.jpg", text: "Listening, speaking and digital language-learning facilities." },
];

export default function LaboratoriesPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Research & teaching</p>
        <h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">Laboratories & Facilities</h1>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">Explore academic laboratories supporting practical learning, research and project development at the University of Swat.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <article key={lab.name} className="group overflow-hidden border border-[#e7e5df] bg-white transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,.10)]">
              <div className="relative h-48 overflow-hidden"><Image src={lab.image} alt={lab.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-5"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">{lab.discipline}</p><h2 className="mt-2 text-xl font-medium text-charcoal">{lab.name}</h2><p className="mt-3 text-sm leading-6 text-gray-600">{lab.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </InnerPageLayout>
  );
}
