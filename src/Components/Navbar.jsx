import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Plant List', path: '/crops' },
        { name: 'Shop', path: '/shop' }, // Simple link
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <nav className="fixed w-full top-0 z-[100] border-b border-gray-100 bg-white/80 backdrop-blur-xl">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex justify-between items-center">
                
                {/* Logo */}
                <div onClick={() => navigate('/')} className="cursor-pointer z-[210]">
                    <img src={logo} alt="logo" className='w-40 md:w-52' />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex gap-8 items-center font-medium text-[#132A13]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative py-2 transition group ${isActive(link.path) ? 'text-[#2E7D32]' : 'hover:text-[#2E7D32]'}`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2E7D32] transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <button
    onClick={() => window.open('https://wa.me/+919677272271', '_blank')}
    className="hidden lg:flex items-center gap-2 bg-[#2E7D32] text-white px-7 py-3 rounded-full font-bold hover:bg-[#1b4d1e] shadow-lg transition-all duration-300 active:scale-95"
>
    <i className="fa-brands fa-whatsapp text-xl"></i>
    <span>For Enquiry</span>
</button>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-2xl z-[210]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={isMenuOpen ? "fas fa-times text-[#2E7D32]" : "fas fa-bars text-[#132A13]"}></i>
                </button>

                {/* Mobile Drawer */}
                <div className={`fixed inset-0 bg-white z-[200] h-400 lg:hidden flex flex-col pt-28 px-8 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[20px] font- border-b border-gray-100 pb-4 ${isActive(link.path) ? 'text-[#2E7D32]' : 'text-[#132A13]'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <button
    onClick={() => window.open('https://wa.me/+919677272271', '_blank')}
    className=" lg:flex items-center gap-2 bg-[#2E7D32] text-white px-7 py-3 rounded-full font-bold hover:bg-[#1b4d1e] shadow-lg transition-all duration-300 active:scale-95"
>
    <i className="fa-brands fa-whatsapp text-xl"></i>
    <span>For Enquiry</span>
</button>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;