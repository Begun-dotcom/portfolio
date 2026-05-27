import {React, useRef} from 'react'
import { FiShoppingCart, FiHeart, FiStar, FiPhone, FiMapPin, FiClock, FiInstagram, FiMenu, FiX, FiChevronRight, FiSend } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

function Comment() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const reviews = [
    { name: 'Анна М.', text: 'Самые красивые букеты в городе! Заказываю уже третий раз, всегда свежие цветы и стильная упаковка.', rating: 5, avatar: '👩🏻' },
    { name: 'Дмитрий К.', text: 'Спасибо за срочную доставку! Букет превзошёл все ожидания, девушка в восторге!', rating: 5, avatar: '👨🏻' },
    { name: 'Елена В.', text: 'Оформляю корпоративные заказы. Всегда вовремя, цветы отличные, сервис на высоте.', rating: 5, avatar: '👩🏼' },
    { name: 'Сергей П.', text: 'Заказывал букет маме на юбилей. Доставили точно в срок, цветы свежайшие!', rating: 5, avatar: '👨🏼‍🦰' },
  ];

  return (
    <section ref={ref} id="reviews" className='py-20 md:py-28 bg-[#faf8f5]'>
            <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
              <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                      >
                  <div className='text-center mb-12'>
                    <p className='text-rose-500 font-medium text-sm mb-2'>ОТЗЫВЫ</p>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900'>
                      Что <span className='text-rose-500'>говорят</span> клиенты
                    </h2>
                  </div>
              </motion.div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {reviews.map((review, index) => (
                  <motion.div
                      key={review.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1,ease: "backOut"  // легкий пружинистый эффект
                    }}
                      >
                  <div className='bg-white rounded-3xl h-80 p-6 md:p-8 border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex gap-1 mb-4'>
                      {[...Array(review.rating)].map((_, i) => (
                        <FiStar key={i} className='w-4 h-4 text-amber-400 fill-amber-400' />
                      ))}
                    </div>
                    <p className='text-gray-600 text-sm leading-relaxed mb-6'>
                      "{review.text}"
                    </p>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-xl'>
                        <FaUserCircle className="w-10 h-10 text-gray-400" />
                      </div>
                      <span className='text-gray-900 font-medium text-sm'>{review.name}</span>
                    </div>
                  </div>
                </motion.div>))}
              </div>
            </div>
          </section>
  )
}

export default Comment
