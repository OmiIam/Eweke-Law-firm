
import React from 'react';
import AppointmentFeatures from './AppointmentFeatures';
import ContactInfo from './ContactInfo';
import { useIsMobile } from '../../../hooks/use-mobile';

const AppointmentDescription = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`${isMobile ? 'pr-0' : 'pr-0 lg:pr-6'}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-serif">Schedule a Consultation</h2>
      <p className="text-secondary mb-4 md:mb-6 text-base">
        Our team of experienced Nigerian legal professionals is ready to assist you with your legal needs. Schedule a consultation with us to discuss your case.
      </p>
      
      <AppointmentFeatures />
      <ContactInfo />
    </div>
  );
};

export default AppointmentDescription;
