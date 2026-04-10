import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import serviceImage from '../assets/img/service.jpg'; 
import veg from '../assets/img/veg.png'; 
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../App.css'

import banner from '../assets/img/banner.jpg'
import banner1 from '../assets/img/banner1.jpg'
import banner2 from '../assets/img/banner2.jpg'
import homeService from '../assets/img/home-service.png'
import icon from '../assets/img/home-icon1.png'
import icon1 from '../assets/img/home-icon2.png'
import icon2 from '../assets/img/home-icon3.png'

import aboutImg from  '../assets/img/home-about.jpg'
import aboutImg1 from  '../assets/img/home-about1.jpg'


import s1 from  '../assets/img/s1.jpg'
import s2 from  '../assets/img/s2.jpg'
import s3 from  '../assets/img/s3.jpg'
import s4 from  '../assets/img/s4.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import OfferMarquee from '../Components/Marquee';
import { useNavigate } from 'react-router-dom';


const services = [
  {
    title: "Terrace Garden Setup",
    desc: "Complete rooftop transformation with grow beds, soil setup, and plant selection tailored to your space and sunlight.",
    img: s1,
  },
  {
    title: "Automated Irrigation",
    desc: "Smart drip irrigation systems that save water and ensure your plants stay healthy with minimal effort.",
    img: s2,
  },
  {
    title: "Organic Gardening",
    desc: "Chemical-free gardening using compost, natural fertilizers, and eco-friendly pest control solutions.",
    img: s3,
  },
  {
    title: "Maintenance & Support",
    desc: "Regular care, plant health monitoring, and expert guidance to keep your garden thriving year-round.",
    img: s4,
  },
];

