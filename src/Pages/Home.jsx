import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import serviceImage from '../assets/img/service.jpg'; 
import veg from '../assets/img/veg.png'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#fdfdfb] text-slate-800 font-sans overflow-x-hidden">
      {/* Custom Styles Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@700&display=swap');
        
        .font-heading { 
            font-family: 'Philosopher', sans-serif !important; 
        }
        
        .pill-tag { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; padding: 8px 20px; border-radius: 50px; display: inline-block; }
        
        .floating-card { animation: float 6s ease-in-out infinite; }
        @keyframes float {
            0%, 100% { transform: translate(-50%, 0) rotate(12deg); }
            50% { transform: translate(-50%, -20px) rotate(12deg); }
        }
        
        /* Swiper Pagination - Updated to #8aac1c */
        .swiper-pagination-bullet-active {
            background: #8aac1c !important;
            width: 24px !important;
            border-radius: 10px !important;
        }
        
        .hero-slider .swiper-slide-active img {
            animation: kenburns 20s ease-out both;
        }
        
        @keyframes kenburns {
            0% { transform: scale(1) translate(0,0); }
            100% { transform: scale(1.2) translate(-2%, -2%); }
        }
        
        .hero-content-anim {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .swiper-slide-active .hero-content-anim {
            opacity: 1;
            transform: translateY(0);
        }
        
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
        
        .testSwiper .swiper-pagination-bullet { 
            background: #8aac1c; 
            opacity: 0.3; 
            width: 10px; 
            height: 10px; 
            margin: 0 6px !important;
        }
        
        .testSwiper .swiper-pagination-bullet-active { 
            background: #8aac1c !important; 
            width: 30px; 
            border-radius: 10px; 
            opacity: 1;
        }

        .mySwiper .swiper-pagination {
            bottom: -40px !important;
        }
        .mySwiper {
            overflow: visible !important;
        }
      `}</style>

      {/* Hero Slider */}
      <section id="home" className="relative pt-20 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1000}
          loop={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true, className: 'hero-pagination' }}
          className="hero-slider h-[70vh] md:h-[85vh]"
        >
          <SwiperSlide>
            <div className="absolute inset-0 bg-[#132A13]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#132A13]/80 via-[#132A13]/40 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Urban Farming" />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="hero-content-anim text-[#e1e7d1] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Certified Organic Solutions</span>
                <h1 className="hero-content-anim delay-1 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-heading">Bring Growth to <br /> Fresh Agriculture</h1>
                <p className="hero-content-anim delay-2 text-[#f2f4f0]/80 text-base md:text-lg mb-10 leading-relaxed">Revolutionizing urban spaces into high-yield organic havens. We build the future of food, right on your rooftop.</p>
                <div className="hero-content-anim delay-3">
                  <button className="bg-[#bc6c25] text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition flex items-center gap-3 active:scale-95 shadow-lg">
                    Discover More <i className="fas fa-arrow-right-long text-sm -rotate-45"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="absolute inset-0 bg-[#132A13]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#132A13]/80 via-[#132A13]/40 to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover" alt="Terrace Garden" />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="hero-content-anim text-[#e1e7d1] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sustainable Living</span>
                <h1 className="hero-content-anim delay-1 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-heading">Your Personal <br /> Grocery Store</h1>
                <p className="hero-content-anim delay-2 text-[#f2f4f0]/80 text-base md:text-lg mb-10 leading-relaxed">Why buy when you can grow? Fresh, pesticide-free vegetables harvested by your own hands.</p>
                <div className="hero-content-anim delay-3">
                  <button className="bg-[#8aac1c] text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition flex items-center gap-3 active:scale-95 shadow-lg">
                    Start Growing <i className="fas fa-leaf text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Quick Stats */}
      <section className="relative z-40 -mt-12 md:-mt-16 ">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#8aac1c] rounded-2xl h-auto md:h-[150px] p-6 md:p-8 grid md:grid-cols-3 gap-8 text-white shadow-2xl" data-aos="fade-up">
            <div className="flex items-center gap-4 md:border-r border-white/10 last:border-r-0">
              <i className="fas fa-carrot text-[#8aac1c] text-3xl"></i>
              <div>
                <p className="text-2xl md:text-3xl font-bold">40%+ Yield</p>
                <p className="text-[10px] text-[#e1e7d1] uppercase tracking-widest">Maximize rooftop harvest.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:border-r border-white/10 last:border-r-0">
              <i className="fas fa-temperature-arrow-down text-[#8aac1c] text-3xl"></i>
              <div>
                <p className="text-2xl md:text-3xl font-bold">Heat Shield</p>
                <p className="text-[10px] text-[#e1e7d1] uppercase tracking-widest">Reduce cooling costs.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-vial-circle-check text-[#8aac1c] text-3xl"></i>
              <div>
                <p className="text-2xl md:text-3xl font-bold">Zero Chemical</p>
                <p className="text-[10px] text-[#e1e7d1] uppercase tracking-widest">100% Organic care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="pb-24 md:pb-22 px-6 pt-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 pt-3 items-center">
          <div className="relative w-full aspect-[4/5] md:h-[650px]">
            <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative z-0 border-8 border-slate-50" data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Garden detail" />
            </div>
            <div className="absolute -bottom-10 -right-4 md:-right-12 w-1/2 h-2/3 z-20" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-[2rem] border-[8px] md:border-[12px] border-white shadow-2xl" alt="Harvest" />
            </div>
            <div className="absolute top-12 left-1/2 bg-[#bc6c25] text-white p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl z-30 border-4 border-white floating-card">
              <span className="text-2xl font-bold">10+</span>
              <span className="text-[8px] uppercase tracking-tighter font-bold text-center leading-tight">Years <br />Experience</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="pill-tag bg-[#f2f4f0] text-[#8aac1c] mb-6">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] mb-8 leading-tight font-heading">Healthy Living with Fresh Rooftop Produce</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">Transform your terrace into a high-yielding organic farm. We've spent over a decade perfecting methods.</p>
            <ul className="grid gap-6 mb-12">
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#8aac1c] group-hover:bg-[#8aac1c] group-hover:text-white transition">
                  <i className="fas fa-check"></i>
                </div>
                <span className="font-bold text-slate-700">Pure 100% Organic Setup</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#8aac1c] group-hover:bg-[#8aac1c] group-hover:text-white transition">
                  <i className="fas fa-check"></i>
                </div>
                <span className="font-bold text-slate-700">Custom Automated Irrigation</span>
              </li>
            </ul>
            <button className="bg-[#132A13] text-white px-10 py-4 rounded-xl font-bold bg-[#8aac1c] hover:bg-[#8aac1c] transition shadow-xl flex items-center gap-3">
              Our Story <i className="fas fa-arrow-right-long text-sm"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-grid" className="pt-1 pb-[60px] px-6 overflow-hidden relative bg-[#fbfef2]">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col md:flex-row justify-between items-end pb-32 pt-12">
            <div className="absolute -top-10 -left-10 md:-left-20 z-0 w-[200px] md:w-[1000px] opacity-10 pointer-events-none" data-aos="zoom-in">
                <img src={serviceImage} alt="Decorative" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute top-0 -left-10 w-full md:w-3/5 h-full bg-[#132A13] -z-10 rounded-br-[4rem]"></div>
            <div className="w-full md:w-1/2 text-white p-6 md:p-10 md:pl-24" data-aos="fade-right">
              <span className="text-xs tracking-[0.3em] opacity-70 uppercase font-bold block mb-2">Service Excellence</span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 leading-tight font-heading">Providing Premium <br /> Agro Services</h2>
            </div>
            <div className="w-full md:w-1/3 p-6 md:pb-12" data-aos="fade-left">
              <p className="text-black text-xl font-bold leading-relaxed mb-6">We streamline the journey from seed to harvest.</p>
              <a href="#" className="text-[#8aac1c] font-bold text-sm flex items-center gap-2">
                <span className="bg-[#132A13] text-white p-3 rounded-2xl hover:bg-[#8aac1c] transition">View All Services <span className="text-lg">↗</span></span>
              </a>
            </div>
          </div>

          <div className="relative -mt-[100px] z-30 pb-20"> 
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true, dynamicBullets: false }}
              className="mySwiper !overflow-visible" 
            >
              {[1, 2, 3, 4, 5].map((item) => (
                <SwiperSlide key={item} className="h-auto">
                  <div className="bg-white p-6 rounded-3xl border border-[#e4e4e4] hover:-translate-y-2 transition-all duration-300 h-full border border-gray-50 flex flex-col group">
                    <div className="relative w-full flex-grow flex items-center justify-center mb-6">
                      <span className="absolute top-0 right-4 text-[120px] font-black text-[#132A13] opacity-5">V</span>
                      <img src={veg} className="w-full h-auto max-h-[250px] object-contain relative z-10" alt="Fresh Vegetable" />
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-[#132A13] mb-2 font-heading">Fresh Vegetable</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">Customized crop selection based on sunlight and seasonal cycles in Chennai.</p>
                      <a href="#" className="inline-block w-full text-center px-6 py-3 border border-slate-100 rounded-xl text-sm font-bold text-[#132A13] hover:bg-[#f2f4f0] transition-colors">Explore More ↗</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Seasonal Picks */}
      <section id="crops" className="pb-16 md:pb-16 pt-14">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
                <span className="pill-tag bg-white text-[#8aac1c] mb-4 shadow-sm border border-slate-100">Seasonal Picks</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading">Best For Your Terrace</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { name: 'Cherry Tomatoes', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=500' },
                  { name: 'Garden Chillies', img: 'https://images.unsplash.com/photo-1594315590298-329f49c7dcb9?auto=format&fit=crop&q=80&w=500' },
                  { name: 'Spinach & Greens', img: 'https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80&w=500' },
                  { name: 'Organic Brinjals', img: 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fit=crop&q=80&w=500' }
                ].map((crop, i) => (
                  <div key={i} className="group" data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className="rounded-3xl overflow-hidden mb-4 aspect-square shadow-md border-4 border-white">
                          <img src={crop.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={crop.name}/>
                      </div>
                      <h4 className="font-bold text-[#132A13] text-center text-lg">{crop.name}</h4>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="pb-16 pt-16 px-6 bg-[#fbfef2]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
                <div className="max-w-2xl">
                    <span className="pill-tag bg-[#f2f4f0] text-[#8aac1c] mb-4">Video Tutorials</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">
                        Watch & Learn How to <br /> Grow Your Own Food
                    </h2>
                </div>
                <div className="hidden md:block">
                    <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noreferrer" 
                       className="bg-[#132A13] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#8aac1c] transition shadow-xl flex items-center gap-3">
                        Visit YouTube Channel <i className="fab fa-youtube text-xl"></i>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'How to start a small farm with low budget', img: 'https://i.ytimg.com/vi/dt-wcZkCbS0/maxresdefault.jpg' },
                  { title: 'Top 7 Easiest Plants for Beginners', img: 'https://i.ytimg.com/vi/B0i39m4bIL0/maxresdefault.jpg' },
                  { title: 'Homesteading 101: First 5 Steps', img: 'https://i.ytimg.com/vi/YCLBcDRMQYQ/maxresdefault.jpg' }
                ].map((video, i) => (
                  <div key={i} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg mb-6">
                          <img src={video.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={video.title}/>
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-[#8aac1c] shadow-2xl group-hover:scale-110 transition-transform">
                                  <i className="fas fa-play text-xl ml-1"></i>
                              </div>
                          </div>
                      </div>
                      <h4 className="text-xl font-bold text-[#132A13] mb-2 px-2">{video.title}</h4>
                      <p className="text-slate-500 text-sm px-2">Essential steps for urban farmers.</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
                <span className="pill-tag bg-[#f2f4f0] text-[#8aac1c] mb-4">Latest Updates</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">From Our Green Journal</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { title: '5 Secrets to High-Yield Rooftop Composting', date: 'March 24, 2026', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600' },
                  { title: 'Growing Summer Tomatoes in Chennai Heat', date: 'March 18, 2026', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600' },
                  { title: 'Is Smart Drip Irrigation Worth the Investment?', date: 'March 10, 2026', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600' }
                ].map((post, i) => (
                  <div key={i} className="group bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[7/5] shadow-md">
                          <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={post.title}/>
                      </div>
                      <div className="px-2 pb-4">
                          <p className="text-[#bc6c25] font-bold text-xs mb-3 uppercase tracking-widest">{post.date}</p>
                          <h3 className="text-xl font-bold text-[#132A13] mb-4 group-hover:text-[#8aac1c] transition-colors cursor-pointer">{post.title}</h3>
                          <a href="#" className="text-[#132A13] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">Read Article <i className="fas fa-arrow-right text-[#8aac1c]"></i></a>
                      </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 md:py-16 bg-[#fbfef2] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative" data-aos="fade-right">
              <span className="text-[#bc6c25] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Success Stories</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">Real Harvests <br /> from Real People</h2>
              

              <div className="relative aspect-[4/5] h-auto max-h-[500px] md:max-h-none rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white mt-8">
  <img 
    src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" 
    className="w-full h-full object-cover" 
    alt="Garden Harvest" 
  />
</div>
            </div>
            <div className="lg:col-span-7 lg:pl-16" data-aos="fade-left">
              <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={40}
                loop={true}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="testSwiper !pb-16"
              >
                <SwiperSlide>
                  <div className="bg-slate-50 p-8 md:p-14 rounded-[3rem] border border-slate-100">
                    <div className="flex gap-1 text-[#8aac1c] mb-8">
                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <p className="text-[#132A13] text-xl md:text-2xl leading-relaxed italic mb-10 font-medium font-heading">
                      "HouseofGreen transformed my boring 400sqft terrace into a lush vegetable haven."
                    </p>
                    <div className="flex items-center gap-5">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover" alt="Client" />
                      <div>
                        <h4 className="text-[#132A13] font-bold text-lg font-heading">Pravin Sam</h4>
                        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Chennai Homeowner</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;