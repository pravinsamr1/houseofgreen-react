import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#fdfdfb] text-slate-800 font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap');
        .font-heading { font-family: 'Philosopher', sans-serif !important; }
        .pill-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 8px 20px; border-radius: 50px; display: inline-block; }
        .hero-gradient { background: linear-gradient(135deg, #132A13 0%, #31572C 100%); }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* --- Hero Section --- */}
      <header className="pt-32 pb-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://www.transparenttextures.com/patterns/leaf.png" className="w-full h-full" alt="pattern" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <span className="pill-tag bg-white/10 text-[#e1e7d1] mb-6">Established 2016</span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Growing a Healthier <br /> Future for Chennai
            </h1>
            <p className="text-[#e1e7d1]/80 text-lg leading-relaxed">
              We are more than just a terrace farming service; we are a movement dedicated to reclaiming urban spaces.
            </p>
          </div>
        </div>
      </header>

      {/* --- Vision & Mission --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative" data-aos="fade-right">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Vision" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#bc6c25] p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-float">
                <i className="fas fa-quote-left text-3xl mb-4 opacity-50"></i>
                <p className="font-bold text-lg italic">"Freshness is a right, <br /> not a luxury."</p>
              </div>
            </div>
            <div className="space-y-12" data-aos="fade-left">
              <div>
                <span className="pill-tag bg-[#f2f4f0] text-[#31572C] mb-4">Our Vision</span>
                <h2 className="text-4xl font-bold text-[#132A13] font-heading mb-4">A Green Roof on Every Home</h2>
                <p className="text-slate-500 leading-relaxed">Transforming Chennai's concrete skyline into a lush, productive urban forest.</p>
              </div>
              <div className="pt-8 border-t border-slate-100">
                <span className="pill-tag bg-[#f2f4f0] text-[#31572C] mb-4">Our Mission</span>
                <h2 className="text-4xl font-bold text-[#132A13] font-heading mb-4">Sustainable Urban Living</h2>
                <p className="text-slate-500 leading-relaxed">Providing automated, high-yielding organic solutions for busy professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Values --- */}
      <section className="py-20 bg-[#f2f4f0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading mb-16" data-aos="fade-up">The Core Values That Grow Us</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ValueCard icon="fa-leaf" color="bg-[#4F772D]" title="100% Organic" desc="Strictly heirloom seeds and organic nutrients." delay="100" />
            <ValueCard icon="fa-microchip" color="bg-[#bc6c25]" title="Smart Tech" desc="Automated drip systems for your busy schedule." delay="200" />
            <ValueCard icon="fa-hand-holding-water" color="bg-[#132A13]" title="Water Wise" desc="70% less water usage than traditional gardens." delay="300" />
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-4xl md:text-6xl font-bold text-[#132A13] font-heading mb-8">Ready to start your green journey?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#132A13] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#31572C] transition">Consultation</button>
            <button className="bg-white text-[#132A13] border-2 border-[#132A13] px-10 py-4 rounded-xl font-bold hover:bg-[#f2f4f0] transition">Gallery</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Sub-component for Values
const ValueCard = ({ icon, color, title, desc, delay }) => (
  <div className="bg-white p-10 rounded-[2.5rem] shadow-xl transition-transform hover:-translate-y-3" data-aos="fade-up" data-aos-delay={delay}>
    <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center text-2xl mb-8 mx-auto shadow-lg`}>
      <i className={`fas ${icon}`}></i>
    </div>
    <h4 className="text-2xl font-bold text-[#132A13] mb-4">{title}</h4>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default About;