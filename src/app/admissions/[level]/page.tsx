import { notFound } from "next/navigation";
import { AdmissionRoadmapBahria } from "@/components/admissions/bahria-roadmap";
import {
  LEVEL_LABELS,
  ROADMAPS,
  type AdmissionLevel,
} from "@/data/bahria-admissions";

interface Props {
  params: Promise<{ level: string }>;
  searchParams: Promise<{ campus?: string }>;
}

const levels: Record<string, AdmissionLevel> = {
  undergraduate: "undergraduate",
  masters: "masters",
  phd: "phd",
};

export function generateStaticParams() {
  return Object.keys(levels).map((level) => ({ level }));
}

export async function generateMetadata({ params }: Props) {
  const { level } = await params;
  const admissionLevel = levels[level];
  return {
    title: admissionLevel
      ? `${LEVEL_LABELS[admissionLevel]} | University of Swat`
      : "Admissions | University of Swat",
  };
}

export default async function AdmissionLevelPage({ params, searchParams }: Props) {
  const { level } = await params;
  const { campus } = await searchParams;
  const admissionLevel = levels[level];
  if (!admissionLevel) notFound();

  const initialCampus = ROADMAPS[admissionLevel].some((item) => item.id === campus)
    ? campus
    : undefined;

  return <AdmissionRoadmapBahria level={admissionLevel} initialCampus={initialCampus} />;
}
