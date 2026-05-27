import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiAward, FiClock, FiHeart } from 'react-icons/fi';

function Workers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const masters = [
    { 
      name: 'Алина Смирнова', 
      role: 'Специалист по наращиванию',
      desc: 'Более 5 лет в индустрии. Виртуоз в создании эффекта «лисьих глаз». Ювелирная точность и безупречный стиль.',
      image: '/master1.jpg',
      exp: '5 лет',
      badge: 'Топ-мастер',
      color: 'from-rose-100 to-orange-100'
    },
    { 
      name: 'Анастасия Егорова', 
      role: 'Специалист по наращиванию',
      desc: '4 года опыта. Эталон аккуратности. Знает всё о здоровье натуральных ресниц.',
      image: '/master2.jpg',
      exp: '4 года',
      badge: 'Эксперт',
      color: 'from-pink-100 to-purple-100'
    },
    { 
      name: 'Екатерина Волкова', 
      role: 'Специалист по ламинированию',
      desc: 'Сертифицированный мастер по ламинированию. Деликатный подход и природный результат уже после первой процедуры.',
      image: '/master3.jpg',
      exp: '3 года',
      badge: 'Новинка',
      color: 'from-amber-100 to-yellow-100'
    },
    { 
      name: 'Мария Соколова', 
      role: 'Специалист по коррекции',
      desc: 'Мастер по коррекции и снятию ресниц. Безболезненная процедура с сохранением натуральных ресниц.',
      image: '/master4.jpg',
      exp: '4 года',
      badge: 'Профи',
      color: 'from-teal-100 to-emerald-100'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1, 
        duration: 0.5, 
        ease: "easeOut" 
      }
    })
  };

  return (
    <section ref={ref} id="masters" className='min-h-screen py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/30'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <div className='inline-block mb-3'>
            <span className='px-4 py-1 bg-rose-100 text-rose-500 rounded-full text-sm font-medium tracking-wide'>
              👩‍🎤 МАСТЕРА
            </span>
          </div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Мастера нашей <span className='text-rose-500'>студии</span>
          </h2>
          <p className='text-gray-500 text-base max-w-2xl mx-auto'>
            Только квалифицированные специалисты с опытом работы от 3 лет
          </p>
        </motion.div>

        {/* Сетка 2x2 */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto'>
          {masters.map((master, index) => (
            <motion.div
              key={master.name}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className='h-full'
            >
              <div className='group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-200/30 transition-all duration-300 h-full flex flex-col'>
                
                {/* Фото мастера */}
                <div className='relative h-70 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                  <img 
                    src={master.image} 
                    alt={master.name}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  
                  {/* Бейдж */}
                  <div className='absolute top-4 left-4'>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                      master.badge === 'Топ-мастер' ? 'bg-amber-500 text-white' :
                      master.badge === 'Новинка' ? 'bg-green-500 text-white' :
                      master.badge === 'Эксперт' ? 'bg-purple-500 text-white' :
                      'bg-rose-500 text-white'
                    }`}>
                      {master.badge}
                    </span>
                  </div>
                  
                  {/* Опыт */}
                  <div className='absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700'>
                    <FiClock className='w-3 h-3 inline mr-1 text-rose-400' />
                    опыт {master.exp}
                  </div>
                </div>
                
                {/* Информация */}
                <div className='p-5 flex-1 flex flex-col'>
                  <h3 className='text-gray-900 font-bold text-xl mb-1 group-hover:text-rose-500 transition-colors'>
                    {master.name}
                  </h3>
                  <p className='text-rose-500 text-sm mb-3 font-medium'>{master.role}</p>
                  <p className='text-gray-500 text-sm leading-relaxed mb-4 flex-1'>
                    {master.desc}
                  </p>
                  
                  {/* Дополнительная информация */}
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
        
      </div>
    </section>
  );
}

export default Workers;