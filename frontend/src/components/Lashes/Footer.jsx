import React from 'react';
import { 
  FiHeart, 
  FiInstagram, 
  FiSend, 
  FiMessageCircle,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowUp
} from 'react-icons/fi';

function LashesFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'О нас', href: '#about' },
    { name: 'Услуги', href: '#catalog' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const socials = [
    { icon: <FiInstagram className='w-5 h-5' />, name: 'Instagram', link: '#', color: 'hover:bg-[#e4405f]' },
    { icon: <FiSend className='w-5 h-5' />, name: 'Telegram', link: '#', color: 'hover:bg-[#0088cc]' },
    { icon: <FiMessageCircle className='w-5 h-5' />, name: 'MAX', link: '#', color: 'hover:bg-[#00c3ff]' },
  ];

  return (
    <footer className='bg-lashes-primary border-t border-lashes-accent/20 relative'>
      
      {/* Кнопка наверх */}
      <button
        onClick={scrollToTop}
        className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-lashes-accent hover:bg-lashes-accent-light text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110'
      >
        <FiArrowUp className='w-5 h-5' />
      </button>

      {/* Основная часть подвала */}
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10 py-12 md:py-16'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
          
          {/* Колонка 1: Логотип и описание */}
          <div className='text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start gap-2 mb-4'>
              <span className='text-2xl'>👁️</span>
              <span className='text-xl font-bold text-white'>Lash<span className='text-lashes-accent'>Studio</span></span>
            </div>
            <p className='text-lashes-text-light text-sm leading-relaxed'>
              Профессиональное наращивание и ламинирование ресниц. 
              Создаём идеальный взгляд с 2018 года.
            </p>
            <div className='flex justify-center sm:justify-start gap-3 mt-4'>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-lashes-text-light hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Колонка 2: Быстрые ссылки */}
          <div className='text-center sm:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Меню</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className='text-lashes-text-light hover:text-lashes-accent transition-colors text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Контакты */}
          <div className='text-center sm:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Контакты</h3>
            <ul className='space-y-3'>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiMapPin className='text-lashes-accent w-4 h-4 flex-shrink-0' />
                <span className='text-lashes-text-light text-sm'>ул. Красоты, 15, Москва</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiPhone className='text-lashes-accent w-4 h-4 flex-shrink-0' />
                <a href="tel:+79991234567" className='text-lashes-text-light hover:text-lashes-accent transition-colors text-sm'>
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiMail className='text-lashes-accent w-4 h-4 flex-shrink-0' />
                <a href="mailto:lash@studio.ru" className='text-lashes-text-light hover:text-lashes-accent transition-colors text-sm'>
                  lash@studio.ru
                </a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiClock className='text-lashes-accent w-4 h-4 flex-shrink-0' />
                <span className='text-lashes-text-light text-sm'>Ежедневно: 10:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Рабочее время и призыв */}
          <div className='text-center sm:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Запись</h3>
            <ul className='space-y-3'>
              <li className='text-lashes-text-light text-sm'>📞 По телефону</li>
              <li className='text-lashes-text-light text-sm'>💬 В мессенджерах</li>
              <li className='text-lashes-text-light text-sm'>📝 Онлайн-форма</li>
            </ul>
            <div className='mt-4 p-3 bg-white/5 rounded-xl border border-lashes-accent/20'>
              <p className='text-lashes-accent text-sm font-bold mb-1'>🎁 Спецпредложение</p>
              <p className='text-lashes-text-light text-xs'>Скидка 20% на первый визит</p>
              <p className='text-lashes-text-light text-xs mt-1'>по промокоду: <span className='text-lashes-accent font-mono'>LASH2024</span></p>
            </div>
          </div>

        </div>

        {/* Нижняя линия */}
        <div className='border-t border-lashes-accent/20 mt-10 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3 text-center'>
            <p className='text-lashes-text-light text-xs'>
              © {currentYear} LashStudio. Все права защищены.
            </p>
            <div className='flex gap-4 text-xs'>
              <a href="#" className='text-lashes-text-light hover:text-lashes-accent transition-colors'>
                Политика конфиденциальности
              </a>
              <a href="#" className='text-lashes-text-light hover:text-lashes-accent transition-colors'>
                Пользовательское соглашение
              </a>
            </div>
            <p className='text-lashes-text-light text-xs flex items-center gap-1'>
              Сделано с <FiHeart className='w-3 h-3 text-lashes-accent' /> для вашей красоты
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default LashesFooter;