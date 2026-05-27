import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    { name: 'React', icon: '⚛️', level: 'Основной' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Основной' },
    { name: 'JavaScript', icon: '📜', level: 'Основной' },
    { name: 'Python', icon: '🐍', level: 'Основной' },
    { name: 'FastAPI', icon: '🚀', level: 'Основной' },
    { name: 'SQLAlchemy', icon: '🗄️', level: 'Базовый' },
    { name: 'Docker', icon: '🐳', level: 'Базовый' },
    { name: 'Nginx', icon: '🔧', level: 'Базовый' },
    { name: 'Ubuntu', icon: '🐧', level: 'Базовый' },
    { name: 'Git', icon: '📦', level: 'Основной' },
  ];

  return (
    <section ref={ref} id="skills" className='py-20 md:py-28 relative'>
      <div 
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)',
          backgroundSize: '15px 15px'
        }}
      />

      <div className='relative z-10 w-full px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Мой <span className='text-amber-500'>стек</span>
          </h2>
          <p className='text-gray-400 text-base max-w-xl mx-auto'>
            Технологии с которыми работаю каждый день
          </p>
        </motion.div>

        <div className='max-w-425 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5'>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className='bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 text-center group hover:-translate-y-1'
            >
              <div className='text-4xl md:text-5xl mb-3'>{skill.icon}</div>
              <h3 className='text-white text-sm md:text-base font-medium group-hover:text-amber-400 transition-colors'>
                {skill.name}
              </h3>
              <span className='text-white/30 text-xs md:text-sm'>{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;