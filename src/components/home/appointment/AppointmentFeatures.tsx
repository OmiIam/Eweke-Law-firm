
import React from 'react';
import { Clock, UserRound, FileText } from 'lucide-react';

const AppointmentFeatures = () => {
  return (
    <div className="space-y-8 mb-10">
      <div className="flex items-start space-x-4">
        <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
          <Clock size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Response Time</h3>
          <p className="text-secondary">Our team will respond to your inquiry within 24 hours.</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
          <UserRound size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Personalized Attention</h3>
          <p className="text-secondary">Each case receives dedicated attention from our experienced attorneys.</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="bg-cream p-3 rounded-full text-charcoal mt-1 flex-shrink-0">
          <FileText size={22} />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Thorough Case Analysis</h3>
          <p className="text-secondary">We provide comprehensive evaluation of your legal situation under Nigerian law.</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFeatures;
