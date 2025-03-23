
import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from './button';

const StickyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 md:hidden">
      <Button 
        size="icon" 
        className="bg-highlight hover:bg-highlight/90 text-white rounded-full w-14 h-14 shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
        onClick={() => window.location.href = 'tel:+1234567890'}
        aria-label="Call us"
      >
        <Phone size={22} className="animate-pulse-soft" />
      </Button>
      
      <Button 
        size="icon" 
        className="bg-primary hover:bg-primary-light text-white rounded-full w-14 h-14 shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-100"
        onClick={() => window.location.href = '/contact'}
        aria-label="Chat with us"
      >
        <MessageCircle size={22} />
      </Button>
      
      <Button 
        size="icon" 
        className="bg-accent hover:bg-accent-light text-white rounded-full w-14 h-14 shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:-translate-y-1 animate-fade-in delay-200"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUpRight size={22} />
      </Button>
    </div>
  );
};

export default StickyContact;
