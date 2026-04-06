import React from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Helper to check if a link is active
    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Plant List', path: '/crops' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },
    ];

    return (
        <nav className="fixed w-full top-0 z-[100] border-b bg-white/90 backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex justify-between items-center">
                
                {/* Logo Section */}
                <div 
                    onClick={() => navigate('/')} 
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="bg-[#31572C] p-2 rounded-xl text-white shadow-lg shadow-garden-200 group-hover:rotate-12 transition-transform">
                        <i className="fas fa-seedling text-xl"></i>
                    </div>
                    <span className="text-xl md:text-2xl font-bold font-heading text-[#132A13] tracking-tight">
                        houseofgreen
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="hidden lg:flex gap-10 font-semibold text-[#132A13]">
                    {navLinks.map((link) => (
                        link.path.startsWith('#') ? (
                            <a
                                key={link.name}
                                href={link.path}
                                className="hover:text-[#4F772D] transition cursor-pointer underline-offset-8 hover:underline decoration-[#90a955]"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`transition cursor-pointer underline-offset-8 hover:underline decoration-[#90a955] ${
                                    isActive(link.path) ? 'text-[#4F772D] underline' : 'hover:text-[#4F772D]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Action Button */}
                <button 
                    onClick={() => navigate('/contact-us')}
                    className="bg-[#132A13] text-white px-6 md:px-8 py-3 rounded-xl font-bold bg-[#8aac1c] hover:bg-[#8aac1c] shadow-xl transition active:scale-95 text-sm md:text-base"
                >
                    Contact Us
                </button>
            </div>
        </nav>
    )
}

export default Navbar