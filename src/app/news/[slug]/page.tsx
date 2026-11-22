import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { NEWS } from "@/data/home";

const articles = [NEWS.featured, ...NEWS.list];

interface NewsDetailProps {
  params: Promise<{ slug: string }>;
}

function getArticle(slug: string) {
  return articles.find((article) => article.href === `/news/${slug}`);
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.href.split("/").pop() || "" }));
}

export async function generateMetadata({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article ? `${article.title} | University of Swat` : "News | University of Swat",
    description: article?.excerpt || "Official news and updates from the University of Swat.",
  };
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <InnerPageLayout>
      <article className="bg-white">
        <div className="relative min-h-[280px] bg-[#233623] sm:min-h-[420px]">
          <Image
            src={article.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/90 via-[#17231d]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1000px] px-6 pb-8 text-white sm:px-10 sm:pb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              University news · {article.date} {article.month}
            </p>
            <h1 className="max-w-4xl text-3xl font-light leading-tight text-balance sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
        <div className="mx-auto max-w-[900px] px-6 py-10 sm:px-10 lg:py-14">
          <p className="text-lg leading-relaxed text-gray-700">{article.excerpt}</p>
          <p className="mt-5 leading-relaxed text-gray-600">
            This summary is provided for University of Swat website visitors. Please refer to the
            official source for the full announcement and any additional information.
          </p>
          <a
            href={article.officialHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            View the official article <ExternalLink aria-hidden="true" size={16} />
          </a>
          <div className="mt-10 border-t border-gray-200 pt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Back to newsroom
            </Link>
          </div>
        </div>
      </article>
    </InnerPageLayout>
  );
}
