import { Metadata } from "next";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Professional Development | University of Swat" };

const opportunities = [
	{
		label: "WORKSHOP",
		title: "Research Writing Workshop",
		text: "Proposal structure, literature review quality and HEC-aligned academic writing practice.",
	},
	{
		label: "TRAINING",
		title: "Digital Skills for Employability",
		text: "CV clinics, interview practice and portfolio building with department mentors.",
	},
	{
		label: "CERTIFICATION TRACK",
		title: "ORIC Innovation Bootcamp",
		text: "Idea validation, prototype pitching and local problem-solving for valley communities.",
	},
	{
		label: "FACULTY DEVELOPMENT",
		title: "Teaching Excellence Series",
		text: "Classroom engagement, assessment design and continuous quality improvement.",
	},
];

export default function ProfessionalDevelopmentPage() {
	return (
		<InnerPageLayout>
			<section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
				<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
					Training & career growth
				</p>
				<h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">
					Professional Development
				</h1>
				<p className="mt-4 max-w-3xl leading-7 text-gray-600">
					Workshops and learning opportunities for students, graduates and faculty.
				</p>
				<div className="mt-8 grid gap-4 md:grid-cols-2">
					{opportunities.map((item) => (
						<article
							key={item.title}
							className="border border-[#e7e5df] bg-white p-6 transition-all hover:border-brand hover:shadow-[0_12px_28px_rgba(35,54,35,.08)]"
						>
							<p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
								{item.label}
							</p>
							<h2 className="mt-3 text-xl font-medium text-charcoal">
								{item.title}
							</h2>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								{item.text}
							</p>
						</article>
					))}
				</div>
			</section>
		</InnerPageLayout>
	);
}
