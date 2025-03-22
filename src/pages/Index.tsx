
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import FeaturedContent from '../components/home/FeaturedContent';
import QuickLinks from '../components/home/QuickLinks';
import NewsSection from '../components/home/NewsSection';
import BlogSection from '../components/home/BlogSection';
import Footer from '../components/layout/Footer';

const Index = () => {
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
