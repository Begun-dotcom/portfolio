import { useState, useEffect} from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Container from '../General/Container';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(!isOpen)
  };

  const navLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Стек', href: '#skills' },
    { name: 'Проекты', href: '#projects' },
    { name: 'Контакты', href: '#contacts' },
  ];

  

  return (
    <nav className={`fixed top-0 w-full h-12 md:h-16 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-[#111827] backdrop-blur-xl border-b border-amber-500 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <Container className='py-1'>  
            <div className='w-full px-4 h-full flex justify-between items-center'>
                <a href="#hero" 
                    className='text-amber-500 font-bold text-xl hover:text-amber-400 transition-all duration-300 hover:scale-105 inline-block'>
                    SorokinDev<span className='text-white'>.ru</span>
                </a>

                    {/* Десктопное меню */}
                <div className='hidden md:flex items-center gap-20'>
                {navLinks.map(link => (
                    <a key={link.href} href={link.href}
                    className='text-amber-500 text-sm hover:text-amber-500 transition-all duration-300 lg:text-lg font-medium hover:scale-105 inline-block '>
                    {link.name}
                    </a>
                ))}
                </div>
                  <a 
                  href="tel:8-952-891-73-21" 
                  className="hidden sm:flex group items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-3 md:px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    {/* Анимированная точка */}
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    
                    {/* Иконка телефона */}
                    <svg className="w-5 h-5 md:w-5 md:h-5 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    
                    {/* Номер телефона */}
                    <span className="hidden lg:inline">8-952-891-73-21</span>
                </a>

                    {/* Бургер */}
                <button onClick={() => setIsOpen(!isOpen)} 
                        className='md:hidden text-white hover:text-amber-500 transition-colors'>
                {isOpen ? <FiX className='w-6 h-6' /> : <FiMenu className='w-6 h-6' />}
                </button>
                </div>
        </Container>
      

      {/* Мобильное меню */}
      {isOpen && (
        <div className='md:hidden bg-white/50 backdrop-blur-md border-t border-white/10'>
          <div className='flex flex-col px-4 py-4 gap-3'>
            {navLinks.map(link => (
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
  );
}

export default Navbar;