"use client";

import { Hero } from "@/components/home/Hero";
import { Mission } from "@/components/home/Mission";
import { Supporters } from "@/components/home/Supporters";
import { StatsCounter } from "@/components/home/StatsCounter";
import { LatestEventTeaser } from "@/components/home/LatestEventTeaser";
import { VideoSection } from "@/components/home/VideoSection";
import { Testimonials } from "@/components/home/Testimonials";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <Mission />
      <FeaturedPrograms />
      <StatsCounter />
      <VideoSection />
      <Testimonials />
      <LatestEventTeaser />
      <Supporters />
    </main>
  );
}
