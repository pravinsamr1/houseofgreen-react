import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    document.title = "About House Of Green";
    window.scrollTo(0,0);
  }, []);

  return (
    
    <div className="bg-[#fff] text-slate-800 font-sans overflow-x-hidden">
        <BreadcrumbHero title="About Us" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap');
        .font-heading { font-family: 'Philosopher', sans-serif !important; }
        .pill-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 8px 20px; border-radius: 50px; display: inline-block; }
        .hero-gradient { background: linear-gradient(135deg, #132A13 0%, #31572C 100%); }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>


      <section className="md:pb-20 md:pt-13 py-13  px-6 bg-[#fdfdfb]">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <div className="relative" data-aos="fade-right">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
            alt="About House of Green" 
          />
        </div>

        <div className="absolute -bottom-10 -right-6 bg-[#2E7D32] p-8 rounded-3xl text-white shadow-2xl hidden md:block animate-float">
          <div className="flex flex-col gap-2">
            <i className="fas fa-quote-left text-2xl opacity-50"></i>
            <p className="font-bold text-xl italic leading-tight">
              "Freshness is a right, <br /> 
              <span className="text-green-200">not a luxury."</span>
            </p>
          </div>
        </div>
        
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#bc6c25]/10 rounded-full blur-2xl -z-10"></div>
      </div>

      <div className="space-y-8" data-aos="fade-left">
        <div>
          <span className="pill-tag bg-[#f2f4f0] text-[#31572C] mb-4">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading mt-4 leading-tight">
            Cultivating a Greener <br /> 
            <span className="text-[#4F772D]">Urban Tomorrow</span>
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            House of Green started with a simple observation: Chennai's rooftops were 
            unused potential. We decided to change that by merging traditional 
            farming wisdom with modern automation.
          </p>
          
          <p className="text-slate-600 leading-relaxed">
            Today, we help hundreds of families reclaim their food security. We 
            don't just set up gardens; we build self-sustaining ecosystems that 
            require minimal effort but provide maximum yield.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 py-4">
          {[
            { icon: 'fa-check-circle', text: 'Expert Site Analysis' },
            { icon: 'fa-check-circle', text: 'Zero Maintenance Tech' },
            { icon: 'fa-check-circle', text: 'Organic Seedlings' },
            { icon: 'fa-check-circle', text: 'Lifetime Support' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-[#132A13] font-semibold">
              <i className={`fas ${item.icon} text-[#4F772D]`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>



      <section className="relative hero-gradient pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div data-aos="fade-right">
            <span className="pill-tag bg-[#4F772D] text-white mb-6">Our Vision</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-heading mb-6 leading-tight">
              A Green Roof on <br /> Every Home
            </h2>
            <p className="text-green-100 text-lg leading-relaxed max-w-xl">
              We envision a future where urban spaces breathe. Our goal is to transform 
              Chennai's concrete skyline into a lush, productive urban forest, making 
              sustainable living the standard for every household.
            </p>
          </div>
          <div className="relative" data-aos="zoom-in">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-[400px] object-cover" 
                alt="Urban Vision" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block animate-float">
              <p className="text-[#132A13] font-bold italic text-sm">"Freshness is a right, not a luxury."</p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-[0] transform scale-y-[-1]">
          <svg 
            className="relative block w-[calc(100%+2px)] h-[60px]" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.42,88.5,142,101.4,212.11,105.8c64.76,4.08,118.66-12.52,151.16-21.31Z" 
              fill="#fdfdfb" /* Matches the bg-[#fdfdfb] of the next section */
              stroke="#fdfdfb"
              strokeWidth="1"
            ></path>
          </svg>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
            <div className="order-2 lg:order-1" data-aos="fade-right">
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg mt-8" alt="Garden 1" />
                    <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Garden 2" />
                </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
              <span className="pill-tag bg-[#f2f4f0] text-[#31572C]">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">
                Sustainable Urban Living Through Smart Innovation
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                We bridge the gap between busy urban lifestyles and nature. By providing 
                automated, high-yielding organic solutions, we empower everyone to grow 
                their own food—regardless of their schedule or space constraints.
              </p>
              <ul className="space-y-4 pt-4">
                {['Automated Drip Irrigation', 'Organic Heirloom Varieties', 'Zero-Pesticide Growth'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-[#31572C]">
                        <i className="fas fa-check-circle"></i> {item}
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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