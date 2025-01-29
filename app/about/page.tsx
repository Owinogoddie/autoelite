'use client'
import { HeroSection } from './_components/HeroSection';
import { MissionVision } from './_components/MissionVision';
import { TeamSection } from './_components/TeamSection';
import { LocationSection } from './_components/LocationSection';
import { TestimonialsSection } from './_components/TestimonialsSection';

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <MissionVision />
      <TeamSection />
      <LocationSection />
      <TestimonialsSection />
    </main>
  );
}