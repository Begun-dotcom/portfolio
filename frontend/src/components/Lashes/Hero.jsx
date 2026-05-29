import {React, useRef } from 'react'
import { FiPhone, FiChevronRight } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';

function LashesHero() {
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
          src="/lashes/hero.jpg" 
          alt="Процесс наращивания ресниц"
          className='w-full h-full object-cover object-center'
          fetchPriority="high"
          loading="eager"
          width="2100"
          height="1200"
        />
        {/* Затемнение для читаемости текста */}
        <div className='absolute inset-0 bg-gradient-to-r from-lashes-primary/80 via-lashes-primary/40 to-transparent' />
      </div>
      
      {/* Контент */}
      <div className='relative z-10 max-w-[1800px] mx-auto px-6 lg:px-10 w-full'>
        <motion.div
                            initial={{ opacity: 0, x: -70 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  
                >
        <div className='max-w-2xl'>
          
          {/* Бейдж */}
          <div className='inline-block mb-4'>
            <span className='px-4 py-1 bg-lashes-accent/20 backdrop-blur-sm text-lashes-accent rounded-full text-sm font-medium border border-lashes-accent/30'>
              👁️ LASH STUDIO
            </span>
          </div>
          
          {/* Заголовок */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            Идеальный взгляд
            <br />
            <span className='text-lashes-accent'>за 1.5 часа</span>
          </h1>
          
          {/* Описание */}
          <p className='text-lashes-text-light text-lg mb-8 max-w-lg'>
            Профессиональное наращивание и ламинирование ресниц. 
            Безопасные материалы, стерильные инструменты, опытные мастера.
          </p>
          
          {/* Кнопки */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-8 py-4 bg-lashes-accent hover:bg-lashes-accent-light text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-lashes-accent/30 flex items-center justify-center gap-2'
            onClick={() => scrollTo('#contacts')}>
              <FiPhone className='w-5 h-5' />
              Записаться сейчас
            </button>
            <button className='px-8 py-4 border border-lashes-accent/50 text-lashes-accent hover:bg-lashes-accent/10 rounded-full transition-all duration-300 flex items-center justify-center gap-2'
            onClick={() => scrollTo('#catalog')}>
              Смотреть работы
              <FiChevronRight className='w-5 h-5' />
            </button>
          </div>
          
          {/* Преимущества под кнопками */}
          <div className='flex flex-wrap gap-6 mt-10 pt-4'>
            <div className='flex items-center gap-2'>
              <div className='w-1 h-1 bg-lashes-accent rounded-full' />
              <span className='text-lashes-text-light text-sm'>Сертифицированные мастера</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-1 h-1 bg-lashes-accent rounded-full' />
              <span className='text-lashes-text-light text-sm'>Стерильные инструменты</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-1 h-1 bg-lashes-accent rounded-full' />
              <span className='text-lashes-text-light text-sm'>Гипоаллергенные материалы</span>
            </div>
          </div>
          
        </div>
        </motion.div>
      </div>
      
      {/* Стрелка вниз */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer'>
        <svg className='w-6 h-6 text-lashes-accent/60' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      </div>
      
    </section>
  );
}

export default LashesHero;