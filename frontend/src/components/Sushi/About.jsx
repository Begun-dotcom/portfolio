import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiAward, 
  FiHeart, 
  FiUsers, 
  FiThumbsUp,
  FiCheckCircle
} from 'react-icons/fi';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <FiAward className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Свежайшие продукты',
      desc: 'Рыба и морепродукты поступают ежедневно. Гарантируем качество каждого ингредиента.',
    },
    {
      icon: <FiHeart className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Авторские рецепты',
      desc: 'Наши шеф-повара создают уникальные сочетания вкусов, которые вы не найдёте больше нигде.',
    },
    {
      icon: <FiUsers className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Команда профессионалов',
      desc: 'Опытные повара с 10-летним стажем готовят для вас с душой и любовью.',
    },
    {
      icon: <FiThumbsUp className='w-7 h-7 md:w-8 md:h-8' />,
      title: '1500+ довольных клиентов',
      desc: 'Нас рекомендуют друзьям и возвращаются снова. Присоединяйтесь!',
    },
  ];

  const stats = [
    { value: '2018', label: 'Год основания' },
    { value: '10+', label: 'Поваров' },
    { value: '30+', label: 'Блюд в меню' },
    { value: '1500+', label: 'Счастливых клиентов' },
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
    <section ref={ref} id="about" className='py-16 md:py-24 bg-sushi-primary'>
      <div className='max-w-450 mx-auto px-5 md:px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 md:mb-12'
        >
          <span className='text-sushi-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block'>
            О НАС
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4'>
            Почему выбирают <span className='text-sushi-accent'>нас</span>
          </h2>
          <p className='text-sushi-text-light text-sm md:text-base max-w-2xl mx-auto px-4'>
            Мы любим суши так же сильно, как и вы. И делаем всё, чтобы каждый заказ приносил удовольствие.
          </p>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12 md:mb-16'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-linear-to-br from-sushi-accent/10 to-sushi-accent/5 rounded-xl md:rounded-2xl p-5 md:p-6 text-center border border-sushi-accent/20 hover:border-sushi-accent/50 transition-all duration-300'
            >
              <div className='text-sushi-accent mb-3 md:mb-4 flex justify-center'>
                {feature.icon}
              </div>
              <h3 className='text-white font-bold text-base md:text-lg mb-2'>{feature.title}</h3>
              <p className='text-sushi-text-light text-xs md:text-sm leading-relaxed'>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              className='text-center p-4 md:p-5 bg-sushi-dark rounded-xl md:rounded-2xl border border-sushi-accent/20'
            >
              <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-sushi-accent mb-1'>
                {stat.value}
              </div>
              <p className='text-sushi-text-light text-xs md:text-sm'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Блок с ценностями */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='bg-sushi-dark/50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-sushi-accent/20'
        >
          <div className='flex flex-col lg:flex-row items-center gap-6 md:gap-8'>
            {/* Текст */}
            <div className='flex-1 text-center lg:text-left'>
              <h3 className='text-white font-bold text-xl md:text-2xl mb-2 md:mb-3'>
                Наша философия
              </h3>
              <p className='text-sushi-text-light text-sm md:text-base leading-relaxed'>
                Мы верим, что настоящие суши — это искусство. Поэтому используем только свежайшие продукты,
                соблюдаем традиционные рецепты и постоянно совершенствуем мастерство.
                Каждый ролл мы готовим с душой, потому что хотим, чтобы вы возвращались к нам снова и снова.
              </p>
              <div className='flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6 justify-center lg:justify-start'>
                <span className='inline-flex items-center gap-1 text-xs md:text-sm text-sushi-accent'>
                  <FiCheckCircle className='w-3 h-3 md:w-4 md:h-4' />
                  Свежесть гарантируем
                </span>
                <span className='inline-flex items-center gap-1 text-xs md:text-sm text-sushi-accent'>
                  <FiCheckCircle className='w-3 h-3 md:w-4 md:h-4' />
                  Быстрая доставка
                </span>
                <span className='inline-flex items-center gap-1 text-xs md:text-sm text-sushi-accent'>
                  <FiCheckCircle className='w-3 h-3 md:w-4 md:h-4' />
                  Дружелюбный сервис
                </span>
              </div>
            </div>
            
            {/* Иконка/цифра */}
            <div className='shrink-0'>
              <div className='w-20 h-20 md:w-24 md:h-24 bg-sushi-accent/10 rounded-full flex items-center justify-center border border-sushi-accent/30'>
                <span className='text-4xl md:text-5xl'>🍣</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;