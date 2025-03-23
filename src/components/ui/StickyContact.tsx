
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './button';

const StickyContact = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-40 md:hidden">
      <Button 
        size="icon" 
        className="bg-accent hover:bg-accent-dark text-white rounded-full w-12 h-12 shadow-lg animate-fade-in"
        onClick={() => window.location.href = 'tel:+1234567890'}
        aria-label="Call us"
      >
        <Phone size={20} />
      </Button>
      
      <Button 
        size="icon" 
        className="bg-primary hover:bg-accent text-white rounded-full w-12 h-12 shadow-lg animate-fade-in delay-100"
        onClick={() => window.location.href = '/contact'}
        aria-label="Chat with us"
      >
        <MessageCircle size={20} />
      </Button>
    </div>
  );
};

export default StickyContact;
