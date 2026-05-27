

import { FiHeart, FiInstagram, FiSend, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-[#fde2e2] pt-12 pb-8'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Основная сетка подвала */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          
          {/* Колонка 1: Логотип и описание */}
          <div className='text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start gap-2 mb-4'>
              <span className='text-2xl'>👁️</span>
              <span className='text-xl font-serif italic text-gray-700'>Lash Studio</span>
              <span className='text-xs text-rose-400 bg-white/50 px-2 py-0.5 rounded-full'>demo</span>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Профессиональное наращивание и ламинирование ресниц. 
              Создаём идеальный взгляд с 2018 года.
            </p>
          </div>
          
          {/* Колонка 2: Контакты */}
          <div className='text-center sm:text-left'>
            <h4 className='text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide'>Контакты</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-rose-500 transition-colors'>
                <FiPhone className='w-4 h-4' />
                <a href="tel:+70000000000" className="hover:text-rose-500">+7 (000) 000-00-00</a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-600'>
                <FiMail className='w-4 h-4' />
                <a href="mailto:lash@studio.ru" className="hover:text-rose-500">lash@studio.ru</a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-600'>
                <FiMapPin className='w-4 h-4' />
                <span>ул. Красоты, 10, Москва</span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 3: График работы */}
          <div className='text-center sm:text-left'>
            <h4 className='text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide'>Режим работы</h4>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li className='flex items-center justify-center sm:justify-start gap-2'>
                <FiClock className='w-4 h-4' />
                <span>Пн-Пт: 10:00 - 20:00</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2'>
                <FiClock className='w-4 h-4' />
                <span>Сб-Вс: 11:00 - 18:00</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-rose-500 text-xs'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                <span>Запись онлайн 24/7</span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Соцсети */}
          <div className='text-center sm:text-left'>
            <h4 className='text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide'>Мы в соцсетях</h4>
            <div className='flex justify-center sm:justify-start gap-3 mb-4'>
              <a 
                href="#" 
                className='p-2 bg-white/50 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 text-gray-600 hover:text-rose-500'
                aria-label="Instagram"
              >
                <FiInstagram className='w-5 h-5' />
              </a>
              <a 
                href="#" 
                className='p-2 bg-white/50 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 text-gray-600 hover:text-rose-500'
                aria-label="Telegram/MAX"
              >
                <FiSend className='w-5 h-5' />
              </a>
            </div>
            <div className='text-xs'>
              <p className='flex items-center justify-center sm:justify-start gap-1 text-gray-500'>
                <FiHeart className='w-3 h-3 text-rose-400' />
                <span>demo-версия для портфолио</span>
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Нижняя линия с копирайтом */}
        <div className='border-t border-rose-200/50 pt-6 text-center'>
          <p className='text-gray-500 text-xs'>
            © {currentYear} Lash Studio — Студия наращивания ресниц. 
            <span className='inline-flex items-center gap-1 ml-1'>
              <span className='text-rose-400'>❤️</span>
              <span>demo-проект</span>
            </span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;