const categories = [
  { name: "Vegetable Plants", img: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600", count: "24 Items" },
  { name: "Fruit Plants", img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600", count: "18 Items" },
  { name: "Seeds", img: "https://images.unsplash.com/photo-1618375531912-77ac314bb3bc?w=600", count: "50+ Varieties" },
  { name: "Flower Plants", img: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600", count: "30 Items" },
  { name: "Crotons Plants", img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600", count: "12 Items" },
  { name: "Gardening Pots", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600", count: "15 Designs" },
  { name: "Equipments", img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600", count: "20+ Tools" },
];

const Home = () => {

  const navigate = useNavigate()


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });

    document.title = "House of Greens - Revolutionizing Urban Farming in Chennai";

    window.scrollTo(0,0);
  }, []);

  return (
    <div className="bg-[#fdfdfb] text-slate-800 font-sans overflow-x-hidden">
      {/* Custom Styles Injection */}
      

      {/* Hero Slider */}
      <section id="home" className="relative pt-15 overflow-hidden">
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
              <img src={banner} className="w-full h-full object-cover" alt="Urban Farming" />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
    <span className="hero-content-anim text-[#e1e7d1] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
      Sustainable Urban Gardening
    </span>
                <h1 className="hero-content-anim delay-1 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-heading">
                  Transform Your Terrace into a Green Paradise
                </h1>
                <p className="hero-content-anim delay-2 text-[#f2f4f0]/80 text-base md:text-lg mb-10 leading-relaxed">
                  Turn your rooftop into a thriving garden with fresh vegetables, herbs, and greens. We help you create beautiful, eco-friendly spaces right at home.
                </p>
                <div className="hero-content-anim delay-3">
                  <button className="bg-[#2e7d32] text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition flex items-center gap-3 active:scale-95 shadow-lg">
                    Discover More <i className="fas fa-arrow-right-long text-sm -rotate-45"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="absolute inset-0 bg-[#132A13]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#132A13]/80 via-[#132A13]/40 to-transparent z-10"></div>
              <img src={banner2} className="w-full h-full object-cover" alt="Terrace Garden" />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
                <span className="hero-content-anim text-[#e1e7d1] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Sustainable Living</span>
                <h1 className="hero-content-anim delay-1 text-5xl md:text-7xl font-bold text-white leading-tight mb-6 font-heading">Your Personal Grocery Store</h1>
                <p className="hero-content-anim delay-2 text-[#f2f4f0]/80 text-base md:text-lg mb-10 leading-relaxed">Why buy when you can grow? Fresh, pesticide-free vegetables harvested by your own hands.</p>
                <div className="hero-content-anim delay-3">
                  <button className="bg-[#2E7D32] text-white px-10 py-4 rounded-xl font-bold hover:brightness-110 transition flex items-center gap-3 active:scale-95 shadow-lg">
                    Start Growing <i className="fas fa-leaf text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Quick Stats */}
    <OfferMarquee/>

      {/* About Section */}
      <section id="about" className="pb-13 md:pb-22 px-6 pt-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 pt-3 items-center">
          <div className="relative w-full aspect-[4/5] md:h-[650px]">
            <div className="w-full h-full rounded-[2rem] overflow-hidden  relative z-0 border-8 border-gray-100" data-aos="fade-right">
              <img src={aboutImg} className="w-full h-full object-cover" alt="Garden detail" />
            </div>
            <div className="absolute -bottom-10 -right-4 md:-right-12 w-1/2 h-2/3 z-20" data-aos="zoom-in" data-aos-delay="200">
              <img src={aboutImg1} className="w-full h-full object-cover rounded-[2rem] border-[8px] md:border-[12px] border-green " alt="Harvest" />
            </div>
            <div className="absolute top-12 left-1/2 bg-green-700 text-white p-4 rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-2xl z-30 border-4 border-white floating-card">
              <span className="text-2xl font-bold">10+</span>
              <span className="text-[8px] uppercase tracking-tighter font-bold text-center leading-tight">Years <br />Experience</span>
            </div>
          </div>
          <div data-aos="fade-left">
            <span className="pill-tag bg-[#f2f4f0] text-[#2E7D32] mb-6">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#132A13] mb-8 leading-tight font-heading">Healthy Living with Fresh Rooftop Produce</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">
              At House of Greens, we specialize in transforming urban terraces into vibrant, sustainable gardens. With years of expertise, we design and build eco-friendly spaces that grow fresh, organic produce right at your home. Our mission is to make healthy living accessible by bringing nature closer to everyday city life.
            </p>
            <ul className="grid gap-6 mb-12">
              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition">
                  <i className="fas fa-spa"></i>
                </div>
                <span className="font-bold text-slate-700">End-to-End Terrace Garden Solutions</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition">
                  <i className="fas fa-spa"></i>
                </div>
                <span className="font-bold text-slate-700">Eco-Friendly & Sustainable Gardening Practices</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition">
                  <i className="fas fa-spa"></i>
                </div>
                <span className="font-bold text-slate-700">Expert Design & Personalized Garden Planning</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="bg-slate-50 w-10 h-10 rounded-full flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-white transition">
                  <i className="fas fa-spa"></i>
                </div>
                <span className="font-bold text-slate-700">Ongoing Support & Maintenance Guidance</span>
              </li>
            </ul>
            <button className="bg-[#132A13] text-white px-10 py-4 rounded-xl font-bold bg-[#2E7D32] hover:bg-[#2E7D32] transition shadow-xl flex items-center gap-3" onClick={()=>navigate('/about-us')}>
              Our Story <i className="fas fa-arrow-right-long text-sm"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="category-grid" className="pt-1 pb-[60px] px-6 overflow-hidden relative bg-[#fbfef2]">
  <div className="max-w-7xl mx-auto">
    <div className="relative flex flex-col md:flex-row justify-between items-end pb-32 pt-8">
      <div className="absolute top-0 -left-10 w-full md:w-3/5 h-full bg-[#132A13] -z-10 rounded-br-[4rem]"></div>

      <div className="w-full md:w-1/2 text-white p-6 md:pl-6" data-aos="fade-right">
        <span className="text-xs tracking-[0.3em] opacity-70 uppercase font-bold block mb-2 text-black">
          Browse by
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-2 leading-tight text-black font-heading">
          Plant Categories
        </h2>
      </div>

      <div className="w-full md:w-1/3 p-6 md:pb-12" data-aos="fade-left">
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Find exactly what you need for your terrace garden. From organic seeds to premium tools.
        </p>
      </div>
    </div>

    {/* Category Cards Container */}
    <div className="relative -mt-[100px] z-30 pb-12">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 }, // 5 categories visible on desktop
        }}
        loop={true}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        className="mySwiper !overflow-visible"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div 
              onClick={() => navigate('/shop')} // Link to your shop page
              className="cursor-pointer group bg-white rounded-[1.5rem] p-4 border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center"
            >
              {/* Category Image - Circular/Organic Shape */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-5 shadow-inner">
                <img 
                  src={cat.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" 
                  alt={cat.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text Info */}
              <div className="pb-2">
                <h3 className="text-lg md:text-xl font-medium text-[#132A13] group-hover:text-[#2E7D32] transition-colors mb-1">
                  {cat.name}
                </h3>
                <p className="text-[#2E7D32] text-xs font-bold bg-green-50 px-3 py-1 rounded-full inline-block">
                  {cat.count}
                </p>
              </div>

              {/* Small "Explore" Indicator */}
              <div className="mt-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#132A13] group-hover:bg-[#2E7D32] group-hover:text-white transition-all">
                <i className="fas fa-arrow-right text-sm"></i>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</section>

      

      {/* Videos Section */}
      <section id="videos" className="pb-8 pt-8 md:mt-4 md:pb-16 px-6 ">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
                <div className="max-w-2xl">
                    <span className="pill-tag bg-[#f2f4f0] text-[#2E7D32] mb-4">Video Tutorials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">
                        Watch & Learn 
                    </h2>
                </div>
                <div className="hidden md:block">
                    <a href="https://www.youtube.com/@YourChannel" target="_blank" rel="noreferrer" 
                       className="bg-[#132A13] text-white px-8 py-4 rounded-xl font-bold bg-[#2E7D32] hover:bg-[#2E7D32] transition shadow-xl flex items-center gap-3">
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
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-[#2E7D32] shadow-2xl group-hover:scale-110 transition-transform">
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
      <section className="pt-8 md:pt-16 pb-8 md:pb-10  px-6 overflow-hidden bg-[#fbfef2]">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-5 md:mb-16" data-aos="fade-up">
      <span className="pill-tag bg-[#f2f4f0] text-[#2E7D32] mb-4 inline-block px-4 py-1 rounded-full text-sm font-bold">
        Latest Updates
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight">
        From Our Green Journal
      </h2>
    </div>

    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        // Responsive breakpoints
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="blogSwiper !pb-16"
    >
      {[
        { title: '5 Secrets to High-Yield Rooftop Composting', date: 'March 24, 2026', img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600' },
        { title: 'Growing Summer Tomatoes in Chennai Heat', date: 'March 18, 2026', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=600' },
        { title: 'Is Smart Drip Irrigation Worth the Investment?', date: 'March 10, 2026', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600' },
        { title: 'Is Smart Drip Irrigation Worth the Investment?', date: 'March 10, 2026', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=600' },
      ].map((post, i) => (
        <SwiperSlide key={i}>
          <div className="group bg-white p-4 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-50 h-full">
            <div className="relative rounded-[2rem] overflow-hidden mb-6 aspect-[7/5] shadow-md">
              <img 
                src={post.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={post.title}
              />
            </div>
            <div className="px-2 pb-4">
              <p className="text-[#bc6c25] font-bold text-xs mb-3 uppercase tracking-widest">{post.date}</p>
              <h3 className="text-xl font-bold text-[#132A13] mb-4 group-hover:text-[#2E7D32] transition-colors cursor-pointer line-clamp-2">
                {post.title}
              </h3>
              <a href="#" className="text-[#132A13] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                Read Article <i className="fas fa-arrow-right text-[#2E7D32]"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* Testimonials */}
      <section id="testimonials" className="relative pt-10 pb-1 md:py-16 bg-white overflow-hidden">
  <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
      
      {/* Left Column */}
      <div className="lg:col-span-5 flex flex-col h-full" data-aos="fade-right">
        <span className="text-[#bc6c25] font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Success Stories</span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#132A13] font-heading leading-tight mb-8">
          Real Harvests <br /> from Real People
        </h2>
        
        <div className="relative flex-1 min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Garden Harvest" 
          />
        </div>
      </div>

      {/* Right Column - ADDED 'min-w-0' HERE */}
      <div className="lg:col-span-7 flex flex-col h-full lg:pt-16 min-w-0" data-aos="fade-left">
        <div className="h-full relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="testSwiper flex-1 !pb-16 h-full w-full" /* Added w-full */
          >
            <SwiperSlide className="h-auto"> {/* Changed h-full to h-auto for better internal flex */}
              <div className="bg-slate-50 p-8 md:p-14 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-center">
                <div className="flex gap-1 text-[#2E7D32] mb-8">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-[#132A13] text-lg md:text-xl leading-relaxed italic mb-10 font-medium font-heading">
                  "House of Greens transformed my boring 400sqft terrace into a lush vegetable haven. I used to think urban farming was impossible, but their expert team guided me through every step. Now, my family enjoys pesticide-free tomatoes and spinach every single day right from our rooftop. It is truly life-changing and sustainable!"
                </p>
                <div className="flex items-center gap-5 mt-auto">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover" alt="Client" />
                  <div>
                    <h4 className="text-[#132A13] font-bold text-lg font-heading">Pravin Sam</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Chennai Homeowner</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-auto">
              <div className="bg-slate-50 p-8 md:p-14 rounded-[2rem] border border-slate-100 h-full flex flex-col justify-center">
                <div className="flex gap-1 text-[#2E7D32] mb-8">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-[#132A13] text-lg md:text-xl leading-relaxed italic mb-10 font-medium font-heading">
                  "Working with this team was the best decision for our home. The automated irrigation system they installed makes maintenance a breeze, even with my busy schedule. We've successfully harvested organic herbs and gourds that taste infinitely better than store-bought ones. Our terrace has become the most beautiful, green, and peaceful part of our house."
                </p>
                <div className="flex items-center gap-5 mt-auto">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" className="w-16 h-16 rounded-full border-2 border-white shadow-lg object-cover" alt="Client" />
                  <div>
                    <h4 className="text-[#132A13] font-bold text-lg font-heading">Anitha Raj</h4>
                    <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Urban Gardener</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;