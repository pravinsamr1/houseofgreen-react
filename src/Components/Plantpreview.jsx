import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlantPreview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const plantData = [
    { id: 1, name: "Cherry Tomatoes", type: "Vegetable", diff: "Easy" },
    { id: 2, name: "Garden Chillies", type: "Vegetable", diff: "Medium" },
    { id: 3, name: "Organic Brinjals", type: "Vegetable", diff: "Easy" },
    { id: 4, name: "Hibiscus", type: "Flower", diff: "Easy" },
    { id: 5, name: "Spinach (Palak)", type: "Leafy Green", diff: "V. Easy" },
    { id: 6, name: "Moringa", type: "Tree", diff: "Medium" },
    { id: 7, name: "Thai Basil", type: "Herb", diff: "Easy" },
    { id: 8, name: "Aloe Vera", type: "Succulent", diff: "Hardy" },
    { id: 9, name: "Lemon Grass", type: "Herb", diff: "Easy" },
    { id: 10, name: "Marigold", type: "Flower", diff: "V. Easy" }
  ];

  const handleWhatsAppShare = (plant) => {
    const message = `Hi! I'm interested in this plant:
  
*Name:* ${plant.name}
*Category:* ${plant.type}

Could you provide more details regarding the plant?`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "919677272271"; // Removed the '+' for better URL compatibility
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="bg-[#f2f7e2] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 gap-4" data-aos="fade-up">
    <div>
        <h2 className="text-4xl font-bold text-[#132A13] mb-2" style={{ fontFamily: 'Philosopher, serif' }}>
            Featured Plants
        </h2>
        <p className="text-slate-500">Quick view of our most popular garden species.</p>
    </div>

    <div className="hidden md:block">
        <button 
            onClick={() => navigate('/plants')}
            className="flex items-center gap-2 px-6 py-3 border-2 border-[#00aa40] text-[#00aa40] font-bold text-sm rounded-full transition-all duration-300 hover:bg-[#00aa40] hover:text-white active:scale-95 shadow-sm"
        >
            View Full Directory 
            <i className="fas fa-arrow-right text-xs"></i>
        </button>
    </div>
</div>

        {/* Table View */}
        <div className="bg-white rounded-[1rem] shadow-sm border border-[#e6e6e6] overflow-hidden" data-aos="fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f2f4f0] text-[#00aa40] uppercase text-[11px] font-bold tracking-widest">
                  <th className="px-8 py-5 border-b border-slate-100 text-center">Si.No</th>
                  <th className="px-8 py-5 border-b border-slate-100">Plant Name</th>
                  <th className="px-6 py-5 border-b border-slate-100">Category</th>
                  <th className="px-6 py-5 border-b text-right border-slate-100">Difficulty</th>
                  <th className="px-8 py-5 text-right border-b border-slate-100">Enquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {plantData.map((plant, index) => (
                  <tr key={plant.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-8 py-4 font-bold text-[#132A13] text-center">{index + 1}</td>
                    <td className="px-8 py-4 font-bold text-[#686868]">{plant.name}</td>
                    <td className="px-6 py-4">
                      <span className="text-[12px] font-bold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-500 uppercase">
                        {plant.type}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <span className={`text-[13px] font-bold ${plant.diff === 'Easy' || plant.diff === 'V. Easy' ? 'text-[#00aa40]' : 'text-[#bc6c25]'}`}>
                        {plant.diff}
                      </span>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <button
                        onClick={() => handleWhatsAppShare(plant)}
                        className="inline-flex items-center gap-2 transition active:scale-95 hover:opacity-90 bg-[#25D366] px-5 py-1.5 rounded-full"
                      >
                        <i className="fa-brands fa-whatsapp text-white"></i>
                        <span className="text-[12px] font-bold text-white">Enquire</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantPreview;