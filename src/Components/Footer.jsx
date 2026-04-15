import React from 'react'
import logo from '../assets/img/footer-logo.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div>
        <footer className="relative pt-24 pb-5 px-6 lg:px-12 pt-[50px] text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e835?auto=format&fit=crop&q=80&w=1600" 
             className="w-full h-full object-cover" alt="Footer Background"/>
        <div className="absolute inset-0 bg-black/85 "></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-7 mb-10">
        
        <div className="md:col-span-5"> {/* Removed space-y-8 */}
    <div className="flex items-center">
        {/* Adjusted width to 200px for better balance with the text below */}
        <img src={logo} alt="houseofgreens logo" className='w-[250px] block' />
    </div>
    
    {/* Use a small, positive margin-top instead of a negative one */}
    <p className="text-white/80 text-base leading-relaxed max-w-xl mt-2 font-poppins">
        Transforming urban concrete into flourishing organic havens. 
        We specialize in sustainable terrace farming solutions for a greener Chennai.
    </p>

    {/* Add the gap back specifically for the social icons */}
    {/* <div className="flex gap-5 mt-8">
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2E7D32] hover:border-[#2E7D32] transition-all duration-300">
            <i className="fab fa-instagram text-base"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2E7D32] hover:border-[#2E7D32] transition-all duration-300">
            <i className="fab fa-whatsapp text-base"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#2E7D32] hover:border-[#2E7D32] transition-all duration-300">
            <i className="fab fa-facebook-f text-base"></i>
        </a>
    </div> */}
</div>

        <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4">
                <li><p onClick={()=>navigate('/about-us')} className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">About Us</p></li>
                <li><p onClick={()=>navigate('/crops')}className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">Our Plant List</p></li>
                <li><p onClick={()=>navigate('/shop')} className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">Shop</p></li>
                <li><p onClick={()=>navigate('/gallery')} className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">Gallery</p></li>
            </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Useful Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4">
                <li><p onClick={()=>navigate('/privacy-policy')}   className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">Privacy Policy</p></li>
                <li><p onClick={()=>navigate('/terms-conditions')}    className="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block cursor-pointer">Terms</p></li>
            </ul>
        </div>

        <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Office Info
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <i className="fas fa-map-marker-alt text-accent mt-1.5"></i>
                    <p className="text-base text-white/80 leading-relaxed">
                        Porur, Chennai - 600056
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <i className="fas fa-phone-alt text-accent"></i>
                    <p className="text-base text-white/80 font-medium">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-4">
                    <i className="fas fa-envelope text-accent"></i>
                    <a href="mailto:help@houseofgreens.co.in" className="text-base text-white/80 hover:text-accent transition-colors truncate">help@houseofgreens.co.in</a>
                </div>
            </div>
        </div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-white/40 font-bold tracking-[0.4em] uppercase">
            © 2026 houseofgreens | All Rights Reserved
        </p>
        <div className="flex gap-8 text-[10px] text-white/40 font-bold tracking-widest uppercase">
            <span>Designed by <a href="https://impinfo.in" className='hover:text-[#fff]' target='_blank'>Imperial Info Systems</a> </span>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer