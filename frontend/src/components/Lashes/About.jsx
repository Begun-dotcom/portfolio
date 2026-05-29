import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiHeart, FiUsers, FiThumbsUp, FiCheckCircle, FiClock } from 'react-icons/fi';

function LashesAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <FiAward className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Сертифицированные мастера',
      desc: 'Опыт работы от 5 лет. Регулярное повышение квалификации.',
    },
    {
      icon: <FiHeart className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Гипоаллергенные материалы',
      desc: 'Используем только качественные клеи и ресницы от проверенных брендов.',
    },
    {
      icon: <FiUsers className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Индивидуальный подход',
      desc: 'Подбираем идеальный объем и эффект под форму ваших глаз.',
    },
    {
      icon: <FiThumbsUp className='w-7 h-7 md:w-8 md:h-8' />,
      title: '2000+ довольных клиентов',
      desc: 'Возвращаются снова и рекомендуют нас подругам.',
    },
  ];

  const stats = [
    { value: '5+', label: 'лет опыта', icon: '⭐' },
    { value: '8', label: 'мастеров', icon: '👩‍🎨' },
    { value: '2000+', label: 'клиентов', icon: '💖' },
    { value: '100%', label: 'стерильность', icon: '✨' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section ref={ref} id="about" className='py-20 md:py-28 bg-white'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-lashes-accent text-sm font-medium tracking-wider uppercase mb-2 block'>
            О НАС
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-lashes-primary mb-4'>
            Создаём красоту <span className='text-lashes-accent'>с душой</span>
          </h2>
          <p className='text-lashes-text-light max-w-2xl mx-auto'>
            Профессиональная студия наращивания ресниц с заботой о вашем комфорте и здоровье
          </p>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-lashes-bg-light rounded-2xl p-6 text-center border border-lashes-accent/10 hover:border-lashes-accent/30 transition-all duration-300'
            >
              <div className='text-lashes-accent mb-4 flex justify-center'>
                {feature.icon}
              </div>
              <h3 className='text-lashes-primary font-bold text-lg mb-2'>{feature.title}</h3>
              <p className='text-lashes-text-light text-sm'>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              className='text-center p-6 bg-lashes-bg-light rounded-2xl border border-lashes-accent/10'
            >
              <div className='text-3xl mb-2'>{stat.icon}</div>
              <div className='text-3xl md:text-4xl font-bold text-lashes-accent mb-1'>
                {stat.value}
              </div>
              <p className='text-lashes-text-light text-sm'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Блок с ценностями и фото */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='grid md:grid-cols-2 gap-8 items-center'
        >
          {/* Левая часть — текст */}
          <div className='space-y-4'>
            <h3 className='text-2xl md:text-3xl font-bold text-lashes-primary'>
              Почему девушки <span className='text-lashes-accent'>выбирают нас</span>
            </h3>
            <p className='text-lashes-text-light leading-relaxed'>
              Наша студия — это пространство, где каждая клиентка чувствует себя особенной. 
              Мы уделяем внимание каждой детали: от уютной атмосферы до стерильности инструментов.
            </p>
            <div className='space-y-3 pt-2'>
              <div className='flex items-center gap-3'>
                <FiCheckCircle className='w-5 h-5 text-lashes-accent flex-shrink-0' />
                <span className='text-lashes-primary text-sm'>Бесплатная консультация специалиста</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiCheckCircle className='w-5 h-5 text-lashes-accent flex-shrink-0' />
                <span className='text-lashes-primary text-sm'>Гарантия на работу 2 недели</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiCheckCircle className='w-5 h-5 text-lashes-accent flex-shrink-0' />
                <span className='text-lashes-primary text-sm'>Удобное расположение в центре</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiClock className='w-5 h-5 text-lashes-accent flex-shrink-0' />
                <span className='text-lashes-primary text-sm'>Работаем ежедневно с 10:00 до 21:00</span>
              </div>
            </div>
          </div>

          {/* Правая часть — фото студии */}
          <div className='relative rounded-2xl overflow-hidden shadow-xl'>
            <img 
              src="/lashes/show.jpg" 
              alt="Интерьер студии ресниц"
              className='w-full h-100 object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-lashes-primary/50 to-transparent flex items-end'>
              <div className='p-5 text-white'>
                <p className='font-bold text-lg'>Уютная атмосфера</p>
                <p className='text-sm text-white/80'>Интерьер создан для вашего комфорта</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Дополнительный блок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='mt-12 p-6 bg-lashes-accent/5 rounded-2xl border border-lashes-accent/10 text-center'
        >
          <p className='text-lashes-primary text-lg font-medium italic'>
            "Красота требует не жертв, а профессионалов. 
            Доверьте свои ресницы лучшим мастерам города."
          </p>
          <p className='text-lashes-accent text-sm mt-2'>— Основатель студии, Анна</p>
        </motion.div>

      </div>
    </section>
  );
}

export default LashesAbout;
