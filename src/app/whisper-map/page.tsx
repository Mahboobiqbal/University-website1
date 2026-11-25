import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, GraduationCap, Mail, MapPin, Search } from "lucide-react";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "University Guide Map | University of Swat" };

const guides = [
	{
		category: "Admissions",
		question: "Where should I begin my application?",
		answer: "Review programs, eligibility and the admission roadmap before applying.",
		href: "/admissions",
		icon: GraduationCap,
	},
	{
		category: "Campus",
		question: "Which campus should I visit?",
		answer: "Explore the Main Campus and Women’s Campus, including locations and facilities.",
		href: "/campuses",
		icon: Building2,
	},
	{
		category: "Faculty",
		question: "Who leads or teaches in a department?",
		answer: "Find faculty profiles, academic titles and areas of expertise.",
		href: "/experts",
		icon: Search,
	},
	{
		category: "Examinations",
		question: "Where can I find examination services?",
		answer: "Navigate to date sheets, results, transcripts and controller information.",
		href: "/examinations",
		icon: Mail,
	},
	{
		category: "Programs",
		question: "Which program is right for me?",
		answer: "Search undergraduate, graduate and doctoral study pathways.",
		href: "/programs",
		icon: GraduationCap,
	},
	{
		category: "Visit",
		question: "How do I contact or visit the university?",
		answer: "Get campus directions, office details and University of Swat contact information.",
		href: "/contact",
		icon: MapPin,
	},
];

export default function UniversityGuideMapPage() {
	return (
		<InnerPageLayout>
			<section className="overflow-hidden bg-[#233623]">
				<div className="grid lg:grid-cols-[1.05fr_.95fr]">
					<div className="px-5 py-10 sm:px-8 lg:px-12 lg:py-16">
						<p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d2bd]">
							Campus navigation
						</p>
						<h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-white md:text-5xl xl:text-6xl">
							University Guide Map
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-7 text-white/80">
							Find the right office, campus, program or student service quickly with a simple guide designed for
							applicants and visitors.
						</p>
						<Link
							href="/contact"
							className="mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#233623]"
						>
							Plan a Visit{" "}
							<ArrowUpRight className="h-4 w-4" />
						</Link>
					</div>
					<div className="relative min-h-[320px] lg:min-h-[430px]">
						<Image
							src="/uos/University of Swat Satellite Campus Map.png"
							alt="University of Swat campus guide view"
							fill
							priority
							sizes="(max-width: 1024px) 100vw, 48vw"
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-[#233623]/35 to-transparent" />
					</div>
				</div>
			</section>

			<section className="bg-white px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
							Quick directions
						</p>
						<h2 className="mt-2 text-3xl font-light text-charcoal md:text-4xl">
							What are you looking for?
						</h2>
					</div>
					<p className="max-w-md text-sm leading-6 text-gray-500">
						Choose a topic below to open the relevant University of Swat page.
					</p>
				</div>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{guides.map((guide) => {
						const Icon = guide.icon;
						return (
							<Link
								key={guide.question}
								href={guide.href}
								className="group border border-[#e7e5df] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_14px_30px_rgba(35,54,35,.10)]"
							>
								<div className="flex items-start justify-between gap-4">
									<span className="flex h-11 w-11 items-center justify-center border border-brand/20 bg-brand/5 text-brand">
										<Icon className="h-5 w-5" />
									</span>
									<ArrowUpRight className="h-5 w-5 text-gray-300 transition-colors group-hover:text-brand" />
								</div>
								<p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand">
									{guide.category}
								</p>
								<h3 className="mt-2 text-xl font-medium leading-snug text-charcoal group-hover:text-brand">
									{guide.question}
								</h3>
								<p className="mt-3 text-sm leading-6 text-gray-600">{guide.answer}</p>
							</Link>
						);
					})}
				</div>
			</section>
		</InnerPageLayout>
	);
}
