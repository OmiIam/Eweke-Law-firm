
import React from 'react';
import AppointmentFeatures from './AppointmentFeatures';
import ContactInfo from './ContactInfo';

const AppointmentDescription = () => {
  return (
    <div className="pr-0 lg:pr-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">Schedule a Consultation</h2>
      <p className="text-secondary mb-8 text-lg">
        Our team of experienced Nigerian legal professionals is ready to assist you with your legal needs. Schedule a consultation with us to discuss your case.
      </p>
      
      <AppointmentFeatures />
      <ContactInfo />
    </div>
  );
};

export default AppointmentDescription;
