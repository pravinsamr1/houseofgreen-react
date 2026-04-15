import React, { useState, useMemo, useEffect } from 'react';
import banner from '../assets/img/banner1.jpg'

const ProductsPage = () => {

     useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(2000);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const products = [
    { id: 1, name: "Organic Tomato Starter Kit", image: banner, originalPrice: 1200, sellingPrice: 899, category: "Seeds & Kits" },
    { id: 2, name: "Premium Grow Bag - Large", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=500", originalPrice: 450, sellingPrice: 299, category: "Gardening" },
    { id: 3, name: "Neem Oil Pest Control", image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=500", originalPrice: 350, sellingPrice: 250, category: "Tools" },
    { id: 4, name: "Organic Fertilizer", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=500", originalPrice: 600, sellingPrice: 450, category: "Gardening" },
    { id: 5, name: "Hand Trowel", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=500", originalPrice: 250, sellingPrice: 150, category: "Tools" },
  ];

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchPrice = product.sellingPrice <= maxPrice;
      return matchCategory && matchPrice;
    });
  }, [selectedCategory, maxPrice, products]);

  const handleWhatsAppOrder = (product) => {
    const phoneNumber = "919677272271";
    
    const message = `*INQUIRY: ${product.name.toUpperCase()}* 🌿
    
*Category:* ${product.category}
*Selling Price:* ₹${product.sellingPrice}
*Original Price:* ₹${product.originalPrice}
*You Save:* ₹${product.originalPrice - product.sellingPrice}

I would like to order this product from House of Greens. Please confirm availability.

${product.image}`;

    const encodedMessage = encodeURIComponent(message);
    
    // Using the wa.me API
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };
  
  
  // Shared Filter Content to avoid duplication
  const FilterContent = () => (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#132A13]">Filters</h2>
        <button onClick={() => setIsFilterDrawerOpen(false)} className="lg:hidden p-2 text-gray-400">
           <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      <div className="mb-8">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</p>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if(window.innerWidth < 1024) setIsFilterDrawerOpen(false);
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                selectedCategory === cat 
                ? 'bg-[#2E7D32] text-white shadow-md' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Max Price</p>
          <span className="text-[#2E7D32] font-bold">₹{maxPrice}</span>
        </div>
        <input 
          type="range" min="100" max="2000" step="50"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2E7D32]"
        />
      </div>

      <button 
        onClick={() => { setSelectedCategory('All'); setMaxPrice(2000); setIsFilterDrawerOpen(false); }}
        className="w-full py-2 text-sm text-gray-400 hover:text-red-500 transition-colors"
      >
        Reset Filters
      </button>
    </>
  );

  

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* --- HEADER & MOBILE FILTER TOGGLE --- */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#132A13] mb-2">Our Marketplace</h1>
            <p className="text-gray-500">Showing {filteredProducts.length} products</p>
          </div>
          
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterDrawerOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 font-bold text-[#132A13] active:scale-95 transition-all"
          >
            <i className="fas fa-sliders-h text-[#2E7D32]"></i>
            Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* --- DESKTOP SIDEBAR --- */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300 sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* --- MOBILE FILTER DRAWER (OVERLAY) --- */}
          <div className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${isFilterDrawerOpen ? "visible" : "invisible"}`}>
            {/* Dark Backdrop */}
            <div 
              className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isFilterDrawerOpen ? "opacity-100" : "opacity-0"}`}
              onClick={() => setIsFilterDrawerOpen(false)}
            ></div>
            
            {/* Drawer Content */}
            <div className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-8 shadow-2xl transition-transform duration-300 ${isFilterDrawerOpen ? "translate-x-0" : "translate-x-full"}`}>
              <FilterContent />
            </div>
          </div>

          {/* --- PRODUCT GRID --- */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => {
                  const discount = Math.round(((product.originalPrice - product.sellingPrice) / product.originalPrice) * 100);
                  return (
                    <div key={product.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col">
                      <div className="relative aspect-square overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-2 left-2 bg-orange-500 text-white text-[9px] font-bold px-2 py-1 rounded-full shadow-lg">
                          {discount}% OFF
                        </div>
                      </div>

                      <div className="p-3 md:p-5 flex flex-col flex-1">
                        <p className="text-[#2E7D32] text-[9px] font-bold uppercase tracking-widest mb-1">{product.category}</p>
                        <h3 className="text-sm md:text-lg font-bold text-[#132A13] mb-1 line-clamp-1">{product.name}</h3>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-black text-[#132A13]">₹{product.sellingPrice}</span>
                          <span className="text-gray-400 line-through text-[10px]">₹{product.originalPrice}</span>
                        </div>

                        <button 
                          onClick={() => handleWhatsAppOrder(product)}
                          className="mt-auto w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-2 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 text-xs md:text-sm"
                        >
                          <i className="fab fa-whatsapp text-lg"></i>
                          <span>Order</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <i className="fas fa-search text-4xl text-gray-200 mb-4"></i>
                <p className="text-gray-500 font-medium">No results found.</p>
                <button onClick={() => { setSelectedCategory('All'); setMaxPrice(2000); }} className="text-[#2E7D32] font-bold underline mt-2">Clear filters</button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;