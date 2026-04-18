import React, { useState, useMemo, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Crops = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.document.title = "Crop Directory | House of Greens";
    window.scrollTo(0, 0);
  }, []);

  // Added 'price' to your data since your WhatsApp function uses it
  const plantData = [
    { id: 1, name: "Cherry Tomatoes", type: "Vegetable", diff: "Easy" },
    { id: 2, name: "Garden Chillies", type: "Vegetable", diff: "Medium" },
    { id: 3, name: "Organic Brinjals", type: "Vegetable", diff: "Easy" },
    { id: 4, name: "Hibiscus", type: "Flower", diff: "Easy" },
    { id: 5, name: "Spinach (Palak)", type: "Leafy Green", diff: "V. Easy" },
    { id: 6, name: "Moringa", type: "Tree", diff: "Medium" },
    { id: 7, name: "Thai Basil", type: "Herb", diff: "Easy" },
    { id: 8, name: "Aloe Vera", type: "Succulent", diff: "Hardy" }
];

  const filteredPlants = useMemo(() => {
    return plantData.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.spec.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleWhatsAppShare = (plant) => {
    // Message using backticks for bold formatting on WhatsApp
    const message = `Hi! I'm interested in this plant:
  
*Name:* ${plant.name}
*Category:* ${plant.type}

Could you provide more details regarding the plant?`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+919677272271";
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-[#fdfdfb] pb-20 min-h-screen">
      <BreadcrumbHero title="Plant Directory" />
      <style>{`
        .font-heading { font-family: 'Philosopher', serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e1e7d1; border-radius: 10px; }
        input:focus { border-color: #00aa40 !important; outline: none; box-shadow: 0 0 0 4px rgba(0, 170, 64, 0.05); }
      `}</style>

      <section className="px-6 pt-10 md:pt-13 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div data-aos="fade-right">
            <h1 className="text-4xl font-bold font-heading text-[#132A13] mb-2">Plant Directory</h1>
            <p className="text-slate-500">Explore our full collection of {plantData.length} garden species.</p>
          </div>

          <div className="relative w-full md:w-80" data-aos="fade-left">
            <i className="fas fa-search absolute left-4 top-[50%] -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search plants..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-[1rem] shadow-slate-200/60 border border-[#e6e6e6] overflow-hidden" data-aos="fade-up">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f2f4f0] text-[#00aa40] uppercase text-[11px] font-bold tracking-widest">
                  <th className="px-8 py-5 border-b border-slate-100 text-center">Si.No</th>
                  <th className="px-8 py-5 border-b border-slate-100">Plant Name</th>
                  <th className="px-6 py-5 border-b border-slate-100">Category</th>
                  <th className="px-8 py-5 text-right border-b border-slate-100">Difficulty</th>
                  <th className="px-8 py-5 text-right border-b border-slate-100">Enquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredPlants.map((plant, index) => (
                  <tr key={plant.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-5 font-bold text-[#132A13] text-center">{index + 1}</td>
                    <td className="px-8 py-5 font-bold text-[#686868]">{plant.name}</td>
                    <td className="px-6 py-5">
                      <span className="text-[13px] font-bold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-500 uppercase">
                        {plant.type}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <span className={`text-[13px] font-bold ${plant.diff === 'Easy' || plant.diff === 'V. Easy' ? 'text-[#00aa40]' : 'text-[#bc6c25]'}`}>
                        {plant.diff}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button
                        onClick={() => handleWhatsAppShare(plant)} // Passed the whole object
                        className="flex items-center gap-2 ml-auto transition active:scale-95 hover:opacity-80 bg-[#25D366] px-6 py-1 rounded-3xl"
                      >
                        <i className="fa-brands fa-whatsapp text-lg text-[#fff]"></i>
                        <span className="text-[13px] font-bold text-[#fff]">Know More</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredPlants.length === 0 && <EmptyState searchTerm={searchTerm} />}
        </div>

        {/* Mobile List View */}
        <div className="md:hidden space-y-4">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-[#132A13]">{plant.name}</h3>
                    <button 
                      onClick={() => handleWhatsAppShare(plant)}
                      className="text-[#25D366] text-xl active:scale-90 transition"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-y-3 text-xs text-slate-500">
                    <p><span className="font-bold text-slate-300 uppercase block text-[9px]">Type</span> {plant.type}</p>
                    <p><span className="font-bold text-slate-300 uppercase block text-[9px]">Sun</span> {plant.sun}</p>
                    <p><span className="font-bold text-slate-300 uppercase block text-[9px]">Harvest</span> {plant.harvest}</p>
                    <p><span className="font-bold text-slate-300 uppercase block text-[9px]">Difficulty</span> 
                      <span className={plant.diff === 'Easy' ? 'text-[#00aa40]' : 'text-[#bc6c25]'}> {plant.diff}</span>
                    </p>
                </div>
            </div>
          ))}
          {filteredPlants.length === 0 && <EmptyState searchTerm={searchTerm} />}
        </div>
      </section>
    </div>
  );
};

const EmptyState = ({ searchTerm }) => (
  <div className="text-center py-20">
    <i className="fas fa-search text-slate-200 text-4xl mb-4"></i>
    <p className="text-slate-400 italic">No plants found matching "{searchTerm}"</p>
  </div>
);

export default Crops;