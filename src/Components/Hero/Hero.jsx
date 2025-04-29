import React from 'react'
import hero from '/assets/hero/hero.png'

const Hero = () => {
  return (
    <div className='container p-6'>
        <div className='grid grid-cols-1 min-md:grid-cols-2 items-center'>
            <div>
                <h2 className='text-6xl !font-mydisplay mb-4 min-lg:w-100'>Discover and Find Your Own Fashion!</h2>
                <p className='mb-4 text-[var(--gray-color)]'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                <button className='bg-black text-white px-10 py-3 rounded-2xl cursor-pointer hover:bg-white hover:text-black hover:border duration-200 outline-0'>Explore Now</button>
            </div>
            <div className='mt-10 min-sm:mt-10 min-md:mt-0'>
                <img src={hero} alt="" className='m-auto' />
            </div>
        </div>
    </div>
  )
}

export default Hero