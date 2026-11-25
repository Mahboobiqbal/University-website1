"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Beaker,
  BookOpen,
  CheckCircle2,
  Compass,
  Crown,
  FileText,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wallet,
} from "lucide-react";
import type { Department } from "@/data/departments";
import type { DepartmentFees } from "@/data/department-fees";

interface CstDepartmentPageProps {
  dept: Department;
  fees: DepartmentFees;
}

const formatFee = (amount: number) => `PKR ${amount.toLocaleString("en-PK")}`;

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

const fromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const viewport = { once: true, margin: "-70px" } as const;

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView || reduceMotion) return;
    let frame = 0;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return <span ref={ref}>{reduceMotion || !inView ? value : display}</span>;
};

const SectionHeading = ({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string;
  title: string;
  id?: string;
}) => (
  <motion.div variants={fadeUp} className="mb-6" id={id}>
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-brand" aria-hidden="true" />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
    </div>
    <h2 className="mt-2 text-2xl font-semibold text-charcoal">{title}</h2>
  </motion.div>
);

export const CstDepartmentPage = ({ dept, fees }: CstDepartmentPageProps) => {
  const reduceMotion = useReducedMotion();
  const heroItem: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fadeUp;

  const stats = [
    { label: "Faculty Members", value: dept.facultyMembers.length, icon: Users },
    { label: "Degree Programs", value: dept.programs.length, icon: BookOpen },
    { label: "Achievements", value: dept.achievements?.length ?? 0, icon: Trophy },
    { label: "Labs & Facilities", value: dept.labs?.length ?? 0, icon: Beaker },
  ];

  const heroHighlights = [
    `${dept.programs.filter((p) => p.level === "Undergraduate").length} BS pathways`,
    "MS & PhD Computer Science",
    "NCEAC accredited",
  ];

  const hod = dept.facultyMembers.find((member) =>
    /chairman|head of department|\bhod\b/i.test(member.title)
  );
  const otherFaculty = dept.facultyMembers.filter((member) => member.name !== hod?.name);
  const hodPhd = hod?.education?.find((item) => item.degree.toLowerCase().startsWith("phd"));

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#233623] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
            maskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 72%)",
          }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#74201e]/40 blur-[110px]"
          animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#b9d2bd]/20 blur-[120px]"
          animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, 24, 0] }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={heroItem}>
              <Link
                href="/departments"
                className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                All Departments
              </Link>
            </motion.div>

            <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)] lg:items-center">
              <div>
                <motion.p
                  variants={heroItem}
                  className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#b9d2bd]"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b9d2bd] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#b9d2bd]" />
                  </span>
                  {dept.faculty}
                </motion.p>
                <motion.h1
                  variants={heroItem}
                  className="mt-5 max-w-4xl text-4xl font-light leading-[1.08] text-balance md:text-5xl xl:text-6xl"
                >
                  {dept.name}
                </motion.h1>
                <motion.p
                  variants={heroItem}
                  className="mt-5 line-clamp-4 max-w-3xl text-base leading-7 text-white/80 lg:line-clamp-none"
                >
                  {dept.description}
                </motion.p>

                <motion.div variants={heroItem} className="mt-7 flex flex-wrap gap-2.5">
                  {heroHighlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#b9d2bd]" aria-hidden="true" />
                      {highlight}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#programs"
                    className="group inline-flex items-center gap-2 bg-[#b9d2bd] px-6 py-3 text-sm font-semibold text-[#17231d] transition-all duration-300 hover:bg-white"
                  >
                    Explore Programs
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                  >
                    Admissions
                  </Link>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.8, ease: EASE }}
                className="relative"
              >
                <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#b9d2bd]/40" aria-hidden="true" />
                <div className="group relative aspect-[16/11] overflow-hidden border border-white/15 bg-white/5">
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 border border-white/15 bg-[#17231d]/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#b9d2bd]" aria-hidden="true" />
                    Main Campus · Charbagh
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto -mt-9 max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={stagger}
          className="relative z-10 grid grid-cols-2 gap-3 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="group relative h-full overflow-hidden border border-[#e7e5df] bg-white p-4 shadow-[0_16px_36px_rgba(23,35,29,0.10)] transition-transform duration-300 hover:-translate-y-1 sm:p-5">
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#74201e] to-[#b9d2bd] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <span className="inline-flex h-10 w-10 items-center justify-center border border-brand/20 bg-brand/5 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-4 text-3xl font-light leading-none text-charcoal">
                  <AnimatedNumber value={stat.value} />
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-12 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp}
          className="mb-10 border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8] shadow-[0_12px_30px_rgba(23,35,29,0.06)]"
        >
          <div className="grid divide-y divide-[#e7e5df] lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            <div className="p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Visit Us
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">{dept.contact.office}</p>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Email
              </p>
              <a
                href={`mailto:${dept.contact.email}`}
                className="mt-2 block break-all text-sm text-brand hover:underline"
              >
                {dept.contact.email}
              </a>
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                <BookOpen className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Quick Links
              </p>
              <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                <Link href="/admissions" className="text-brand hover:underline">How to Apply</Link>
                <Link href="#fee-structure" className="text-brand hover:underline">Fee Structure</Link>
                <Link href="/contact" className="text-brand hover:underline">Visit Campus</Link>
              </div>
            </div>
            <div className="flex items-center p-5">
              <Link
                href="/admissions"
                className="group/btn inline-flex w-full items-center justify-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#5e1917]"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="min-w-0">
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              variants={stagger}
              className="mb-12"
            >
              <SectionHeading eyebrow="Introduction" title="About the Department" />
              <motion.p
                variants={fadeUp}
                className="whitespace-pre-line text-gray-600 font-light leading-relaxed"
              >
                {dept.description}
              </motion.p>
            </motion.section>

            {(dept.vision || dept.mission) && (
              <section className="mb-12 grid gap-4 md:grid-cols-2">
                {dept.vision && (
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    variants={fromLeft}
                    className="group relative overflow-hidden bg-[#233623] p-6 text-white shadow-[0_16px_36px_rgba(35,54,35,0.16)]"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b9d2bd]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 text-[#b9d2bd]">
                      <Compass className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#b9d2bd]">Vision</p>
                    <p className="mt-2 leading-7 text-white/85">{dept.vision}</p>
                  </motion.div>
                )}
                {dept.mission && (
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewport}
                    variants={fromRight}
                    className="group relative overflow-hidden border border-[#dce4dc] bg-[#eef3ee] p-6"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/5 blur-2xl transition-transform duration-700 group-hover:scale-150" aria-hidden="true" />
                    <span className="inline-flex h-10 w-10 items-center justify-center border border-brand/20 bg-white text-brand">
                      <Target className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand">Mission</p>
                    <p className="mt-2 leading-7 text-gray-700">{dept.mission}</p>
                  </motion.div>
                )}
              </section>
            )}

            {dept.programs.length > 0 && (
              <section id="programs" className="mb-12 scroll-mt-28">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Academics" title="Degree Programs" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {dept.programs.map((program, index) => (
                      <motion.div key={program.name} variants={fadeUp}>
                        <Link
                          href={`/programs/${slugify(program.name)}`}
                          className="group relative flex h-full min-h-40 flex-col justify-between overflow-hidden border border-[#e7e5df] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_36px_rgba(35,54,35,0.14)]"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#233623] via-[#1b2b1d] to-[#74201e]/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                          <div className="relative">
                            <div className="mb-4 flex items-center justify-between">
                              <span className="flex h-9 w-9 items-center justify-center border border-brand/20 bg-brand/5 text-xs font-semibold text-brand transition-all duration-300 group-hover:rotate-6 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="flex h-8 w-8 items-center justify-center border border-[#e7e5df] text-gray-300 transition-all duration-300 group-hover:border-white/25 group-hover:text-white">
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </span>
                            </div>
                            <h3 className="text-lg font-medium leading-snug text-charcoal transition-colors duration-300 group-hover:text-white">
                              {program.name}
                            </h3>
                          </div>
                          <span className="relative mt-5 inline-flex w-fit border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-semibold text-brand transition-colors duration-300 group-hover:border-white/25 group-hover:bg-white/10 group-hover:text-[#d9e7db]">
                            {program.level}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {fees.programs.length > 0 && (
              <section id="fee-structure" className="mb-12 scroll-mt-28">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Investment" title="Fee Structure" />
                  <motion.div
                    variants={fadeUp}
                    className="overflow-hidden border border-[#e7e5df] border-t-2 border-t-[#74201e] bg-[#fafaf8]"
                  >
                    <div className="flex items-start gap-3 border-b border-[#e7e5df] bg-white px-4 py-4 sm:px-5">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-brand/20 bg-brand/5 text-brand">
                        <Wallet className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Tuition &amp; dues for {dept.name.replace(/^Department of |^Faculty of /, "")}
                        </p>
                        <p className="mt-1 flex items-start gap-1.5 text-xs leading-relaxed text-gray-500">
                          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          {fees.note}
                        </p>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white text-xs uppercase tracking-wide text-gray-600">
                          <tr>
                            <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Program</th>
                            <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Level</th>
                            <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">Admission Fee</th>
                            <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">Per Semester</th>
                            <th scope="col" className="px-4 py-3 text-right font-semibold sm:px-5">Annual Fee</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7e5df] bg-white">
                          {fees.programs.map((fee) => (
                            <motion.tr
                              key={`${fee.program}-${fee.level}`}
                              variants={fadeUp}
                              className="transition-colors hover:bg-[#fafaf8]"
                            >
                              <td className="px-4 py-3.5 font-medium text-charcoal sm:px-5">{fee.program}</td>
                              <td className="px-4 py-3.5 sm:px-5">
                                <span className="inline-block border border-brand/20 bg-brand/5 px-2 py-0.5 text-xs text-brand">
                                  {fee.level}
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-4 py-3.5 text-right text-gray-600 sm:px-5">
                                {formatFee(fee.admissionFee)}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3.5 text-right text-gray-600 sm:px-5">
                                {formatFee(fee.perSemesterFee)}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3.5 text-right font-semibold text-charcoal sm:px-5">
                                {formatFee(fee.annualFee)}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e7e5df] bg-white px-4 py-4 sm:px-5">
                      <p className="max-w-md text-xs leading-relaxed text-gray-500">
                        One-time admission fee is payable at enrolment. Semester dues are charged twice a year.
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs font-medium">
                        <a
                          href="https://uswat.edu.pk/fee-structure/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-brand hover:text-brand-hover"
                        >
                          Official fee page
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                        <a
                          href="mailto:admissions@uswat.edu.pk"
                          className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover"
                        >
                          Ask Admissions
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </section>
            )}

            {dept.curriculum.length > 0 && (
              <section id="curriculum" className="mb-12 scroll-mt-28">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Scheme of Studies" title="Curriculum Documents" />
                  <div className="space-y-2.5">
                    {dept.curriculum.map((item) => (
                      <motion.div key={item.url} variants={fadeUp}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 border border-[#e7e5df] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-[#fafaf8] hover:shadow-[0_10px_24px_rgba(35,54,35,0.08)]"
                        >
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-brand/20 bg-brand/5 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                            <FileText className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span className="flex-1 text-sm text-charcoal transition-colors group-hover:text-brand">
                            {item.title}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {dept.facultyMembers.length > 0 && (
              <section id="faculty" className="mb-12 scroll-mt-28">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Our People" title="Faculty Members" />

                  {hod && (
                    <motion.div
                      variants={fadeUp}
                      className="group relative overflow-hidden border border-[#e7e5df] bg-[#233623] text-white shadow-[0_18px_40px_rgba(35,54,35,0.18)]"
                    >
                      <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#74201e]/35 blur-[100px] transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
                      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-[#b9d2bd]/15 blur-[90px]" aria-hidden="true" />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                          backgroundSize: "38px 38px",
                        }}
                        aria-hidden="true"
                      />
                      <div className="relative grid gap-7 p-5 sm:p-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center lg:gap-10 xl:grid-cols-[240px_minmax(0,1fr)_250px]">
                        <div className="relative mx-auto w-full max-w-[240px]">
                          <div className="absolute -bottom-3 -left-3 h-full w-full border border-[#b9d2bd]/40" aria-hidden="true" />
                          <div className="relative aspect-square overflow-hidden border border-white/20 bg-white/5">
                            <Image
                              src={hod.image}
                              alt={hod.name}
                              fill
                              sizes="240px"
                              unoptimized={Boolean(hod.image?.includes("uswat.edu.pk"))}
                              referrerPolicy="no-referrer"
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/40 to-transparent" aria-hidden="true" />
                          </div>
                          <span className="absolute -bottom-3 left-4 inline-flex items-center gap-1.5 border border-white/15 bg-[#17231d] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b9d2bd] shadow-lg">
                            <Crown className="h-3 w-3" aria-hidden="true" />
                            Head of Department
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b9d2bd]">
                            <span className="h-px w-7 bg-[#b9d2bd]/60" aria-hidden="true" />
                            Department Leadership
                          </p>
                          <h3 className="mt-3 text-3xl font-light text-white md:text-4xl">{hod.name}</h3>
                          <p className="mt-1 text-sm font-medium text-[#b9d2bd]">{hod.title}</p>
                          {hodPhd && (
                            <p className="mt-2 text-xs text-white/60">
                              {hodPhd.degree} · {hodPhd.institution}
                              {hodPhd.year ? `, ${hodPhd.year}` : ""}
                            </p>
                          )}
                          {hod.biography?.[0] && (
                            <p className="mt-4 line-clamp-4 max-w-2xl text-sm leading-7 text-white/75">
                              {hod.biography[0]}
                            </p>
                          )}
                          {hod.researchInterests && hod.researchInterests.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {hod.researchInterests.slice(0, 4).map((interest) => (
                                <span
                                  key={interest}
                                  className="border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/80"
                                >
                                  {interest}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-6 flex flex-wrap gap-3">
                            <Link
                              href={`/faculty/${dept.id}/${slugify(hod.name)}`}
                              className="group/btn inline-flex items-center gap-2 bg-[#b9d2bd] px-5 py-2.5 text-sm font-semibold text-[#17231d] transition-colors duration-300 hover:bg-white"
                            >
                              View full profile
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                            </Link>
                            <a
                              href={`mailto:${hod.email}`}
                              className="inline-flex items-center gap-2 border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                            >
                              <Mail className="h-4 w-4" aria-hidden="true" />
                              Email HOD
                            </a>
                          </div>
                        </div>

                        <div className="hidden flex-col gap-5 border-l border-white/15 pl-7 xl:flex">
                          {hod.officeLocation && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">Office</p>
                              <p className="mt-1.5 text-sm leading-relaxed text-white/75">{hod.officeLocation}</p>
                            </div>
                          )}
                          {hod.researchInterests && hod.researchInterests.length > 0 && (
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">Research Focus</p>
                              <p className="mt-1.5 text-sm text-white/75">{hod.researchInterests.length} key areas</p>
                            </div>
                          )}
                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">Email</p>
                            <a href={`mailto:${hod.email}`} className="mt-1.5 block break-all text-sm text-white/75 hover:text-white">
                              {hod.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {otherFaculty.length > 0 && (
                    <>
                      <div className="mb-4 mt-9 flex items-center gap-4">
                        <h3 className="shrink-0 text-lg font-semibold text-charcoal">Meet the Faculty</h3>
                        <span className="h-px flex-1 bg-[#e7e5df]" aria-hidden="true" />
                        <span className="shrink-0 text-xs text-gray-500">{otherFaculty.length} members</span>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {otherFaculty.map((member) => (
                          <motion.div
                            key={member.name}
                            variants={fadeUp}
                            className="group relative flex items-center gap-4 border border-[#e7e5df] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,0.10)]"
                          >
                            <span className="absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100" aria-hidden="true" />
                            {member.image ? (
                              <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-gray-200 bg-gray-100">
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  fill
                                  unoptimized={Boolean(member.image?.includes("uswat.edu.pk"))}
                                  referrerPolicy="no-referrer"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  sizes="80px"
                                />
                              </div>
                            ) : (
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center border border-gray-200 bg-gray-100 text-xl font-light text-gray-400">
                                {member.name.charAt(0)}
                              </div>
                            )}
                            <Link
                              href={`/faculty/${dept.id}/${slugify(member.name)}`}
                              className="min-w-0 flex-1"
                            >
                              <h3 className="text-sm font-medium text-charcoal transition-colors group-hover:text-brand">
                                {member.name}
                              </h3>
                              <p className="mt-0.5 text-xs text-gray-500">{member.title}</p>
                              {member.researchInterests?.[0] && (
                                <p className="mt-1 line-clamp-1 text-[11px] text-gray-400">
                                  {member.researchInterests[0]}
                                </p>
                              )}
                              <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                View profile <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                              </span>
                            </Link>
                            {member.email && (
                              <a
                                href={`mailto:${member.email}`}
                                className="hidden text-xs text-brand hover:underline sm:block"
                                aria-label={`Email ${member.name}`}
                              >
                                Email
                              </a>
                            )}
                            <Link
                              href={`/faculty/${dept.id}/${slugify(member.name)}`}
                              aria-label={`View ${member.name} profile`}
                              className="shrink-0"
                            >
                              <span className="inline-flex h-8 w-8 items-center justify-center border border-[#e7e5df] text-gray-300 transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                                <ArrowUpRight className="h-4 w-4" />
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </section>
            )}

            {dept.objective && (
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={stagger}
                className="mb-12"
              >
                <SectionHeading eyebrow="Purpose" title="Objective" />
                <motion.div variants={fadeUp} className="relative border-l-2 border-brand bg-[#fafaf8] px-5 py-4">
                  <GraduationCap className="absolute right-4 top-4 h-8 w-8 text-brand/15" aria-hidden="true" />
                  <p className="max-w-3xl font-light leading-relaxed text-gray-600">{dept.objective}</p>
                </motion.div>
              </motion.section>
            )}

            {dept.achievements && dept.achievements.length > 0 && (
              <section className="mb-12">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Milestones" title="Achievements" />
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {dept.achievements.map((item) => (
                      <motion.li
                        key={item}
                        variants={fadeUp}
                        className="group flex items-start gap-3 border border-[#e7e5df] bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:shadow-[0_10px_24px_rgba(35,54,35,0.08)]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </section>
            )}

            {dept.labs && dept.labs.length > 0 && (
              <section id="labs" className="mb-12 scroll-mt-28">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger}
                >
                  <SectionHeading eyebrow="Hands-on Learning" title="Labs & Facilities" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    {dept.labs.map((lab) => (
                      <motion.article
                        key={lab.name}
                        variants={fadeUp}
                        className="group overflow-hidden border border-[#e7e5df] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_36px_rgba(35,54,35,0.12)]"
                      >
                        <div className="relative h-44 overflow-hidden bg-gray-100">
                          <Image
                            src={lab.image}
                            alt={lab.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                          <span className="absolute bottom-3 left-3 inline-flex h-8 w-8 items-center justify-center border border-white/20 bg-[#17231d]/60 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                            <Beaker className="h-4 w-4" aria-hidden="true" />
                          </span>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-charcoal transition-colors group-hover:text-brand">{lab.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-gray-600">{lab.description}</p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.div>
              </section>
            )}

            {dept.careerPaths && dept.careerPaths.length > 0 && (
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={stagger}
                className="mb-4"
              >
                <SectionHeading eyebrow="After Graduation" title="Career Pathways" />
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {dept.careerPaths.map((path) => (
                    <motion.li
                      key={path}
                      variants={fadeUp}
                      className="group flex items-center gap-3 border border-[#e7e5df] px-4 py-3 text-sm text-gray-700 transition-all duration-300 hover:translate-x-1 hover:border-brand hover:text-charcoal"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-brand transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
                      {path}
                    </motion.li>
                  ))}
                </ul>
                {dept.admissionNotes && dept.admissionNotes.length > 0 && (
                  <motion.div variants={fadeUp} className="mt-5 border-l-2 border-brand bg-[#fafaf8] px-4 py-4">
                    <h3 className="flex items-center gap-2 font-medium text-charcoal">
                      <Info className="h-4 w-4 text-brand" aria-hidden="true" />
                      Admission Notes
                    </h3>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-gray-600">
                      {dept.admissionNotes.map((note) => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.section>
            )}
          </div>
      </div>
    </div>
  );
};
