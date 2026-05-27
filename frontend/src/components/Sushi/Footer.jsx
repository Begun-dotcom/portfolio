import React from 'react';
import { 
  FiHeart, 
  FiInstagram, 
  FiSend, 
  FiMessageCircle,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock
} from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Меню', href: '#catalog' },
    { name: 'О нас', href: '#about' },
    { name: 'Доставка', href: '#delivery' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Акции', href: '#promo' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const socials = [
    { icon: <FiInstagram className='w-5 h-5' />, name: 'Instagram', link: '#', color: 'hover:bg-[#e4405f]' },
    { icon: <FiSend className='w-5 h-5' />, name: 'Telegram', link: '#', color: 'hover:bg-[#0088cc]' },
    { icon: <FiMessageCircle className='w-5 h-5' />, name: 'MAX', link: '#', color: 'hover:bg-[#00c3ff]' },
  ];

  return (
    <footer className='bg-sushi-primary border-t border-sushi-accent/20'>
      
      {/* Основная часть подвала */}
      <div className='max-w-[1800px] mx-auto px-5 md:px-6 lg:px-10 py-10 md:py-12'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
          
          {/* Колонка 1: Логотип и описание */}
          <div className='text-center sm:text-left'>
            <div className='flex items-center justify-center sm:justify-start gap-2 mb-4'>
              <span className='text-2xl'>🍣</span>
              <span className='text-xl font-bold text-white'>Sushi<span className='text-sushi-accent'>Premium</span></span>
            </div>
            <p className='text-sushi-text-light text-sm leading-relaxed'>
              Свежайшие суши и роллы с доставкой по городу. 
              Только натуральные ингредиенты и авторские рецепты.
            </p>
            <div className='flex justify-center sm:justify-start gap-3 mt-4'>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`w-8 h-8 bg-sushi-dark rounded-full flex items-center justify-center text-sushi-accent border border-sushi-accent/30 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Колонка 2: Быстрые ссылки */}
          <div className='text-center sm:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Меню сайта</h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className='text-sushi-text-light hover:text-sushi-accent transition-colors text-sm'
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
                <FiMapPin className='text-sushi-accent w-4 h-4 flex-shrink-0' />
                <span className='text-sushi-text-light text-sm'>ул. Суши, 15, Москва</span>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiPhone className='text-sushi-accent w-4 h-4 flex-shrink-0' />
                <a href="tel:+79991234567" className='text-sushi-text-light hover:text-sushi-accent transition-colors text-sm'>
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiMail className='text-sushi-accent w-4 h-4 flex-shrink-0' />
                <a href="mailto:sushi@premium.ru" className='text-sushi-text-light hover:text-sushi-accent transition-colors text-sm'>
                  sushi@premium.ru
                </a>
              </li>
              <li className='flex items-center justify-center sm:justify-start gap-3'>
                <FiClock className='text-sushi-accent w-4 h-4 flex-shrink-0' />
                <span className='text-sushi-text-light text-sm'>Ежедневно: 10:00 - 23:00</span>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Режим работы и призыв */}
          <div className='text-center sm:text-left'>
            <h3 className='text-white font-bold text-lg mb-4'>Доставка</h3>
            <ul className='space-y-3'>
              <li className='text-sushi-text-light text-sm'>🚚 Бесплатно от 1000 ₽</li>
              <li className='text-sushi-text-light text-sm'>⏱️ 30-40 минут</li>
              <li className='text-sushi-text-light text-sm'>📍 Радиус 5 км</li>
            </ul>
            <div className='mt-4 p-3 bg-sushi-dark rounded-xl border border-sushi-accent/20'>
              <p className='text-sushi-accent text-sm font-bold mb-1'>🍣 Скидка 20%</p>
              <p className='text-sushi-text-light text-xs'>на первый заказ по промокоду</p>
              <div className='mt-2 bg-sushi-primary rounded-lg px-3 py-1.5 inline-block'>
                <span className='text-sushi-accent font-mono text-sm font-bold'>SUSHI20</span>
              </div>
            </div>
          </div>

        </div>

        {/* Нижняя линия */}
        <div className='border-t border-sushi-accent/20 mt-8 md:mt-10 pt-6 md:pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3 text-center'>
            <p className='text-sushi-text-light text-xs'>
              © {currentYear} SushiPremium. Все права защищены.
            </p>
            <div className='flex gap-4 text-xs'>
              <a href="#" className='text-sushi-text-light hover:text-sushi-accent transition-colors'>
                Политика конфиденциальности
              </a>
              <a href="#" className='text-sushi-text-light hover:text-sushi-accent transition-colors'>
                Пользовательское соглашение
              </a>
            </div>
            <p className='text-sushi-text-light text-xs flex items-center gap-1'>
              Сделано с <FiHeart className='w-3 h-3 text-sushi-accent' /> для любителей суши
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;