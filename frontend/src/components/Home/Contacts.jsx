import { FiMail, FiGithub, FiSend } from 'react-icons/fi';

function Contacts() {
  const contacts = [
    {
      icon: <FiMail className='w-5 h-5' />,
      label: 'Email',
      value: 'Sorokin88.dev@yandex.ru',
      href: 'mailto:Sorokin88.dev@yandex.ru',
    },
    {
      icon: <FiGithub className='w-5 h-5' />,
      label: 'GitHub',
      value: 'github.com',
      href: 'https://github.com/твой-логин',
    },
    {
      icon: <FiSend className='w-5 h-5' />,
      label: 'Max',
      value: 'max.ru',
      href: 'https://max.ru/u/f9LHodD0cOLr9D1f4YakufZQWY52Qf4O8fYQfDnSxEXMfjThBowa7sDIXTQ',
    },
  ];

  return (
    <section id="contacts" className='py-20 md:py-28 relative'>
      <div 
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)',
          backgroundSize: '15px 15px'
        }}
      />

      <div className='relative z-10 max-w-425 mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Связаться <span className='text-amber-500'>со мной</span>
          </h2>
          <p className='text-gray-400 text-base max-w-xl mx-auto'>
            Открыт для новых проектов и предложений
          </p>
        </div>

        {/* Карточки контактов */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-425 mx-auto mb-12'>
          {contacts.map(contact => (
            <a 
            key={contact.label}
            href={contact.href}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 text-center group hover:-translate-y-1 hover:scale-105 block h-[240px]'
          >
            <div className='flex flex-col items-center justify-center h-full'>
              <div className='w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-3 text-amber-500 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300'>
                {contact.icon}
              </div>
              <h3 className='text-white text-sm font-medium mb-1'>{contact.label}</h3>
              <p className='text-gray-400 text-xs break-all group-hover:text-amber-400 transition-colors'>
                {contact.value}
              </p>
            </div>
          </a>
          ))}
        </div>

        {/* CTA */}
        <div className='bg-amber-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center max-w-xl mx-auto'>
          <h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
            Есть проект?
          </h3>
          <p className='text-gray-300 text-sm mb-6'>
            Напишите или позвоните — обсудим сроки и стоимость
          </p>
          <div className='flex flex-col sm:flex-row gap-3 justify-center'>
            <a 
              href='https://max.ru/u/f9LHodD0cOLr9D1f4YakufZQWY52Qf4O8fYQfDnSxEXMfjThBowa7sDIXTQ'
              className='inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25'
            >
              <FiMail className='w-5 h-5' />
              Написать в MAX
            </a>
            <a 
              href='tel:89528917321'
              className='inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
              </svg>
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;