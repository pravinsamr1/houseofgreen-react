import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800", alt: "Urban Garden Setup" },
    { src: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800", alt: "Fresh Harvest" },
    { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800", alt: "Sustainable Living" },
    { src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800", alt: "Terrace Farming" },
    { src: "https://images.unsplash.com/photo-1594315590298-329f49c7dcb9?auto=format&fit=crop&q=80&w=800", alt: "Garden Chillies" },
    { src: "https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80&w=800", alt: "Green Spinach" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0,0);
    
    // Keyboard Navigation
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-[#fdfdfb] text-slate-800 font-sans overflow-x-hidden">
      <style>{`
        .pill-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 8px 20px; border-radius: 50px; display: inline-block; }
        .font-heading { font-family: 'Philosopher', serif; }
        
        .gallery-overlay::after {
            content: '\\f065';
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            position: absolute;
            inset: 0;
            background: rgba(19, 42, 19, 0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .gallery-overlay:hover::after { opacity: 1; }
      `}</style>

      <BreadcrumbHero title={"Gallery"}/>

      {/* Gallery Grid */}
      <section className="py-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div 
                key={index}
                onClick={() => openLightbox(index)}
                className="gallery-overlay relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-xl aspect-square" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <img 
                  src={img.src} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={img.alt} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white text-4xl hover:text-[#90a955] transition z-[210]"
          >
            &times;
          </button>
          
          <button 
            onClick={showPrev}
            className="absolute left-4 md:left-10 text-white text-5xl hover:text-[#90a955] transition select-none z-[210]"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center relative">
            <img 
              src={images[currentIndex].src} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-all duration-300 scale-in-center"
              alt="Enlarged view"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button 
            onClick={showNext}
            className="absolute right-4 md:right-10 text-white text-5xl hover:text-[#90a955] transition select-none z-[210]"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;