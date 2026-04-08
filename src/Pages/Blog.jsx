import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Blog = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0,0);

    document.title = "Blog | House of Greens";
  }, []);

  const blogs = [
    {
      id: 1,
      date: "March 24, 2026",
      category: "Organic Care",
      title: "5 Secrets to High-Yield Rooftop Composting",
      desc: "Transform your kitchen waste into 'black gold' with our signature terrace-friendly method...",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      date: "March 18, 2026",
      category: "Crop Guide",
      title: "Growing Summer Tomatoes in Chennai Heat",
      desc: "Expert tips on shading and hydration to keep your tomatoes juicy during peak April summers...",
      image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      date: "March 10, 2026",
      category: "Tech & Tools",
      title: "Is Smart Drip Irrigation Worth the Investment?",
      desc: "We compare manual watering vs. automated systems to see which yields the best ROI...",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div className="bg-[#fdfdfb] pb-20">
        <BreadcrumbHero title="Our Blog" />

      <section className="px-6 pt-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id} 
              className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              {/* Image Section */}
              <div className="relative aspect-[7/5] overflow-hidden">
                <img 
                    src={blog.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={blog.title} 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#4F772D] shadow-sm">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <p className="text-[#bc6c25] font-bold text-xs mb-3 uppercase tracking-widest">
                    {blog.date}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[#132A13] mb-4 group-hover:text-[#4F772D] transition-colors line-clamp-2 font-heading">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.desc}
                </p>
                <div className="pt-6 border-t border-slate-50">
                    <span className="text-[#132A13] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Article <i className="fas fa-arrow-right"></i>
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;