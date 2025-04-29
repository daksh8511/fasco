import React from 'react'

import subscribe1 from '/assets/subscribe/subscribe1.png'
import subscribe2 from '/assets/subscribe/subscribe2.png'

const Subscribe = () => {
  return (
    <div className='container p-6'>
        <div className='flex items-center'>
            <img src={subscribe2} alt="" className='hidden min-sm:hidden min-md:block min-md:w-1/4' />
            <div>
                <h2 className='!font-mydisplay text-center text-4xl mb-4'>Subscribe To Our Newsletter</h2>
                <p className='text-center mb-4 text-[var(--gray-color)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                <input type="gmail" placeholder='example@gmail.com' className='shadow-2xl w-full p-2 mb-4' />
                <button className='bg-black text-white flex m-auto px-7 py-3 rounded-2xl cursor-pointer'>Subscribe Now</button>
            </div>
            <img src={subscribe1} alt="" className='hidden min-sm:hidden min-md:block min-md:w-1/4' />
        </div>
    </div>
  )
}

export default Subscribe