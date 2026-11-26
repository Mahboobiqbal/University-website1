import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export function generateStaticParams() { return [{ campus: "main" }, { campus: "women" }]; }

export async function generateMetadata({ params }: { params: Promise<{ campus: string }> }): Promise<Metadata> {
  const { campus } = await params;
  return { title: `${campus === "women" ? "Women's Campus" : "Main Campus"} | University of Swat` };
}

export default async function CampusDetailPage({ params }: { params: Promise<{ campus: string }> }) {
  const { campus } = await params;
  if (campus !== "main" && campus !== "women") notFound();
  const women = campus === "women";

  return (
    <InnerPageLayout>
      <section className="bg-[#233623] px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-12">
        <Link href="/campuses" className="text-sm text-white/75 hover:text-white">&larr; All Campuses</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#b9d2bd]">University of Swat</p>
        <h1 className="mt-3 text-4xl font-light md:text-5xl">{women ? "Women’s Campus" : "Main Campus, Charbagh"}</h1>
        <p className="mt-4 max-w-3xl leading-7 text-white/80">{women ? "A dedicated University of Swat campus providing academic opportunities, campus services and support for women students." : "The primary academic and administrative campus of the University of Swat, located in Charbagh, Swat."}</p>
      </section>
      <section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <div className="relative aspect-[16/7] overflow-hidden border border-[#e7e5df]"><Image src={women ? "/uos/campus-detail.jpg" : "/uos/campus-main.jpg"} alt={women ? "Women's Campus" : "Main Campus"} fill priority sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover" /></div>
            <h2 className="mt-8 text-2xl font-medium text-charcoal">Campus Overview</h2>
            <p className="mt-4 leading-7 text-gray-600">{women ? "Women’s Campus offers selected undergraduate programs and campus facilities for women students. Program availability may follow the latest University of Swat admissions notification." : "Main Campus is the central location for major faculties, administration, teaching blocks, examinations, ORIC, libraries and student services."}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[(women ? "Women Students" : "Major Faculties"), (women ? "Dedicated Campus Services" : "Administrative Offices"), (women ? "Academic Programs" : "Research & ORIC"), (women ? "Campus Facilities" : "Libraries & Sports")].map((item) => <article key={item} className="border border-[#e7e5df] p-5"><h3 className="font-medium text-charcoal">{item}</h3><p className="mt-2 text-sm leading-6 text-gray-600">Explore services and academic facilities available at this campus.</p></article>)}
            </div>
          </div>
          <aside className="h-fit border border-[#e7e5df] border-t-2 border-t-brand p-6 lg:sticky lg:top-28"><h2 className="text-lg font-medium text-charcoal">Campus Quick Links</h2><div className="mt-5 space-y-3"><Link href="/departments" className="block border-b border-[#e7e5df] pb-3 text-sm font-medium text-brand">Departments &rarr;</Link><Link href="/admissions" className="block border-b border-[#e7e5df] pb-3 text-sm font-medium text-brand">Admissions &rarr;</Link><Link href="/apply" className="block border-b border-[#e7e5df] pb-3 text-sm font-medium text-brand">Apply Now &rarr;</Link><Link href="/contact" className="block text-sm font-medium text-brand">Contact &rarr;</Link></div></aside>
        </div>
      </section>
    </InnerPageLayout>
  );
}
