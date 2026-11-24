import type { Metadata } from "next";
import { ApplyWorkflowContainer } from "@/components/apply/apply-workflow-container";

export const metadata: Metadata = {
  title: "Online Admission Application Portal | University of Swat",
  description:
    "Official centralized admission application service for undergraduate and graduate degree programs at University of Swat. Complete your application, calculate merit, and submit your fee proof.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
      <ApplyWorkflowContainer />
    </main>
  );
}
