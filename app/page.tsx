'use client'
// src/app/page.tsx
import { Hero } from './_components/Hero';
import { FeaturedVehicles } from './_components/FeaturedVehicles';
import { WhyChooseUs } from './_components/WhyChooseUs';
import { Testimonials } from './_components/Testimonials';
import { Stats } from './_components/Stats';
import { CallToAction } from './_components/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedVehicles />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CallToAction />
    </main>
  );
}