import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      {/* Testimonial/Trust Section */}
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
      
      {/* Main Footer Content */}
      <div className="container-lg py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-6 font-serif">
              EJ EWEKE <span className="text-red">&</span> Co
            </h2>
            <p className="text-light/80 mb-6">
              A premier Nigerian law firm providing comprehensive legal services with expertise in corporate law, litigation, and property matters throughout Nigeria and West Africa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start group">
                <Phone size={18} className="text-accent mr-3 mt-1 group-hover:text-accent-dark transition-colors" />
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+1234567890" className="text-light/80 hover:text-accent transition-colors duration-200">
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="text-accent mr-3 mt-1" />
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:info@ejeweke.com" className="text-light/80 hover:text-accent transition-colors duration-200">
                    info@ejeweke.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="text-accent mr-3 mt-1" />
                <div>
                  <p className="font-medium">Visit Us</p>
                  <address className="text-light/80 not-italic">
                    123 Legal Street<br />
                    New York, NY 10001
                  </address>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links and Practice Areas sections - keep existing code with enhanced styling */}
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
          
          {/* Newsletter - Enhanced design */}
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
        </div>
      </div>
      
      {/* Bottom Bar - keep existing code */}
      <div className="bg-dark py-6">
        <div className="container-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-light/60 text-sm">
              &copy; {currentYear} EJ EWEKE & Co. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-6 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-light/60 hover:text-accent transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-light/60 hover:text-accent transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-light/60 hover:text-accent transition-colors duration-200">
                    Legal Disclaimer
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-light/60 hover:text-accent transition-colors duration-200">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
