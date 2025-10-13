import React from 'react';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';
import FAQSection from './FAQSection';
import WorkingProcessSection from './WorkingProcessSection';
import AppointmentFormSection from './AppointmentFormSection'; 
import EmergencyContactSection from './EmergencyContactSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import FooterSection from '../../components/FooterSection';

const Home = () => {
  return (
    <div>
     <section id="home" className="pt-[115px]">
        <HeroSection />
      </section>
      <AboutUsSection />
      <ServicesSection />
      <FAQSection />
      <WorkingProcessSection />
      <AppointmentFormSection /> 
      <EmergencyContactSection />
      <TeamSection />
      <TestimonialsSection/>
      <BlogSection/>
      <FooterSection/>
    </div>
  );
};

export default Home;
