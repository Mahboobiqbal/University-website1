import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProgramsSection } from "@/components/sections/programs";
import { ResearchSection } from "@/components/sections/research";
import { StatsSection } from "@/components/sections/stats";
import { EventsSection } from "@/components/sections/events";
import { NewsSection } from "@/components/sections/news";
import { LifeSection } from "@/components/sections/life";
import { RankingSection } from "@/components/sections/ranking";
import { TabsList } from "@/components/sections/tabs-list";
import { QuickAccessSection } from "@/components/sections/quick-access";
import { VCMessageSection } from "@/components/sections/vc-message";
import { AdmissionsSection } from "@/components/sections/admissions";
import { UniversityGuideMapSection } from "@/components/sections/whisper-map";

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ResearchSection />
      <StatsSection />
      <EventsSection />
      <AdmissionsSection compact />
      <UniversityGuideMapSection />
      <NewsSection />
      <TabsList />
      <QuickAccessSection />
      <VCMessageSection />
      <LifeSection />
      <RankingSection />
    </div>
  );
}