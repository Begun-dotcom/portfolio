import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiStar, FiHeart } from 'react-icons/fi';

const services = [
  {
    id: 1,
    name: 'Классическое наращивание',
    category: 'classic',
    description: '1 искусственная ресница на 1 натуральную. Естественный эффект.',
    price: 2500,
    duration: '1.5 часа',
    rating: 4.9,
    image: '/lashes/1_res.jpg',
    badge: 'Популярное'
  },
  {
    id: 2,
    name: '2D объем',
    category: 'volume',
    description: '2 искусственные ресницы на 1 натуральную. Выразительный взгляд.',
    price: 3000,
    duration: '2 часа',
    rating: 4.8,
    image: '/lashes/2.jpg',
    badge: null
  },
  {
    id: 3,
    name: '3D объем',
    category: 'volume',
    description: '3 искусственные ресницы на 1 натуральную. Пышный эффект.',
    price: 3500,
    duration: '2.5 часа',
    rating: 4.9,
    image: '/lashes/3.jpg',
    badge: 'Хит'
  },
  {
    id: 4,
    name: 'Голливудский объем',
    category: 'hollywood',
    description: 'Максимальная пышность. Эффект звездной дорожки.',
    price: 4500,
    duration: '3 часа',
    rating: 5.0,
    image: '/lashes/4.jpg',
    badge: 'Премиум'
  },
  {
    id: 5,
    name: 'Ламинирование',
    category: 'lamination',
    description: 'Укрепление и уход за натуральными ресницами. Здоровый блеск.',
    price: 2800,
    duration: '1.5 часа',
    rating: 4.9,
    image: '/lashes/5.jpg',
    badge: 'Новинка'
  },
  {
    id: 6,
    name: 'Коррекция',
    category: 'care',
    description: 'Поддержание идеального вида ресниц через 2-3 недели.',
    price: 1500,
    duration: '1 час',
    rating: 4.7,
    image: '/lashes/1_res.jpg',
    badge: null
  },
  {
    id: 7,
    name: 'Снятие ресниц',
    category: 'care',
    description: 'Безболезненное и аккуратное удаление нарощенных ресниц.',
    price: 800,
    duration: '30 мин',
    rating: 4.8,
    image: '/lashes/2.jpg',
    badge: null
  },
  {
    id: 8,
    name: 'Ботокс для ресниц',
    category: 'lamination',
    description: 'Питание и восстановление. Эффект ламинирования + уход.',
    price: 3200,
    duration: '1.5 часа',
    rating: 4.9,
    image: '/lashes/3.jpg',
    badge: 'Топ'
  },
];

const categories = [
  { id: 'all', name: 'Все услуги', icon: '👁️' },
  { id: 'classic', name: 'Классика', icon: '✨' },
  { id: 'volume', name: 'Объем', icon: '💫' },
  { id: 'hollywood', name: 'Голливуд', icon: '⭐' },
  { id: 'lamination', name: 'Ламинирование', icon: '🌸' },
  { id: 'care', name: 'Уход', icon: '💖' },
];

function LashesCatalog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" }
    })
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-lashes-accent fill-lashes-accent' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section ref={ref} id="catalog" className='py-20 md:py-28 bg-lashes-bg-light'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-lashes-accent text-sm font-medium tracking-wider uppercase mb-2 block'>
            НАШИ УСЛУГИ
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-lashes-primary mb-4'>
            Преображение <span className='text-lashes-accent'>вашего взгляда</span>
          </h2>
          <p className='text-lashes-text-light max-w-2xl mx-auto'>
            Выберите идеальный объем и эффект для создания неповторимого образа
          </p>
        </motion.div>

        {/* Фильтр категорий */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm ${
                activeCategory === cat.id
                  ? 'bg-lashes-accent text-white'
                  : 'bg-white border border-lashes-accent/30 text-lashes-accent hover:bg-lashes-accent/10'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Сетка услуг */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className='group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-lashes-accent/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-lashes-accent/10'>
                
                {/* Фото */}
                <div className='relative h-56 overflow-hidden bg-lashes-bg-light'>
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  {service.badge && (
                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold rounded-lg ${
                      service.badge === 'Премиум' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white' :
                      service.badge === 'Хит' ? 'bg-lashes-accent text-white' :
                      'bg-lashes-accent/90 text-white'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                  <button className='absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all opacity-0 group-hover:opacity-100'>
                    <FiHeart className='w-4 h-4 text-lashes-primary' />
                  </button>
                  <div className='absolute bottom-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-lashes-primary'>
                    <FiClock className='w-3 h-3 text-lashes-accent' />
                    {service.duration}
                  </div>
                </div>

                {/* Информация */}
                <div className='p-5 flex flex-col flex-grow'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lashes-primary font-bold text-lg group-hover:text-lashes-accent transition-colors'>
                      {service.name}
                    </h3>
                    <div className='flex items-center gap-1'>
                      {renderStars(service.rating)}
                    </div>
                  </div>
                  
                  <p className='text-lashes-text-light text-sm mb-4 leading-relaxed flex-grow'>
                    {service.description}
                  </p>
                  
                  <div className='flex items-center justify-between mt-auto pt-3 border-t border-gray-100'>
                    <div>
                      <span className='text-lashes-accent font-bold text-2xl'>
                        {service.price.toLocaleString()} ₽
                      </span>
                    </div>
                    
                    <button className='px-4 py-2 bg-lashes-primary hover:bg-lashes-accent text-white text-sm font-medium rounded-full transition-all duration-300'>
                      Записаться
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  );
}

export default LashesCatalog;