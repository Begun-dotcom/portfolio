import React from 'react'
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiMenu, FiX, FiStar, FiChevronRight, FiClock } from 'react-icons/fi';

function Comment() {
    const reviews = [
    { name: 'Александра', text: 'Всё выполнено в срок, мастера — профессионалы. Очень довольна результатом!', rating: 5, avatar: '👩🏻' },
    { name: 'Диана', text: 'Приятно удивлена уровнем сервиса. Спасибо большое, буду рекомендовать!', rating: 5, avatar: '👩🏼' },
    { name: 'Марина', text: 'Хожу только сюда уже год. Качество всегда на высоте, ресницы держатся 4 недели!', rating: 5, avatar: '👩🏽' },
    { name: 'Екатерина', text: 'Делала голливудский объем на свадьбу — все гости были в восторге!', rating: 5, avatar: '👩🏻‍🦰' },
  ];
  return (
    <section id="reviews" className='py-20 md:py-28 bg-[#faf8f7]'>
            <div className='max-w-[1800px] mx-auto px-6 lg:px-10'>
              <div className='text-center mb-12'>
                <p className='text-rose-500 font-medium text-sm mb-2'>ОТЗЫВЫ</p>
                <h2 className='text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4'>
                  Отзывы клиентов
                </h2>
              </div>
    
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                {reviews.map(review => (
                  <div key={review.name} 
                       className='bg-white rounded-3xl p-6 border border-gray-100 hover:border-rose-200 transition-all duration-300 hover:-translate-y-1'>
                    <div className='flex gap-1 mb-4'>
                      {[...Array(review.rating)].map((_, i) => (
                        <FiStar key={i} className='w-4 h-4 text-amber-400 fill-amber-400' />
                      ))}
                    </div>
                    <p className='text-gray-600 text-sm leading-relaxed mb-6'>"{review.text}"</p>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-xl'>
                        {review.avatar}
                      </div>
                      <span className='text-gray-900 font-medium text-sm'>{review.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Comment
