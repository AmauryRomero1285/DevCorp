// src/pages/Projects.jsx
import React from 'react';
import HeroSection from '../Projects/HeroSection/HeroSection';
import FeaturedStories from '../Projects/FeaturedStories/FeaturesStories';
import PortfolioAndTestimonials from '../Projects/PortfolioAndTestimonials/PortafolioAndTestimonials';

export default function Projects() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedStories />
      <PortfolioAndTestimonials />
    </div>
  );
}