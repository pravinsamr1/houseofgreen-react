import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BreadcrumbHero from '../Components/Bread';

const BlogDescription1 = () => {
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
    <div className="bg-[#fdfdfb] min-h-screen ">
      {/* Reading Progress Bar */}

      <BreadcrumbHero title="Blog Details" />
      

      <div className="pt-32 md:pt-10 pb-20 px-6 max-w-[1440px] mx-auto md:px-20 ">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* CENTER: Main Content */}
          <main className="lg:col-span-9 order-1">
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              <Link to="/" className="hover:text-[#2E7D32]">Home</Link>
              <i className="fas fa-chevron-right text-[8px]"></i>
              <Link to="/blogs" className="hover:text-[#2E7D32]">Blogs</Link>
              <i className="fas fa-chevron-right text-[8px]"></i>
              <span className="text-[#4F772D]">Summer Gardening</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-heading text-[#132A13] mb-8 leading-[1.1]">
              Growing Summer Tomatoes in Chennai Heat
            </h1>

            <img 
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1200" 
              className="w-full aspect-video object-cover rounded-[3rem] mb-12 shadow-2xl"
              alt="Tomatoes in Chennai"
            />
            
            <article className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
              <p className="text-xl font-medium text-slate-700 leading-relaxed">
                Growing tomatoes in Chennai during April and May feels like a battle against the sun. With temperatures often crossing 40°C, your plants can wilt in hours. But with the right shade, water, and variety, you can harvest sun-ripened tomatoes all summer long.
              </p>

              <h2 className="text-xl remove-mar md:text-3xl font-medium text-[#2e7d32] pt-4">1. Choose Heat-Tolerant Varieties</h2>
              <p className='remove-marr'>
                Not all tomatoes are created equal. In Chennai's tropical climate, "Indeterminate" varieties like Cherry Tomatoes perform much better than large beefsteak types. Varieties like <i>Arka Rakshak</i> or <i>Arka Samrat</i> are specifically bred by IIHR to withstand higher temperatures and resist pests common in South India.
              </p>

              <h2 className="text-xl remove-mar md:text-3xl font-medium text-[#2e7d32] pt-4">2. The Magic of 50% Green Shade Nets</h2>
              <p className='remove-marr'>
                Direct midday sun in Chennai will scorch tomato leaves and cause "Blossom Drop" (where flowers fall off without fruiting). Installing a 50% UV-stabilized shade net is non-negotiable for rooftop gardeners. It reduces the ambient temperature by 5-8°C, allowing the plant to focus on fruit production instead of survival.
              </p>

              <h2 className="text-xl remove-mar md:text-3xl font-medium text-[#2e7d32] pt-4">3. Deep Mulching is Your Best Friend</h2>
              <p className='remove-marr'>
                To prevent the soil from drying out every few hours, apply a 3-inch layer of organic mulch. Use dried sugarcane bagasse, hay, or even coco-husk chips. Mulching keeps the roots cool and reduces water evaporation by nearly 60%, which is critical when the Chennai humidity drops.
              </p>

              <h2 className="text-xl remove-mar md:text-3xl font-medium text-[#2e7d32] pt-4">4. Early Morning Watering Only</h2>
              <p className='remove-marr'>
                Never water your tomato plants in the evening or late afternoon. Moisture on leaves during the humid Chennai nights can lead to fungal diseases like "Early Blight." Water deeply at 6 AM so the plant is fully hydrated before the heat peaks at noon.
              </p>

              <h2 className="text-xl remove-mar md:text-3xl font-medium text-[#2e7d32] pt-4">5. Calcium Boost for Healthy Fruit</h2>
              <p className='remove-marr'>
                High heat interferes with calcium uptake, leading to "Blossom End Rot" (black spots at the bottom of the tomato). Add crushed eggshells or a small amount of lime to your potting mix during the flowering stage to ensure firm, healthy fruits.
              </p>
            </article>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-3 space-y-10 order-3 sticky top-32 self-start diss">
            <div>
              <h4 className="text-xl font-bold text-[#132A13] font-heading mb-6 border-b-2 border-[#e1e7d1] pb-2">Related Posts</h4>
              <div className="space-y-6">
                <div className="flex gap-4 group cursor-pointer" onClick={() => navigate('/blog/composting')}>
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200" className="w-full h-full object-cover" alt="Recent" />
                    </div>
                    <div>
                        <h5 className="font-bold text-[#132A13] text-sm group-hover:text-[#4F772D] transition-colors leading-tight">5 Secrets to Rooftop Composting</h5>
                        <p className="text-[10px] text-slate-400 mt-2 uppercase">March 24, 2026</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="bg-[#132A13] text-white p-8 rounded-[2rem] shadow-xl">
              <h4 className="text-xl font-bold font-heading mb-4">Summer Garden Audit?</h4>
              <p className="text-white/70 text-sm mb-6">Is your garden struggling with the heat? Book a professional site visit for a heat-protection audit.</p>
              <button 
                onClick={() => navigate('/contact-us')}
                className="w-full bg-[#bc6c25] py-3 rounded-xl font-bold hover:brightness-110 transition active:scale-95"
              >
                Contact Expert
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <h4 className="font-bold text-[#132A13] mb-4">Quick Support</h4>
                <div className="space-y-4 text-sm">
                    <p className="flex items-center gap-3 text-slate-500"><i className="fas fa-phone text-[#4F772D]"></i> +91 96772 72271</p>
                    <p className="flex items-center gap-3 text-slate-500"><i className="fas fa-envelope text-[#4F772D]"></i> grow@houseofgreens.in</p>
                </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription1;