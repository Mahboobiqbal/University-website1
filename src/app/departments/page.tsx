import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { FACULTIES } from "@/data/faculties";
import { DEPARTMENTS } from "@/data/departments";

export const metadata = {
  title: "Academic Departments | University of Swat",
  description: "Explore academic faculties, departments, and programs at the University of Swat.",
};

export default function DepartmentsPage() {
  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="mb-12">
        <p className="text-xs font-medium text-brand uppercase tracking-wider mb-3">Academics</p>
        <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-4 text-balance">
          Departments
        </h1>
        <p className="max-w-[760px] leading-relaxed text-gray-600">
          Explore academic areas and the programs listed by each department. The University of Swat
          overview reports 22 teaching departments and 49 academic programs, with its main campus
          in Charbagh and two sub-campuses.
        </p>
      </div>

      {FACULTIES.map((faculty) => (
        <section key={faculty.id} className="mb-14">
          <h2 className="text-xl md:text-2xl font-light text-charcoal mb-6 top-line">
            {faculty.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faculty.departments.map((dept) => {
              const detail = DEPARTMENTS.find((d) => d.id === dept.id);
              return (
                <Link
                  key={dept.id}
                  href={dept.href}
                  className="group rounded-none border border-[#e7e5df] overflow-hidden bg-white hover:border-[#74201e] hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={detail?.image || "/next.svg"}
                      alt={dept.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-medium text-charcoal leading-snug group-hover:text-brand transition-colors">
                        {dept.name}
                      </h3>
                      {detail && (
                        <p className="text-xs text-gray-500 mt-2">
                          {detail.programs.length} program{detail.programs.length !== 1 ? "s" : ""} ·{" "}
                          {detail.facultyMembers.length} faculty
                        </p>
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
      </section>
    </InnerPageLayout>
  );
}
