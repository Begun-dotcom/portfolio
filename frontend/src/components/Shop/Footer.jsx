import { FiInstagram, FiSend, FiHeart, FiMapPin, FiClock, FiPhone, FiMail} from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gray-900 text-white pt-12 pb-8 border-t border-white/10'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Основная сетка подвала */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          
          {/* Колонка 1: Логотип и описание */}
          <div className='text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start gap-2 mb-4'>
              <span className='text-2xl'>🌸</span>
              <span className='text-xl font-serif italic'>Bloom</span>
              <span className='text-xs text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full'>demo</span>
            </div>
            <p className='text-gray-500 text-sm leading-relaxed'>
              Свежие цветы с доставкой по всему городу. 
              Создаём настроение с 2015 года.
            </p>
          </div>
          
          {/* Колонка 2: Контакты */}
          <div className='text-center sm:text-left'>
            <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>Контакты</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-400 hover:text-rose-400 transition-colors'>
                <FiPhone className='w-4 h-4' />
                <a href="tel:+70000000000" className="hover:text-rose-400">+7 (000) 000-00-00</a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-400'>
                <FiMail className='w-4 h-4' />
                <a href="mailto:bloom@flowers.ru" className="hover:text-rose-400">bloom@flowers.ru</a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-gray-400'>
                <FiMapPin className='w-4 h-4' />
                <span>ул. Цветочная, 15, Москва</span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 3: График работы */}
          <div className='text-center sm:text-left'>
            <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>Режим работы</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li className='flex items-center justify-center sm:justify-start gap-2'>
                <FiClock className='w-4 h-4' />
                <span>Пн-Пт: 9:00 - 21:00</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2'>
                <FiClock className='w-4 h-4' />
                <span>Сб-Вс: 10:00 - 19:00</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-2 text-rose-400 text-xs'>
                <span className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></span>
                <span>Доставка ежедневно с 10:00</span>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Соцсети и копирайт */}
          <div className='text-center sm:text-left'>
            <h4 className='text-white font-semibold mb-3 text-sm uppercase tracking-wide'>Мы в соцсетях</h4>
            <div className='flex justify-center sm:justify-start gap-3 mb-4'>
              <a 
                href="#" 
                className='p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:text-rose-400'
                aria-label="Instagram"
              >
                <FiInstagram className='w-5 h-5' />
              </a>
              <a 
                href="#" 
                className='p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:text-rose-400'
                aria-label="Telegram/MAX"
              >
                <FiSend className='w-5 h-5' />
              </a>
            </div>
            <div className='text-xs text-gray-600'>
              <p className='flex items-center justify-center sm:justify-start gap-1'>
                <FiHeart className='w-3 h-3 text-rose-400' />
                <span>demo-версия для портфолио</span>
              </p>
            </div>
          </div>
          
        </div>
        
        {/* Нижняя линия с копирайтом */}
        <div className='border-t border-white/10 pt-6 text-center'>
          <p className='text-gray-600 text-xs'>
            © {currentYear} Цветочная мастерская Bloom. Все права защищены. 
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
