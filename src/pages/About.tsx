
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { ArrowRight, Award, Users, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/80 z-0"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light animate-fade-in">About Our Firm</h1>
              <p className="text-lg text-light/90 max-w-2xl mb-8 animate-slide-in">
                EJ EWEKE & Co is a leading Nigerian law firm with a reputation for excellence in legal representation and client service across Nigeria's diverse legal landscape.
              </p>
              <div className="w-20 h-1 bg-accent animate-slide-in"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-offwhite">
          <div className="container-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-bluegray mb-4">
                  Founded in 2015 by Ejiofor Eweke, our firm has grown from a small practice focused on corporate law to become one of Nigeria's most respected legal establishments with expertise spanning multiple practice areas.
                </p>
                <p className="text-bluegray mb-6">
                  Based in Lagos with satellite offices in Abuja and Port Harcourt, we serve clients throughout Nigeria's 36 states and beyond. Our team combines deep knowledge of Nigerian legal frameworks with international best practices to deliver results-oriented legal solutions.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">8+</span>
                    <span className="text-bluegray">Years of Excellence</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">200+</span>
                    <span className="text-bluegray">Cases Won</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">15+</span>
                    <span className="text-bluegray">Legal Professionals</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-accent">3</span>
                    <span className="text-bluegray">Offices in Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container-lg">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-bluegray max-w-3xl mx-auto">
                Our practice is built on a foundation of values that guide every client interaction and legal strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-light p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="100">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-bluegray">We maintain the highest standards of legal practice in accordance with the Nigerian Bar Association's professional ethics.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="200">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
                <p className="text-bluegray">Our practice is built around understanding and addressing the unique needs of each client within Nigeria's legal context.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="300">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-bluegray">We operate with transparency and ethical standards that meet and exceed the requirements of the Legal Practitioners Act of Nigeria.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm border border-cream" data-aos="fade-up" data-aos-delay="400">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-bluegray">We recognize the time-sensitive nature of legal matters and deliver prompt, effective solutions navigating Nigeria's judicial timelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent py-16">
          <div className="container-lg">
            <div className="bg-bluegray/10 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Ready to Work With Us?</h2>
                <p className="text-lg text-light/90 mb-8">
                  Let our team of Nigerian legal experts help you navigate your legal challenges with clarity and confidence.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-light hover:bg-offwhite text-accent font-medium py-3 px-6 rounded-md inline-flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="mr-2">Contact Our Team</span>
                  <ArrowRight size={18} />
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
