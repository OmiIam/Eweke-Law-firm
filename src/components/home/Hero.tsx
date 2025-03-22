
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ minHeight: '650px' }}
      aria-label="Hero section"
    >
      <div className="relative w-full h-[650px] sm:h-[600px] md:h-[650px]">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/80 z-10"></div>
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 transform scale-105"
          style={{ 
            backgroundImage: `url(public/lovable-uploads/a5e29508-5ed9-4a41-99ef-e2df9a5236a8.png)`,
            animation: 'kenBurns 20s ease-in-out infinite'
          }}
        ></div>
        
        <div className="container-lg relative z-20 flex items-center h-full py-16 md:py-24">
          <div className="max-w-3xl mx-auto md:mx-0 transition-all duration-1000 transform animate-fade-in">
            <span className="inline-block py-1 px-3 mb-4 bg-accent text-white text-sm font-medium rounded animate-fade-in">
              EJ EWEKE & Co
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight animate-slide-in">
              Excellence in Nigerian Legal Representation
            </h1>
            <p className="text-lg md:text-xl mb-8 text-light/90 max-w-2xl animate-slide-in">
              Providing top-tier legal counsel across Corporate Law, Property Law, and Litigation matters in accordance with Nigerian legislation and international best practices.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in">
              <Link 
                to="/contact" 
                className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md inline-flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link 
                to="/about" 
                className="bg-transparent border border-light text-white hover:bg-white/20 font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                About Our Firm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
