import React from 'react';

const OfferMarquee = () => {
  const offers = [
    { tag: "Save 20%", title: "Terrace Setup", desc: "Special seasonal rates on all installations.", color: "bg-[#C5E1A5]" },
    { tag: "Limited Time", title: "Free Site Visit", desc: "Expert consultation for urban homes.", color: "bg-orange-400" },
    { tag: "New Bundle", title: "Harvest Kits", desc: "3 organic fertilizers free with first box.", color: "bg-white" },
    { tag: "Combo Deal", title: "Seedling Pack", desc: "Buy 5 get 2 free on all herb seeds.", color: "bg-yellow-300" },
    { tag: "Flash Sale", title: "Grow Bags", desc: "Flat ₹100 off on premium fabric bags.", color: "bg-red-400" },
  ];

  return (
    <section className="relative z-40 -mt-10 md:-mt-12 overflow-hidden py-4">
      {/* Container with a glassmorphism effect */}
      <div className="bg-[#2E7D32] py-6  border-y border-white/10 relative">
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#2E7D32] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#2E7D32] to-transparent z-10"></div>

        <div className="flex whitespace-nowrap animate-marquee">
          {/* We duplicate the array to ensure a seamless infinite loop */}
          {[...offers, ...offers].map((offer, index) => (
            <div 
              key={index} 
              className="inline-flex items-center gap-6 px-12 md:border-r border-white/10 last:border-r-0"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`${offer.color} ${offer.color === 'bg-white' ? 'text-[#2E7D32]' : 'text-[#132A13]'} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter`}>
                    {offer.tag}
                  </span>
                  <p className="text-white font-bold text-lg uppercase tracking-tight">{offer.title}</p>
                </div>
                <p className="text-[14px] text-[#e1e7d1] whitespace-normal max-w-[200px] leading-tight font-medium">
                  {offer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation keyframes (add this to your global CSS or Tailwind Config) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default OfferMarquee;