
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-light">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-serif">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: April 9, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                EJ EWEKE & Co. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy informs you about how we look after your personal data when you visit our website and tells 
                you about your privacy rights and how the law protects you.
              </p>
              
              <h2>2. The Data We Collect About You</h2>
              <p>
                Personal data means any information about an individual from which that person can be identified. We may collect, 
                use, store, and transfer different kinds of personal data about you, including:
              </p>
              <ul>
                <li>Identity Data: includes name, title, date of birth</li>
                <li>Contact Data: includes email address, telephone numbers, and address</li>
                <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting</li>
                <li>Usage Data: includes information about how you use our website and services</li>
              </ul>
              
              <h2>3. How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul>
                <li>To provide legal services requested by you</li>
                <li>To manage our relationship with you</li>
                <li>To improve our website, services, and marketing strategy</li>
                <li>To recommend services that may be of interest to you</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
                used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those 
                employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              
              <h2>5. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
                including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              
              <h2>6. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
              </p>
              <ul>
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated 
                "Last updated" date and the updated version will be effective as soon as it is accessible.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p>
                EJ EWEKE & Co.<br />
                Lagos, Nigeria<br />
                Email: privacy@ejeweke.com<br />
                Phone: +234 123 456 7890
              </p>
              
              <p>
                <Link to="/contact" className="text-info hover:text-info/80">
                  Contact us with privacy questions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PrivacyPolicy;
