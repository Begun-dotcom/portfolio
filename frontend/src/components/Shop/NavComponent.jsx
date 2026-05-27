import React from 'react'
import { useState, useEffect } from 'react';
import { FiShoppingCart, FiHeart, FiStar, FiPhone, FiMapPin, FiClock, FiInstagram, FiMenu, FiX, FiChevronRight, FiSend } from 'react-icons/fi';

function NavComponent() {
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(!mobileMenuOpen)
  };

    useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const section = [
    { name: 'Главная', href: '#hero' },
    { name: 'Каталог', href: '#catalog' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className='max-w-[1800px] mx-auto px-6 lg:px-10 h-12 md:h-16 flex items-center justify-between'>
          
          <div className='flex items-center gap-2'>
            <a href="#hero" className='flex items-center gap-2 text-gray-800 hover:text-rose-500 transition-all duration-300 hover:scale-105'>
              <span className='text-3xl'>🌸</span>
              <span className='text-xl md:text-2xl font-serif italic tracking-tight'>Bloom</span>
          </a>
            
          </div>

          <div className='hidden md:flex items-center gap-12'>
            {section.map(item => (
              <a key={item.name} href={item.href} className='text-gray-500 text-sm hover:text-gray-900 transition-colors lg:text-lg  font-medium tracking-wide'
                >
                  {item.name}
                </a>
            ))}
          </div>
          <a 
                href="tel:8-000-000-00-00" 
                className="hidden sm:flex group items-center gap-3 bg-rose-500 hover:bg-rose-400 text-white font-semibold px-3 md:px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                  
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  
                  
                  <svg className="w-5 h-5 md:w-5 md:h-5 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  
                  
                  <span className="hidden lg:inline">8-000-000-00-00</span>
          </a>
           
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden p-2'>
            {mobileMenuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
          </button>
          
        </div>
        {mobileMenuOpen && (
        <div className='md:hidden bg-white/50 backdrop-blur-md border-t border-white/10'>
          <div className='flex flex-col px-4 py-4 gap-3'>
            {section.map(link => (
              <a key={link.href} href={link.href}
                 onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                 className='text-black/50 hover:text-amber-500 transition-colors text-sm font-medium py-1'>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
      </nav>
      
  )
}

export default NavComponent
