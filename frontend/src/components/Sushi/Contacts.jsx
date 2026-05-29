import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiInstagram, 
  FiSend, 
  FiMessageCircle,
  FiNavigation
} from 'react-icons/fi';



function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: <FiMapPin className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Адрес',
      details: ['ул. Суши, 15', 'ТЦ "Суши-Молл", 2 этаж'],
      action: null
    },
    {
      icon: <FiPhone className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Телефон',
      details: ['+7 (999) 123-45-67'],
      action: 'tel:+79991234567'
    },
    {
      icon: <FiMail className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Email',
      details: ['sushi@premium.ru'],
      action: 'mailto:sushi@premium.ru'
    },
    {
      icon: <FiClock className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Режим работы',
      details: ['Ежедневно: 10:00 - 23:00', 'Доставка: 10:00 - 22:30'],
      action: null
    },
  ];

  const messengers = [
    { icon: <FiSend className='w-5 h-5' />, name: 'Telegram', username: 'https://t.me/', color: 'hover:bg-[#0088cc]' },
    { icon: <FiMessageCircle className='w-5 h-5' />, name: 'MAX', username: 'https://max.ru/', color: 'hover:bg-[#00c3ff]' },
    { icon: <FiInstagram className='w-5 h-5' />, name: 'Instagram', username: '@sushi_premium', color: 'hover:bg-[#e4405f]' },
  ];

  const socials = [
    { icon: <FiInstagram className='w-5 h-5' />, name: 'Instagram', link: '#' },
    { icon: <FiSend className='w-5 h-5' />, name: 'Telegram', link: '#' },
    { icon: <FiMessageCircle className='w-5 h-5' />, name: 'MAX', link: '#' },
  ];

  return (
    <section ref={ref} id="contacts" className='py-16 md:py-24 bg-sushi-primary'>
      <div className='max-w-450 mx-auto px-5 md:px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 md:mb-12'
        >
          <span className='text-sushi-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block'>
            КОНТАКТЫ
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4'>
            Свяжитесь с <span className='text-sushi-accent'>нами</span>
          </h2>
          <p className='text-sushi-text-light text-sm md:text-base max-w-2xl mx-auto px-4'>
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12'>
          
          {/* Левая колонка — контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-5 md:space-y-6'
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className='flex gap-4 md:gap-5 p-4 md:p-5 bg-sushi-dark rounded-xl md:rounded-2xl border border-sushi-accent/20 hover:border-sushi-accent/40 transition-all duration-300'
              >
                <div className='w-10 h-10 md:w-12 md:h-12 bg-sushi-accent/10 rounded-full flex items-center justify-center text-sushi-accent shrink-0'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-white font-bold text-base md:text-lg mb-1'>{item.title}</h3>
                  {item.details.map((detail, i) => (
                    item.action ? (
                      <a 
                        key={i}
                        href={item.action}
                        className='text-sushi-text-light text-sm md:text-base hover:text-sushi-accent transition-colors block'
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className='text-sushi-text-light text-sm md:text-base'>{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Мессенджеры */}
            <div className='p-4 md:p-5 bg-sushi-dark rounded-xl md:rounded-2xl border border-sushi-accent/20'>
              <h3 className='text-white font-bold text-base md:text-lg mb-3 md:mb-4'>Написать в мессенджеры</h3>
              <div className='flex flex-wrap gap-3'>
                {messengers.map((msg, index) => (
                  <a
                    key={index}
                    href={msg.username}
                    className={`flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-sushi-primary rounded-full text-sushi-accent border border-sushi-accent/30 hover:text-white transition-all duration-300 ${msg.color}`}
                  >
                    {msg.icon}
                    <span className='text-sm md:text-base'>{msg.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Правая колонка — карта и соцсети */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='space-y-5 md:space-y-6'
          >
            {/* Карта */}
            <div className='bg-sushi-dark rounded-xl md:rounded-2xl overflow-hidden border border-sushi-accent/20'>
              <div className='relative h-64 md:h-80 bg-linear-to-br from-sushi-dark to-sushi-primary flex flex-col items-center justify-center'>
                {/* Карта-заглушка */}
                <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617,55.755&z=12&pt=37.617,55.755,flag&l=map&size=300,200"
                className="w-full h-full"
                frameBorder="0"
                />
                {/* Круг радиуса */}
                <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                  <div className='w-40 h-40 md:w-56 md:h-56 rounded-full border-2 border-sushi-accent/30 border-dashed' />
                </div>
              </div>
            </div>

            {/* Как добраться */}
            <div className='p-4 md:p-5 bg-sushi-dark rounded-xl md:rounded-2xl border border-sushi-accent/20'>
              <div className='flex items-center gap-2 mb-3'>
                <FiNavigation className='text-sushi-accent w-5 h-5' />
                <h3 className='text-white font-bold text-base md:text-lg'>Как добраться</h3>
              </div>
              <ul className='space-y-2 text-sushi-text-light text-sm md:text-base'>
                <li>🚇 Метро: ст. «Центральная», выход к ТЦ "Суши-Молл"</li>
                <li>🚌 Автобусы: № 5, 12, 23 до остановки «Суши-Молл»</li>
                <li>🚗 Парковка: бесплатная парковка у ТЦ</li>
              </ul>
            </div>

            {/* Соцсети */}
            <div className='p-4 md:p-5 bg-sushi-dark rounded-xl md:rounded-2xl border border-sushi-accent/20'>
              <h3 className='text-white font-bold text-base md:text-lg mb-3 md:mb-4'>Мы в соцсетях</h3>
              <div className='flex gap-3 md:gap-4'>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className='w-10 h-10 md:w-12 md:h-12 bg-sushi-primary rounded-full flex items-center justify-center text-sushi-accent border border-sushi-accent/30 hover:bg-sushi-accent hover:text-black transition-all duration-300 hover:scale-110'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className='text-sushi-text-light text-xs mt-4'>Подписывайтесь, следите за акциями и новостями</p>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-center mt-8 md:mt-10'
        >
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              {/* Позвонить */}
              <a 
                href='tel:+70000000000' 
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sushi-accent hover:bg-sushi-accent-light text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-center'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              Позвонить
              </a>
              
              {/* Написать */}
              <a 
                href='https://max.ru/' 
                target='_blank'
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-sushi-accent text-sushi-accent hover:bg-sushi-accent hover:text-black rounded-full transition-all duration-300 hover:scale-105 text-center'
              ><FiMail className='w-5 h-5' />
              Написать в MAX
              </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contacts;