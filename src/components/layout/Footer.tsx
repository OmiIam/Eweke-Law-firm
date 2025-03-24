
import React from 'react';
import TestimonialSection from './footer/TestimonialSection';
import CompanyInfo from './footer/CompanyInfo';
import QuickLinks from './footer/QuickLinks';
import PracticeAreaLinks from './footer/PracticeAreaLinks';
import NewsletterAndSocial from './footer/NewsletterAndSocial';
import Copyright from './footer/Copyright';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Testimonial/Trust Section */}
      <TestimonialSection />
      
      {/* Main Footer Content */}
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <CompanyInfo />
          
          {/* Quick Links */}
          <QuickLinks />
          
          {/* Practice Areas */}
          <PracticeAreaLinks />
          
          {/* Newsletter & Social Media */}
          <NewsletterAndSocial />
        </div>
      </div>
      
      {/* Bottom Bar with Copyright */}
      <Copyright />
    </footer>
  );
};

export default Footer;
