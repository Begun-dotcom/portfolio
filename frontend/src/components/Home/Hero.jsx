import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Hero() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  

  return (
    <section ref={ref} id="hero" className='min-h-screen flex items-center justify-center relative'>
      
       <div className='absolute inset-0'>
        <img src = "/main_page.jpeg" alt="main" className="w-full h-full object-cover" loading="eager"/>
         <div className='absolute inset-0 bg-black/40' />
       {/*  <div className='absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/10 to-transparent z-10' /> */}
        {/* <div className='absolute inset-0 bg-gradient-to-r from-[#111827] via-transparent to-transparent z-10' /> */}
      </div>
      <div className='absolute z-20 text-center px-4 max-w-4xl mx-auto'>
         <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          
        >
  {/* Статус */}
  
  
          <div className='inline-flex items-center gap-2 px-5 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-sm md:text-base mb-8 md:mb-10'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400'></span>
            </span>
            Открыт для проектов
          </div>

  {/* Имя */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight'>
            Привет, я <span className='text-amber-500'>Дмитрий</span>
          </h1>

  {/* Должность */}
          <p className='text-xl md:text-2xl text-gray-300 mb-6 md:mb-8'>
            Full Stack Developer
          </p>

  {/* Описание */}
          <p className='pt-8 text-base md:text-xl text-gray-400 max-w-2xl mx-auto  mb-12 md:mb-14 leading-relaxed'>
            Создаю современные веб-приложения от идеи до деплоя. 
            Frontend на React + Tailwind, Backend на Python + FastAPI. 
            Разворачиваю на сервере с Docker и Nginx.
          </p>

  {/* Кнопки */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20'>
            <button 
              onClick={() => scrollTo('#projects')}
              className='px-10 py-4 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 text-lg'
            >
              Мои проекты
            </button>
            <button 
              onClick={() => scrollTo('#contacts')}
              className='px-10 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 text-lg'
            >
              Связаться
            </button>
          </div>
      </motion.div>
  {/* Скролл-индикатор */}
        <div className='animate-bounce'>
          <svg className='w-6 h-6 text-white/20 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </div>
  </div>

  
      
      
    </section>
  );
}

export default Hero;


