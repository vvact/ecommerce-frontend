// HomePage.jsx
import HeroCarousel from "../components/hero/HeroCarousel";
import TopCategories from "../components/categories/TopCategories";
import FeaturedSection from "@/components/FeaturedSection";
import BrandStory from "@/components/BrandStory";
import Testimonials from "../components/testimonials/Testimonials";

import InstagramGallery from "../components/instagram/InstagramGallery";
import NewsletterSignup from "../components/newsletter/NewsletterSignup";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <TopCategories />
      <FeaturedSection />
      <BrandStory />
      <Testimonials />
      <InstagramGallery />
      <NewsletterSignup />
      {/* Next sections go here */}
    </div>
  );
}
