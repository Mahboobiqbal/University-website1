import { getFacultyMember } from "@/data/departments";

interface Props {
  params: Promise<{ department: string; member: string }>;
}

export async function GET(_request: Request, { params }: Props) {
  const { department, member } = await params;
  const profile = getFacultyMember(department, member);
  if (!profile?.member.cvUrl) {
    return new Response("CV not available.", { status: 404 });
  }

  const cvUrl = new URL(profile.member.cvUrl);
  if (
    cvUrl.protocol !== "https:" ||
    cvUrl.hostname !== "uswat.edu.pk" ||
    !cvUrl.pathname.toLowerCase().endsWith(".pdf")
  ) {
    return new Response("Invalid CV source.", { status: 500 });
  }

  const cvResponse = await fetch(cvUrl, { cache: "no-store" });
  if (!cvResponse.ok || !cvResponse.body) {
    return new Response("Unable to download CV from the University of Swat.", {
      status: 502,
    });
  }

  return new Response(cvResponse.body, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Disposition": `attachment; filename="${member}-cv.pdf"`,
      "Content-Type": "application/pdf",
    },
  });
}
