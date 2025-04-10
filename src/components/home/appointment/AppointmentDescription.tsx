
import React from 'react';
import AppointmentFeatures from './AppointmentFeatures';
import ContactInfo from './ContactInfo';
import { useIsMobile } from '../../../hooks/use-mobile';

const AppointmentDescription = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'pr-0' : 'pr-0 lg:pr-8'}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 font-serif">Schedule a Consultation</h2>
      <p className="text-secondary mb-6 md:mb-8 text-base md:text-lg">
        Our team of experienced Nigerian legal professionals is ready to assist you with your legal needs. Schedule a consultation with us to discuss your case.
      </p>
      
      <AppointmentFeatures />
      <ContactInfo />
    </div>
  );
};

export default AppointmentDescription;
