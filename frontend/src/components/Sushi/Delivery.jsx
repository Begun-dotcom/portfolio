import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { 
  FiTruck, 
  FiClock, 
  FiMapPin, 
  FiCreditCard, 
  FiDollarSign, 
  FiSmartphone,
  FiShield,
  FiCoffee
} from 'react-icons/fi';

function Delivery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const advantages = [
    {
      icon: <FiTruck className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Бесплатная доставка',
      desc: 'При заказе от 1000 ₽',
    },
    {
      icon: <FiClock className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Доставка 30-40 мин',
      desc: 'Среднее время ожидания',
    },
    {
      icon: <FiMapPin className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Радиус 5 км',
      desc: 'От центра города',
    },
    {
      icon: <FiCoffee className='w-7 h-7 md:w-8 md:h-8' />,
      title: 'Подарок к заказу',
      desc: 'Соус, васаби, имбирь, палочки',
    },
  ];

  const paymentMethods = [
    { icon: <FiCreditCard className='w-5 h-5 md:w-6 md:h-6' />, name: 'Банковской картой', desc: 'Visa, MasterCard, МИР' },
    { icon: <FiDollarSign className='w-5 h-5 md:w-6 md:h-6' />, name: 'Наличными курьеру', desc: 'При получении' },
    { icon: <FiSmartphone className='w-5 h-5 md:w-6 md:h-6' />, name: 'Онлайн на сайте', desc: 'Apple Pay, Google Pay' },
    { icon: <FiShield className='w-5 h-5 md:w-6 md:h-6' />, name: 'Безопасно', desc: 'Данные защищены' },
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
    <section ref={ref} id="delivery" className='py-16 md:py-24 bg-sushi-primary'>
      <div className='max-w-450 mx-auto px-5 md:px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 md:mb-12'
        >
          <span className='text-sushi-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block'>
            ДОСТАВКА И ОПЛАТА
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4'>
            Быстро и <span className='text-sushi-accent'>удобно</span>
          </h2>
          <p className='text-sushi-text-light text-sm md:text-base max-w-2xl mx-auto px-4'>
            Мы ценим ваше время и предлагаем комфортные способы получения и оплаты заказа
          </p>
        </motion.div>

        {/* Карта зоны доставки */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='relative mb-12 md:mb-16 rounded-2xl md:rounded-3xl overflow-hidden border border-sushi-accent/20'
        >
          <div className='relative h-64 md:h-80 lg:h-96 bg-linear-to-br from-sushi-dark to-sushi-primary'>
            {/* Карта-заглушка — замените на реальную карту/изображение */}
            <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=37.617,55.755&z=12&pt=37.617,55.755,flag&l=map&size=300,200"
                className="w-full h-full"
                frameBorder="0"
                />
            {/* Декоративные круги */}
            
          </div>
          
          {/* Плашка с условием */}
          <div className='absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-sushi-accent/30 whitespace-nowrap'>
            <p className='text-white text-xs md:text-sm'>
              📍 В радиусе 5 км — 
              <span className='text-sushi-accent font-bold ml-1'>бесплатная доставка от 1000 ₽</span>
            </p>
          </div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16'
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className='bg-linear-to-br from-sushi-accent/10 to-sushi-accent/5 rounded-xl md:rounded-2xl p-4 md:p-6 text-center border border-sushi-accent/20 hover:border-sushi-accent/50 transition-all duration-300'
            >
              <div className='text-sushi-accent mb-2 md:mb-4 flex justify-center'>
                {item.icon}
              </div>
              <h3 className='text-white font-bold text-base md:text-lg mb-1 md:mb-2'>{item.title}</h3>
              <p className='text-sushi-text-light text-xs md:text-sm'>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Способы оплаты */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className='text-center mb-6 md:mb-8'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2'>
              Способы <span className='text-sushi-accent'>оплаты</span>
            </h3>
            <p className='text-sushi-text-light text-sm md:text-base'>Выберите удобный для вас вариант</p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'>
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className='bg-sushi-dark rounded-xl md:rounded-2xl p-4 md:p-5 text-center border border-sushi-accent/20 hover:border-sushi-accent/40 transition-all duration-300'
              >
                <div className='text-sushi-accent mb-2 md:mb-3 flex justify-center'>
                  {method.icon}
                </div>
                <h4 className='text-white font-semibold text-sm md:text-base mb-1'>{method.name}</h4>
                <p className='text-sushi-text-light text-xs'>{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='mt-8 md:mt-12 p-4 md:p-6 bg-sushi-dark/50 rounded-xl md:rounded-2xl border border-sushi-accent/20 text-center'
        >
          <p className='text-sushi-text-light text-xs md:text-sm'>
            ⏱️ Минимальная сумма заказа — <span className='text-sushi-accent font-bold'>500 ₽</span>
            <br className='block sm:hidden' />
            <span className='hidden sm:inline'> • </span>
            При заказе от <span className='text-sushi-accent font-bold'>1500 ₽</span> — 
            <span className='text-sushi-accent font-bold ml-1'>десерт в подарок</span> 🍰
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Delivery;