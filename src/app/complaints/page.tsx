import Link from "next/link";
import { ArrowRight, Flag, Mail, MessageSquareText, ShieldCheck } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { ComplaintForm } from "@/components/forms/complaint-form";
import { COMPLAINT_RECIPIENTS } from "@/data/complaints";

export const metadata = {
  title: "Submit a Complaint | University of Swat",
  description:
    "Submit a complaint to the relevant University of Swat office, including the Registrar, Examinations, Admissions, Provost, and IT support.",
};

const steps = [
  {
    icon: MessageSquareText,
    title: "Choose the right office",
    text: "Select the person or office your complaint is about so it reaches the right team.",
  },
  {
    icon: ShieldCheck,
    title: "Add clear details",
    text: "Include dates, reference numbers and a short description of what you need resolved.",
  },
  {
    icon: Mail,
    title: "Send from your email",
    text: "The form prepares an email in your mail app. Review it and press send.",
  },
];

export default function ComplaintsPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
          <div className="flex items-center gap-3 text-brand">
            <Flag aria-hidden="true" size={20} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">Grievance &amp; support</p>
          </div>
          <h1 className="mt-4 mb-5 max-w-3xl text-4xl font-light text-charcoal text-balance md:text-5xl">
            Submit a complaint
          </h1>
          <p className="max-w-3xl leading-relaxed text-gray-600">
            If something is not right, tell us. Choose the office you want to complain to, describe the issue, and the
            form will prepare a properly addressed email for you to send. Your complaint goes directly to that office.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
            <div className="min-w-0">
              <ComplaintForm />
            </div>

            <aside className="space-y-5">
              <div className="border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8] p-6">
                <h2 className="text-lg font-semibold text-charcoal">How it works</h2>
                <ol className="mt-5 space-y-5">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-brand/20 bg-brand/5 text-brand">
                        <step.icon aria-hidden="true" size={17} />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {index + 1}. {step.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-[#233623] p-6 text-white">
                <h2 className="text-lg font-light">Direct contact</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Prefer email? Write to the office directly.
                </p>
                <ul className="mt-4 space-y-2 border-t border-white/15 pt-4">
                  {COMPLAINT_RECIPIENTS.map((item) => (
                    <li key={item.id} className="text-xs leading-relaxed">
                      <span className="block text-white/85">{item.label}</span>
                      <a
                        href={`mailto:${item.email}`}
                        className="break-all text-[#b9d2bd] transition-colors hover:text-white"
                      >
                        {item.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#e7e5df] p-5">
                <p className="text-sm leading-relaxed text-gray-600">
                  Only reporting a broken link or a problem with this website?
                </p>
                <Link
                  href="/report-issue"
                  className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                >
                  Report an issue
                  <ArrowRight
                    aria-hidden="true"
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </article>
    </InnerPageLayout>
  );
}
