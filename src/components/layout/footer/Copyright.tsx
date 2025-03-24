
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
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
  );
};

export default Copyright;
