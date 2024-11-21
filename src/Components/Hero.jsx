import React from 'react'
import Carousel from './carousel'


const Hero = () => {

    const slides = [
        "src/assets/Images/bt headset.PNG",
        "src/assets/Images/clipper.PNG",
        "src/assets/Images/fast charger.PNG",
        "src/assets/Images/smart watch.PNG",
    ]
  return (
    <div className='flex flex-col sm:flex-row  bg-gradient-to-b from-yellow-200 ...'>
        {/* Hero Left */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className="flex item-center gap-2">
                    <p className='font-medium text-sm md:text-base'>Get the best Deals on our</p>
                </div>
                <h1 className='text-2xl sm:py-3 lg:text-4xl leading relaxed'>Newest Arrivals</h1>
                <div className="flex item-center gap-2">
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                </div>
            </div>
        </div>
        {/* Hero Right */}
        <div className='max-w-lg flex flex-col'>
            <Carousel autoSlide={true}>
                {slides.map((s) =>(
                    <img src={s}  />
                ))}
            </Carousel>
        </div>
        
    </div>
  )
}

export default Hero