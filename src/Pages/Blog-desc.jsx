import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BreadcrumbHero from '../Components/Bread';

const BlogDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const updateProgressBar = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        setReadingProgress((window.scrollY / scrollTotal) * 100);
      }
    };
    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  return (
    <div className="bg-[#fdfdfb] min-h-screen  ">


      <BreadcrumbHero title="Blog Details" />
      


      <div className="pt-10 md:pt-10 pb-20 px-6 max-w-[1440px] md:px-20 ">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* CENTER: Main Content (Occupying 9 grids now for better balance without left sidebar) */}
          <main className="lg:col-span-9 order-1">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              <Link to="/" className="hover:text-[#2E7D32]">Home</Link>
              <i className="fas fa-chevron-right text-[8px]"></i>
              <Link to="/blogs" className="hover:text-[#2E7D32]">Blogs</Link>
              <i className="fas fa-chevron-right text-[8px]"></i>
              <span className="text-[#bc6c25]">Organic Care</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold font-heading text-[#132A13] mb-8 leading-[1.1]">
              5 Secrets to High-Yield Rooftop Composting
            </h1>

            <img 
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200" 
              className="w-full aspect-video object-cover rounded-[1rem] mb-12 "
              alt="Composting on Rooftop"
            />
            
            <article className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
              <p className="text-xl font-medium text-slate-700 leading-relaxed">
                Urban composting is the cornerstone of a successful terrace garden. However, many Chennai gardeners struggle with foul odors, pests, or a process that seems to take forever. Here are the professional secrets to turning your kitchen waste into "Black Gold."
              </p>

              <h2 className="text-xl font-medium text-[#2e7d32] pt-1 md:pt-4 mt-1 md:text-2xl">1. Master the Moisture Balance</h2>
              <p>
                In the sweltering Chennai heat, compost piles dry out rapidly. Moisture is essential for the microbes that break down organic matter. Your compost should feel like a "wrung-out sponge"—damp to the touch but not dripping. If it gets too dry, the decomposition stops. If it's too wet, it becomes anaerobic and starts to smell.
              </p>

              <h2 className="text-xl font-medium text-[#2e7d32] pt-1 md:pt-4 mt-1 md:text-2xl">2. The Carbon-to-Nitrogen Ratio</h2>
              <p>
                The most common mistake is adding only kitchen scraps (Nitrogen/Greens). To achieve high-yield compost, you must balance it with "Browns" (Carbon) like dried leaves, shredded cardboard, or coco-peat. We recommend a 3:1 ratio of Browns to Greens. This ensures a fast, odor-free breakdown.
              </p>

              <h2 className="text-xl font-medium text-[#2e7d32] pt-1 md:pt-4 mt-1 md:text-2xl">3. Aeration: Give it Air</h2>
              <p>
                Microbes need oxygen to work. Use a compost aerator or a simple garden fork to turn your pile once every 4–5 days. This prevents the center from becoming compacted and ensures even decomposition throughout the bin.
              </p>

              <h2 className="text-xl font-medium text-[#2e7d32] pt-1 md:pt-4 mt-1 md:text-2xl">4. Manage the Temperature</h2>
              <p>
                A healthy compost pile should generate heat. On a rooftop, you can utilize the sun to keep the process moving during winter, but ensure the bin is shaded during the peak 12 PM – 4 PM window in summer to prevent the beneficial microbes from literally cooking.
              </p>

              <h2 className="text-xl font-medium text-[#2e7d32] pt-1 md:pt-4 mt-1 md:text-2xl">5. The "Sieve" Secret</h2>
              <p>
                Don't wait for the entire bin to turn into soil. Once every month, harvest the bottom layer and run it through a coarse sieve. Return the unfinished chunks to the bin to act as an "activator" for the next batch. This continuous cycle keeps your garden fed year-round.
              </p>
            </article>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-10 order-3 sticky top-32 self-start">
            <div>
              <h4 className="text-xl font-bold text-[#132A13] font-heading mb-6 border-b-2 border-[#e1e7d1] pb-2">Recent Posts</h4>
              <div className="space-y-6">
                {[1, 2].map((item) => (
                  <div key={item} className="flex gap-4 group cursor-pointer" onClick={() => navigate(`/blog/${item}`)}>
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
              <h4 className="text-xl font-bold font-heading mb-4 leading-tight">Need Help with your Terrace?</h4>
              <p className="text-white/70 text-sm mb-6">Our experts are available for on-site consultations in Chennai.</p>
              <button 
                onClick={() => navigate('/contact-us')}
                className="w-full bg-[#bc6c25] py-3 rounded-xl font-bold hover:brightness-110 transition active:scale-95"
              >
                Book Appointment
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="font-bold text-[#132A13] mb-4">Quick Contact</h4>
                <div className="space-y-4 text-sm">
                    <p className="flex items-center gap-3 text-slate-500 hover:text-[#2E7D32] transition-colors cursor-pointer">
                      <i className="fas fa-phone text-[#4F772D]"></i> +91 96772 72271
                    </p>
                    <p className="flex items-center gap-3 text-slate-500 hover:text-[#2E7D32] transition-colors cursor-pointer">
                      <i className="fas fa-envelope text-[#4F772D]"></i> grow@houseofgreens.in
                    </p>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;