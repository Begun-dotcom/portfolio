import React, { useState, useEffect } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';

function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: 'Главная', href: '#hero' },
    { name: 'Услуги', href: '#catalog' },
    { name: 'О нас', href: '#about' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 h-12 md:h-16 transition-all duration-500 ${
      scrollY > 50 
        ? 'bg-lashes-primary/90 backdrop-blur-xl border-b border-lashes-accent/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className='max-w-[1800px] mx-auto h-12 md:h-16 px-5 md:px-6 lg:px-10 py-3 md:py-4 flex items-center justify-between'>
        
        {/* Логотип */}
        <a href="#hero" className='flex items-center gap-2 group'>
          <span className='text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300'>👁️</span>
          <span className='text-base md:text-xl font-serif italic tracking-tight text-white group-hover:text-lashes-accent transition-colors'>
            Lash<span className='text-lashes-accent'>Studio</span>
          </span>
        </a>

        {/* Десктопное меню */}
        <div className='hidden md:flex items-center gap-6 lg:gap-8'>
          {sections.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className='text-lashes-bg-light hover:text-lashes-accent transition-all duration-300 text-sm lg:text-lg font-medium tracking-wide relative group'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-lashes-accent transition-all duration-300 group-hover:w-full' />
            </a>
          ))}
        </div>

        {/* Кнопка звонка и мобильное меню */}
        <div className='flex items-center gap-3'>
          <a 
                href="tel:8-000-000-00-00" 
                className="hidden text-sm sm:flex md:py-2.5 group items-center gap-3 bg-lashes-accent hover:bg-lashes-accent-light text-white font-semibold px-3 md:px-5 py-2.5 rounded-full shadow-lg shadow-lashes-accent-light/20 hover:shadow-xl hover:shadow-lashes-accent-light/40 transition-all duration-300 hover:scale-105 active:scale-95"
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
          
          {/* Мобильная кнопка */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className='md:hidden p-2 text-white hover:text-lashes-accent transition-colors'
          >
            {mobileMenuOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
          </button>
        </div>

      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-lashes-primary border-t border-lashes-accent/20 shadow-xl'>
          <div className='px-6 py-4 flex flex-col gap-3'>
            {sections.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className='text-lashes-text-light hover:text-lashes-accent transition-colors text-sm font-medium py-2 border-b border-lashes-accent/10 last:border-0'
              >
                {item.name}
              </a>
            ))}
            <a 
              href='tel:+79991234567' 
              className='flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-lashes-accent text-white font-medium rounded-full text-sm'
            >
              <FiPhone className='w-4 h-4' />
              +7 (999) 123-45-67
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
