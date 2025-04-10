
import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="p-8 bg-cream rounded-lg shadow-sm">
      <h3 className="font-semibold text-xl mb-5">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Phone size={20} className="text-accent" />
          <span>+234 813 069 5026</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail size={20} className="text-accent" />
          <span>info@ejewekelegal.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <Clock size={20} className="text-accent" />
          <span>Monday-Friday: 9:00 AM - 5:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
