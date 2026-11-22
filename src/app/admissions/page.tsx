import { AdmissionsSection } from "@/components/sections/admissions";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Admissions | University of Swat",
  description:
    "Explore undergraduate, MS/MPhil, and PhD admissions, programs, documents, and application guidance at the University of Swat.",
};

export default function AdmissionsPage() {
  return (
    <InnerPageLayout className="!bg-white">
      <AdmissionsSection />
    </InnerPageLayout>
  );
}
