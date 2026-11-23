"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  FileCheck2,
  FileText,
  GraduationCap,
  Landmark,
  Layers,
  Lightbulb,
  MapPin,
  MoveRight,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { type ProgramItem } from "@/data/departments";
import { getProgramDetails, type ProgramDetailRecord } from "@/data/program-details";

interface ProgramAboutProps {
  program: ProgramItem;
}

export function ProgramAbout({ program }: ProgramAboutProps) {
  const details: ProgramDetailRecord = React.useMemo(
    () => getProgramDetails(program),
    [program]
  );

  const [activeSemester, setActiveSemester] = React.useState<number>(1);

  const currentSemesterData = React.useMemo(() => {
    return (
      details.schemeOfStudies.find((s) => s.semesterNumber === activeSemester) ??
      details.schemeOfStudies[0]
    );
  }, [details.schemeOfStudies, activeSemester]);

  const totalDegreeCredits = React.useMemo(() => {
    return details.schemeOfStudies.reduce((acc, sem) => acc + sem.totalCredits, 0);
  }, [details.schemeOfStudies]);

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Snapshot", href: "#snapshot" },
    { label: "Enrollment", href: "#enrollment" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "Learning Outcomes", href: "#outcomes" },
    { label: "Scheme of Study", href: "#scheme-of-study" },
    { label: "Career Prospects", href: "#careers" },
  ];

  return (
    <article className="min-h-full bg-[#fcfcfb] text-[#212529]">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[#17231d] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.departmentImage}
            alt={program.name}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17231d] via-[#17231d]/90 to-[#17231d]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#233623]/90 via-[#17231d]/75 to-[#17231d]/90" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-12 pt-28 sm:px-10 sm:pb-16 sm:pt-36 lg:px-14 lg:pb-20 lg:pt-44 xl:pt-[185px]">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/75 sm:text-sm">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li>
                <Link href="/academics" className="transition-colors hover:text-white">
                  Academics
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li>
                <Link href="/programs" className="transition-colors hover:text-white">
                  Programs
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-[#b9d2bd]">
                {program.name}
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#233623] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#b9d2bd] border border-[#b9d2bd]/30">
                <GraduationCap className="h-3.5 w-3.5 text-[#b9d2bd]" />
                {details.snapshot.degreeLevel}
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60">
                University of Swat
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-700/40">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {details.enrollment.admissionStatus}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
              {program.name}
            </h1>

            <p className="mt-4 text-base font-light leading-relaxed text-white/85 sm:text-lg max-w-3xl">
              Offered by{" "}
              <Link
                href={program.departmentHref}
                className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
              >
                {program.departmentName}
              </Link>
              . Designed to provide rigorous academic learning, state-of-the-art laboratory training, and professional leadership.
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-8 flex flex-wrap gap-4 border-t border-white/20 pt-6 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-[#b9d2bd]" />
                <span>{program.faculty}</span>
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#b9d2bd]" />
                <Link
                  href={program.departmentHref}
                  className="hover:text-white transition-colors"
                >
                  {program.departmentName}
                </Link>
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#b9d2bd]" />
                <span>{details.snapshot.campus}</span>
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#b9d2bd]" />
                <span>{details.snapshot.duration}</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-md bg-[#233623] px-6 py-3 text-sm font-medium text-white border border-[#b9d2bd]/40 shadow-sm transition-all hover:bg-[#2e472e] hover:border-[#b9d2bd]"
              >
                Apply for Admissions
                <MoveRight className="h-4 w-4" />
              </Link>
              <a
                href="#scheme-of-study"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <BookOpen className="h-4 w-4 text-[#b9d2bd]" />
                View Scheme of Study
              </a>
              {details.curriculum.length > 0 && (
                <a
                  href="#scheme-of-study"
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <Download className="h-4 w-4 text-[#b9d2bd]" />
                  Curriculum (BOS)
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Section Sub-Navigation */}
      <nav
        aria-label="Program sections navigation"
        className="sticky top-[72px] sm:top-[80px] lg:top-[128px] z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm transition-all"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-14">
          <ul className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-3 no-scrollbar text-xs sm:text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-1.5 transition-colors hover:bg-emerald-50 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16 space-y-16 lg:space-y-24">
        {/* 1. About the Program */}
        <section id="overview" className="scroll-mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
                Degree Overview
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold text-charcoal tracking-tight">
                About the Program
              </h2>
              <div className="mt-6 space-y-4 text-base sm:text-lg font-light leading-relaxed text-gray-700">
                <p>{details.overview}</p>
                <p>
                  Rooted in the academic excellence of the{" "}
                  <strong>{program.departmentName}</strong>, this curriculum is periodically
                  updated by the University of Swat Board of Studies (BOS) to align with Higher
                  Education Commission (HEC) guidelines and global industry transformations.
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-emerald-50 p-2.5 text-emerald-800">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-charcoal">Curriculum Integrity</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Comprehensive blend of foundation theory, practical laboratory work, and applied electives.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-emerald-50 p-2.5 text-emerald-800">
                      <School className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-charcoal">Doctoral Faculty</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Mentorship by qualified professors, researchers, and HEC-approved supervisors.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-emerald-50 p-2.5 text-emerald-800">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-charcoal">Research Ecosystem</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Access to departmental computing labs, specialized scientific equipment, and digital libraries.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="rounded-md bg-emerald-50 p-2.5 text-emerald-800">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-charcoal">Recognized Credential</h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Accredited degree fully recognized across Pakistan and accepted worldwide for higher studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Department Info Side Card */}
            <aside className="lg:col-span-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-5">
                <Image
                  src={program.departmentImage}
                  alt={program.departmentName}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
              </div>

              <h3 className="text-base font-semibold text-charcoal">
                Offered by
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {program.departmentName}
              </p>

              <div className="mt-4 space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-4">
                <div className="flex items-start gap-2">
                  <Landmark className="h-4 w-4 shrink-0 text-emerald-800 mt-0.5" />
                  <span>{program.faculty}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-800 mt-0.5" />
                  <span>{details.snapshot.campus}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <Link
                  href={program.departmentHref}
                  className="inline-flex items-center justify-between rounded-md border border-[#233623] px-4 py-2.5 text-xs font-medium text-[#233623] hover:bg-[#233623] hover:text-white transition-colors"
                >
                  <span>Visit Department Page</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-between rounded-md bg-[#233623] px-4 py-2.5 text-xs font-medium text-white hover:bg-[#2e472e] transition-colors"
                >
                  <span>Check Admissions</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* 2. Program Snapshot */}
        <section id="snapshot" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
              Quick Facts
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
              Program Snapshot
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Essential academic, administrative, and delivery metrics at a glance.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Clock className="h-4 w-4" />
                  Duration
                </div>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {details.snapshot.duration}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {details.snapshot.totalSemesters}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Layers className="h-4 w-4" />
                  Credit Hours
                </div>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {details.snapshot.creditHours}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  HEC National Curriculum compliant
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <GraduationCap className="h-4 w-4" />
                  Degree Level
                </div>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {details.snapshot.degreeLevel}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {details.snapshot.studyMode}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <MapPin className="h-4 w-4" />
                  Campus Location
                </div>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  {details.snapshot.campus}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Medium: {details.snapshot.medium}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Calendar className="h-4 w-4" />
                  Intake Cycles
                </div>
                <p className="mt-2 text-base font-semibold text-charcoal">
                  {details.snapshot.intakeSchedule}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Directorate of Admissions
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Award className="h-4 w-4" />
                  Awarding Body
                </div>
                <p className="mt-2 text-base font-semibold text-charcoal">
                  {details.snapshot.awardingBody}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Government of KP Chartered
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  Accreditation
                </div>
                <p className="mt-2 text-base font-semibold text-charcoal">
                  HEC Approved
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {details.snapshot.accreditation}
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs hover:border-[#b9d2bd] transition-colors">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Users className="h-4 w-4" />
                  Class Capacity
                </div>
                <p className="mt-2 text-xl font-semibold text-charcoal">
                  ~{details.enrollment.annualSeats} Seats
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Merit & Reserved quota split
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Enrollment Overview */}
        <section id="enrollment" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
              Intake & Capacity
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
              Enrollment Overview
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Annual admission allocations, seat quotas, and application submission pathways.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: Capacity and Quota Table */}
              <div className="lg:col-span-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-5">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal">
                      Seat Allocation & Quota Breakdown
                    </h3>
                    <p className="text-xs text-gray-500">
                      Approved by Academic Council for {details.enrollment.sessionLabel}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 border border-emerald-200">
                    <Users className="h-3.5 w-3.5" />
                    Total Capacity: {details.enrollment.annualSeats} Candidates
                  </span>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-[#f7f7f5] text-xs uppercase text-gray-700 font-semibold">
                      <tr>
                        <th scope="col" className="px-4 py-3">Quota Category</th>
                        <th scope="col" className="px-4 py-3">Description</th>
                        <th scope="col" className="px-4 py-3 text-right">Share</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {details.enrollment.quotas.map((q) => (
                        <tr key={q.category} className="hover:bg-gray-50/75">
                          <td className="px-4 py-3 font-medium text-charcoal">
                            {q.category}
                          </td>
                          <td className="px-4 py-3 text-xs sm:text-sm text-gray-600">
                            {q.description}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-[#233623]">
                            {q.percentage ?? "As per rule"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right: Application Mode & Facilities */}
              <div className="lg:col-span-4 space-y-5">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#233623] font-semibold text-sm">
                    <FileCheck2 className="h-5 w-5" />
                    Application Procedure
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {details.enrollment.applicationMode}
                  </p>
                  <Link
                    href="/admissions"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
                  >
                    View Admissions Portal Instructions
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 text-[#233623] font-semibold text-sm">
                    <Building2 className="h-5 w-5" />
                    Hostel & Transport Network
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {details.enrollment.hostelTransport}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Eligibility & Admission Criteria */}
        <section id="eligibility" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
              Requirements
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
              Eligibility & Admission Criteria
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Academic prerequisites, minimum qualifying marks, and submission documents.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Academic Background & Minimum Marks */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <Award className="h-4 w-4" />
                  Required Academic Credentials
                </div>

                <div className="mt-4 rounded-lg bg-emerald-50/70 border border-emerald-200/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
                    Minimum Benchmark
                  </p>
                  <p className="mt-1 text-xl font-bold text-emerald-950">
                    {details.eligibility.minimumMarks}
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-charcoal">
                    Prerequisite Qualification:
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                    {details.eligibility.academicRequirement}
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                    Evaluation & Merit Formulation
                  </h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {details.eligibility.criteriaDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Required Documents & Verification */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
                  <FileText className="h-4 w-4" />
                  Documentation & Guidelines
                </div>

                <div className="mt-4 rounded-lg bg-amber-50/70 border border-amber-200/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                    Age Limit Regulation
                  </p>
                  <p className="mt-1 text-sm font-medium text-amber-950">
                    {details.eligibility.ageLimit}
                  </p>
                </div>

                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-charcoal">
                    Required Admission Documents:
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-gray-600">
                    {details.eligibility.entryRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-semibold text-gray-700">
                          {idx + 1}
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-5">
                  <p className="text-xs text-gray-500 italic">
                    Note: Candidates with foreign credentials (O/A-Levels, High School Diploma) must provide an IBCC / HEC Equivalence Certificate prior to final merit list confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Curriculum Objectives / Learning Outcomes */}
        <section id="outcomes" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
              Educational Goals
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
              Curriculum Objectives & Learning Outcomes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Core academic competencies, technical abilities, and scholarly attributes graduates demonstrate upon completion.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {details.learningOutcomes.map((outcome, idx) => (
                <div
                  key={outcome.title}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs hover:border-[#b9d2bd] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600">
                      {outcome.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-charcoal">
                    {outcome.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {outcome.description}
                  </p>
                </div>
              ))}

              {/* Research & Innovation Card */}
              <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-[#233623] to-[#17231d] p-6 text-white shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#b9d2bd] text-xs font-bold">
                  <Lightbulb className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  Innovation & Research Culture
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80">
                  Students engage in applied laboratory investigations, seminar discourses, and interdisciplinary capstone problem-solving aligned with regional and national development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Semester-by-Semester Scheme of Study */}
        <section id="scheme-of-study" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
                  Course Breakdown
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
                  Semester-by-Semester Scheme of Study
                </h2>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Comprehensive academic progression across semesters formulated by the Board of Studies.
                </p>
              </div>

              {/* BOS Curriculum Downloads */}
              {details.curriculum.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {details.curriculum.map((c, i) => (
                    <a
                      key={i}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-xs font-medium text-charcoal shadow-xs hover:border-[#233623] hover:text-[#233623] transition-colors"
                    >
                      <Download className="h-3.5 w-3.5 text-emerald-800" />
                      <span>{c.title.length > 30 ? `${c.title.slice(0, 30)}...` : c.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Total Credit Metric Banner */}
            <div className="mt-6 flex flex-wrap items-center gap-6 rounded-lg bg-emerald-50/70 border border-emerald-200/60 p-4 text-xs sm:text-sm text-emerald-950">
              <div>
                <span className="font-semibold text-emerald-900">Total Program Credit Hours:</span>{" "}
                <span className="font-bold">{totalDegreeCredits > 0 ? `${totalDegreeCredits} Credits` : details.snapshot.creditHours}</span>
              </div>
              <div className="hidden sm:block text-emerald-300">|</div>
              <div>
                <span className="font-semibold text-emerald-900">Total Semesters:</span>{" "}
                <span className="font-bold">{details.schemeOfStudies.length} Semesters</span>
              </div>
              <div className="hidden sm:block text-emerald-300">|</div>
              <div>
                <span className="font-semibold text-emerald-900">Delivery Format:</span>{" "}
                <span className="font-bold">Theory Lectures & Practical Laboratory Sessions</span>
              </div>
            </div>

            {/* Semester Tabs Navigation */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-3">
                {details.schemeOfStudies.map((sem) => {
                  const isCurrent = sem.semesterNumber === activeSemester;
                  return (
                    <button
                      key={sem.semesterNumber}
                      type="button"
                      onClick={() => setActiveSemester(sem.semesterNumber)}
                      className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                        isCurrent
                          ? "bg-[#233623] text-white shadow-sm"
                          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      {sem.semesterName}
                    </button>
                  );
                })}
              </div>

              {/* Active Semester Courses Table */}
              <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-charcoal">
                      {currentSemesterData.semesterName} Courses
                    </h3>
                    <p className="text-xs text-gray-500">
                      Standard course allocation approved by the Board of Studies
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-900">
                    Semester Credits: {currentSemesterData.totalCredits} Cr
                  </span>
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#f7f7f5] text-xs uppercase text-gray-700 font-semibold">
                      <tr>
                        <th scope="col" className="px-4 py-3">Course Code</th>
                        <th scope="col" className="px-4 py-3">Course Title</th>
                        <th scope="col" className="px-4 py-3">Type</th>
                        <th scope="col" className="px-4 py-3 text-right">Credit Hours</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {currentSemesterData.courses.map((course) => (
                        <tr key={course.code} className="hover:bg-gray-50/75 transition-colors">
                          <td className="px-4 py-3.5">
                            <span className="inline-block rounded-md bg-gray-100 px-2.5 py-1 text-xs font-mono font-medium text-gray-800">
                              {course.code}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 font-medium text-charcoal">
                            {course.title}
                          </td>
                          <td className="px-4 py-3.5">
                            <span
                              className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                course.type === "Core"
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : course.type === "Lab"
                                  ? "bg-blue-50 text-blue-800 border border-blue-200"
                                  : course.type === "Thesis"
                                  ? "bg-purple-50 text-purple-800 border border-purple-200"
                                  : course.type === "Elective"
                                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {course.type}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-right font-semibold text-charcoal">
                            {course.credits} Cr
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Practical / Laboratory Note */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                  <span>Courses marked with &apos;Lab&apos; include dedicated weekly experimental hours.</span>
                  <span className="font-semibold text-charcoal">
                    Semester Total: {currentSemesterData.totalCredits} Credit Hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Professional Pathways / Career Prospects */}
        <section id="careers" className="scroll-mt-36">
          <div className="border-t border-gray-200 pt-12 sm:pt-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#233623]">
              Future Opportunities
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-semibold text-charcoal tracking-tight">
              Professional Pathways & Career Prospects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Employment domains, industry roles, and higher academic progression for graduates.
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Target Sectors */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Building2 className="h-4 w-4" />
                  Key Industry Sectors
                </div>
                <ul className="space-y-3">
                  {details.careerProspects.sectors.map((sector) => (
                    <li key={sector} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-700 mt-2 shrink-0" />
                      <span>{sector}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Roles */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Briefcase className="h-4 w-4" />
                  Typical Designations & Roles
                </div>
                <div className="flex flex-wrap gap-2">
                  {details.careerProspects.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-900 border border-emerald-200/60"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Higher Studies & Scholarships */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
                  <GraduationCap className="h-4 w-4" />
                  Higher Studies & Research
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {details.careerProspects.higherStudies}
                </p>
                <div className="mt-4 border-t border-gray-100 pt-3">
                  <p className="text-xs text-gray-500">
                    Graduates are thoroughly prepared for competitive national examinations (CSS, PMS) and international scholarship evaluations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions CTA Banner */}
        <section className="rounded-2xl bg-gradient-to-br from-[#233623] via-[#17231d] to-[#121c17] p-8 sm:p-12 text-white shadow-lg">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#b9d2bd] border border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-[#b9d2bd]" />
              Start Your Academic Journey
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light text-white tracking-tight">
              Ready to Apply for {program.name}?
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light text-white/80 leading-relaxed">
              University of Swat welcomes ambitious minds to join our vibrant academic community. Admissions for upcoming sessions are open for qualifying candidates.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-md bg-[#b9d2bd] px-6 py-3 text-sm font-semibold text-[#17231d] shadow-sm hover:bg-white transition-colors"
              >
                Apply Online Now
                <MoveRight className="h-4 w-4" />
              </Link>
              <Link
                href={program.departmentHref}
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Learn More About {program.departmentName}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
