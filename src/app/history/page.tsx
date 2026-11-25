import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Flag,
  GraduationCap,
  Landmark,
  Quote,
  ScrollText,
} from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { VC_MESSAGE } from "@/data/home";
import { IMAGES } from "@/data/images";
import {
  FOUNDING_FACTS,
  HISTORY_MILESTONES,
  HISTORY_SOURCES,
  PRO_VICE_CHANCELLORS,
  REGISTRARS,
  VICE_CHANCELLORS,
} from "@/data/university-history";

export const metadata = {
  title: "History & Vice Chancellors | University of Swat",
  description:
    "The history of the University of Swat: its 2010 founding, early departments, campus development, and the full list of Vice Chancellors who have led it.",
};

const objectives = [
  "Recognise and reward merit in high academic achievement.",
  "Nurture creativity to attain excellence in academic distinction.",
  "Provide a level playing field in intellectual and cultural pursuits.",
  "Professionalise career advancement through social and moral values.",
  "Encourage human resource development for stakeholders.",
  "Enlighten young minds as productive global citizens.",
  "Foster career growth and intellectual development in an environment of diversity.",
];

const coreValues = ["Commitment", "Creativity", "Excellence", "Responsibility", "Leadership", "Service"];

const initials = (name: string) =>
  name
    .replace(/^(?:(?:Prof|Dr)\.\s*)+/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

export default function HistoryPage() {
  return (
    <InnerPageLayout>
      <article className="bg-white">
        <section className="relative overflow-hidden bg-[#233623] text-white">
          <div className="absolute inset-0 opacity-25">
            <Image
              src={IMAGES.quickAccess.mainCampus}
              alt="University of Swat main campus"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(35,54,35,.97),rgba(23,35,29,.78))]" aria-hidden="true" />
          <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9d2bd]">
              <span className="h-px w-8 bg-[#b9d2bd]" aria-hidden="true" />
              Since 2010
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-light leading-[1.08] text-balance md:text-5xl xl:text-6xl">
              The story of the University of Swat
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/80">
              From a long-held dream of the people of Swat to a public university with dozens of departments, two
              campuses and thousands of students — this is our history, and the leaders who shaped it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#timeline"
                className="inline-flex items-center gap-2 bg-[#b9d2bd] px-5 py-2.5 text-sm font-semibold text-[#17231d] transition-colors hover:bg-white"
              >
                Explore the timeline
                <ArrowRight aria-hidden="true" size={16} />
              </Link>
              <Link
                href="#vice-chancellors"
                className="inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Vice Chancellors
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto -mt-8 max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDING_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="group border border-[#e7e5df] bg-white p-5 shadow-[0_16px_34px_rgba(23,35,29,0.08)] transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{fact.label}</p>
                <p className="mt-2 text-2xl font-light text-charcoal">{fact.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">{fact.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-12 sm:px-8 lg:px-12">
          <section className="mb-12">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Beginnings
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">From an idea to a university</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
              <div className="min-w-0 space-y-5 text-[15px] leading-7 text-gray-600">
                <p>
                  Swat has long been a centre of learning. After the National Education Policy of 1972 raised the idea
                  of a university in the valley, the people of Swat waited nearly four decades. The University of Swat
                  was finally announced on <strong className="font-medium text-charcoal">29 May 2010</strong> by the then
                  Prime Minister of Pakistan during a visit to the region, a symbol of peace and a promise of renewed
                  educational opportunity after years of conflict.
                </p>
                <p>
                  The university came into formal existence in{" "}
                  <strong className="font-medium text-charcoal">July 2010</strong> by order of the Governor of Khyber
                  Pakhtunkhwa, Mr. Awais Ahmad Ghani, with the prior approval of the President of Pakistan. The Higher
                  Education Commission records the establishment date as 7 July 2010. It is a public-sector university,
                  chartered by the Government of Khyber Pakhtunkhwa, with its main campus at Charbagh, Swat.
                </p>
                <p>
                  In those early months the university had no campus of its own. The Higher Education Department handed
                  over two buildings at Saidu Sharif, and more space was rented to make teaching possible. Its first
                  Vice Chancellor, Dr. Muhammad Farooq Khan (Shaheed), was appointed in August 2010. He was a
                  psychiatrist and Islamic scholar known for his moderate views, and was martyred in Mardan on 2 October
                  2010, only weeks after taking office.
                </p>
                <p>
                  The first academic session, 2010–11, began with seven disciplines and around 272 students. Through
                  successive years the university grew to more than 20 teaching departments, dozens of undergraduate,
                  graduate and doctoral programmes, and two sub-campuses — the Women Campus and Shangla Campus. Phase-I
                  of the Charbagh campus is now complete, with academic blocks, hostels, a library, a mosque, an
                  examination section, an administration block, staff residences and the supporting roads and boundary
                  wall.
                </p>
              </div>
              <aside className="min-w-0 space-y-5">
                <div className="relative h-56 overflow-hidden border border-[#e7e5df] bg-gray-100">
                  <Image
                    src={IMAGES.life.swatValley}
                    alt="Swat valley and the University of Swat campus"
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <div className="bg-[#233623] p-6 text-white">
                  <Quote aria-hidden="true" size={26} className="text-[#b9d2bd]" />
                  <p className="mt-3 text-xl font-light leading-snug">Aspiring for Quality Education with Relevance</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#b9d2bd]">University motto</p>
                </div>
                <div className="border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8] p-5">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                    <Landmark aria-hidden="true" size={16} className="text-brand" />
                    At a glance
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    <li>Public sector university, chartered by the Government of Khyber Pakhtunkhwa</li>
                    <li>Main campus: Charbagh, Swat</li>
                    <li>Sub-campuses: Women Campus and Shangla Campus</li>
                    <li>Affiliations: HEC and PEC</li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>

          <section id="timeline" className="mb-12 scroll-mt-28">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Milestones
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">A timeline of growth</h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {HISTORY_MILESTONES.map((milestone) => (
                <article
                  key={`${milestone.year}-${milestone.title}`}
                  className="group border border-[#e7e5df] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,0.08)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 border border-brand/20 bg-brand/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                      <CalendarDays aria-hidden="true" size={12} />
                      {milestone.year}
                    </span>
                    <span className="h-px flex-1 bg-[#e7e5df]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-medium text-charcoal">{milestone.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{milestone.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="vice-chancellors" className="mb-12 scroll-mt-28">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Leadership
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">Vice Chancellors of the University</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
              The University has been led by the following Vice Chancellors, including acting appointments. Where two
              tenures overlap, the later entry reflects an acting appointment recorded in the published list.
            </p>

            <Link
              href="/vice-chancellor"
              className="group mt-6 grid overflow-hidden border border-[#e7e5df] bg-[#fafaf8] transition-colors hover:border-brand md:grid-cols-[320px_minmax(0,1fr)]"
            >
              <div className="relative min-h-[300px] bg-[#233623] md:min-h-[360px]">
                <Image
                  src="/vc/husnul-amin.jpg"
                  alt={VC_MESSAGE.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/60 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 border border-white/20 bg-[#17231d]/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#b9d2bd]" aria-hidden="true" />
                  Current Vice Chancellor
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="h-px w-8 bg-brand" aria-hidden="true" />
                  University Leadership
                </p>
                <h3 className="mt-3 text-3xl font-light text-charcoal md:text-4xl">{VC_MESSAGE.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{VC_MESSAGE.title}</p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">{VC_MESSAGE.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand">
                    <CalendarDays aria-hidden="true" size={14} />
                    In office since 4 October 2026
                  </span>
                  <span className="inline-flex items-center gap-2 border border-[#e7e5df] bg-white px-3 py-1.5 text-xs font-medium text-charcoal transition-colors group-hover:border-brand">
                    Read the official message
                    <ArrowUpRight
                      aria-hidden="true"
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>

            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {VICE_CHANCELLORS.filter(
                (vc) => vc.name !== VC_MESSAGE.name || vc.role !== "Vice Chancellor"
              ).map((vc) => (
                <article
                  key={`${vc.name}-${vc.period}`}
                  className="group relative flex gap-4 overflow-hidden border border-[#e7e5df] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,0.08)] sm:p-5"
                >
                  <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" aria-hidden="true" />
                  {vc.image ? (
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden border border-[#e7e5df] bg-gray-100">
                      <Image
                        src={vc.image}
                        alt={vc.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center border border-[#e7e5df] bg-[#eef3ee] text-2xl font-light text-brand">
                      {initials(vc.name)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="text-base font-medium leading-snug text-charcoal">{vc.name}</h3>
                      <span
                        className={`shrink-0 border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          vc.role === "Vice Chancellor"
                            ? "border-brand/20 bg-brand/5 text-brand"
                            : "border-[#dce4dc] bg-[#eef3ee] text-gray-600"
                        }`}
                      >
                        {vc.role}
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <CalendarDays aria-hidden="true" size={14} className="text-brand" />
                      {vc.period}
                    </p>
                    {vc.note && <p className="mt-3 text-sm leading-relaxed text-gray-600">{vc.note}</p>}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border border-[#e7e5df] bg-[#fafaf8] p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <GraduationCap aria-hidden="true" size={16} className="text-brand" />
                  Pro Vice Chancellors
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  {PRO_VICE_CHANCELLORS.map((name) => (
                    <li key={name} className="border-b border-[#e7e5df] pb-2 last:border-0 last:pb-0">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-[#e7e5df] bg-[#fafaf8] p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <ScrollText aria-hidden="true" size={16} className="text-brand" />
                  Registrars through the years
                </h3>
                <ul className="mt-3 grid gap-2 text-sm text-gray-600 sm:grid-cols-2">
                  {REGISTRARS.map((registrar) => (
                    <li key={`${registrar.name}-${registrar.period}`} className="border-b border-[#e7e5df] pb-2 last:border-0">
                      <span className="block font-medium text-charcoal">{registrar.name}</span>
                      <span className="text-xs text-gray-500">{registrar.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Guiding principles
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">Vision, mission and values</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="bg-[#233623] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b9d2bd]">Vision</p>
                <p className="mt-3 text-lg font-light leading-relaxed">
                  The University of Swat aspires to be a premier seat of learning, distinctively recognised for
                  transformative education and multi-disciplinary research to serve humanity.
                </p>
              </div>
              <div className="border border-[#dce4dc] bg-[#eef3ee] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Mission</p>
                <p className="mt-3 text-lg font-light leading-relaxed text-gray-700">
                  To provide an academic and rewarding environment for intellectual growth, promoting quality research
                  and education focused on creative and critical thinking with multi-cultural affinity and human values.
                </p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="border border-[#e7e5df] bg-white p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <BookOpen aria-hidden="true" size={16} className="text-brand" />
                  Core values
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {coreValues.map((value) => (
                    <span key={value} className="border border-brand/20 bg-brand/5 px-3 py-1.5 text-sm text-brand">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border border-[#e7e5df] bg-white p-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                  <Flag aria-hidden="true" size={16} className="text-brand" />
                  Objectives
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-600">
                  {objectives.map((objective) => (
                    <li key={objective} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" aria-hidden="true" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden="true" />
              Sources
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal md:text-3xl">Where this history comes from</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600">
              This account was compiled from the University of Swat&apos;s official website, the Higher Education
              Commission, and published reporting. Acting tenures and dates are listed as recorded in the sources.
              Vice Chancellor portraits come from the university&apos;s official site, USEFP, Wikimedia Commons and
              academic profiles; where no verified portrait was available, initials are shown.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {HISTORY_SOURCES.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border border-[#e7e5df] bg-white p-4 text-sm text-charcoal transition-colors hover:border-brand hover:text-brand"
                >
                  <span className="flex items-center gap-3">
                    <ExternalLink aria-hidden="true" size={16} className="shrink-0 text-brand" />
                    {source.label}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  />
                </a>
              ))}
            </div>
          </section>
        </div>
      </article>
    </InnerPageLayout>
  );
}
