import React from 'react';
import ContactHeroSection from './ContactHeroSection';
import ContactInfoCards from '../../components/ContactInfoCards';

const ContactUsPage = () => {
  return (
    <div>
      <section id="contact" className="pt-[115px]">
        <ContactHeroSection/>
        <ContactInfoCards/>
      </section>
    </div>
  );
};

export default ContactUsPage;