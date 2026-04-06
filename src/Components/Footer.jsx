import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="relative pt-24 pb-5 px-6 lg:px-12 pt-[50px] text-white overflow-hidden">
    <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e835?auto=format&fit=crop&q=80&w=1600" 
             class="w-full h-full object-cover" alt="Footer Background"/>
        <div class="absolute inset-0 bg-black/85 "></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-7 mb-10">
        
        <div class="md:col-span-5 space-y-8">
            <div class="flex items-center gap-2">
                <div class="bg-garden-500 p-2.5 rounded-xl text-white shadow-lg">
                    <i class="fas fa-leaf text-2xl"></i>
                </div>
                <span class="text-3xl font-bold font-heading tracking-tight">houseofgreen</span>
            </div>
            <p class="text-white/80 text-base leading-loose max-w-xl">
                Transforming urban concrete into flourishing organic havens. We specialize in sustainable terrace farming solutions for a greener Chennai.
            </p>
            <div class="flex gap-5">
                <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <i class="fab fa-instagram text-base"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <i class="fab fa-whatsapp text-base"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
                    <i class="fab fa-facebook-f text-base"></i>
                </a>
            </div>
        </div>

        <div class="md:col-span-2 lg:col-span-2">
            <h4 class="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Quick Links
                <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul class="space-y-4">
                <li><a href="#home" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Home</a></li>
                <li><a href="#about" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Our Story</a></li>
                <li><a href="#services-grid" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Services</a></li>
                <li><a href="#crops" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Crop Guide</a></li>
            </ul>
        </div>

        <div class="md:col-span-2 lg:col-span-2">
            <h4 class="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Useful Links
                <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul class="space-y-4">
                <li><a href="#" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Privacy Policy</a></li>
                <li><a href="#" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Terms</a></li>
                <li><a href="#" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">FAQ's</a></li>
                <li><a href="#" class="text-base text-white/80 hover:text-accent hover:translate-x-2 transition-all inline-block">Support</a></li>
            </ul>
        </div>

        <div class="md:col-span-4 lg:col-span-3">
            <h4 class="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 relative inline-block">
                Office Info
                <span class="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <div class="space-y-6">
                <div class="flex items-start gap-4">
                    <i class="fas fa-map-marker-alt text-accent mt-1.5"></i>
                    <p class="text-base text-white/80 leading-relaxed">
                        123 Green Terrace Lane, Adyar, Chennai - 600020
                    </p>
                </div>
                <div class="flex items-center gap-4">
                    <i class="fas fa-phone-alt text-accent"></i>
                    <p class="text-base text-white/80 font-medium">+91 98765 43210</p>
                </div>
                <div class="flex items-center gap-4">
                    <i class="fas fa-envelope text-accent"></i>
                    <a href="mailto:grow@houseofgreen.in" class="text-base text-white/80 hover:text-accent transition-colors truncate">grow@houseofgreen.in</a>
                </div>
            </div>
        </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[10px] text-white/40 font-bold tracking-[0.4em] uppercase">
            © 2026 HOUSEOFGREEN | ORGANIC URBANISM
        </p>
        <div class="flex gap-8 text-[10px] text-white/40 font-bold tracking-widest uppercase">
            <span>Designed with <i class="fas fa-heart text-accent mx-1"></i> in Chennai</span>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer