
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Associate - Corporate Law",
      location: "Lagos",
      type: "Full-time",
      description: "We are seeking a motivated associate with 2-5 years of experience to join our corporate law practice."
    },
    {
      id: 2,
      title: "Senior Associate - Litigation",
      location: "Abuja",
      type: "Full-time",
      description: "Experienced litigation attorney with 5+ years of experience required for our growing dispute resolution practice."
    },
    {
      id: 3,
      title: "Legal Assistant",
      location: "Lagos",
      type: "Full-time",
      description: "Detail-oriented legal assistant to support our real estate and property law team."
    },
    {
      id: 4,
      title: "Legal Intern",
      location: "Lagos",
      type: "Internship",
      description: "3-6 month internship opportunity for law students looking to gain practical experience in a leading commercial law firm."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/75 to-primary/90"></div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Careers at EJ EWEKE & Co." 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container-lg relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 animate-fade-in">
                <span className="inline-block">Careers at EJ EWEKE & Co.</span>
              </h1>
              <p className="text-light/90 text-lg mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
                Join our team of exceptional legal professionals committed to excellence in legal service delivery.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center font-serif">Why Join Our Team?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-light p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Professional Growth</h3>
                  <p className="text-bluegray">We offer unparalleled opportunities for professional development through challenging work, mentorship from industry-leading attorneys, and continuous learning initiatives.</p>
                </div>
                
                <div className="bg-light p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Collaborative Environment</h3>
                  <p className="text-bluegray">Our firm fosters a collegial and supportive environment where teamwork and knowledge sharing are encouraged and valued.</p>
                </div>
                
                <div className="bg-light p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Diverse Practice Areas</h3>
                  <p className="text-bluegray">With expertise across multiple practice areas, we offer the opportunity to gain exposure to diverse legal challenges and industries.</p>
                </div>
                
                <div className="bg-light p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Work-Life Balance</h3>
                  <p className="text-bluegray">We understand the importance of balance and strive to create a workplace that respects personal time while delivering exceptional client service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Openings */}
        <section className="py-16 bg-light">
          <div className="container-lg">
            <h2 className="text-3xl font-bold mb-8 text-center font-serif">Current Openings</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map(position => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{position.title}</h3>
                      <div className="flex items-center mt-2 text-bluegray text-sm">
                        <span className="mr-4">{position.location}</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="group">
                      <span>Apply Now</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-bluegray">{position.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-bluegray mb-4">Don't see a position that matches your skills?</p>
              <Button variant="default">
                <span>Submit a General Application</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Careers;
