import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";
import { DEPARTMENTS, getAllPrograms } from "@/data/departments";
import { FACULTIES } from "@/data/faculties";
import { NEWS } from "@/data/home";

export const metadata = {
  title: "Search | University of Swat",
  description: "Search University of Swat departments, programs, news, and website sections.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

const pages = [
  {
    title: "About the University",
    href: "/about",
    description: "University history, mission, and community.",
    category: "University",
  },
  {
    title: "Admissions",
    href: "/admissions",
    description: "Official application portal and admission guidance.",
    category: "Admissions",
  },
  {
    title: "Campuses",
    href: "/campuses",
    description: "Main Campus, Women Campus, and campus resources.",
    category: "University",
  },
  {
    title: "Academic Programs",
    href: "/programs",
    description: "Undergraduate, MS/MPhil, and doctoral study options.",
    category: "Academics",
  },
  {
    title: "Faculties and Departments",
    href: "/faculties",
    description: "Academic faculties, teaching departments, and programs.",
    category: "Academics",
  },
  {
    title: "Research and Innovation",
    href: "/research",
    description: "Research, innovation, and quality-assurance resources.",
    category: "Research",
  },
  {
    title: "University Events",
    href: "/events",
    description: "Event notices and university activities.",
    category: "Campus life",
  },
  {
    title: "Newsroom",
    href: "/news",
    description: "Official University of Swat news and updates.",
    category: "News",
  },
  {
    title: "Central Library",
    href: "/library",
    description: "Library contact details and digital resources.",
    category: "Resources",
  },
  {
    title: "Downloads",
    href: "/downloads",
    description: "Department curricula and academic documents.",
    category: "Resources",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "University contacts and Main Campus location.",
    category: "University",
  },
  {
    title: "Submit a Complaint",
    href: "/complaints",
    description: "Submit a complaint to the relevant University of Swat office.",
    category: "Student Support",
  },
];

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const normalizedQuery = query.toLocaleLowerCase();

  const programResults = getAllPrograms()
    .filter((program) => {
      const searchable = `${program.name} ${program.level} ${program.departmentName}`.toLocaleLowerCase();
      return normalizedQuery && searchable.includes(normalizedQuery);
    })
    .map((program) => ({
      title: program.name,
      href: program.href,
      description: `${program.level} degree offered by ${program.departmentName}`,
      category: "Program",
    }));

  const departmentResults = DEPARTMENTS.filter((department) => {
    const searchable = [
      department.name,
      department.faculty,
      department.description,
      ...department.programs.map((program) => program.name),
    ]
      .join(" ")
      .toLocaleLowerCase();
    return normalizedQuery && searchable.includes(normalizedQuery);
  }).map((department) => ({
    title: department.name,
    href: department.href,
    description: department.faculty,
    category: "Department",
  }));

  const facultyResults = FACULTIES.filter((faculty) =>
    faculty.name.toLocaleLowerCase().includes(normalizedQuery)
  ).map((faculty) => ({
    title: faculty.name,
    href: "/faculties",
    description: `${faculty.departments.length} listed departments`,
    category: "Faculty",
  }));

  const newsResults = [NEWS.featured, ...NEWS.list]
    .filter((article) => article.title.toLocaleLowerCase().includes(normalizedQuery))
    .map((article) => ({
      title: article.title,
      href: article.href,
      description: article.excerpt,
      category: "News",
    }));

  const pageResults = pages
    .filter((item) =>
      `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase().includes(normalizedQuery)
    )
    .map((item) => item);

  const results = [...programResults, ...departmentResults, ...facultyResults, ...newsResults, ...pageResults];
  const uniqueResults = results.filter(
    (result, index) => results.findIndex((entry) => entry.href === result.href) === index
  );

  return (
    <InnerPageLayout>
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="mb-9 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Find your way
          </p>
          <h1 className="mb-4 text-4xl font-light text-charcoal text-balance md:text-5xl">
            Search the University of Swat
          </h1>
          <p className="leading-relaxed text-gray-600">
            Search academic departments, programs, news, and university pages.
          </p>
        </div>
        <form action="/search" method="get" role="search" className="mb-10 flex max-w-3xl gap-3">
          <label htmlFor="site-search" className="sr-only">
            Search keywords
          </label>
          <div className="flex min-w-0 flex-1 items-center gap-3 border border-gray-300 px-4 focus-within:border-brand">
            <Search aria-hidden="true" size={19} className="shrink-0 text-gray-400" />
            <input
              id="site-search"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Search departments, programs, news..."
              className="min-w-0 flex-1 bg-transparent py-3.5 text-sm text-charcoal outline-none placeholder:text-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Search
          </button>
        </form>

        {query ? (
          <div className="max-w-4xl">
            <p className="mb-5 text-sm text-gray-500">
              {uniqueResults.length} result{uniqueResults.length === 1 ? "" : "s"} for{" "}
              <span className="font-medium text-charcoal">{query}</span>
            </p>
            {uniqueResults.length > 0 ? (
              <ul className="divide-y divide-gray-200 border-y border-gray-200">
                {uniqueResults.map((result) => (
                  <li key={`${result.category}-${result.href}`}>
                    <Link
                      href={result.href}
                      className="group flex items-start justify-between gap-5 py-5"
                    >
                      <span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                          {result.category}
                        </span>
                        <span className="mt-1 block font-medium text-charcoal transition-colors group-hover:text-brand">
                          {result.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-gray-500">
                          {result.description}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={18}
                        className="mt-3 shrink-0 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="border border-gray-200 bg-[#f7f7f5] p-6">
                <h2 className="font-medium text-charcoal">No matching pages found</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Try another keyword, or browse all{" "}
                  <Link href="/departments" className="font-medium text-brand hover:underline">
                    departments
                  </Link>{" "}
                  and{" "}
                  <Link href="/programs" className="font-medium text-brand hover:underline">
                    programs
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl border-l-2 border-brand bg-[#f7f7f5] p-5 text-sm leading-relaxed text-gray-600">
            Enter a keyword to find a department, study program, university news item, or site page.
          </div>
        )}
      </section>
    </InnerPageLayout>
  );
}
