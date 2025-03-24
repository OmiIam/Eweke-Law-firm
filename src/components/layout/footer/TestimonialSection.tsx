
import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="bg-accent/90 py-10">
      <div className="container-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold mb-2">Trusted by Clients Across Nigeria</h3>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-accent/50 p-6 rounded-lg backdrop-blur-sm animate-fade-in">
            <blockquote className="text-light/90 italic mb-4">
              "EJ EWEKE & Co provided exceptional legal counsel for our business expansion. Their knowledge of Nigerian corporate law is unmatched."
            </blockquote>
            <p className="font-medium">— Ade Johnson, CEO of Lagos Innovations</p>
          </div>
          
          <div className="bg-accent/50 p-6 rounded-lg backdrop-blur-sm animate-fade-in delay-100">
            <blockquote className="text-light/90 italic mb-4">
              "Their litigation team secured a favorable outcome in our complex land dispute case. Highly professional and thorough."
            </blockquote>
            <p className="font-medium">— Chioma Okafor, Property Developer</p>
          </div>
          
          <div className="bg-accent/50 p-6 rounded-lg backdrop-blur-sm animate-fade-in delay-200">
            <blockquote className="text-light/90 italic mb-4">
              "The intellectual property expertise at EJ EWEKE & Co helped protect our brand throughout West Africa. Excellent service."
            </blockquote>
            <p className="font-medium">— Emeka Nwosu, Creative Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
