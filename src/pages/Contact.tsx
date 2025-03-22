
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/80 z-0"></div>
          <div className="container-lg relative z-10">
            <div className="max-w-3xl" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-light animate-fade-in">Contact Us</h1>
              <p className="text-lg text-light/90 max-w-2xl mb-8 animate-slide-in">
                Our team of Nigerian legal experts is ready to assist you. Reach out to discuss your legal needs and how we can help.
              </p>
              <div className="w-20 h-1 bg-accent animate-slide-in"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-offwhite">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-sm p-8 order-2 lg:order-1" data-aos="fade-right">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-bluegray mb-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-bluegray mb-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bluegray mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-bluegray mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bluegray mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-cream rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Please provide details about your legal inquiry"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-md inline-flex items-center space-x-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="order-1 lg:order-2" data-aos="fade-left">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Our Locations</h3>
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium">Lagos Office (Headquarters)</p>
                            <p className="text-bluegray">Plot 12, Victoria Island Business District, Lagos, Nigeria</p>
                          </div>
                          <div>
                            <p className="font-medium">Abuja Office</p>
                            <p className="text-bluegray">No. 5 Wuse II, Central Business District, Abuja, Nigeria</p>
                          </div>
                          <div>
                            <p className="font-medium">Port Harcourt Office</p>
                            <p className="text-bluegray">15 Aba Road, Port Harcourt, Rivers State, Nigeria</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Phone Numbers</h3>
                        <p className="text-bluegray mb-2">General Inquiries: +234 (0) 812 345 6789</p>
                        <p className="text-bluegray mb-2">Client Services: +234 (0) 812 345 6790</p>
                        <p className="text-bluegray">Emergency Legal Assistance: +234 (0) 812 345 6791</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Email Addresses</h3>
                        <p className="text-bluegray mb-2">General Inquiries: info@ejeweke.com</p>
                        <p className="text-bluegray mb-2">Client Services: clients@ejeweke.com</p>
                        <p className="text-bluegray">Media Relations: media@ejeweke.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-accent">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                          <Clock className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                        <p className="text-bluegray mb-2">Monday - Friday: 8:00 AM - 6:00 PM WAT</p>
                        <p className="text-bluegray mb-2">Saturday: 10:00 AM - 2:00 PM WAT</p>
                        <p className="text-bluegray">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Contact;
