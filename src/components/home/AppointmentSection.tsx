
import React from 'react';
import AppointmentDescription from './appointment/AppointmentDescription';
import AppointmentForm from './appointment/AppointmentForm';
import { useIsMobile } from '../../hooks/use-mobile';

const AppointmentSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-light" data-aos="fade-up">
      <div className="container-lg px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <AppointmentDescription />
          <div className={`${isMobile ? 'mt-6' : ''}`}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
