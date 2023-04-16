'use client';
import React from 'react'
import { useState } from 'react';

// Components
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function Home() {

  const [darkMode,setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark' : ""}>
        <div className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
            <Hero handleDarkMode={handleDarkMode} />
            <Services />
            <Portfolio />
            <Footer />
        </div>
      </div>
  )
}

export default Home