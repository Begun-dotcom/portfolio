import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheck, FiHeart, FiStar, FiArrowRight } from 'react-icons/fi';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    'Сертифицированные мастера с опытом от 5 лет',
    'Стерилизация инструментов после каждого клиента',
    'Только премиальные материалы (CND, OPI, Bio Sculpture)',
    'Уютная атмосфера и чай/кофе в подарок'
  ];

  return (
    <section ref={ref} id="about" className='min-h-screen py-20 md:py-28 bg- bg-[#fde2e2] overflow-hidden'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          
          {/* Левая часть - ФОТО ХОЗЯЙКИ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='relative'
          >
            <div className='relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/50'>
              {/* Фото */}
              <img 
                src="/dor_for_resn.jpg" 
                alt="Основательница студии Анна" 
                className='w-full h-auto object-cover'
                fetchPriority="low"
                loading="lazy"
              />
              
              {/* Декоративный элемент */}
              <div className='absolute -bottom-5 -right-5 w-32 h-32 bg-rose-500 rounded-full -z-10 opacity-20' />
              <div className='absolute -top-5 -left-5 w-24 h-24 bg-amber-400 rounded-full -z-10 opacity-20' />
            </div>
            
            {/* Плашка с именем */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 text-center min-w-[200px]'
            >
              <p className='text-rose-500 font-bold text-xl'>Анна Сорокина</p>
              <p className='text-gray-500 text-xs'>Основатель студии</p>
              <div className='flex items-center justify-center gap-1 mt-1'>
                <FiStar className='w-3 h-3 text-amber-400 fill-amber-400' />
                <FiStar className='w-3 h-3 text-amber-400 fill-amber-400' />
                <FiStar className='w-3 h-3 text-amber-400 fill-amber-400' />
                <FiStar className='w-3 h-3 text-amber-400 fill-amber-400' />
                <FiStar className='w-3 h-3 text-amber-400 fill-amber-400' />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Правая часть - ТЕКСТ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='space-y-6'
          >
            {/* Бейдж */}
            <div className='inline-block'>
              <span className='px-4 py-1 bg-rose-100 text-rose-500 rounded-full text-sm font-medium tracking-wide'>
                КТО МЫ
              </span>
            </div>
            
            {/* Заголовок */}
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900'>
              Создаём красоту 
              <br />
              с <span className='text-rose-500'>любовью</span> и заботой
            </h2>
            
            {/* Описание */}
            <p className='text-gray-500 leading-relaxed'>
              Студия «Bloom Nails» — это пространство, где каждая девушка чувствует себя особенной. 
              Мы открылись в 2018 году с одной целью — делать женские руки ухоженными, 
              а настроение — прекрасным.
            </p>
            
            <p className='text-gray-500 leading-relaxed'>
              Анна, основательница студии, сама прошла путь от клиента до мастера. 
              Она точно знает, как важно внимание к деталям, стерильность и индивидуальный подход. 
              Именно поэтому в нашей студии работают только проверенные специалисты.
            </p>
            
            {/* Преимущества списком */}
            <div className='space-y-3 pt-4'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className='flex items-center gap-3'
                >
                  <div className='w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0'>
                    <FiCheck className='w-3 h-3 text-rose-500' />
                  </div>
                  <span className='text-gray-700 text-sm'>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Кнопка */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='group mt-6 px-8 py-3.5 bg-gray-900 hover:bg-rose-500 text-white font-medium rounded-full transition-all duration-300 inline-flex items-center gap-2'
            >
              Записаться на маникюр
              <FiArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </motion.button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
