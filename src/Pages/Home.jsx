import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetterBox from '../Components/NewsLetterBox'

const Home = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] bg-gray-100'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
