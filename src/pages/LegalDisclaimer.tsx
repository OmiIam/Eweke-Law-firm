
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/ui/chatbot';
import { Link } from 'react-router-dom';

const LegalDisclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-light">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-8 font-serif">Legal Disclaimer</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>Last updated: April 9, 2025</p>
              
              <h2>General Disclaimer</h2>
              <p>
                The information provided on this website is for general informational purposes only. It is not intended to 
                constitute legal advice or create an attorney-client relationship. You should not rely on any information 
                contained on this website without first seeking advice from a qualified attorney licensed to practice in 
                your jurisdiction.
              </p>
              
              <h2>No Attorney-Client Relationship</h2>
              <p>
                Visiting our website, sending us an email, or using any of the contact forms on this website does not create 
                an attorney-client relationship between you and EJ EWEKE & Co. An attorney-client relationship is only formed 
                when both you and our firm have signed a written agreement expressly creating such a relationship.
              </p>
              
              <h2>No Warranties</h2>
              <p>
                The information on this website is provided "as is" without any representations or warranties, express or implied. 
                EJ EWEKE & Co. makes no representations or warranties in relation to the legal information on this website.
              </p>
              
              <h2>Accuracy of Information</h2>
              <p>
                While we strive to ensure that the information on this website is accurate and up-to-date, laws change 
                frequently and vary from jurisdiction to jurisdiction. The application of the law depends on the specific 
                facts of each case. Therefore, the information on this website may not reflect the most current legal 
                developments or apply to your specific situation.
              </p>
              
              <h2>Links to Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. These links are provided for convenience only. 
                EJ EWEKE & Co. does not endorse the content of, and is not responsible for, any linked third-party websites.
              </p>
              
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all liability and responsibility for any loss, 
                damage, or expense that may be suffered as a result of accessing or using this website, or relying on the 
                information contained on this website.
              </p>
              
              <h2>Professional Regulation</h2>
              <p>
                The legal professionals at EJ EWEKE & Co. are regulated by the Nigerian Bar Association and adhere to its 
                professional standards and code of conduct.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at:
              </p>
              <p>
                EJ EWEKE & Co.<br />
                Lagos, Nigeria<br />
                Email: legal@ejeweke.com<br />
                Phone: +234 123 456 7890
              </p>
              
              <p>
                <Link to="/contact" className="text-info hover:text-info/80">
                  Contact us with questions
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

export default LegalDisclaimer;
