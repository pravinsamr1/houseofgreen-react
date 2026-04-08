import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [mobileShopOpen, setMobileShopOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Plant List', path: '/crops' },
        { name: 'Shop', path: '/shop' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },
    ];

    const shopCategories = [
        {
            title: "Plants",
            icon: "fas fa-leaf",
            items: ["Vegetables", "Fruits", "Herbs"]
        },
        {
            title: "Gardening",
            icon: "fas fa-seedling",
            items: ["Seeds", "Soil & Compost", "Grow Bags"]
        },
        {
            title: "Tools",
            icon: "fas fa-tools",
            items: ["Irrigation", "Gardening Tools", "Accessories"]
        }
    ];

    // Close menus on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setMobileShopOpen(false);
    }, [location]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    return (
        <nav className="fixed w-full top-0 z-[100] border-b border-gray-100 bg-white/80 backdrop-blur-xl">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 md:h-24 flex justify-between items-center">

                {/* Logo */}
                <div onClick={() => navigate('/')} className="cursor-pointer z-[210] flex-shrink-0">
                    <img src={logo} alt="logo" className='w-40 md:w-52' />
                </div>

                {/* Desktop Navigation */}
<div className="hidden lg:flex gap-8 items-center font-medium text-[#132A13]">
    {navLinks.map((link) => {
        if (link.name === "Shop") {
            return (
                /* Removed 'relative' from here so the menu centers to the parent container */
                <div
                    key={link.name}
                    className="h-full flex items-center"
                    onMouseEnter={() => setIsShopOpen(true)}
                    onMouseLeave={() => setIsShopOpen(false)}
                >
                    <div className={`flex items-center gap-1 cursor-pointer transition py-8 ${isShopOpen ? 'text-[#2E7D32]' : 'hover:text-[#2E7D32]'}`}>
                        <span>Shop</span>
                        <i className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`}></i>
                    </div>

                    {/* Desktop Mega Menu - Now perfectly centered */}
                    <div className={`
                        absolute left-0 right-0 top-[95px] mx-auto w-full max-w-[1000px] bg-white shadow-2xl rounded-xl p-10 grid grid-cols-3 gap-10 z-[150] border border-gray-100
                        transition-all duration-300 origin-top
                        ${isShopOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-2"}
                    `}>
                        {shopCategories.map((cat) => (
                            <div key={cat.title} className="group/item">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-[#2E7D32] text-xl">
                                        <i className={cat.icon}></i>
                                    </div>
                                    <h4 className="font- text-lg text-[#132A13]">{cat.title}</h4>
                                </div>
                                <ul className="space-y-4">
                                    {cat.items.map(item => (
                                        <li key={item}>
                                            <Link 
                                                to="/shop" 
                                                className="text-gray-500 font-medium hover:text-[#2E7D32] hover:translate-x-2 transition-all flex items-center gap-3 group/link"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/link:bg-[#2E7D32] transition-colors"></span>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        return (
            <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition group ${isActive(link.path) ? 'text-[#2E7D32]' : 'hover:text-[#2E7D32]'}`}
            >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#2E7D32] transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
        );
    })}
</div>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <button
                        onClick={() => navigate('/contact-us')}
                        className="bg-[#2E7D32] text-white px-7 py-3 rounded-full font-bold hover:bg-[#1b4d1e] shadow-lg shadow-green-900/20 transition active:scale-95"
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-2xl z-[210] w-10 h-10 flex items-center justify-center rounded-full bg-gray-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={isMenuOpen ? "fas fa-times text-[#2E7D32]" : "fas fa-bars text-[#132A13]"}></i>
                </button>

                {/* Mobile Side Drawer */}
                <div className={`
                    fixed inset-0 bg-white z-[200] h-300 lg:hidden flex flex-col pt-28 px-8 pb-10 overflow-y-auto
                    transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => {
                            if (link.name === "Shop") {
                                return (
                                    <div key={link.name} className="border-b border-[#d2d2d2] pb-4">
                                        <button
                                            className="w-full flex justify-between items-center text-xl  text-[#132A13]"
                                            onClick={() => setMobileShopOpen(!mobileShopOpen)}
                                        >
                                            <span>Shop</span>
                                            <i className={`fas fa-chevron-down text-lg transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`}></i>
                                        </button>

                                        <div className={`grid transition-all duration-300 ease-in-out ${mobileShopOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                                            <div className="overflow-hidden flex flex-col gap-6">
                                                {shopCategories.map((cat) => (
                                                    <div key={cat.title}>
                                                        <p className="text-[#2E7D32] font- uppercase tracking-wider text-xs mb-3">{cat.title}</p>
                                                        <div className="flex flex-wrap gap-3">
                                                            {cat.items.map(item => (
                                                                <Link
                                                                    key={item}
                                                                    to="/shop"
                                                                    className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-xl font- border-b border-[#d2d2d2] pb-4 ${isActive(link.path) ? 'text-[#2E7D32]' : 'text-[#132A13]'}`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        <button
                            onClick={() => navigate('/contact-us')}
                            className="mt-4 bg-[#2E7D32] text-white w-full py-5 rounded-2xl font-bold text-xl"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;