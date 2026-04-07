import React, { useState, useMemo, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Crops = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    window.document.title = "Crop Directory | House of Green";

    window.scrollTo(0,0);
  }, []);

  const plantData = [
    { id: 1, name: "Cherry Tomatoes", type: "Vegetable", spec: "Vine/Climber", sun: "Full Sun", harvest: "60-70 Days", diff: "Easy" },
    { id: 2, name: "Garden Chillies", type: "Vegetable", spec: "Shrub", sun: "High", harvest: "80-90 Days", diff: "Medium" },
    { id: 3, name: "Organic Brinjals", type: "Vegetable", spec: "Bushy Plant", sun: "Moderate", harvest: "70 Days", diff: "Easy" },
    { id: 4, name: "Hibiscus", type: "Flower", spec: "Perennial Shrub", sun: "Full Sun", harvest: "Year-round", diff: "Easy" },
    { id: 5, name: "Spinach (Palak)", type: "Leafy Green", spec: "Small Plant", sun: "Partial Shade", harvest: "35 Days", diff: "V. Easy" },
    { id: 6, name: "Moringa", type: "Tree", spec: "Fast Tree", sun: "Direct Sun", harvest: "Seasonal", diff: "Medium" },
    { id: 7, name: "Thai Basil", type: "Herb", spec: "Aromatic Bush", sun: "Partial", harvest: "45 Days", diff: "Easy" },
    { id: 8, name: "Aloe Vera", type: "Succulent", spec: "Medicinal", sun: "Low/Mod", harvest: "Permanent", diff: "Hardy" },
  ];

  const filteredPlants = useMemo(() => {
    return plantData.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.spec.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="bg-[#fdfdfb] pb-20 min-h-screen">
        <BreadcrumbHero title="Crop Directory" />
      <style>{`
        .font-heading { font-family: 'Philosopher', serif; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e1e7d1; border-radius: 10px; }
        /* Custom selection and focus colors */
        input:focus { border-color: #00aa40 !important; outline: none; box-shadow: 0 0 0 4px rgba(0, 170, 64, 0.05); }
      `}</style>

      

      <section className="px-6 pt-10 md:pt-13 max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div data-aos="fade-right">
            <h1 className="text-4xl font-bold font-heading text-[#132A13] mb-2">Plant Directory</h1>
            <p className="text-slate-500">Explore our full collection of {plantData.length} garden species.</p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80" data-aos="fade-left">
            <i className="fas fa-search absolute left-4 top-[65%] -translate-y-1/2 text-slate-400"></i>
            <input 
              type="text" 
              placeholder="Search plants..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl transition-all shadow-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden" data-aos="fade-up">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f2f4f0] text-[#00aa40] uppercase text-[11px] font-bold tracking-widest">
                  <th className="px-8 py-5 border-b border-slate-100">Plant Name</th>
                  <th className="px-6 py-5 border-b border-slate-100">Category</th>
                  <th className="px-6 py-5 border-b border-slate-100">Specification</th>
                  <th className="px-6 py-5 border-b border-slate-100">Sunlight</th>
                  <th className="px-6 py-5 border-b border-slate-100">Harvest</th>
                  <th className="px-8 py-5 text-right border-b border-slate-100">Difficulty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredPlants.map((plant) => (
                  <tr key={plant.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-8 py-5 font-bold text-[#132A13]">{plant.name}</td>
                    <td className="px-6 py-5">
                      <span className="text-[10px] font-bold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-500 uppercase">
                        {plant.type}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-500">{plant.spec}</td>
                    <td className="px-6 py-5 text-sm text-slate-500">
                      <i className="fas fa-sun text-yellow-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      {plant.sun}
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-500">{plant.harvest}</td>
                    <td className="px-8 py-5 text-right">
                      <span className={`text-[11px] font-bold ${plant.diff === 'Easy' ? 'text-[#00aa40]' : 'text-[#bc6c25]'}`}>
                        {plant.diff}
                      </span>
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
            <div key={plant.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between mb-2">
                    <h3 className="font-bold text-[#132A13]">{plant.name}</h3>
                    <span className="text-[10px] font-bold text-[#00aa40] uppercase">{plant.diff}</span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs text-slate-500">
                    <p><span className="font-bold text-slate-300">TYPE:</span> {plant.type}</p>
                    <p><span className="font-bold text-slate-300">SUN:</span> {plant.sun}</p>
                    <p className="col-span-2"><span className="font-bold text-slate-300">SPEC:</span> {plant.spec}</p>
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