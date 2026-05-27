import React from 'react';
import { FiPhone, FiSend, FiMail} from 'react-icons/fi';

function Contact() {
  const contacts = [
    {
      icon: <FiMail className='w-5 h-5' />,
      label: 'Email',
      value: 'dev@yandex.ru',
      href: 'mailto:dev@yandex.ru',
    },
    {
      icon: <FiSend className='w-5 h-5' />,
      label: 'Telegram',
      value: 'github.com/Sorokin88',
      href: 'https://t.me/',
    },
    {
      icon: <FiSend className='w-5 h-5' />,
      label: 'MAX',
      value: 'max.ru',
      href: 'https://max.ru/u/f9LHodD0cOLr9D1f4YakufZQWY52Qf4O8fYQfDnSxEXMfjThBowa7sDIXTQ',
    },
  ];

 return (
  <section id="contacts" className='py-20 md:py-28 bg-white'>
    <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
      
      {/* Добавлен заголовок секции СВЕРХУ */}
      <div className='text-center mb-12'>
        <div className='inline-block mb-3'>
          <span className='px-4 py-1  text-rose-500 rounded-full text-sm font-medium tracking-wide'>
             СВЯЗЬ С НАМИ
          </span>
        </div>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900'>
          Наши <span className='text-rose-500'>контакты</span>
        </h2>
        <p className='text-gray-500 mt-3 max-w-2xl mx-auto'>
          Свяжитесь с нами удобным для вас способом
        </p>
      </div>
      
      <div className='relative bg-gray-900 rounded-[40px] p-10 md:p-16 lg:p-20 text-center overflow-hidden'>
        
        {/* Фоновые цветы - НЕ перекрывают контент */}
        <div className='absolute inset-0 opacity-10 pointer-events-none'>
          <div className='absolute top-10 left-10 text-8xl'>🌸</div>
          <div className='absolute bottom-10 right-10 text-8xl'>🌺</div>
          <div className='absolute top-1/2 left-1/4 text-6xl'>🌷</div>
        </div>
        
        {/* КОНТЕНТ - всё что ниже, будет поверх цветов */}
        <div className='relative z-10'>
          
          {/* Карточки контактов */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto mb-12'>
            {contacts.map(contact => (
              <a 
                key={contact.label}
                href={contact.href}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 text-center group hover:-translate-y-1 hover:scale-105 block  lg:h-[240px]'
              >
                <div className='flex flex-col items-center justify-center h-full'>
                  <div className='w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-3 text-amber-500 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300'>
                    {contact.icon}
                  </div>
                  <h3 className='text-white text-sm font-medium mb-1'>{contact.label}</h3>
                  <p className='text-gray-400 text-xs break-all group-hover:text-amber-400 transition-colors'>
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Заголовок */}
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-serif italic text-white mb-6'>
            Закажите букет <span className='text-rose-400'>прямо сейчас</span>
          </h2>
          
          {/* Подзаголовок */}
          <p className='text-gray-400 text-lg mb-8 max-w-xl mx-auto'>
            И получите открытку с пожеланиями в подарок 🎁
          </p>
          
          {/* Кнопки */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <a 
              href='tel:+79991234567' 
              className='px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 text-lg inline-flex items-center justify-center gap-2'
            >
              <FiPhone className='w-5 h-5' />
              Позвонить
            </a>
            <button className='px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 text-lg inline-flex items-center justify-center gap-2'>
              <FiSend className='w-5 h-5' />
              Написать
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </section>
);
}

export default Contact;