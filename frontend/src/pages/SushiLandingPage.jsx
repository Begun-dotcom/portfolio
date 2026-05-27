import React, { useState, useEffect, useRef } from 'react';
import NavComponent from '../components/Sushi/NavComponent'
import Hero from '../components/Sushi/Hero'

import Catalog from '../components/Sushi/Catalog';
import Delivery from '../components/Sushi/Delivery';
import About from '../components/Sushi/About';
import Reviews from '../components/Sushi/Reviews';
import Promo from '../components/Sushi/Promo';
import Contacts from '../components/Sushi/Contacts';
import Footer from '../components/Sushi/Footer';

function SushiLandingPage() {
  return (
    <div >
      <header >
        <NavComponent/>
      </header>
      
      <main className='bg-sushi-primary min-h-screen'>
            <Hero />
            <Catalog/>
            <Delivery/>
            <About/>
            <Reviews/>
            <Promo/>
            <Contacts/>
            <Footer/>

            
          
        
        <a 
          href="tel:8-000-000-00-00" 
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
      
      
    </div>
  )
}

export default SushiLandingPage
