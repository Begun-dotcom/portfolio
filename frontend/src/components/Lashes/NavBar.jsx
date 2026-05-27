import {React, useState, useEffect} from 'react'
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiMenu, FiX, FiStar, FiChevronRight, FiClock } from 'react-icons/fi';

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
    { name: 'Услуги', href: '#services' },
    { name: 'О студии', href: '#about' },
    { name: 'Мастера', href: '#masters' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];
  return (
    <nav className={`font-sans fixed top-0 w-full z-50 transition-all duration-500 ${
            scrollY > 50 
              ? 'bg-rose-950/70 backdrop-blur-xl text-white'  // розовый текст
                : 'bg-transparent text-white'
          }`}>
            <div className='max-w-[1800px] mx-auto px-6 lg:px-10 h-12 md:h-16 flex items-center justify-between '>
              
              <a href="#hero" className='flex items-center gap-2 hover:text-rose-500 transition-colors'>
                <span className='text-sm lg:text-xl'>✨</span>
                <span className='text-sm lg:text-xl font-serif italic tracking-tight'>Lash Studio</span>
              </a>
    
              <div className='hidden md:flex items-center gap-10'>
                {sections.map(item => (
                  <a key={item.name} href={item.href} 
                     className='text:ms lg:text-lg hover:text-white transition-all duration-300 hover:scale-105 font-medium tracking-wide font-sans inline-block'>
                    {item.name}
                  </a>
                ))}
              </div>
    
              <div className='flex items-center gap-3'>
                <a href='tel:+70000000000' 
                   className='hidden lg:flex items-center gap-2 px-5 py-2.5 bg-rose-500 hover:bg-rose-400 text-white text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25'>
                  <FiPhone className='w-4 h-4' />
                  8-000-000-00-00
                </a>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='md:hidden p-2'>
                  {mobileMenuOpen ? <FiX className='w-5 h-5' /> : <FiMenu className='w-5 h-5' />}
                </button>
              </div>
            </div>
    
            {/* Мобильное меню */}
            {mobileMenuOpen && (
              <div className='md:hidden bg-white border-t border-gray-100'>
                <div className='px-6 py-4 flex flex-col gap-3'>
                  {sections.map(item => (
                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}
                       className='text-gray-600 hover:text-gray-900 text-sm font-medium py-1'>
                      {item.name}
                    </a>
                  ))}
                  <a href='tel:+70000000000' 
                     className='flex items-center gap-2 text-rose-500 font-medium text-sm py-1'>
                    <FiPhone className='w-4 h-4' />
                    8-000-000-00-00
                  </a>
                </div>
              </div>
            )}
          </nav>
  )
}

export default NavBar
