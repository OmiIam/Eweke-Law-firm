
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterAndSocial = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="300">
      <h3 className="text-xl font-bold mb-6 relative font-serif">
        <span className="relative z-10">Newsletter</span>
        <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-accent z-0"></span>
      </h3>
      <p className="text-light/80 mb-6">
        Subscribe to our newsletter for the latest Nigerian legal updates and insights.
      </p>
      <form className="space-y-3">
        <Input 
          type="email" 
          placeholder="Your Email Address" 
          className="px-4 py-3 rounded-md bg-dark border border-bluegray/30 text-white focus:outline-none focus:border-accent"
        />
        <Button 
          type="submit" 
          className="bg-accent hover:bg-accent-dark text-white font-medium w-full transition-colors duration-200"
        >
          Subscribe
        </Button>
      </form>
      
      <div className="mt-8">
        <h4 className="text-lg font-medium mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-accent transition-colors duration-200 transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-dark flex items-center justify-center hover:bg-accent transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAndSocial;
