import React from 'react'

import delivery from '/assets/features/delivery.png'
import phone from '/assets/features/phone.png'
import quality from '/assets/features/quality.png'
import verified from '/assets/features/verified.png'

const Features = () => {
  return (
    <div className='container p-6'>
        <div className='grid min-sm:grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 space-y-10'>
            <div className='flex items-center gap-3'>
                <img src={quality} alt="quality" className='m-auto mb-2 min-sm:m-auto min-md:m-0' />
                <div className='text-center min-sm:text-center min-md:text-left'>
                    <h2>High Quality</h2>
                    <h4>Crafted from top materials</h4>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={verified} alt="verified" className='m-auto mb-2 min-sm:m-auto min-md:m-0' />
                <div className='text-center min-sm:text-center min-md:text-left'>
                    <h2>Warrenty Protection</h2>
                    <h4>Over 2 years</h4>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={delivery} alt="delivery" className='m-auto mb-2 min-sm:m-auto min-md:m-0' />
                <div className='text-center min-sm:text-center min-md:text-left'>
                    <h2>Free Shipping</h2>
                    <h4>Ordered over 150</h4>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <img src={phone} alt="phone" className='m-auto mb-2 min-sm:m-auto min-md:m-0' />
                <div className='text-center min-sm:text-center min-md:text-left'>
                    <h2>24 / 7 support</h2>
                    <h4>Dedicated support</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features