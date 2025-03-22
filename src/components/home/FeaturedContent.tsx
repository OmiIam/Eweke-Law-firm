
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const features = [
    {
      id: 1,
      title: "Corporate Law",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris.",
      icon: "👔", // Would be replaced with an actual icon
      link: "/practice-areas/corporate"
    },
    {
      id: 2,
      title: "Litigation & Disputes",
      description: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo.",
      icon: "⚖️", // Would be replaced with an actual icon
      link: "/practice-areas/litigation"
    },
    {
      id: 3,
      title: "Real Estate Law",
      description: "Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis.",
      icon: "🏢", // Would be replaced with an actual icon
      link: "/practice-areas/real-estate"
    },
    {
      id: 4,
      title: "Intellectual Property",
      description: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor.",
      icon: "💡", // Would be replaced with an actual icon
      link: "/practice-areas/ip"
    },
    {
      id: 5,
      title: "Family Law",
      description: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.",
      icon: "👪", // Would be replaced with an actual icon
      link: "/practice-areas/family"
    },
    {
      id: 6,
      title: "Tax Advisory",
      description: "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      icon: "📝", // Would be replaced with an actual icon
      link: "/practice-areas/tax"
    }
  ];

  const slidesToShow = 3;
  const totalSlides = features.length;
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? totalSlides - slidesToShow : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === totalSlides - slidesToShow ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const visibleFeatures = () => {
    const result = [];
    for (let i = activeIndex; i < activeIndex + slidesToShow; i++) {
      result.push(features[i % totalSlides]);
    }
    return result;
  };

  return (
    <section className="bg-white py-16">
      <div className="container-lg">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Practice Areas</h2>
            <p className="text-secondary text-lg">Specialized legal expertise for your unique needs</p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={goToPrev}
              className="p-2 rounded-full border border-bluegray text-bluegray hover:bg-light hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Previous item"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              className="p-2 rounded-full border border-bluegray text-bluegray hover:bg-light hover:border-primary hover:text-primary transition-colors duration-200"
              aria-label="Next item"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)` }}
          >
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="min-w-[33.333%] px-4 transition-opacity duration-300"
              >
                <Link 
                  to={feature.link}
                  className="block bg-light rounded-lg p-8 h-full border border-bluegray/10 hover:shadow-md hover:border-bluegray/30 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center text-2xl text-primary mr-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-bluegray flex-grow mb-4">{feature.description}</p>
                    <div className="flex items-center text-red font-medium">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides - slidesToShow + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-red w-6' : 'bg-bluegray/30'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
