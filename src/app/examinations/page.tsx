import { Metadata } from "next";
import Link from "next/link";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Examinations | University of Swat" };

const items = [
	{
		title: "Controller of Examinations",
		text: "Examination scheduling, conduct, records and transcripts.",
		href: "/administration/controller-of-examination",
	},
	{
		title: "Online Examination System",
		text: "Open the official University of Swat examination portal.",
		href: "http://exam.uswat.edu.pk/",
		external: true,
	},
	{
		title: "Academic Calendar",
		text: "Review semester, event and academic planning dates.",
		href: "/events",
	},
	{
		title: "Downloads",
		text: "Forms, policies and examination-related documents.",
		href: "/downloads",
	},
];

export default function ExaminationsPage() {
	return (
		<InnerPageLayout>
			<section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
				<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
					Student services
				</p>
				<h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">
					Examinations
				</h1>
				<p className="mt-4 max-w-3xl leading-7 text-gray-600">
					Find official examination services and university records from one page.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-2">
					{items.map((item) => (
						<Link
							key={item.title}
							href={item.href}
							target={item.external ? "_blank" : undefined}
							rel={
								item.external
									? "noopener noreferrer"
									: undefined
							}
							className="border border-[#e7e5df] p-6 transition-all hover:border-brand hover:shadow-[0_12px_28px_rgba(35,54,35,.08)]"
						>
							<h2 className="text-xl font-medium text-charcoal">
								{item.title}
							</h2>
							<p className="mt-3 text-sm leading-6 text-gray-600">
								{item.text}
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
