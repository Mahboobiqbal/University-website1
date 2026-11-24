import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ADMISSION_INFO, type AdmissionTopic } from "@/data/admissions";

interface Props {
  params: Promise<{ topic: string }>;
}

const topics = Object.keys(ADMISSION_INFO) as AdmissionTopic[];

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props) {
  const { topic } = await params;
  const page = ADMISSION_INFO[topic as AdmissionTopic];
  return {
    title: page ? `${page.title} | University of Swat` : "Admissions | University of Swat",
  };
}

export default async function AdmissionInformationPage({ params }: Props) {
  const { topic } = await params;
  const page = ADMISSION_INFO[topic as AdmissionTopic];
  if (!page) notFound();

  return (
    <InnerPageLayout>
      <article className="bg-white">
        <header className="bg-[#233623] px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-14">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Admissions
          </Link>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
            University of Swat
          </p>
          <h1 className="mt-3 text-3xl font-light sm:text-4xl">{page.title}</h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">{page.intro}</p>
        </header>

        <div className="grid gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1fr_320px] lg:px-14 lg:py-12">
          <section>
            <h2 className="text-xl font-medium text-charcoal">What applicants should know</h2>
            <ul className="mt-5 space-y-3">
              {page.details.map((detail) => (
                <li
                  key={detail}
                  className="border-l-2 border-brand bg-[#f7f8f6] px-4 py-3 leading-relaxed text-gray-700"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          <aside className="h-fit border border-gray-200 bg-white p-5">
            <h2 className="text-lg font-medium text-charcoal">Official resources</h2>
            <ul className="mt-3 divide-y divide-gray-200">
              {page.links.map((resource) => {
                const isEmail = resource.href.startsWith("mailto:");
                return (
                  <li key={resource.href}>
                    <a
                      href={resource.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      className="flex items-start gap-3 py-3 text-sm font-medium leading-relaxed text-brand transition-colors hover:text-brand-hover"
                    >
                      {isEmail ? (
                        <Mail aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
                      ) : (
                        <ArrowUpRight aria-hidden="true" size={16} className="mt-0.5 shrink-0" />
                      )}
                      {resource.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </article>
    </InnerPageLayout>
  );
}
