import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageCircle, FiHeart } from 'react-icons/fi';

function LashesReviews() {
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
      text: 'Очень довольна результатом! Мастер Алина — профессионал с большой буквы. Всё объяснила, подобрала идеальный объём. Ресницы держатся уже 3 недели, выглядит как после салона. Обязательно приду ещё!',
      service: '2D объем',
      likes: 24,
    },
    {
      id: 2,
      name: 'Екатерина Морозова',
      avatar: '👩‍🦳',
      rating: 5,
      date: '10 мая 2024',
      text: 'Делала ламинирование в первый раз. Результат превзошёл ожидания! Ресницы стали заметно длиннее и гуще, появился здоровый блеск. Процедура комфортная, мастер очень внимательная. Спасибо!',
      service: 'Ламинирование',
      likes: 18,
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      avatar: '👨',
      rating: 5,
      date: '5 мая 2024',
      text: 'Записал жену на день рождения. Она в восторге! Спасибо за индивидуальный подход и прекрасное настроение. Обязательно вернёмся на коррекцию. Рекомендую эту студию всем!',
      service: 'Голливудский объем',
      likes: 31,
    },
    {
      id: 4,
      name: 'Ольга Соколова',
      avatar: '👩‍🏫',
      rating: 4,
      date: '28 апреля 2024',
      text: 'Отличная студия, чисто, уютно. Мастер Мария сделала шикарный классический объём. Единственный минус — пришлось подождать 15 минут, но результат того стоил. Спасибо!',
      service: 'Классическое наращивание',
      likes: 12,
    },
    {
      id: 5,
      name: 'Ирина Волкова',
      avatar: '👩‍🎨',
      rating: 5,
      date: '20 апреля 2024',
      text: 'Хожу уже второй год, меняла мастеров, но всегда остаюсь довольна. Очень удобное расположение, приятные цены, а главное — качество на высоте. Спасибо команде Lash Studio!',
      service: '3D объем',
      likes: 42,
    },
  ];

  const stats = [
    { value: '4.9', label: 'Средний рейтинг', icon: '⭐' },
    { value: '128', label: 'Отзывов', icon: '💬' },
    { value: '98%', label: 'Рекомендуют', icon: '👍' },
    { value: '5 лет', label: 'На рынке', icon: '✨' },
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
        className={`w-4 h-4 ${i < rating ? 'text-lashes-accent fill-lashes-accent' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section ref={ref} id="reviews" className='py-20 md:py-28 bg-lashes-bg-light'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <span className='text-lashes-accent text-sm font-medium tracking-wider uppercase mb-2 block'>
            ОТЗЫВЫ
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-lashes-primary mb-4'>
            Что говорят <span className='text-lashes-accent'>наши клиенты</span>
          </h2>
          <p className='text-lashes-text-light max-w-2xl mx-auto'>
            Более 2000 довольных девушек доверили нам красоту своего взгляда
          </p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto'
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-4 text-center border border-lashes-accent/10 shadow-sm'
            >
              <div className='text-2xl mb-1'>{stat.icon}</div>
              <div className='text-2xl font-bold text-lashes-accent'>{stat.value}</div>
              <p className='text-lashes-text-light text-xs'>{stat.label}</p>
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
          <div className='bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-lashes-accent/10'>
            <div className='flex flex-col md:flex-row gap-6'>
              
              {/* Левая часть — аватар и информация */}
              <div className='text-center md:text-left md:min-w-[200px]'>
                <div className='w-16 h-16 bg-lashes-bg-light rounded-full flex items-center justify-center text-4xl mx-auto md:mx-0 border-2 border-lashes-accent/30'>
                  {reviews[currentIndex].avatar}
                </div>
                <h3 className='text-lashes-primary font-bold text-lg mt-3'>
                  {reviews[currentIndex].name}
                </h3>
                <div className='flex justify-center md:justify-start gap-1 mt-1'>
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                <p className='text-lashes-text-light text-xs mt-2'>{reviews[currentIndex].date}</p>
                <div className='mt-3 inline-block px-3 py-1 bg-lashes-accent/10 rounded-full text-xs text-lashes-accent'>
                  {reviews[currentIndex].service}
                </div>
              </div>

              {/* Правая часть — текст отзыва */}
              <div className='flex-1'>
                <div className='flex items-center gap-2 mb-3'>
                  <FiMessageCircle className='text-lashes-accent w-5 h-5' />
                  <span className='text-lashes-text-light text-sm'>Отзыв</span>
                </div>
                <p className='text-lashes-primary text-base md:text-lg leading-relaxed italic'>
                  "{reviews[currentIndex].text}"
                </p>
                <div className='flex items-center gap-2 mt-4 pt-3 border-t border-gray-100'>
                  <FiHeart className='w-4 h-4 text-lashes-accent' />
                  <span className='text-lashes-text-light text-sm'>{reviews[currentIndex].likes} отметок "Нравится"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Кнопки навигации */}
          <button
            onClick={prevReview}
            className='absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white hover:bg-lashes-accent text-lashes-accent hover:text-white rounded-full p-2 shadow-lg transition-all duration-300 border border-lashes-accent/20'
          >
            <FiChevronLeft className='w-5 h-5' />
          </button>
          <button
            onClick={nextReview}
            className='absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white hover:bg-lashes-accent text-lashes-accent hover:text-white rounded-full p-2 shadow-lg transition-all duration-300 border border-lashes-accent/20'
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
                    ? 'w-6 bg-lashes-accent'
                    : 'w-2 bg-lashes-accent/30 hover:bg-lashes-accent/50'
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
          className='text-center mt-10'
        >
          <button className='px-6 py-3 border-2 border-lashes-accent text-lashes-accent hover:bg-lashes-accent hover:text-white rounded-full transition-all duration-300 text-sm font-medium'>
            Смотреть все отзывы (128)
          </button>
        </motion.div>

        {/* Блок с Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className='mt-12 p-5 bg-white rounded-2xl border border-lashes-accent/10 text-center max-w-2xl mx-auto'
        >
          <p className='text-lashes-text-light text-sm'>
            📸 Больше наших работ в Instagram 
            <span className='text-lashes-accent font-bold ml-1'>@lash_studio</span>
          </p>
          <p className='text-lashes-text-light text-xs mt-1'>Подписывайтесь, чтобы быть в курсе акций и новинок</p>
        </motion.div>

      </div>
    </section>
  );
}

export default LashesReviews;