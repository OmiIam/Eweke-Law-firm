
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ minHeight: isMobile ? '500px' : '600px' }}
      aria-label="Hero section"
    >
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px]">
        {/* Reduced gradient overlay opacity for better image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/75 via-primary/60 to-primary/50 z-10"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-10000"
          style={{ 
            backgroundImage: `url(/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png)`,
            backgroundPosition: isMobile ? '60% 25%' : '0% 25%',
            animation: 'kenBurns 20s ease-in-out infinite alternate'
          }}
        ></div>
        
        {/* Reduced textured overlay pattern opacity */}
        <div className="absolute inset-0 z-5 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]"></div>
        
        <div className="container-lg relative z-20 flex items-center h-full pt-12 pb-16">
          <div className="max-w-3xl mx-auto md:mx-0 transition-all duration-1000 px-4 sm:px-0">
            <span className="inline-block py-1 px-3 mb-3 md:mb-4 bg-highlight text-white text-xs md:text-sm font-medium rounded-full tracking-wider shadow-sm animate-fade-in">
              PREMIER LEGAL SERVICES
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 text-white leading-tight tracking-tight font-serif animate-fade-in drop-shadow-md">
              Excellence in <span className="text-cream">Nigerian</span> Legal Representation
            </h1>
            <p className="text-base md:text-lg mb-5 md:mb-7 text-light/95 max-w-2xl leading-relaxed animate-slide-in font-medium">
              Providing top-tier legal counsel across Corporate Law, Property Law, and Litigation matters in accordance with Nigerian legislation and international best practices.
            </p>
            <div className="flex flex-wrap gap-3 animate-slide-in">
              <Button 
                asChild
                variant="highlight"
                className="py-2 px-4 md:py-5 md:px-6 text-sm md:text-base font-semibold rounded-md inline-flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-button-hover shadow-button group"
              >
                <Link to="/appointment">
                  <span>Schedule a Consultation</span>
                  <ChevronRight size={isMobile ? 16 : 20} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="bg-transparent border-2 border-light/80 text-white hover:bg-white/10 font-semibold py-2 px-4 md:py-5 md:px-6 text-sm md:text-base rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-button-hover shadow-button"
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
