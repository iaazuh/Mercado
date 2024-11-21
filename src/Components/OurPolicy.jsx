import React from 'react'


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 px-40 text-xs sm:text-xs md:text-base text-gray-700 bg-yellow-100'>
        <div>
            <img className='w-12 m-auto mb-5' src="src\assets\Images\exchange_icon.png" alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We have a hassle free exchange policy</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src="src\assets\Images\quality_icon.png" alt="" />
            <p className='font-semibold'>7 Day return Policy</p>
            <p className='text-gray-400'>We have a 7 day return policy at no cost to our customers</p>
        </div>

        <div>
            <img className='w-12 m-auto mb-5' src="src\assets\Images\support_img.png" alt="" />
            <p className='font-semibold'>Round The Clock Customer Support</p>
            <p className='text-gray-400'>We provide 24hr customer support</p>
        </div>  
    </div>
  )
}

export default OurPolicy