import React, { useState, useEffect } from 'react';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';

function NavComponent() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: 'Главная', href: '#hero' },
    { name: 'Меню', href: '#catalog' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'О нас', href: '#about' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Акции', href: '#promo' },
    { name: 'Контакты', href: '#contacts' },
    
    
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrollY > 50 
        ? 'bg-sushi-primary/90 backdrop-blur-xl border-b border-sushi-accent/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className='max-w-[1800px] mx-auto px-5 md:px-6 lg:px-10 py-3 md:py-4 flex items-center justify-between'>
        
        {/* Логотип */}
        <a href="#hero" className='flex items-center gap-2 group'>
          <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>🍣</span>
          <div className='text-xl md:text-2xl font-bold text-white'>
            SUSHI<span className='text-sushi-accent'>MARKET</span>
          </div>
        </a>

        {/* Десктопное меню */}
        <div className='hidden lg:flex items-center gap-6 xl:gap-8'>
          {sections.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className='text-sushi-text-light hover:text-sushi-accent transition-all duration-300 text-base xl:text-lg font-medium tracking-wide relative group'
            >
              {item.name}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-sushi-accent transition-all duration-300 group-hover:w-full' />
            </a>
          ))}
        </div>

        {/* Кнопка звонка и мобильное меню */}
        <div className='flex items-center gap-3'>
          <a 
            href='tel:+78003000600' 
            className='hidden md:flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-sushi-accent hover:bg-sushi-accent-light text-black font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sushi-accent/25'
          >
            <FiPhone className='w-4 h-4' />
            8 800 300-06-00
          </a>
          
          {/* Мобильная кнопка */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className='lg:hidden p-2 text-white hover:text-sushi-accent transition-colors'
          >
            {mobileMenuOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
          </button>
        </div>

      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className='lg:hidden bg-sushi-primary border-t border-sushi-accent/20 shadow-xl'>
          <div className='px-5 py-4 flex flex-col gap-3'>
            {sections.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
                className='text-sushi-text-light hover:text-sushi-accent transition-colors text-base font-medium py-2 border-b border-sushi-accent/10 last:border-0'
              >
                {item.name}
              </a>
            ))}
            <a 
              href='tel:+78003000600' 
              className='flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-sushi-accent text-black font-bold rounded-full text-sm'
            >
              <FiPhone className='w-4 h-4' />
              8 800 300-06-00
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavComponent;
