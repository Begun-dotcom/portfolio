import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Home/Hero'
import Skills from '../components/Home/Skills'
import Projects from '../components/Home/Projects'
import Contacts from '../components/Home/Contacts'
import Container from '../components/General/Container'

function Home() {
  return (
    <div className='bg-[#111827] min-h-screen text-white'>
      <header>
        <Navbar />
      </header>
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contacts />
        
        {/* Кнопка звонка — только на мобилке */}
        <a 
          href="tel:8-952-891-73-21" 
          className="fixed bottom-10 right-10 z-50 flex sm:hidden items-center justify-center bg-amber-500 hover:bg-amber-400 text-white rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95 w-14 h-14"
        >
          {/* Анимированная точка */}
          <span className="absolute top-2 right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          
          {/* Иконка телефона */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </main>
      
      <footer className='border-t border-white/10'>
        <div className='max-w-5xl mx-auto px-4 py-6 text-center text-white/40 text-sm'>
          © 2026 Sorokin88.dev Все права защищены.
        </div>
      </footer>
    </div>
  );
}



export default Home
