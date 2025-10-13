import React from 'react';
import ContactHeroSection from '../../components/ContactHeroSection';
import ContactInfoCards from '../../components/ContactInfoCards';
import ContactFormSection from '../../components/ContactFormSection';

const ContactUsPage = () => {
  return (
    <div>
      <section id="contact" className="pt-[115px]">
        <ContactHeroSection/>
        <ContactInfoCards/>
        <ContactFormSection/>
      </section>
    </div>
  );
};

export default ContactUsPage;