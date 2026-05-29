import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiInstagram, 
  FiSend, 
  FiMessageCircle,
  FiNavigation,
  FiCheckCircle
} from 'react-icons/fi';

function LashesContacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const contactInfo = [
    {
      icon: <FiMapPin className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Адрес',
      details: ['ул. Красоты, 15', 'ТЦ "Красота", 2 этаж'],
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
      details: ['lash@studio.ru'],
      action: 'mailto:lash@studio.ru'
    },
    {
      icon: <FiClock className='w-5 h-5 md:w-6 md:h-6' />,
      title: 'Режим работы',
      details: ['Ежедневно: 10:00 - 21:00', 'Запись до 20:00'],
      action: null
    },
  ];

  const messengers = [
    { icon: <FiSend className='w-5 h-5' />, name: 'Telegram', username: '@lash_studio', color: 'hover:bg-[#0088cc]' },
    { icon: <FiMessageCircle className='w-5 h-5' />, name: 'MAX', username: '@lash_studio', color: 'hover:bg-[#00c3ff]' },
    { icon: <FiInstagram className='w-5 h-5' />, name: 'Instagram', username: '@lash_studio', color: 'hover:bg-[#e4405f]' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} id="contacts" className='py-20 md:py-28 bg-white'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-lashes-accent text-sm font-medium tracking-wider uppercase mb-2 block'>
            КОНТАКТЫ
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-lashes-primary mb-4'>
            Свяжитесь <span className='text-lashes-accent'>с нами</span>
          </h2>
          <p className='text-lashes-text-light max-w-2xl mx-auto'>
            Запишитесь на процедуру или задайте интересующие вопросы
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-10'>
          
          {/* Левая колонка — контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4'
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className='flex gap-4 p-4 bg-lashes-bg-light rounded-xl border border-lashes-accent/10 hover:border-lashes-accent/30 transition-all duration-300'
              >
                <div className='w-10 h-10 bg-lashes-accent/10 rounded-full flex items-center justify-center text-lashes-accent flex-shrink-0'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-lashes-primary font-bold text-lg mb-1'>{item.title}</h3>
                  {item.details.map((detail, i) => (
                    item.action ? (
                      <a 
                        key={i}
                        href={item.action}
                        className='text-lashes-text-light text-sm hover:text-lashes-accent transition-colors block'
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className='text-lashes-text-light text-sm'>{detail}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Мессенджеры */}
            <div className='p-4 bg-lashes-bg-light rounded-xl border border-lashes-accent/10'>
              <h3 className='text-lashes-primary font-bold text-lg mb-3'>Написать в мессенджеры</h3>
              <div className='flex flex-wrap gap-3'>
                {messengers.map((msg, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`flex items-center gap-2 px-4 py-2 bg-white rounded-full text-lashes-accent border border-lashes-accent/30 hover:text-white transition-all duration-300 ${msg.color}`}
                  >
                    {msg.icon}
                    <span className='text-sm'>{msg.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Как добраться */}
            <div className='p-4 bg-lashes-bg-light rounded-xl border border-lashes-accent/10'>
              <div className='flex items-center gap-2 mb-3'>
                <FiNavigation className='text-lashes-accent w-5 h-5' />
                <h3 className='text-lashes-primary font-bold text-lg'>Как добраться</h3>
              </div>
              <ul className='space-y-2 text-lashes-text-light text-sm'>
                <li>🚇 Метро: ст. «Центральная», выход к ТЦ "Красота"</li>
                <li>🚌 Автобусы: № 5, 12, 23 до остановки «ТЦ Красота»</li>
                <li>🚗 Парковка: бесплатная парковка у ТЦ</li>
              </ul>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-10'>
                          {/* Позвонить */}
                <a 
                  href='tel:+70000000000' 
                  className='inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lashes-accent hover:bg-lashes-accent-light text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-center'
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
                  className='inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-lashes-accent text-lashes-accent hover:bg-lashes-accent-light hover:text-black rounded-full transition-all duration-300 hover:scale-105 text-center'
                ><FiMail className='w-5 h-5' />
                Написать в MAX
                </a>
              </div>
          </motion.div>

          {/* Правая колонка — форма записи */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className='bg-lashes-bg-light rounded-2xl p-6 md:p-8 border border-lashes-accent/10'>
              <h3 className='text-2xl font-bold text-lashes-primary mb-2 text-center'>
                Онлайн-запись
              </h3>
              <p className='text-lashes-text-light text-sm text-center mb-6'>
                Оставьте заявку, и мы перезвоним в течение 15 минут
              </p>

              {formStatus === 'success' && (
                <div className='text-center py-8'>
                  <FiCheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                  <h4 className='text-xl font-bold text-lashes-primary mb-2'>Заявка отправлена!</h4>
                  <p className='text-lashes-text-light'>Мы свяжемся с вами в ближайшее время</p>
                </div>
              )}

              {formStatus === 'sending' && (
                <div className='text-center py-8'>
                  <div className='w-12 h-12 border-4 border-lashes-accent border-t-transparent rounded-full animate-spin mx-auto mb-4' />
                  <p className='text-lashes-text-light'>Отправка...</p>
                </div>
              )}

              {(formStatus === 'idle' || formStatus === 'error') && (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Ваше имя'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white border border-lashes-accent/20 rounded-xl text-lashes-primary placeholder:text-lashes-text-light focus:outline-none focus:border-lashes-accent transition-all'
                  />
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Номер телефона'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 bg-white border border-lashes-accent/20 rounded-xl text-lashes-primary placeholder:text-lashes-text-light focus:outline-none focus:border-lashes-accent transition-all'
                  />
                  <textarea
                    name='message'
                    placeholder='Пожелания к процедуре (объем, эффект)'
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className='w-full px-4 py-3 bg-white border border-lashes-accent/20 rounded-xl text-lashes-primary placeholder:text-lashes-text-light focus:outline-none focus:border-lashes-accent transition-all resize-none'
                  />
                  <button
                    type='submit'
                    className='w-full py-3 bg-lashes-accent hover:bg-lashes-accent-light text-white font-bold rounded-xl transition-all duration-300'
                  >
                    Записаться сейчас
                  </button>
                  <p className='text-lashes-text-light text-xs text-center'>
                    Нажимая на кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              )}
              
            </div>
             <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='mt-5 h-100 '
        >
          <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617,55.755&z=12&pt=37.617,55.755,flag&l=map&size=300,200"
                className="w-full h-full rounded-xl"
                frameBorder="0"
                />
        </motion.div>
          </motion.div>
         

        </div>

        {/* Карта */}
        

      </div>
    </section>
  );
}

export default LashesContacts;
