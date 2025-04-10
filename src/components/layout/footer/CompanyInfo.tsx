
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const CompanyInfo = () => {
  return (
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
            <a href="tel:+2348130695026" className="text-light/80 hover:text-accent transition-colors duration-200">
              +234 813 069 5026
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <Mail size={18} className="text-accent mr-3 mt-1" />
          <div>
            <p className="font-medium">Email Us</p>
            <a href="mailto:info@ejewekelegal.com" className="text-light/80 hover:text-accent transition-colors duration-200">
              info@ejewekelegal.com
            </a>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin size={18} className="text-accent mr-3 mt-1" />
          <div>
            <p className="font-medium">Visit Us</p>
            <address className="text-light/80 not-italic">
              123 Legal Street<br />
              Lagos, Nigeria
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
