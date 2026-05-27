import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle } from 'react-icons/fi';

function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Анна Смирнова',
      avatar: '👩‍🦰',
      rating: 5,
      date: '15 мая 2024',
      text: 'Заказывала сет "Самурай" на компанию друзей. Всё было очень вкусно, свежо и аккуратно упаковано. Доставка быстрее заявленного времени. Обязательно закажу ещё!',
      dish: 'Сет "Самурай"',
    },
    {
      id: 2,
      name: 'Дмитрий Петров',
      avatar: '👨',
      rating: 5,
      date: '10 мая 2024',
      text: 'Лучшие суши в городе! Филадельфия просто тает во рту. Соусы отдельно, палочки качественные. Повара — молодцы, так держать!',
      dish: 'Филадельфия',
    },
    {
      id: 3,
      name: 'Елена Морозова',
      avatar: '👩‍🦳',
      rating: 4,
      date: '5 мая 2024',
      text: 'Очень вкусные запечённые роллы. Начинки много, рис не разваливается. Единственное — долго ждала доставку в пятницу вечером, но это простительно.',
      dish: 'Запечённый лосось',
    },
    {
      id: 4,
      name: 'Иван Соколов',
      avatar: '👨‍🦰',
      rating: 5,
      date: '28 апреля 2024',
      text: 'Заказываю уже третий раз. Всё всегда свежее, доставка быстрая, цены адекватные. Особенно нравится "Калифорния" с крабом. Рекомендую!',
      dish: 'Калифорния',
    },
    {
      id: 5,
      name: 'Мария Волкова',
      avatar: '👩‍🏫',
      rating: 5,
      date: '20 апреля 2024',
      text: 'Отличный сервис! Оператор вежливый, курьер приехал вовремя. Суши очень вкусные, порции большие. Подарок к первому заказу приятно удивил.',
      dish: 'Сет дня',
    },
  ];

  const stats = [
    { value: '4.9', label: 'Средний рейтинг', icon: '⭐' },
    { value: '500+', label: 'Отзывов', icon: '💬' },
    { value: '98%', label: 'Рекомендуют', icon: '👍' },
  ];

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-sushi-accent fill-sushi-accent' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section ref={ref} id="reviews" className='py-16 md:py-24 bg-sushi-primary'>
      <div className='max-w-[1800px] mx-auto px-5 md:px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-10 md:mb-12'
        >
          <span className='text-sushi-accent text-xs md:text-sm font-medium tracking-wider uppercase mb-2 block'>
            ОТЗЫВЫ
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4'>
            Что говорят <span className='text-sushi-accent'>наши клиенты</span>
          </h2>
          <p className='text-sushi-text-light text-sm md:text-base max-w-2xl mx-auto px-4'>
            Более 500 довольных клиентов уже оценили качество наших суши
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-2xl mx-auto'
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-sushi-dark rounded-xl md:rounded-2xl p-4 md:p-5 text-center border border-sushi-accent/20'
            >
              <div className='text-2xl md:text-3xl mb-1'>{stat.icon}</div>
              <div className='text-2xl md:text-3xl font-bold text-sushi-accent'>{stat.value}</div>
              <p className='text-sushi-text-light text-xs md:text-sm'>{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Карусель отзывов */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='relative max-w-4xl mx-auto'
        >
          {/* Карточка текущего отзыва */}
          <div className='bg-sushi-dark rounded-2xl md:rounded-3xl p-6 md:p-8 border border-sushi-accent/20'>
            <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
              
              {/* Аватар и информация */}
              <div className='text-center md:text-left'>
                <div className='w-16 h-16 md:w-20 md:h-20 bg-sushi-accent/10 rounded-full flex items-center justify-center text-4xl md:text-5xl mx-auto md:mx-0 border border-sushi-accent/30'>
                  {reviews[currentIndex].avatar}
                </div>
                <h3 className='text-white font-bold text-lg mt-3'>{reviews[currentIndex].name}</h3>
                <div className='flex justify-center md:justify-start gap-1 mt-1'>
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <p className='text-sushi-text-light text-xs mt-2'>{reviews[currentIndex].date}</p>
              </div>

              {/* Текст отзыва */}
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-3'>
                  <FiMessageCircle className='text-sushi-accent w-5 h-5' />
                  <span className='text-sushi-accent text-sm font-medium'>Заказывал(а):</span>
                  <span className='text-white text-sm'>{reviews[currentIndex].dish}</span>
                </div>
                <p className='text-sushi-text-light text-sm md:text-base leading-relaxed italic'>
                  "{reviews[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevReview}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-sushi-accent/20 hover:bg-sushi-accent/40 text-sushi-accent rounded-full p-2 transition-all duration-300'
          >
            <FiChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={nextReview}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 bg-sushi-accent/20 hover:bg-sushi-accent/40 text-sushi-accent rounded-full p-2 transition-all duration-300'
          >
            <FiChevronRight className='w-5 h-5' />
          </button>

          {/* Индикаторы */}
          <div className='flex justify-center gap-2 mt-6'>
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-sushi-accent'
                    : 'w-2 bg-sushi-accent/30 hover:bg-sushi-accent/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Кнопка "Все отзывы" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className='text-center mt-8 md:mt-10'
        >
          <button className='px-6 md:px-8 py-2.5 md:py-3 border-2 border-sushi-accent text-sushi-accent hover:bg-sushi-accent hover:text-black rounded-full transition-all duration-300 text-sm md:text-base font-medium'>
            Смотреть все отзывы (128)
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Reviews;