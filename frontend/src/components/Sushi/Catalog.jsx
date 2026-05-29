import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiClock, 
  FiInstagram, 
  FiSend, 
  FiMessageCircle,
  FiNavigation
} from 'react-icons/fi';



const rolls = [
  {
    id: 1,
    name: 'Филадельфия',
    category: 'rolls',
    composition: 'Лосось, сливочный сыр, огурец, нори',
    price: 550,
    weight: '220г',
    rating: 4.9,
    image: '/sushi/1.jpg',
    badge: 'Хит'
  },
  {
    id: 2,
    name: 'Калифорния',
    category: 'rolls',
    composition: 'Краб, авокадо, огурец, икра тобико',
    price: 520,
    weight: '210г',
    rating: 4.8,
    image: '/sushi/2.jpg',
    badge: 'Популярный'
  },
  {
    id: 3,
    name: 'Запечённый лосось',
    category: 'hot',
    composition: 'Лосось, сливочный сыр, соус унаги',
    price: 590,
    weight: '230г',
    rating: 4.9,
    image: '/sushi/3.jpg',
    badge: 'Горячий'
  },
  {
    id: 4,
    name: 'Унаги Маки',
    category: 'rolls',
    composition: 'Угорь, авокадо, огурец, соус унаги',
    price: 620,
    weight: '210г',
    rating: 4.9,
    image: '/sushi/4.jpg',
    badge: 'Топ'
  },
  {
    id: 5,
    name: 'Сет «Самурай»',
    category: 'sets',
    composition: 'Филадельфия + Калифорния + Унаги (24 шт)',
    price: 1490,
    weight: '650г',
    rating: 5.0,
    image: '/sushi/3.jpg',
    badge: 'Эконом'
  },
  {
    id: 6,
    name: 'Спайси туна',
    category: 'rolls',
    composition: 'Тунец, острый соус, огурец, нори',
    price: 580,
    weight: '210г',
    rating: 4.7,
    image: '/sushi/1.jpg',
    badge: null
  },
  {
    id: 7,
    name: 'Темпура креветка',
    category: 'hot',
    composition: 'Креветка темпура, авокадо, соус спайси',
    price: 640,
    weight: '220г',
    rating: 4.9,
    image: '/sushi/4.jpg',
    badge: 'Хит'
  },
  {
    id: 8,
    name: 'Сет «Филадельфия»',
    category: 'sets',
    composition: 'Филадельфия (16 шт) + Суп мисо',
    price: 1290,
    weight: '520г',
    rating: 4.9,
    image: '/sushi/2.jpg',
    badge: 'Популярный'
  },
];

const categories = [
  { id: 'all', name: 'Все', icon: '🍣' },
  { id: 'rolls', name: 'Роллы', icon: '🍱' },
  { id: 'hot', name: 'Горячие', icon: '🔥' },
  { id: 'sets', name: 'Сеты', icon: '📦' },
];

function Catalog() {
  
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }; 

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredRolls = activeCategory === 'all' 
    ? rolls 
    : rolls.filter(roll => roll.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <section ref={ref} id="catalog" className='min-h-screen py-20 md:py-28 bg-sushi-dark'>
      <div className='max-w-450 mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-sushi-accent text-sm font-medium tracking-wider uppercase mb-2 block'>
            Наше меню
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Популярные <span className='text-sushi-accent'>роллы и сеты</span>
          </h2>
          <p className='text-sushi-text-light max-w-2xl mx-auto'>
            Свежайшие ингредиенты, авторские рецепты и быстрая доставка
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
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-sushi-accent text-black'
                  : 'bg-sushi-primary border border-sushi-accent/30 text-sushi-accent hover:bg-sushi-accent/10'
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Сетка товаров */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredRolls.map((roll, index) => (
            <motion.div
              key={roll.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredId(roll.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className='group bg-sushi-primary rounded-2xl overflow-hidden border border-sushi-accent/20 hover:border-sushi-accent/50 transition-all duration-300 h-full flex flex-col'>
                
                {/* Фото */}
                <div className='relative h-52 overflow-hidden bg-sushi-dark'>
                  <img 
                    src={roll.image} 
                    alt={roll.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  {roll.badge && (
                    <span className='absolute top-3 left-3 px-2 py-1 bg-sushi-accent text-black text-xs font-bold rounded-lg'>
                      {roll.badge}
                    </span>
                  )}
                  <span className='absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-sushi-text-light text-xs rounded-lg'>
                    {roll.weight}
                  </span>
                </div>

                {/* Информация */}
                <div className='p-5 flex flex-col grow'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-white font-bold text-lg group-hover:text-sushi-accent transition-colors'>
                      {roll.name}
                    </h3>
                    <div className='flex items-center gap-1'>
                      <FiStar className='w-3 h-3 text-sushi-accent fill-sushi-accent' />
                      <span className='text-sushi-text-light text-sm'>{roll.rating}</span>
                    </div>
                  </div>
                  
                  <p className='text-sushi-text-light text-sm mb-4 leading-relaxed grow'>
                    {roll.composition}
                  </p>
                  
                  <div className='flex items-center justify-between mt-auto pt-3 border-t border-sushi-accent/20'>
                    <div>
                      <span className='text-sushi-accent font-bold text-xl'>
                        {roll.price.toLocaleString()} ₽
                      </span>
                    </div>
                    
                    <motion.button
                            onClick={() => scrollTo('#contacts')}
                            className='px-4 py-2 bg-sushi-accent hover:bg-sushi-accent-light text-black font-bold rounded-full flex items-center gap-2'
                          >
                            <FiSend className='w-4 h-4' />
                            Заказать
                          </motion.button>

                          
                        
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

export default Catalog;

{/* <button
  onClick={() => {
    navigator.clipboard.writeText(`🍣 Хочу заказать: ${roll.name}`);
    alert('Название товара скопировано! Вставьте его в чат с менеджером в MAX.');
  }}
  className="..."
>
  📋 Заказать в MAX
</button> */}

/* href={`https://t.me/dsorokin070/?text=🍣 Хочу заказать: ${encodeURIComponent(roll.name)} */
                       /* href={`https://t.me/dsorokin070/?text=🍣 Хочу заказать: ${encodeURIComponent(roll.name)} */
                        /* href="https://t.me/dsorokin070" */