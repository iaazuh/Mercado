import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] bg-gray-100'>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <div  className="flex flex-col justify-center items-start gap-6">
        <img className='w-full md:max-w-[480px]'  src={assets.contact_img} alt="" />
        
        <Link className='text-blue-500' to={'#'}><p>Get full directions here</p></Link>
        </div>
        
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>1124 humphery Bulevard <br /> Upper East Side <br />New York</p>
          <p className='text-gray-500'>Tel: 555-5555 <br />Email: info@mercado.com</p>
          <p className='font-semibold text-xl text-gray-600'>Join the Mercado Team</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>View Vacancies</button>
        </div>
      </div>
      <h1>Replace the newsletter with email js form</h1>
      <NewsLetterBox />
    </div>
  )
}

export default Contact