import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  return (
    <div className="bg-[#fdfdfb] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          

          {/* CENTER: Main Blog Content (6 Grids) */}
          <main className="lg:col-span-9 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200" 
              className="w-full aspect-video object-cover rounded-[3rem] mb-10 shadow-lg"
              alt="Main Blog"
            />
            <span className="text-[#bc6c25] font-bold text-xs uppercase tracking-widest">Organic Care • March 24, 2026</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-[#132A13] mt-4 mb-8">
              5 Secrets to High-Yield Rooftop Composting
            </h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
              <p className="text-lg font-medium text-slate-700">
                Urban composting doesn't have to be smelly or complicated. With the right balance of nitrogen and carbon, your Chennai rooftop can produce nutrient-rich soil in weeks.
              </p>
              <p>
                The first secret is moisture control. In the intense heat of Tamil Nadu, compost piles tend to dry out quickly, killing the beneficial bacteria. We recommend using a double-layered terracotta bin system...
              </p>
              <h3 className="text-2xl font-bold text-[#132A13] pt-4">The Nitrogen Balance</h3>
              <p>
                Your green waste (kitchen scraps) provides the nitrogen, while brown waste (dried leaves, cardboard) provides carbon. A 1:3 ratio is the golden rule for odor-free composting.
              </p>
            </div>
          </main>

          {/* RIGHT SIDEBAR: Recent Blogs & Tags (3 Grids) */}
          <aside className="lg:col-span-3 space-y-10 order-3">
            {/* Recent Blogs */}
            <div>
              <h4 className="text-xl font-bold text-[#132A13] font-heading mb-6 border-b-2 border-[#e1e7d1] pb-2">Recent Posts</h4>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-4 group cursor-pointer">
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" alt="Recent" />
                    </div>
                    <div>
                        <h5 className="font-bold text-[#132A13] text-sm group-hover:text-[#4F772D] transition-colors leading-tight">Summer Tomato Care in Chennai</h5>
                        <p className="text-[10px] text-slate-400 mt-2 uppercase">March 18, 2026</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="text-xl font-bold text-[#132A13] font-heading mb-6 border-b-2 border-[#e1e7d1] pb-2">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {['Organic', 'Terrace', 'Chennai', 'DIY', 'Watering', 'Harvest'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-[#f2f4f0] text-[#31572C] text-xs font-bold rounded-lg hover:bg-[#31572C] hover:text-white transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>


            <div className="bg-[#132A13] text-white p-8 rounded-[2rem] shadow-xl">
              <h4 className="text-xl font-bold font-heading mb-4">Need Help with your Terrace?</h4>
              <p className="text-white/70 text-sm mb-6">Our experts are available for on-site consultations in Chennai.</p>
              <button 
                onClick={() => navigate('/contact')}
                className="w-full bg-[#bc6c25] py-3 rounded-xl font-bold hover:brightness-110 transition"
              >
                Book Appointment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="font-bold text-[#132A13] mb-4">Quick Contact</h4>
                <div className="space-y-4 text-sm">
                    <p className="flex items-center gap-3 text-slate-500"><i className="fas fa-phone text-[#4F772D]"></i> +91 98765 43210</p>
                    <p className="flex items-center gap-3 text-slate-500"><i className="fas fa-envelope text-[#4F772D]"></i> grow@houseofgreens.in</p>
                </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogDescription;