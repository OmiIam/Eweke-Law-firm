
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-light">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-serif">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: April 9, 2025</p>
              
              <h2>1. Introduction</h2>
              <p>
                These terms and conditions govern your use of the EJ EWEKE & Co. website and the services provided 
                through this website. By using our website, you accept these terms and conditions in full. If you 
                disagree with any part of these terms and conditions, you must not use our website.
              </p>
              
              <h2>2. License to Use Website</h2>
              <p>
                Unless otherwise stated, EJ EWEKE & Co. and/or its licensors own the intellectual property rights in the 
                website and material on the website. Subject to the license below, all these intellectual property rights 
                are reserved.
              </p>
              <p>
                You may view, download for caching purposes only, and print pages from the website for your own personal 
                use, subject to the restrictions set out below and elsewhere in these terms and conditions.
              </p>
              
              <h2>3. Restrictions</h2>
              <p>You must not:</p>
              <ul>
                <li>Republish material from this website (including republication on another website)</li>
                <li>Sell, rent, or sub-license material from the website</li>
                <li>Reproduce, duplicate, copy, or otherwise exploit material on our website for a commercial purpose</li>
                <li>Redistribute material from this website except for content specifically and expressly made available for redistribution</li>
              </ul>
              
              <h2>4. Acceptable Use</h2>
              <p>
                You must not use our website in any way that causes, or may cause, damage to the website or impairment of 
                the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent, or harmful.
              </p>
              
              <h2>5. Limitations of Liability</h2>
              <p>
                The information on this website is provided free of charge, and you acknowledge that it would be unreasonable 
                to hold us liable in respect of this website and the information on this website.
              </p>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions 
                relating to our website and the use of this website.
              </p>
              
              <h2>6. Variation</h2>
              <p>
                We may revise these terms and conditions from time to time. The revised terms and conditions shall apply 
                to the use of our website from the date of publication of the revised terms and conditions on our website.
              </p>
              
              <h2>7. Governing Law and Jurisdiction</h2>
              <p>
                These terms and conditions shall be governed by and construed in accordance with the laws of Nigeria, 
                and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction 
                of the courts of Nigeria.
              </p>
              
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about these terms of service, please contact us at:
              </p>
              <p>
                EJ EWEKE & Co.<br />
                Lagos, Nigeria<br />
                Email: legal@ejeweke.com<br />
                Phone: +234 123 456 7890
              </p>
              
              <p>
                <Link to="/contact" className="text-info hover:text-info/80">
                  Contact us with questions about our terms
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

export default TermsOfService;
