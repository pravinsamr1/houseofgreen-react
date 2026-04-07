import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Check if scrolled more than 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          bg-[#2e7d32] hover:bg-[#31572C] text-white w-12 h-12 rounded-full shadow-2xl 
          flex items-center justify-center border-2 border-white/20
          transition-all duration-500 ease-in-out
          ${isVisible 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-10 pointer-events-none'}
          hover:-translate-y-2 active:scale-95
        `}
      >
        <i className="fas fa-chevron-up text-xl"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;