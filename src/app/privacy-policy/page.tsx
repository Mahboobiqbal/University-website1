import { ShieldCheck } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Privacy Policy | University of Swat",
  description:
    "How the University of Swat collects, uses, and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="px-6 py-12 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 text-brand">
            <ShieldCheck aria-hidden="true" size={20} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Legal
            </p>
          </div>
          <h1 className="mt-4 mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Privacy policy
          </h1>
          <p className="max-w-2xl leading-relaxed text-gray-600">
            This policy describes how the University of Swat collects, uses,
            and protects personal information submitted through this website.
          </p>

          <div className="mt-10 max-w-3xl space-y-8">
            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Information we collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
                <li>
                  Information you provide through forms, such as admission
                  enquiries, newsletter subscriptions, or contact requests.
                </li>
                <li>
                  Standard technical data such as browser type and the pages
                  visited, used in aggregate to improve the website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                How we use information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
                <li>To respond to your enquiries and applications.</li>
                <li>To publish or process information you have requested.</li>
                <li>To maintain and improve the website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Sharing and retention
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                We do not sell personal information. Information is retained
                only as long as needed for the purpose it was collected for, or
                as required by university policy and law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Your rights
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                You may request access to, correction of, or removal of your
                personal information by contacting the university using the
                details below.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">Contact</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Privacy questions can be sent to info@uswat.edu.pk or through
                our{" "}
                <a
                  href="/contact"
                  className="text-brand transition-colors hover:text-brand-hover"
                >
                  contact page
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </article>
    </InnerPageLayout>
  );
}
