import React, { useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import '../App.css'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Plant List', path: '/crops' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <nav className="fixed w-full top-0 z-[100] border-b bg-white/90 backdrop-blur-md">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex justify-between items-center">
                
                {/* Main Logo Section */}
                <div 
                    onClick={() => navigate('/')} 
                    className="flex items-center gap-2 group cursor-pointer relative z-[110]"
                >
                    <img src={logo} alt="" className='w-[250px]' />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex gap-10 font-semibold text-[#132A13]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`transition cursor-pointer underline-offset-8 hover:underline decoration-[#90a955] ${
                                isActive(link.path) ? 'text-[#2E7D32] underline' : 'hover:text-[#2E7D32]'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Action Button */}
                <button 
                    onClick={() => navigate('/contact-us')}
                    className="hidden lg:block bg-[#2E7D32] text-white px-8 py-3 rounded-xl font-bold hover:brightness-105 shadow-xl transition active:scale-95"
                >
                    Contact Us
                </button>

                {/* Mobile Menu Icon */}
                <button 
                    className="lg:hidden text-[#132A13] text-2xl relative z-[110]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`
                    fixed inset-0 w-screen h-screen bg-white z-[200] lg:hidden 
                    flex flex-col p-8 pt-8 gap-12
                    transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    {/* Logo inside Overlay */}
                    <div className="flex items-center justify-between">
                        <div 
                            onClick={() => { navigate('/'); setIsMenuOpen(false); }} 
                            className="flex items-center gap-2 group cursor-pointer"
                        >
                            <div className="bg-[#31572C] p-2 rounded-xl text-white shadow-lg">
                                <i className="fas fa-seedling text-xl"></i>
                            </div>
                            <span className="text-xl font-bold font-heading text-[#132A13] tracking-tight">
                                houseofgreen
                            </span>
                        </div>

                        {/* Close Button */}
                        <button 
                            className="text-[#132A13] text-3xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-3xl font-bold font-heading transition-colors ${
                                    isActive(link.path) ? 'text-[#2E7D32]' : 'text-[#132A13]'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    {/* Decorative Background Element */}
                    <div className="absolute bottom-10 right-10 opacity-10 text-[200px] text-[#2E7D32] -rotate-12 pointer-events-none">
                        <i className="fas fa-leaf"></i>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar