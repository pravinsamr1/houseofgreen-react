import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbHero = ({ title }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <section className="relative h-[280px] md:h-[340px] flex items-center justify-center overflow-hidden font-poppins">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover" 
          alt="Terrace Garden Background" 
        />
        {/* The Dark Overlay (Adjust opacity with bg-black/50 or bg-black/60) */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className=" relative z-10 text-center px-6 pt-25" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
          {title}
        </h1>
        
        <nav className="flex justify-center items-center gap-3 text-white/90 font-medium">
          <Link to="/" className="hover:text-[#90a955] transition-colors flex items-center gap-2">
            <i className="fas fa-home text-sm"></i> Home
          </Link>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <span className="text-white/40">/</span>
                {isLast ? (
                  <span className="text-[#90a955] capitalize">{name.replace('-', ' ')}</span>
                ) : (
                  <Link 
                    to={routeTo} 
                    className="hover:text-[#90a955] transition-colors capitalize"
                  >
                    {name.replace('-', ' ')}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Decorative Bottom Wave (Optional - adds a nice transition to the next section) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.42,88.5,142,101.4,212.11,105.8c64.76,4.08,118.66-12.52,151.16-21.31Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default BreadcrumbHero;