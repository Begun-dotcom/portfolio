import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiClock, FiX, FiCalendar, FiUser, FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';

function Catalog() {
  const [activeModal, setActiveModal] = useState(null);
  const [formStatus, setFormStatus] = useState('idle'); // idle, success
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    { 
      id: 1, 
      name: 'Неполный объем', 
      price: 1500, 
      desc: 'Естественный изгиб ресниц, эффект туши. Идеально для повседневного образа.',
      image: '/1_res.jpg',
      badge: 'Популярно',
      duration: '1.5 часа',
      color: 'from-rose-100 to-orange-50'
    },
    { 
      id: 2, 
      name: 'Один объем', 
      price: 1700, 
      desc: 'Классическое наращивание. Одна искусственная ресница на одну натуральную.',
      image: '✨',
      duration: '1.5 часа',
      color: 'from-purple-100 to-pink-50'
    },
    { 
      id: 3, 
      name: 'Двойной объем', 
      price: 1900, 
      desc: 'Две искусственные ресницы на одну натуральную. Выразительный взгляд.',
      image: '💫',
      badge: 'Хит',
      duration: '2 часа',
      color: 'from-rose-100 to-red-50'
    },
    { 
      id: 4, 
      name: 'Тройной объем', 
      price: 2100, 
      desc: 'Максимальная пышность и объём. Для особых случаев и фотосессий.',
      image: '🌟',
      duration: '2.5 часа',
      color: 'from-amber-100 to-yellow-50'
    },
    { 
      id: 5, 
      name: 'Голливудский объем', 
      price: 2300, 
      desc: 'Премиум-эффект звёздной дорожки. Шикарный объём для вашего образа.',
      image: '👑',
      badge: 'Премиум',
      duration: '3 часа',
      color: 'from-pink-200 to-rose-100'
    },
    { 
      id: 6, 
      name: 'Естественный объем', 
      price: 2500, 
      desc: 'Максимально натуральный результат. Никто не догадается что это наращивание.',
      image: '🌸',
      duration: '2 часа',
      color: 'from-teal-100 to-emerald-50'
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => {
      setActiveModal(null);
      setFormStatus('idle');
    }, 1500);
  };

  // Варианты анимаций для карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} id="services" className='py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/30'>
      <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
        
        {/* Заголовок с анимацией */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <div className='inline-block mb-3'>
            <span className='px-4 py-1 bg-rose-100 text-rose-500 rounded-full text-sm font-medium tracking-wide'>
              НАШИ УСЛУГИ
            </span>
          </div>
          <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4'>
            Наращивание ресниц
          </h2>
          <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
            Выберите идеальный объём для своего взгляда
          </p>
        </motion.div>

        {/* Сетка услуг */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {services.map((service, index) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: "backOut" }}
                >
                    <div className='group bg-white rounded-2xl border border-gray-100 hover:border-rose-200 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-rose-950/70 h-full flex flex-col'>
                    
                    {/* Верхняя часть с фото */}
                    <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${service.color}`}>
                        <motion.img 
                        src={service.image} 
                        alt={service.name}
                        className='w-full h-full object-cover'
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.3 }}
                        />
                        
                        {service.badge && (
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10 ${
                            service.badge === 'Хит' ? 'bg-amber-500 text-white' :
                            service.badge === 'Премиум' ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white' :
                            'bg-rose-500 text-white'
                            }`}
                        >
                                        🔥 {service.badge}
                                    </motion.span>
                                    )}
                                    
                                    <div className='absolute bottom-3 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-gray-600 text-xs font-medium shadow-sm z-10'>
                                    <FiClock className='w-3 h-3 text-rose-400' />
                                    {service.duration}
                                    </div>
                                </div>
                                
                                {/* Нижняя часть с информацией */}
                                <div className='p-4 flex flex-col flex-grow'>
                                    <h3 className='text-gray-900 font-bold text-xl mb-2 group-hover:text-rose-500 transition-colors'>
                                    {service.name}
                                    </h3>
                                    <p className='text-gray-400 text-sm mb-4 leading-relaxed flex-grow'>
                                    {service.desc}
                                    </p>
                                    
                                    <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
                                    <div>
                                        
                                        <span className='text-rose-950/70 font-bold text-2xl block'>
                                        {service.price.toLocaleString()} ₽
                                        </span>
                                    </div>
                                    
                                    <motion.button 
                                        onClick={() => setActiveModal(service)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='px-5 py-2.5 bg-gray-900 hover:bg-rose-500 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-rose-500/25'
                                    >
                                        Записаться
                                    </motion.button>
                                    </div>
                                </div>
                                </div>
                            </motion.div>
            ))}
        </div>
      </div>

      {/* Модальное окно с анимацией */}
      {activeModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4'
          onClick={() => setActiveModal(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className='bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden'
            onClick={e => e.stopPropagation()}
          >
            {/* Шапка модалки */}
            <div className='relative bg-gradient-to-r from-rose-500 to-rose-400 px-6 py-6 text-white'>
              <button 
                onClick={() => setActiveModal(null)} 
                className='absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors backdrop-blur-sm'
              >
                <FiX className='w-5 h-5' />
              </button>
              <div className='flex items-center gap-3'>
                <span className='text-4xl'>{activeModal.image}</span>
                <div>
                  <h3 className='text-xl font-bold'>Запись на процедуру</h3>
                  <p className='text-white/90 text-sm'>{activeModal.name}</p>
                </div>
              </div>
            </div>

            {/* Форма */}
            <div className='p-6'>
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className='text-center py-8'
                >
                  <FiCheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
                  <h4 className='text-xl font-bold text-gray-900 mb-2'>Заявка отправлена!</h4>
                  <p className='text-gray-500'>Мы свяжемся с вами в ближайшее время</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div className='relative'>
                    <FiUser className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <input 
                      type='text' 
                      placeholder='Ваше имя' 
                      required
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all'
                    />
                  </div>
                  <div className='relative'>
                    <FiMail className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <input 
                      type='email' 
                      placeholder='E-mail' 
                      required
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all'
                    />
                  </div>
                  <div className='relative'>
                    <FiPhone className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <input 
                      type='tel' 
                      placeholder='+7 (___) ___-__-__' 
                      required
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all'
                    />
                  </div>
                  <div className='relative'>
                    <FiCalendar className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                    <input 
                      type='datetime-local' 
                      className='w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100 transition-all'
                    />
                  </div>
                  
                  <motion.button 
                    type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='w-full py-3.5 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-rose-500/25'
                  >
                    Отправить заявку
                  </motion.button>
                  
                  <p className='text-gray-400 text-xs text-center'>
                    Нажимая на кнопку, Вы принимаете условия обработки персональных данных
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Catalog;