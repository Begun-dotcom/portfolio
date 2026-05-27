import { FiMapPin, FiPhone, FiMail, FiSend, FiMessageCircle, FiClock, FiInstagram } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contacts" className='py-20 md:py-28 bg-white'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          
          {/* Левая часть - контактная информация */}
          <div>
            <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Контакты студии
            </h2>
            
            {/* Основные контакты */}
            <div className='space-y-4 mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <FiMapPin className='w-5 h-5 text-rose-500' />
                </div>
                <span className='text-gray-600'>г.Москва, ул. Красоты, 10, </span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <FiPhone className='w-5 h-5 text-rose-500' />
                </div>
                <a href="tel:80000000000" className='text-gray-600 hover:text-rose-500 transition-colors'>8 000 000-00-00</a>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0'>
                  <FiMail className='w-5 h-5 text-rose-500' />
                </div>
                <a href="mailto:test@yandex.ru" className='text-gray-600 hover:text-rose-500 transition-colors'>test@yandex.ru</a>
              </div>
            </div>
            
            {/* Мессенджеры */}
            <div className='mb-6'>
              <h3 className='text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide'>Мессенджеры</h3>
              <div className='flex flex-wrap gap-3'>
                <a 
                  href="#" 
                  className='flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-rose-100 rounded-xl transition-all duration-300 text-gray-600 hover:text-rose-500 group'
                >
                  <FiSend className='w-4 h-4' />
                  <span className='text-sm'>Telegram</span>
                </a>
                <a 
                  href="#" 
                  className='flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-rose-100 rounded-xl transition-all duration-300 text-gray-600 hover:text-rose-500 group'
                >
                  <FiMessageCircle className='w-4 h-4' />
                  <span className='text-sm'>MAX</span>
                </a>
                <a 
                  href="#" 
                  className='flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-rose-100 rounded-xl transition-all duration-300 text-gray-600 hover:text-rose-500 group'
                >
                  <FiInstagram className='w-4 h-4' />
                  <span className='text-sm'>Instagram</span>
                </a>
              </div>
            </div>
            
            {/* График работы */}
            <div className='mb-8'>
              <h3 className='text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wide'>Режим работы</h3>
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-gray-600'>
                  <FiClock className='w-4 h-4 text-rose-400' />
                  <span className='text-sm'>Пн-Пт: 10:00 - 20:00</span>
                </div>
                <div className='flex items-center gap-2 text-gray-600'>
                  <FiClock className='w-4 h-4 text-rose-400' />
                  <span className='text-sm'>Сб-Вс: 11:00 - 18:00</span>
                </div>
              </div>
            </div>
            
            {/* Кнопка звонка */}
            <a 
              href='tel:80000000000' 
              className='inline-flex items-center gap-2 px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/25 text-lg'
            >
              <FiPhone className='w-5 h-5' />
              Записаться сейчас
            </a>
          </div>
          
          {/* Правая часть - карта */}
          <div className='bg-gray-100 rounded-3xl overflow-hidden h-64 md:h-auto min-h-[300px] shadow-lg'>
            <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=47.252746,56.150239&z=16&pt=47.252746,56.150239,flag"
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className='min-h-[300px] md:min-h-[400px]'
/>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Contact;
