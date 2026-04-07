import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadcrumbHero from '../Components/Bread';

const Contact = () => {
    useEffect(() => {
        AOS.init({ 
            duration: 1000, 
            once: true 
        });

        window.scrollTo(0,0);

        document.title = "Contact Us | House of Green";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form logic here
        console.log("Form submitted");
    };

    return (
        <div className="bg-[#fdfdfb] text-slate-800 font-sans overflow-x-hidden">
            {/* Custom Component Styles */}
            <style>{`
                .pill-tag { 
                    font-size: 11px; 
                    font-weight: 800; 
                    text-transform: uppercase; 
                    letter-spacing: 2px; 
                    padding: 8px 20px; 
                    border-radius: 50px; 
                    display: inline-block; 
                }
                .font-heading { 
                    font-family: 'Philosopher', serif; 
                }
                .contact-input {
                    width: 100%;
                    padding: 1rem;
                    background: #f8fafc;
                    border: 2px solid transparent;
                    border-radius: 1rem;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .contact-input:focus {
                    border-color: #4F772D;
                    background: white;
                    box-shadow: 0 10px 15px -3px rgba(79, 119, 45, 0.1);
                }
            `}</style>

            <BreadcrumbHero title="Contact Us" />

            {/* Main Contact Section */}
            <section className="pt-15 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16">
                        
                        {/* Contact Info Column */}
                        <div className="lg:col-span-5 space-y-10" data-aos="fade-right">
                            <div>
                                <h2 className="text-3xl font-bold text-[#132A13] font-heading mb-8">Contact Information</h2>
                                
                                <div className="space-y-8">
                                    <ContactInfoItem 
                                        icon="fa-phone-alt" 
                                        label="Call Us" 
                                        value="+91 98765 43210" 
                                        sub="Mon-Sat: 9am - 7pm" 
                                    />
                                    <ContactInfoItem 
                                        icon="fa-envelope" 
                                        label="Email Us" 
                                        value="hello@houseofgreen.in" 
                                        sub="Response within 24 hours" 
                                    />
                                    <ContactInfoItem 
                                        icon="fa-location-dot" 
                                        label="Visit Office" 
                                        value={<>123, Green Terrace Plaza, <br />Anna Nagar, Chennai - 600040</>} 
                                        sub="Tamil Nadu, India" 
                                    />
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-10 border-t border-slate-100">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Follow Our Harvest</p>
                                <div className="flex gap-4">
                                    <SocialLink icon="fa-instagram" />
                                    <SocialLink icon="fa-facebook-f" />
                                    <SocialLink icon="fa-whatsapp" />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="lg:col-span-7" data-aos="fade-left">
                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-green-900/5 border border-[#f2f4f0]">
                                <h3 className="text-2xl font-bold text-[#132A13] font-heading mb-8">Send us a Message</h3>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Full Name</label>
                                            <input type="text" placeholder="Pravin Sam" className="contact-input" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Email Address</label>
                                            <input type="email" placeholder="example@gmail.com" className="contact-input" required />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Subject</label>
                                        <select className="contact-input appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em]">
                                            <option>New Terrace Setup</option>
                                            <option>Maintenance Request</option>
                                            <option>Bulk Seeds/Organic Nutrients</option>
                                            <option>Other Query</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">Your Message</label>
                                        <textarea rows="5" placeholder="Tell us about your space..." className="contact-input resize-none" required></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-[#132A13] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#31572C] hover:shadow-xl hover:shadow-green-900/20 transition-all active:scale-95">
                                        Send Message <i className="fas fa-paper-plane ml-2 text-sm"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section >
                <div className="max-w-full mx-auto">
                    <div className="overflow-hidden" data-aos="zoom-in">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124361.32637688467!2d80.15598642750372!3d13.048943787754358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3944d18db172f3!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712345678900!5m2!1sen!2sin"
                            className="w-full h-[450px] border-0 grayscale-[0.2] contrast-[1.1]"
                            allowFullScreen="" 
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-components for cleaner code
const ContactInfoItem = ({ icon, label, value, sub }) => (
    <div className="flex items-start gap-6 group">
        <div className="w-14 h-14 bg-[#e1e7d1] text-[#4F772D] rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:bg-[#31572C] group-hover:text-white transition-all duration-300">
            <i className={`fas ${icon}`}></i>
        </div>
        <div>
            <p className="text-xs font-bold text-[#90a955] uppercase tracking-widest mb-1">{label}</p>
            <p className="text-lg font-bold text-[#132A13]">{value}</p>
            <p className="text-sm text-slate-400">{sub}</p>
        </div>
    </div>
);

const SocialLink = ({ icon }) => (
    <a href="#" className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-[#4F772D] hover:bg-[#31572C] hover:text-white transition-all shadow-sm">
        <i className={`fab ${icon}`}></i>
    </a>
);

export default Contact;