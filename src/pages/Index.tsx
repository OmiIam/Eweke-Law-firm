
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import FeaturedContent from '../components/home/FeaturedContent';
import QuickLinks from '../components/home/QuickLinks';
import NewsSection from '../components/home/NewsSection';
import BlogSection from '../components/home/BlogSection';
import Footer from '../components/layout/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });

    // Refresh AOS on window resize for responsiveness
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedContent />
        <QuickLinks />
        <NewsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
