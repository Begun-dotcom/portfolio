import {React, useRef } from 'react'
import { motion, useInView } from 'framer-motion';

function Hero() {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section ref={ref} id="hero" className='relative min-h-screen flex items-center overflow-hidden'>
      
      {/* Фоновое изображение */}
      <div className='absolute inset-0'>
        <img 
          src="/sushi/sushi_hero.jpg" 
          alt="Премиум суши роллы"
          className='w-full h-full object-cover'
          fetchPriority="high"
        />
        {/* Затемнение для читаемости текста */}
        <div className='absolute inset-0 bg-linear-to-r from-sushi-primary/80 via-sushi-primary/40 to-transparent' />
      </div>
      
      {/* Контент */}
      <div className='relative z-10 max-w-450 mx-auto px-6 lg:px-10 w-full'>
        <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          
        >
        <div className='max-w-2xl'>
          {/* Золотой акцент */}
          <div className='inline-block mb-4'>
            <span className='px-4 py-1 bg-sushi-accent/20 backdrop-blur-sm text-sushi-accent rounded-full text-sm font-medium border border-sushi-accent/30'>
              🍣 ДОСТАВКА СУШИ 24/7
            </span>
          </div>
          
          {/* Заголовок */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            Премиум суши 
            <br />
            <span className='text-sushi-accent'>с доставкой</span> за 30 минут
          </h1>
          
          {/* Описание */}
          <p className='text-sushi-text-light text-lg mb-8 max-w-lg'>
            Свежайшие роллы из лосося, икры и авокадо. 
            Только натуральные ингредиенты.
          </p>
          
          {/* Кнопки */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <button onClick = {() => scrollTo('#contacts')} className='px-8 py-4 bg-sushi-accent hover:bg-sushi-accent-light text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-sushi-accent/30'>
              Заказать сейчас
            </button>
            <button onClick = {() => scrollTo('#catalog')} className='px-8 py-4 border border-sushi-accent/50 text-sushi-accent hover:bg-sushi-accent/10 rounded-full transition-all duration-300'>
              Меню и цены
            </button>
          </div>
        </div>
        </motion.div>
      </div>
      
      {/* Стрелка вниз */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <svg className='w-6 h-6 text-sushi-accent/60' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      </div>
      
    </section>
  );
}

export default Hero;