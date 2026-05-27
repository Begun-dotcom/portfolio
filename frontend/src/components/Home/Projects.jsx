import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Projects() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    { id: 1,
      title: 'Лендинг-flower shop',
      description: 'Одностраничный сайт-визитка для презентации навыков и проектов.',
      stack: ['React', 'Tailwind'],
      image: '/flower_main.jpeg',
      demo: '/projects/shop',
      github: null,
    },
    {
      id: 2,
      title: 'ProDetail',
      description: 'Интернет-магазин автозапчастей. Каталог товаров, админ-панель, деплой на сервер с Docker и Nginx, HTTPS.',
      stack: ['React', 'Tailwind', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
      image: '/service_main.webp',
      demo: '/продеталь70.рф',
      github: null, // или ссылка на GitHub
    },
    
    {
      id: 3,
      title: 'Лендинг-Lash studio',
      description: 'Одностраничный сайт-визитка для презентации навыков и проектов.',
      stack: ['React', 'Tailwind'],
      image:'/resn.jpg',
      demo: '/projects/lashes',
      github: null,
    },
    
    {
      id: 4,
      title: 'Лендинг-sushi',
      description: 'Одностраничный сайт-визитка для презентации навыков и проектов.',
      stack: ['React', 'Tailwind'],
      image: '/sushi.webp',
      demo: '/projects/sushi',
      github: null,
    },
    
    {
      id: 5,
      title: 'Лендинг-портфолио',
      description: 'Одностраничный сайт-визитка для презентации навыков и проектов.',
      stack: ['React', 'Tailwind'],
      image: '/main_page.jpeg',
      demo: '/',
      github: null,
    },
    // Добавь ещё проекты если есть
  ];

  return (
    <section ref={ref} id="projects" className='min-h-screen py-20 md:py-28 relative'>
      <div 
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)',
          backgroundSize: '15px 15px'
        }}
      />

      <div className='relative z-10 max-w-425 mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Мои <span className='text-amber-500'>проекты</span>
          </h2>
          <p className='text-gray-400 text-base max-w-xl mx-auto'>
            Что я сделал за последнее время
          </p>
        </div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: "backOut"  // легкий пружинистый эффект
            }}
            >
            <div className='bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/20 transition-all duration-300 overflow-hidden group hover:-translate-y-2'
            >
              {/* Изображение или заглушка */}
              <div className='h-48 bg-white/2 flex items-center justify-center overflow-hidden'>
                {project.image ? (
                  <img src={project.image} alt={project.title} 
                       className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                ) : (
                  <div className='text-center text-gray-600'>
                    <svg className='w-12 h-12 mx-auto mb-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} 
                            d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                    </svg>
                    <span className='text-sm'>Скоро будет скриншот</span>
                  </div>
                )}
              </div>

              {/* Контент */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed mb-4'>
                  {project.description}
                </p>

                {/* Стек */}
                <div className='flex flex-wrap gap-2 mb-5'>
                  {project.stack.map(tech => (
                    <span key={tech} 
                          className='px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-500 text-xs font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Ссылки */}
                <div className='flex gap-3'>
                  {project.demo && (
                    <a href={project.demo} target='_blank' rel='noopener noreferrer'
                       className='flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105'>
                      <FiExternalLink className='w-4 h-4' />
                      Демо
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target='_blank' rel='noopener noreferrer'
                       className='flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105'>
                      <FiGithub className='w-4 h-4' />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>))}
        </div>
      </div>
    </section>
  );
}

export default Projects;