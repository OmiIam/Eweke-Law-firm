
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PracticeAreaLinks = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <h3 className="text-xl font-bold mb-6 relative font-serif">
        <span className="relative z-10">Practice Areas</span>
        <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-accent z-0"></span>
      </h3>
      
      <ul className="space-y-3">
        <li>
          <Link to="/practice-areas/corporate" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Corporate Law</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas/litigation" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Litigation & Disputes</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas/real-estate" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Real Estate Law</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas/ip" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Intellectual Property</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas/family" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Family Law</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas/tax" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>Tax Advisory</span>
          </Link>
        </li>
        <li>
          <Link to="/practice-areas" className="text-light/80 hover:text-accent flex items-center transition-colors duration-200">
            <ArrowRight size={14} className="mr-2" />
            <span>View All Practice Areas</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PracticeAreaLinks;
