
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuickLinks = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <h3 className="text-xl font-bold mb-6 relative font-serif">
        <span className="relative z-10">Quick Links</span>
        <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-accent z-0"></span>
      </h3>
      
      <ul className="space-y-3">
        <li>
          <Link to="/about" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>About Us</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Practice Areas</span>
          </Link>
        </li>
        <li>
          <Link to="/attorneys" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Our Attorneys</span>
          </Link>
        </li>
        <li>
          <Link to="/news" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Latest News</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/careers" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Careers</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Contact Us</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
