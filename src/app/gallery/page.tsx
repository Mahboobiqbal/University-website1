import { Metadata } from "next";
import Image from "next/image";
import { InnerPageLayout } from "@/components/layout/inner-page-layout";

export const metadata: Metadata = { title: "Media Gallery | University of Swat" };

const images = [
	[
		"Campus",
		"/uos/campus-main.jpg",
	],
	[
		"Campus Grounds",
		"/uos/campus-detail.jpg",
	],
	[
		"Academic Life",
		"/uos/academic-council.jpg",
	],
	[
		"Learning Spaces",
		"/uos/qec-seminar.jpg",
	],
	[
		"Student Moments",
		"/uos/convocation.jpg",
	],
	[
		"University Events",
		"/uos/seminar.jpg",
	],
	[
		"Valley Views",
		"/uos/campus-detail.jpg",
	],
	[
		"Facilities",
		"/uos/campus-main.jpg",
	],
];

export default function GalleryPage() {
	return (
		<InnerPageLayout>
			<section className="bg-white px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
				<p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
					Campus life
				</p>
				<h1 className="mt-3 text-4xl font-light text-charcoal md:text-5xl">
					Media Gallery
				</h1>
				<p className="mt-4 max-w-3xl leading-7 text-gray-600">
					Campus, academic and community moments from the University of Swat.
				</p>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{images.map(([title, src]) => (
						<figure
							key={title}
							className="group overflow-hidden border border-[#e7e5df] bg-white"
						>
							<div className="relative h-64 overflow-hidden">
								<Image
									src={src}
									alt={title}
									fill
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
									className="object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<figcaption className="p-4 text-sm font-medium text-charcoal">
								{title}
							</figcaption>
						</figure>
					))}
				</div>
			</section>
		</InnerPageLayout>
	);
}
