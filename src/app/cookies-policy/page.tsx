import { Cookie } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Cookies Policy | University of Swat",
  description:
    "How the University of Swat website uses cookies and similar technologies.",
};

export default function CookiesPolicyPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="px-6 py-12 sm:px-10 lg:px-14">
          <div className="flex items-center gap-3 text-brand">
            <Cookie aria-hidden="true" size={20} />
            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
              Legal
            </p>
          </div>
          <h1 className="mt-4 mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Cookies policy
          </h1>
          <p className="max-w-2xl leading-relaxed text-gray-600">
            This policy explains how the University of Swat website uses
            cookies and similar technologies.
          </p>

          <div className="mt-10 max-w-3xl space-y-8">
            <section>
              <h2 className="text-lg font-medium text-charcoal">
                What are cookies
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Cookies are small text files stored on your device when you
                visit a website. They help the site remember your preferences
                and understand how the site is used.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Cookies used on this site
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-gray-600">
                <li>
                  <span className="font-medium text-charcoal">
                    Essential cookies
                  </span>{" "}
                  — required for the website to function, such as remembering
                  your language preference.
                </li>
                <li>
                  <span className="font-medium text-charcoal">
                    Preference cookies
                  </span>{" "}
                  — remember settings like your chosen interface language so you
                  do not have to set them on every visit.
                </li>
                <li>
                  <span className="font-medium text-charcoal">
                    Analytics cookies
                  </span>{" "}
                  — help us understand which pages are visited most so we can
                  improve the website. Data is collected in aggregate.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Managing cookies
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Most browsers let you block or delete cookies through their
                settings. Disabling essential cookies may affect how the website
                works.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">
                Updates to this policy
              </h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                We may update this policy from time to time. The latest version
                will always be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-charcoal">Contact</h2>
              <p className="mt-3 leading-relaxed text-gray-600">
                Questions about this policy can be sent to info@uswat.edu.pk or
                through our{" "}
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
