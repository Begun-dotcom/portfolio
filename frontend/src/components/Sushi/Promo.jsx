import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiGift, FiPercent, FiTruck, FiChevronRight } from 'react-icons/fi';

function Promo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Таймер для акции
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const promos = [
    {
      id: 1,
      title: 'Скидка 20% на первый заказ',
      description: 'Для новых клиентов при первом заказе от 1000 ₽',
      icon: <FiPercent className='w-6 h-6 md:w-8 md:h-8' />,
      color: 'from-amber-500/20 to-orange-500/10',
      buttonText: 'Получить скидку',
      code: 'SUSHI20'
    },
    {
      id: 2,
      title: 'Сет дня за 899 ₽',
      description: 'Филадельфия + Калифорния + Унаги (18 шт.) вместо 1290 ₽',
      icon: <FiGift className='w-6 h-6 md:w-8 md:h-8' />,
      color: 'from-amber-500/20 to-amber-600/10',
      buttonText: 'Заказать сет',
      code: null
    },
    {
      id: 3,
      title: 'Бесплатная доставка',
      description: 'При заказе от 1500 ₽ в любой район города',
      icon: <FiTruck className='w-6 h-6 md:w-8 md:h-8' />,
      color: 'from-amber-500/20 to-yellow-500/10',
      buttonText: 'Подробнее',
      code: null
    },
  ];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert('Промокод скопирован: ' + code);
  };

  return (
    <section ref={ref} id="promo" className='py-16 md:py-24 bg-gradient-to-b from-sushi-primary to-sushi-dark'>
      <div className='max-w-[1800px] mx-auto px-5 md:px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 md:mb-12'
        >
          <span className='text-sushi-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block'>
            АКЦИИ И ПРЕДЛОЖЕНИЯ
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4'>
            Экономьте с <span className='text-sushi-accent'>нами</span>
          </h2>
          <p className='text-sushi-text-light text-sm md:text-base max-w-2xl mx-auto px-4'>
            Постоянные акции и скидки для наших любимых клиентов
          </p>
        </motion.div>

        {/* Таймер акции */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='max-w-3xl mx-auto mb-12 md:mb-16'
        >
          <div className='bg-gradient-to-r from-sushi-accent/10 to-sushi-accent/5 rounded-2xl md:rounded-3xl p-5 md:p-6 text-center border border-sushi-accent/30'>
            <div className='flex items-center justify-center gap-2 mb-3'>
              <FiClock className='text-sushi-accent w-5 h-5 md:w-6 md:h-6' />
              <span className='text-sushi-accent font-bold text-sm md:text-base uppercase tracking-wide'>
                До конца акции осталось
              </span>
            </div>
            <div className='flex justify-center gap-3 md:gap-5'>
              <div className='text-center'>
                <div className='bg-sushi-primary rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] border border-sushi-accent/30'>
                  <span className='text-2xl md:text-3xl lg:text-4xl font-bold text-sushi-accent'>
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <p className='text-sushi-text-light text-xs mt-1'>Часов</p>
              </div>
              <span className='text-3xl md:text-4xl lg:text-5xl text-sushi-accent self-start mt-2'>:</span>
              <div className='text-center'>
                <div className='bg-sushi-primary rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] border border-sushi-accent/30'>
                  <span className='text-2xl md:text-3xl lg:text-4xl font-bold text-sushi-accent'>
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <p className='text-sushi-text-light text-xs mt-1'>Минут</p>
              </div>
              <span className='text-3xl md:text-4xl lg:text-5xl text-sushi-accent self-start mt-2'>:</span>
              <div className='text-center'>
                <div className='bg-sushi-primary rounded-xl p-2 md:p-3 min-w-[60px] md:min-w-[80px] border border-sushi-accent/30'>
                  <span className='text-2xl md:text-3xl lg:text-4xl font-bold text-sushi-accent'>
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <p className='text-sushi-text-light text-xs mt-1'>Секунд</p>
              </div>
            </div>
            <p className='text-sushi-text-light text-xs md:text-sm mt-4'>
              🎁 Специальное предложение действует ограниченное время
            </p>
          </div>
        </motion.div>

        {/* Карточки акций */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16'
        >
          {promos.map((promo, index) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`bg-gradient-to-br ${promo.color} rounded-2xl p-5 md:p-6 border border-sushi-accent/20 hover:border-sushi-accent/50 transition-all duration-300`}
            >
              <div className='flex items-start gap-3 md:gap-4 mb-4'>
                <div className='w-12 h-12 md:w-14 md:h-14 bg-sushi-accent/20 rounded-full flex items-center justify-center text-sushi-accent'>
                  {promo.icon}
                </div>
                <div className='flex-1'>
                  <h3 className='text-white font-bold text-base md:text-lg mb-1'>{promo.title}</h3>
                  <p className='text-sushi-text-light text-xs md:text-sm'>{promo.description}</p>
                </div>
              </div>
              
              {promo.code && (
                <div className='mb-4 p-2 md:p-3 bg-sushi-primary rounded-xl border border-sushi-accent/30 flex items-center justify-between'>
                  <span className='text-sushi-accent font-mono text-sm md:text-base font-bold'>{promo.code}</span>
                  <button 
                    onClick={() => handleCopyCode(promo.code)}
                    className='text-xs md:text-sm text-sushi-text-light hover:text-sushi-accent transition-colors'
                  >
                    Копировать
                  </button>
                </div>
              )}
              
              <button className='w-full py-2 md:py-2.5 bg-sushi-accent hover:bg-sushi-accent-light text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-1 group text-sm md:text-base'>
                {promo.buttonText}
                <FiChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Бонусная программа */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='bg-sushi-dark/50 rounded-2xl p-5 md:p-6 border border-sushi-accent/20'
        >
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
            <div className='flex items-center gap-3 md:gap-4'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-sushi-accent/20 rounded-full flex items-center justify-center text-2xl md:text-3xl'>
                💎
              </div>
              <div>
                <h3 className='text-white font-bold text-base md:text-lg'>Бонусная программа</h3>
                <p className='text-sushi-text-light text-xs md:text-sm'>Каждый 5-й заказ — скидка 30% или подарок на выбор</p>
              </div>
            </div>
            <button className='px-5 md:px-6 py-2 md:py-2.5 border border-sushi-accent text-sushi-accent hover:bg-sushi-accent hover:text-black rounded-full transition-all duration-300 text-sm md:text-base whitespace-nowrap'>
              Узнать подробнее
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Promo;