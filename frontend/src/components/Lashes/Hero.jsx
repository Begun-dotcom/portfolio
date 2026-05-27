import {React, useState} from 'react'
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiMenu, FiX, FiStar, FiChevronRight, FiClock } from 'react-icons/fi';


function Hero() {
  return (
    <section id="hero" className='relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden'>
      
      {/* Фон */}
      <div className='absolute inset-0'>
        <img 
          src="/resn.jpg" 
          alt="Студия ресниц" 
          className='w-full h-full object-cover object-center'
        />
        {/* ✅ КЛЮЧЕВОЕ ИСПРАВЛЕНИЕ: затемнение для читаемости текста */}
        <div className='absolute inset-0 bg-gradient-to-r from-rose-950/70 via-black/40 to-transparent z-10' />
      </div>

      {/* Контент */}
      <div className='relative z-20 max-w-[1800px] mx-auto px-6 lg:px-10 w-full'>
        <div className='max-w-3xl mx-auto text-center md:text-left md:mx-0'>
          <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
            Профессиональная студия <br className='hidden md:block' />
            наращивания ресниц
          </h1>
          
          {/* Текст теперь белый на затемнённом фоне */}
          <p className='text-base md:text-lg text-white/90 max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed'>
            Подберем процедуру, исходя из ваших пожеланий и индивидуальных особенностей. 
            Гарантированный качественный результат.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-3 justify-center md:justify-start'>
            <a 
              href='#services' 
              className='px-8 py-4 bg-rose-500 hover:bg-rose-400 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/25 text-lg text-center inline-flex items-center justify-center gap-2'
            >
              Записаться на ресницы
              <FiChevronRight className='w-5 h-5' />
            </a>
          </div>

          {/* Статистика */}
          <div className='flex justify-center md:justify-start gap-8 mt-12 pt-8 border-t border-white/20'>
            <div>
              <div className='text-3xl font-bold text-white'>3000+</div>
              <div className='text-sm text-white/70'>клиентов</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>4.9</div>
              <div className='text-sm text-white/70'>рейтинг</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>5 лет</div>
              <div className='text-sm text-white/70'>опыта мастеров</div>
            </div>
          </div>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer'>
        <svg className='w-6 h-6 text-white/60 hover:text-white transition' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      </div>

    </section>
  );
}

export default Hero;
