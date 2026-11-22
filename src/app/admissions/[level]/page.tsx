import { notFound } from "next/navigation";
import {
  AdmissionRoadmap,
  type AdmissionLevel,
} from "@/components/admissions/admission-roadmap";

interface Props {
  params: Promise<{ level: string }>;
}

const levels: Record<string, AdmissionLevel> = {
  undergraduate: "Undergraduate",
  masters: "MS/MPhil",
  phd: "PhD",
};

export function generateStaticParams() {
  return [
    { level: "undergraduate" },
    { level: "masters" },
    { level: "phd" },
  ];
}

export async function generateMetadata({ params }: Props) {
  const { level } = await params;
  const admissionLevel = levels[level];
  return {
    title: admissionLevel
      ? `${admissionLevel} Admissions | University of Swat`
      : "Admissions | University of Swat",
  };
}

export default async function AdmissionLevelPage({ params }: Props) {
  const { level } = await params;
  const admissionLevel = levels[level];
  if (!admissionLevel) notFound();
  return <AdmissionRoadmap level={admissionLevel} />;
}
