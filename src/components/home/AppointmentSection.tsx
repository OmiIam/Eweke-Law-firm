
import React from 'react';
import AppointmentDescription from './appointment/AppointmentDescription';
import AppointmentForm from './appointment/AppointmentForm';
import { useIsMobile } from '../../hooks/use-mobile';

const AppointmentSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-light" data-aos="fade-up">
      <div className="container-lg px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <AppointmentDescription />
          <div className={`${isMobile ? 'mt-8' : ''}`}>
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
