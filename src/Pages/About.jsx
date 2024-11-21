import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] bg-gray-100'>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas ipsam, veniam libero omnis obcaecati magnam, magni ab veritatis facere sint hic nulla. Illo quibusdam aut est, perferendis quos eos maiores. Asperiores, enim neque commodi itaque officiis nobis odit blanditiis? Pariatur commodi necessitatibus veritatis quidem. Sed architecto cum neque dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius fugiat impedit sequi sit quidem? Quae soluta eligendi aperiam eum similique nobis maxime error quasi facilis, nemo excepturi fugit vel eos temporibus in laboriosam explicabo.</p> 
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt in explicabo fugit illo non odio dicta placeat, odit itaque quia doloremque alias nesciunt libero!</p>
        </div>
      </div>

      <div className="text-xl py-2">
        <Title text1={'REASONS'} text2={'TO CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur doloremque voluptatum a est. Voluptatem repudiandae in eum commodi cumque minus, maiores libero sunt. Libero, nesciunt error? Tempora, totam tempore, pariatur exercitationem dolorum ut debitis magni adipisci ducimus, expedita accusamus!</p>
        </div>
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur doloremque voluptatum a est. Voluptatem repudiandae in eum commodi cumque minus, maiores libero sunt. Libero, nesciunt error? Tempora, totam tempore, pariatur exercitationem dolorum ut debitis magni adipisci ducimus, expedita accusamus!</p>
        </div>
        <div className="border px-10 md:p-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum pariatur doloremque voluptatum a est. Voluptatem repudiandae in eum commodi cumque minus, maiores libero sunt. Libero, nesciunt error? Tempora, totam tempore, pariatur exercitationem dolorum ut debitis magni adipisci ducimus, expedita accusamus!</p>
        </div>

      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About