import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Privacy = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fdfdfb] pb-1">
      <BreadcrumbHero title="Privacy Policy" />
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className=" p-8 md:p-12 rounded-[2rem] shadow-sm" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-[#132A13] mb-6" style={{ fontFamily: 'Philosopher, serif' }}>
            How We Protect Your Data
          </h2>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>At <strong>House of Greens</strong>, your privacy is our priority. This policy outlines how we handle the information collected through our website and WhatsApp enquiry system.</p>

            <h4 className="text-[#132A13] font-bold text-lg uppercase tracking-wider">Information Collection</h4>
            <p>We do not store your personal messages on our web server. When you click "Know More," only the specific plant data is passed to WhatsApp. We only collect basic analytics (like your search terms) to improve our Plant Directory.</p>

            <h4 className="text-[#132A13] font-bold text-lg uppercase tracking-wider">Third-Party Links</h4>
            <p>Our service connects you to WhatsApp (Meta). Their privacy policy applies once you leave our site to engage in a chat.</p>

            <h4 className="text-[#132A13] font-bold text-lg uppercase tracking-wider">Data Security</h4>
            <p>We implement standard security measures to protect our website from unauthorized access, ensuring your browsing experience in Chennai remains safe and secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;