import { notFound } from "next/navigation";
import { ProgrammeDetailBahria } from "@/components/admissions/bahria-programme-detail";
import { getProgramme, ROADMAPS, type AdmissionLevel } from "@/data/bahria-admissions";

interface Props {
  params: Promise<{ level: string; campus: string; programme: string }>;
}

const levels: Record<string, AdmissionLevel> = {
  undergraduate: "undergraduate",
  masters: "masters",
  phd: "phd",
};

export function generateStaticParams() {
  return (Object.keys(levels) as AdmissionLevel[]).flatMap((level) =>
    ROADMAPS[level].flatMap((campus) =>
      campus.groups.flatMap((group) =>
        group.programmes.map((programme) => ({
          level,
          campus: campus.id,
          programme: programme.slug,
        }))
      )
    )
  );
}

export async function generateMetadata({ params }: Props) {
  const { level, campus, programme } = await params;
  const admissionLevel = levels[level];
  const item = admissionLevel ? getProgramme(admissionLevel, campus, programme) : undefined;
  return {
    title: item ? `${item.programme.name} Admissions | University of Swat` : "Programme Admissions | University of Swat",
  };
}

export default async function ProgrammeDetailPage({ params }: Props) {
  const { level, campus, programme } = await params;
  const admissionLevel = levels[level];
  const item = admissionLevel ? getProgramme(admissionLevel, campus, programme) : undefined;
  if (!item) notFound();

  return (
    <ProgrammeDetailBahria
      level={admissionLevel}
      campus={item.campus}
      group={item.group}
      programme={item.programme}
    />
  );
}
