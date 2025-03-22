
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Excellence in Legal Representation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
      cta: "Schedule a Consultation",
      link: "/contact"
    },
    {
      id: 2,
      title: "Protecting Your Interests",
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      cta: "Our Practice Areas",
      link: "/practice-areas"
    },
    {
      id: 3,
      title: "Committed to Your Success",
      description: "Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna.",
      cta: "Meet Our Team",
      link: "/attorneys"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative bg-primary text-white overflow-hidden" style={{ minHeight: '580px' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/80 z-10"></div>
      
      {/* Background Image (would be replaced with actual image in production) */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center z-0"></div>
      
      <div className="container-lg relative z-20 py-20 md:py-32">
        <div className="max-w-3xl mx-auto md:mx-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            >
              <span className="inline-block py-1 px-3 mb-4 bg-accent text-white text-sm font-medium rounded">EJ EWEKE & Co</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-light/90 max-w-2xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to={slide.link} 
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md inline-flex items-center space-x-2 transition-all duration-200"
                >
                  <span>{slide.cta}</span>
                  <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-transparent border border-light text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-all duration-200"
                >
                  About Our Firm
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent w-8' : 'bg-white/50'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
