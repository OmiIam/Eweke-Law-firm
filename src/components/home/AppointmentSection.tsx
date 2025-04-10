
import React from 'react';
import AppointmentDescription from './appointment/AppointmentDescription';
import AppointmentForm from './appointment/AppointmentForm';

const AppointmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-light" data-aos="fade-up">
      <div className="container-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <AppointmentDescription />
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
