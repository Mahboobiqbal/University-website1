"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InnerPageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const InnerPageLayout: React.FC<InnerPageLayoutProps> = ({
  children,
  className,
}) => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const parentLabels: Record<string, string> = {
    department: "Academics",
    departments: "Academics",
    faculties: "Academics",
    programs: "Academics",
    news: "Newsroom",
    events: "Events",
  };
  const routeLabels: Record<string, string> = {
    about: "About University",
    news: "Newsroom",
    "vice-chancellor": "Vice Chancellor",
  };
  const formatLabel = (segment: string) =>
    segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  const lastSegment = segments[segments.length - 1] || "University";
  const pageLabel =
    segments[0] === "department" && segments[1]
      ? `Department of ${formatLabel(segments[1])}`
      : routeLabels[lastSegment] || formatLabel(lastSegment);
  const hasAcademicParent = ["department", "departments", "faculties", "programs"].includes(
    segments[0]
  );
  const parentLabel =
    hasAcademicParent || segments.length > 1 ? parentLabels[segments[0]] : undefined;
  const parentHref =
    segments[0] === "news" || segments[0] === "events"
      ? `/${segments[0]}`
      : "/faculties";

  return (
    <div className={cn("inner-page-layout min-h-[calc(100vh-200px)] bg-[#f7f7f5]", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[1440px] px-4 pb-14 pt-24 sm:px-6 xl:pt-[167px]"
      >
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500 sm:text-sm">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
            </li>
            {parentLabel && (
              <>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li>
                  <Link href={parentHref} className="transition-colors hover:text-brand">
                    {parentLabel}
                  </Link>
                </li>
              </>
            )}
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-[#233623]">
              {pageLabel}
            </li>
          </ol>
        </nav>
        <div className="inner-page-content overflow-hidden border border-[#e7e5df] bg-white shadow-[0_12px_40px_rgba(27,35,27,0.04)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};