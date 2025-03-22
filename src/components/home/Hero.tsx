
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState<NodeJS.Timeout | null>(null);
  
  const slides = [
    {
      id: 1,
      title: "Excellence in Nigerian Legal Representation",
      description: "Providing top-tier legal counsel across Corporate Law, Property Law, and Litigation matters in accordance with Nigerian legislation and international best practices.",
      cta: "Schedule a Consultation",
      link: "/contact",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Protecting Your Interests in Nigeria",
      description: "Our team of advocates specializes in Nigerian commercial law, tax regulations, and dispute resolution to safeguard your business interests in Nigeria's dynamic economy.",
      cta: "Our Practice Areas",
      link: "/practice-areas",
      image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Committed to Your Success",
      description: "With over 8 years of experience navigating Nigeria's complex legal landscape, EJ EWEKE & Co has established a reputation for excellence in providing strategic legal solutions.",
      cta: "Meet Our Team",
      link: "/attorneys",
      image: "public/lovable-uploads/6c0fdb5a-8d8e-4d74-b98f-10c0cf6a4975.png"
    }
  ];

  // Set up autoplay
  useEffect(() => {
    const startAutoplay = () => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      setAutoplay(interval);
      return interval;
    };

    const interval = startAutoplay();
    
    // Cleanup
    return () => {
      if (autoplay) clearInterval(autoplay);
      clearInterval(interval);
    };
  }, [slides.length]);

  // Handle manual navigation
  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    // Reset autoplay when manually changing slides
    if (autoplay) {
      clearInterval(autoplay);
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      setAutoplay(interval);
    }
  };

  return (
    <section 
      className="relative overflow-hidden" 
      style={{ minHeight: '650px' }}
      aria-label="Hero section"
    >
      <Carousel 
        className="w-full h-full" 
        opts={{
          loop: true,
          align: "start",
        }}
        setApi={(api) => {
          api?.on("select", () => {
            const selectedSlide = api.selectedScrollSnap();
            setCurrentSlide(selectedSlide);
          });
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-[650px] sm:h-[600px] md:h-[650px]">
              <div className="relative w-full h-full">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-primary/80 z-10"></div>
                
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 transform scale-105"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    animation: currentSlide === index ? 'kenBurns 20s ease-in-out' : 'none'
                  }}
                ></div>
                
                <div className="container-lg relative z-20 flex items-center h-full py-16 md:py-24">
                  <div 
                    className={cn(
                      "max-w-3xl mx-auto md:mx-0 transition-all duration-1000 transform",
                      currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    )}
                  >
                    <span className="inline-block py-1 px-3 mb-4 bg-accent text-white text-sm font-medium rounded animate-fade-in">
                      EJ EWEKE & Co
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight animate-slide-in">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-light/90 max-w-2xl animate-slide-in">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 animate-slide-in">
                      <Link 
                        to={slide.link} 
                        className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md inline-flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                      >
                        <span>{slide.cta}</span>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
                currentSlide === index ? 'bg-accent w-10' : 'bg-white/60 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : "false"}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
