import React from 'react'
import { Link } from 'react-router-dom'

const NewsLetterBox = () => {

    const onSubmitHandler =(event) => {
        event.preventDefault()
    }


  return (
    <div className='text-center'>
        <p className='pt-4 text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Follow us on our socials to keep up with our trendiest arrivals 
            <div className='flex item-center justify-center gap-2 p-5'>
              <Link to='' target='blank'>
                <img
                  className="w-7 h-7 flex-shrink-0 rounded-full items-center mr-4 transform hover:scale-110 transition-all duration:1000 shadow-md relative"
                  src='src\assets\Images\facebook-fotor-bg-remover-2023060911293.png'
                  alt=""/>
              </Link>
              <Link to='' target='blank'>
                <img
                  className="w-7 h-7 flex-shrink-0 rounded-full items-center mr-4 transform hover:scale-110 transition-all duration:1000 shadow-md relative"
                  src='src\assets\Images\insta-fotor-bg-remover-20230609113246.png'
                  alt=""/>
              </Link>
              <Link to='' target='blank'>
                <img
                  className="w-7 h-7 flex-shrink-0 rounded-full items-center mr-4 transform hover:scale-110 transition-all duration:1000 shadow-md relative"
                  src='src\assets\Images\X-removebg-preview (1).png'
                  alt="" />
              </Link>
              <Link to='' target='blank'>
                <img
                  className="w-8 h-7 flex-shrink-0 rounded-full items-center mr-4 transform hover:scale-110 transition-all duration:1000 shadow-md relative"
                  src='src\assets\Images\youtube-fotor-bg-remover-20230609113023.png'
                  alt=""/>
              </Link>
                      
            </div>
            or get notified of the latest deals when you Subscribeto out weekly newsletter
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item-center gap-3 mx-auto my-6 border pb-3 pl-3'>
            <input className='w-full rounded-l-lg sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
            <button className='bg-black hover:bg-gray-900 rounded-r-lg text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox