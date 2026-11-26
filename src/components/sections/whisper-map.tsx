import Image from "next/image";
import Link from "next/link";

export function UniversityGuideMapSection() {
  return (
    <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[300px] overflow-hidden border border-[#e7e5df] bg-[#233623] lg:min-h-[420px]">
            <Image
              src="/uos/University of Swat Satellite Campus Map.png"
              alt="Campus drone view for University Guide Map"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17231d]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 border border-white/20 bg-[#17231d]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              Campus View
            </div>
          </div>

          <div className="flex flex-col justify-center border border-[#e7e5df] bg-white p-7 sm:p-9 lg:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Campus navigation</p>
            <h2 className="mt-3 text-3xl font-light text-charcoal md:text-4xl">University Guide Map</h2>
            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              Find your campus, admissions office, department, faculty expert or student service quickly and easily.
            </p>
            <Link
              href="/whisper-map"
              className="mt-8 inline-flex w-fit items-center justify-center border border-brand bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Open University Guide Map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
