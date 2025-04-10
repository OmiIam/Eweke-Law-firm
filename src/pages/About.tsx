
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight, Award, Users, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/80 z-0"></div>
          <div className="container-lg relative z-10 px-4 sm:px-6">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-light animate-fade-in">About Our Firm</h1>
              <p className="text-base md:text-lg text-light/90 max-w-2xl mb-6 md:mb-8 animate-slide-in">
                EJ EWEKE & Co is a leading Nigerian law firm with a reputation for excellence in legal representation and client service across Nigeria's diverse legal landscape.
              </p>
              <div className="w-20 h-1 bg-accent animate-slide-in"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-10 md:py-16 bg-offwhite">
          <div className="container-lg px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div data-aos="fade-right">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="public/lovable-uploads/6c0fdb5a-8d8e-4d74-b98f-10c0cf6a4975.png" 
                    alt="EJ EWEKE & Co team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div data-aos="fade-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 mt-4 md:mt-0">Our Story</h2>
                <p className="text-bluegray mb-4 text-sm md:text-base">
                  Founded in 2015 by Ejiofor Eweke, our firm has grown from a small practice focused on corporate law to become one of Nigeria's most respected legal establishments with expertise spanning multiple practice areas.
                </p>
                <p className="text-bluegray mb-6 text-sm md:text-base">
                  Based in Lagos with satellite offices in Abuja and Port Harcourt, we serve clients throughout Nigeria's 36 states and beyond. Our team combines deep knowledge of Nigerian legal frameworks with international best practices to deliver results-oriented legal solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-accent">8+</span>
                    <span className="text-bluegray text-sm md:text-base">Years of Excellence</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-accent">200+</span>
                    <span className="text-bluegray text-sm md:text-base">Cases Won</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-accent">15+</span>
                    <span className="text-bluegray text-sm md:text-base">Legal Professionals</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl md:text-3xl font-bold text-accent">3</span>
                    <span className="text-bluegray text-sm md:text-base">Offices in Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 md:py-16 bg-white">
          <div className="container-lg px-4 sm:px-6">
            <div className="text-center mb-8 md:mb-12" data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Core Values</h2>
              <p className="text-bluegray max-w-3xl mx-auto text-sm md:text-base">
                Our practice is built on a foundation of values that guide every client interaction and legal strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="bg-light p-4 md:p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="100">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-bluegray text-sm md:text-base">We maintain the highest standards of legal practice in accordance with the Nigerian Bar Association's professional ethics.</p>
              </div>
              
              <div className="bg-light p-4 md:p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="200">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Client-Focused</h3>
                <p className="text-bluegray text-sm md:text-base">Our practice is built around understanding and addressing the unique needs of each client within Nigeria's legal context.</p>
              </div>
              
              <div className="bg-light p-4 md:p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-bluegray text-sm md:text-base">We operate with transparency and ethical standards that meet and exceed the requirements of the Legal Practitioners Act of Nigeria.</p>
              </div>
              
              <div className="bg-light p-4 md:p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="400">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-bluegray text-sm md:text-base">We recognize the time-sensitive nature of legal matters and deliver prompt, effective solutions navigating Nigeria's judicial timelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-10 md:py-16">
          <div className="container-lg px-4 sm:px-6">
            <div className="bg-bluegray/10 rounded-lg p-6 md:p-8 lg:p-12">
              <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-light">Ready to Work With Us?</h2>
                <p className="text-base md:text-lg text-light/90 mb-6 md:mb-8">
                  Let our team of Nigerian legal experts help you navigate your legal challenges with clarity and confidence.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-light hover:bg-offwhite text-accent font-medium py-2 md:py-3 px-4 md:px-6 text-sm md:text-base rounded-md inline-flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mr-2">Contact Our Team</span>
                  <ArrowRight size={isMobile ? 16 : 18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default About;
