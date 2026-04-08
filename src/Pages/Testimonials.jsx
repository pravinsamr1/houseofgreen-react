import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    window.scrollTo(0,0);

    document.title = "Testimonials | House of Greens";
  }, []);


  const mediaReviews = [
    {
      id: 1,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=600',
      name: "Suresh Raina",
      title: "Harvesting 5kg of Organic Spinach",
      location: "Anna Nagar",
      videoUrl: "#" // Link to your video/modal
    },
    {
      id: 2,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600',
      name: "Meera Krishnan",
      text: "The kids love waking up and checking the automated drip system. It's their favorite part of the day!",
      location: "Besant Nagar"
    },
    {
      id: 3,
      type: 'image',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600',
      name: "Dr. Ananya",
      text: "Professional setup. They handled everything from the soil mix to the smart sensors.",
      location: "T-Nagar"
    },
    {
      id: 4,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600',
      name: "Vijay Sethupathi",
      title: "My 365-Day Garden Tour",
      location: "Ecr Road",
      videoUrl: "#"
    }
  ];

  return (
    <div className="bg-[#fdfdfb] min-h-screen">

      <BreadcrumbHero title="Testimonials" />

      {/* --- Masonry Media Gallery --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {mediaReviews.map((item) => (
              <div 
                key={item.id} 
                className="relative break-inside-avoid rounded-3xl overflow-hidden shadow-lg group bg-white"
                data-aos="fade-up"
              >
                {/* Media Part */}
                <div className="relative overflow-hidden">
                  <img 
                    src={item.type === 'video' ? item.thumbnail : item.image} 
                    alt={item.name} 
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {item.type === 'video' && (
                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg">
                      <i className="fas fa-video text-[#132A13] text-sm"></i>
                    </div>
                  )}
                </div>

                {/* Content Part */}
                <div className="p-6">
                  {item.type === 'video' ? (
                    <h4 className="text-xl font-bold text-[#132A13] mb-2">{item.title}</h4>
                  ) : (
                    <p className="text-slate-600 italic mb-4 font-medium leading-relaxed">"{item.text}"</p>
                  )}
                  <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                    <div>
                      <p className="font-bold text-[#132A13] text-sm">{item.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">{item.location}</p>
                    </div>
                    <div className="flex text-yellow-500 text-[10px]">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;