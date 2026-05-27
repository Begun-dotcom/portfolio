import {React, useRef } from 'react'
import { FiShoppingCart, FiHeart, FiStar, FiPhone, FiMapPin, FiClock, FiInstagram, FiMenu, FiX, FiChevronRight, FiSend } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';

function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    
    <section ref={ref} id="hero" className='relative min-h-screen flex items-center pt-12 md:pt-16 overflow-hidden'>
            {/* Фоновое изображение */}
            <div className='absolute inset-0'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#faf8f5] via-[#faf8f5]/80 to-transparent z-10' />
              <div className='absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-transparent to-transparent z-10' />
              <img 
                  src="/flower_main.jpeg" 
                  alt="Цветочная мастерская Bloom" 
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  loading="eager"
                  width="1280"
                  height="768"
                />
             <div className='w-full h-full bg-gradient-to-br from-rose-100/50 via-amber-50/30 to-purple-100/50' />
            </div>
    
            
    
            {/* Контент */}
            <div className='relative z-30 max-w-[1800px] mx-auto px-6 lg:px-10 w-full'>
              <div className='max-w-2xl'>
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          
        >
                <div className='hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-xl border border-gray-200/60 rounded-full shadow-lg shadow-gray-200/50 mb-6'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500'></span>
                </span>
                <span className='text-gray-700 font-medium text-sm'>
                  Доставка от <span className='text-gray-900 font-bold'>30 минут</span>
                </span>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500 text-sm'>🕐 Ежедневно 8:00–23:00</span>
              </div>
                <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif italic text-gray-900 mb-6 leading-tight'>
                  Цветы, <br />
                  <span className='text-rose-500'>которые говорят</span>
                  <br />за вас
                </h1>
                <p className='text-lg md:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed'>
                  Авторские букеты из свежих цветов с доставкой по городу. 
                  Каждый букет — маленькое произведение искусства.
                </p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <button className='px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-900/20 text-lg'
                  onClick={() => scrollTo('#catalog')}>
                    Смотреть каталог
                    <FiChevronRight className='w-5 h-5 inline ml-1' />
                  </button>
                  <button className='px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-medium rounded-full transition-all duration-300 hover:scale-105 text-lg'
                  onClick={() => scrollTo('#contacts')}>
                    Связаться
                  </button>
                </div>
    
                {/* Мини-статистика */}
                <div className='flex gap-8 mt-12 pt-8 border-t border-gray-200'>
                  <div>
                    <div className='text-3xl font-bold text-gray-900'>5000+</div>
                    <div className='text-sm text-gray-400'>букетов создано</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-gray-900'>4.9</div>
                    <div className='text-sm text-gray-400'>рейтинг на картах</div>
                  </div>
                  <div>
                    <div className='text-3xl font-bold text-gray-900'>30 мин</div>
                    <div className='text-sm text-gray-400'>среднее время доставки</div>
                  </div>
                </div>
                </motion.div>
              </div>
              
            </div>
    
            {/* Стрелка вниз */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce'>
              <svg className='w-6 h-6 text-gray-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
              </svg>
            </div>
          </section>
  )
}

export default Hero
      