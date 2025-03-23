
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ minHeight: '650px' }}
      aria-label="Hero section"
    >
      <div className="relative w-full h-[650px] sm:h-[600px] md:h-[650px]">
        {/* Background Overlay with enhanced gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-primary/85 z-10"></div>
        
        {/* Background Image with improved positioning */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png)`,
            backgroundPosition: '0% 25%'
          }}
        ></div>
        
        {/* Textured overlay pattern */}
        <div className="absolute inset-0 z-5 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
        
        <div className="container-lg relative z-20 flex items-center h-full py-16 md:py-24">
          <div className="max-w-3xl mx-auto md:mx-0 transition-all duration-1000">
            <span className="inline-block py-1 px-3 mb-4 bg-accent text-white text-sm font-medium rounded animate-fade-in">
              EJ EWEKE & Co
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight font-serif animate-fade-in">
              Excellence in Nigerian Legal Representation
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light/90 max-w-2xl animate-slide-in">
              Providing top-tier legal counsel across Corporate Law, Property Law, and Litigation matters in accordance with Nigerian legislation and international best practices.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in">
              <Button 
                asChild
                variant="default"
                className="bg-accent hover:bg-accent-dark text-white font-medium py-6 px-6 rounded-md inline-flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
              >
                <Link to="/contact">
                  <span>Schedule a Consultation</span>
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent border-2 border-light text-white hover:bg-white/20 font-medium py-6 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to="/about">
                  About Our Firm
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
