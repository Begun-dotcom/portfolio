import React from 'react'
import { useState, useEffect, useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar, FiPhone, FiMapPin, FiClock, FiInstagram, FiMenu, FiX, FiChevronRight, FiSend } from 'react-icons/fi';

function Catalog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    

    const bouquets = [
    { id: 1, name: 'Нежный рассвет', price: 4590, desc: 'Пионы, розы, эвкалипт', image: '/lavanda.webp', size: '40×35', badge: 'Хит', color: '#f5e6e0' },
    { id: 2, name: 'Лавандовый вечер', price: 3890, desc: 'Лаванда, сирень, розы', image: '/roza.jpg', size: '35×30', color: '#e8e0f0' },
    { id: 3, name: 'Солнечное утро', price: 3290, desc: 'Подсолнухи, ромашки', image: '/romash.jpg', size: '40×30', badge: 'Новинка', color: '#fef9e0' },
    { id: 4, name: 'Красная классика', price: 5290, desc: '25 красных роз', image: '/25roz.jpg', size: '45×35', color: '#fce4e4' },
    { id: 5, name: 'Воздушный поцелуй', price: 2890, desc: 'Гортензия, ранункулюсы', image: '/gorten.jpg', size: '30×25', color: '#e0eef5' },
    { id: 6, name: 'Свадебный рай', price: 7990, desc: 'Пионы, орхидеи, каллы', image: '/pion_calli.jpg', size: '50×40', badge: 'Премиум', color: '#fafafa' },
    { id: 7, name: 'Прованс', price: 4190, desc: 'Лаванда, розы, зелень', image: '/lavanda_zelen.webp', size: '38×32', color: '#e8e5f0' },
    { id: 8, name: 'Весенний вальс', price: 3590, desc: 'Тюльпаны, нарциссы', image: '/narcis.jpg', size: '35×28', color: '#fef5e0' },
    ];

    

  return (
    <section ref={ref} id="catalog" className='py-20 md:py-28 bg-white'>
            <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
              
              <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
                
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    
                    >
                  <p className='text-rose-500 font-medium text-sm mb-2'>КАТАЛОГ</p>
                  <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900'>
                    Популярные <span className='text-rose-500'>букеты</span>
                  </h2>
                  </motion.div>
                
                
              </div>
    
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
                {bouquets.map((bouquet,index) => (
                    <motion.div
                    key={bouquet.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1,ease: "backOut"  // легкий пружинистый эффект
                  }}
                    >
                  <div 
                    
                    className='group bg-white rounded-3xl border border-gray-100 hover:border-rose-200 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-200/50'
                  >
                    <div className='relative h-72 md:h-80 flex items-center justify-center overflow-hidden'
                         style={{ backgroundColor: bouquet.color }}>
                      <img 
                          src={bouquet.image} 
                          alt={bouquet.name}
                          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                          loading="lazy"
                          decoding="async"
                          width="1024"
                          height="1024"
                        />
                      {bouquet.badge && (
                        <span className='absolute top-4 left-4 px-3 py-1 bg-gray-900/90 backdrop-blur-sm text-white rounded-full text-xs font-bold'>
                          {bouquet.badge}
                        </span>
                      )}
                      <button className='absolute top-4 right-4 p-2.5 bg-white/80 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-lg'>
                        <FiHeart className='w-4 h-4 text-gray-700' />
                      </button>
                    </div>
                    <div className='p-5 md:p-6'>
                      <h3 className='text-gray-900 font-semibold text-lg mb-2 group-hover:text-rose-500 transition-colors'>
                        {bouquet.name}
                      </h3>
                      <p className='text-gray-400 text-sm mb-4'>{bouquet.desc}</p>
                      <div className='flex items-center justify-between'>
                        <span className='text-gray-900 font-bold text-xl'>{bouquet.price.toLocaleString()} ₽</span>
                        <button className='px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-full transition-all'>
                        Заказать такой
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>))}
              </div>
            </div>
          </section>
  )
}

export default Catalog
