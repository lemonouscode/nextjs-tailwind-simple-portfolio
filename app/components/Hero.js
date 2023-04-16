'use client';
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
import deved from '../../public/dev-ed-wave.png';
import Image from 'next/image';


function Hero({handleDarkMode}) {
  return (
    <section className='min-h-screen '>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>developedbylemon</h1>
          <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill onClick={handleDarkMode} className='cursor-pointer text-xl'/>
            </li>
            <li>
              <a href="#" className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Resume</a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Dimitri Marco
            </h2>
            <h3 className="text-2xl p-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto text-center dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
          <AiFillTwitterCircle/>
          <AiFillLinkedin/>
          <AiFillYoutube/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <Image src={deved} fill style={{ objectFit:'cover' }} />
        </div>
      </section>
  )
}

export default Hero