import { useState, useEffect } from 'react';
import { FiPhone, FiMapPin, FiMail, FiInstagram, FiMenu, FiX, FiStar, FiChevronRight, FiClock } from 'react-icons/fi';
import NavBar from '../components/Lashes/NavBar';
import Hero from '../components/Lashes/Hero';
import Catalog from '../components/Lashes/Catalog';
import About from '../components/Lashes/About';
import Workers from '../components/Lashes/Workers';
import Comment from '../components/Lashes/Comment';
import Contact from '../components/Lashes/Contact';
import Footer from '../components/Lashes/Footer';

function Lashes() {
  
  

  

  
    return (
    <div className='min-h-screen bg-[#faf8f7] text-gray-900 font-sans'>
      <header>
        <NavBar/>
      </header>
      
      <main >
        
            <Hero />
          <Catalog/>
          <About/>
          <Workers/>
          <Comment/>
          <Contact/>
          
       
        <a 
        href="tel:8-952-891-73-21" 
        className="fixed bottom-10 right-10 z-100 group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-3.5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Иконка телефона */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="hidden md:inline">8-952-891-73-21</span>
      </a>
        
      </main>
      
      <footer className='border-t border-white/10'>
        <Footer/>
      </footer>
    </div>
    
      
      
    
  );
}

export default Lashes;
