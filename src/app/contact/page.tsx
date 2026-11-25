import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, University } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata = {
  title: "Contact | University of Swat",
  description: "Contact the University of Swat and find the Main Campus in Charbagh.",
};

const contacts = [
  {
    icon: Mail,
    title: "General enquiries",
    detail: "webmaster@uswat.edu.pk",
    href: "mailto:webmaster@uswat.edu.pk",
  },
  {
    icon: Mail,
    title: "Central Library",
    detail: "librarian@uswat.edu.pk",
    href: "mailto:librarian@uswat.edu.pk",
  },
];

export default function ContactPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="grid lg:grid-cols-12">
          <div className="px-6 py-12 sm:px-10 lg:col-span-7 lg:px-14 lg:py-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              Get in touch
            </p>
            <h1 className="mb-5 text-4xl font-light text-charcoal text-balance md:text-5xl">
              Contact the University of Swat
            </h1>
            <p className="max-w-2xl leading-relaxed text-gray-600">
              For general questions, email the university. For a specific academic program or
              department, visit its page to find the available contact details.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map(({ icon: Icon, title, detail, href }) => (
                <a
                  key={title}
                  href={href}
                  className="group border border-gray-200 p-5 transition-colors hover:border-brand"
                >
                  <Icon aria-hidden="true" size={20} className="text-brand" />
                  <span className="mt-4 block text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {title}
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-charcoal transition-colors group-hover:text-brand">
                    {detail}
                  </span>
                </a>
              ))}
            </div>

            <Link
              href="/complaints"
              className="group mt-6 flex items-center justify-between gap-4 border border-[#e7e5df] bg-[#fafaf8] p-5 transition-colors hover:border-brand"
            >
              <span>
                <span className="block text-sm font-medium text-charcoal transition-colors group-hover:text-brand">
                  Have a complaint?
                </span>
                <span className="mt-1 block text-xs leading-relaxed text-gray-500">
                  Choose the office you want to complain to and send a properly addressed email.
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
          <aside className="flex flex-col justify-between bg-[#233623] p-8 text-white sm:p-10 lg:col-span-5 lg:p-12">
            <University aria-hidden="true" size={30} className="text-white/75" />
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                Main Campus
              </p>
              <h2 className="mt-3 text-2xl font-light">Charbagh, Swat</h2>
              <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/75">
                <MapPin aria-hidden="true" size={18} className="mt-0.5 shrink-0" />
                Khyber Pakhtunkhwa, Pakistan
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=University+of+Swat+Charbagh"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/70"
              >
                View campus location <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <Link
              href="/departments"
              className="mt-12 inline-flex items-center gap-2 border-t border-white/20 pt-5 text-sm text-white/85 transition-colors hover:text-white"
            >
              Find a department <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </aside>
        </section>
      </article>
    </InnerPageLayout>
  );
}
