import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Terms = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using House of Greens, you agree to be bound by these terms. If you do not agree to these terms, please do not use our website or services."
    },
    {
      title: "2. Product Information",
      content: "While we strive for accuracy, plant growth is dependent on environmental factors. Images are for representation; actual plants may vary in size and appearance."
    },
    {
      title: "3. WhatsApp Enquiries",
      content: "Enquiries made via WhatsApp do not constitute a confirmed order until payment is processed and a receipt is issued by our team in Chennai."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on this site, including the Plant Directory and custom branding, is the property of House of Greens and may not be reproduced without permission."
    }
  ];

  return (
    <div className="bg-[#fdfdfb] pb-1">
      <BreadcrumbHero title="Terms & Conditions" />
      <section className="py-16 max-w-7xl mx-auto">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#132A13] mb-8" style={{ fontFamily: 'Philosopher, serif' }}>
            Website Usage Agreement
          </h2>
          <div className="space-y-10">
            {sections.map((item, index) => (
              <div key={index} className="border-l-4 border-[#00aa40] pl-6">
                <h3 className="text-xl font-bold text-[#132A13] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;