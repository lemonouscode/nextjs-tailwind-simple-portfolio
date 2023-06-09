'use client';
import React from 'react'
import Image from 'next/image';
  
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

function Services() {
  return (
    <section className='px-10'>
        <div>
          <h3 className='text-3xl py-1' >Services I offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500 dark:text-white"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500/40'>
            <Image className='mx-auto' src={design} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='text-teal-600 py-4'>Design Tools I Use:</h4>
            <div className='text-gray-800 py-1 dark:text-white'>Photoshop</div>
            <div className='text-gray-800 py-1 dark:text-white'>Illustrator</div>
            <div className='text-gray-800 py-1 dark:text-white'>Figma</div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500/40'>
            <Image className='mx-auto' src={consulting} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='text-teal-600 py-4'>Design Tools I Use:</h4>
            <div className='text-gray-800 py-1 dark:text-white'>Photoshop</div>
            <div className='text-gray-800 py-1 dark:text-white'>Illustrator</div>
            <div className='text-gray-800 py-1 dark:text-white'>Figma</div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-teal-500/40'>
            <Image className='mx-auto' src={code} width={100} height={100} />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className='text-teal-600 py-4'>Design Tools I Use:</h4>
            <div className='text-gray-800 py-1 dark:text-white'>Photoshop</div>
            <div className='text-gray-800 py-1 dark:text-white'>Illustrator</div>
            <div className='text-gray-800 py-1 dark:text-white'>Figma</div>
          </div>
        </div>
      </section>
  )
}

export default Services