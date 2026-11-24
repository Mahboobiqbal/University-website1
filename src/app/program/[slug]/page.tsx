import { notFound } from "next/navigation";
import { getAllPrograms, getProgramBySlug } from "@/data/departments";
import { ProgramAbout } from "@/components/programs/program-about";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPrograms().map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) {
    return {
      title: "Program | University of Swat",
      description: "Academic program at the University of Swat.",
    };
  }
  return {
    title: `About ${program.name} | University of Swat`,
    description: `Learn about ${program.name} (${program.level}) offered by the ${program.departmentName} at University of Swat.`,
  };
}

export default async function SingularProgramAboutPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return <ProgramAbout program={program} />;
}
