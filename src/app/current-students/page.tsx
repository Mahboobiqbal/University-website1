import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Current Students | University of Swat" };

const services = [
	{
		title: "Campus Management System",
		description: "Registration, student records and academic services.",
		href: "https://cms1.uswat.edu.pk/",
		external: true,
	},
	{
		title: "Examinations",
		description:
			"Date sheets, results, transcripts and examination office information.",
		href: "/examinations",
	},
	{
		title: "Scholarships",
		description: "Merit and need-based scholarship opportunities.",
		href: "https://uswat.edu.pk/category/announcements/",
		external: true,
	},
	{
		title: "Downloads",
		description: "Forms, policies, regulations and official documents.",
		href: "/downloads",
	},
	{
		title: "Central Library",
		description: "Library resources and learning support.",
		href: "/library",
	},
	{
		title: "Academic Advising",
		description: "Department and faculty guidance for academic progress.",
		href: "/experts",
	},
];

export default function CurrentStudentsPage() {
	return (
		<InnerPageLayout>
			<section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
				<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
					Student services
				</p>
				<h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">
					Current Students
				</h1>
				<p className="mt-4 max-w-3xl leading-7 text-gray-600">
					Access essential academic, examination, scholarship and campus services
					from one organized starting point.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<Link
							key={service.title}
							href={service.href}
							target={service.external ? "_blank" : undefined}
							rel={
								service.external
									? "noopener noreferrer"
									: undefined
							}
							className="group border border-[#e7e5df] bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,.10)]"
						>
							<h2 className="text-lg font-medium text-charcoal group-hover:text-brand">
								{service.title}
							</h2>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								{service.description}
							</p>
							<span className="mt-5 block text-sm font-medium text-brand">
								Open &rarr;
							</span>
						</Link>
					))}
				</div>
			</section>
		</InnerPageLayout>
	);
}
