import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { ShopContext } from '../Context/ShopContext'


const PlaceOrder = () => {

  const [method, setMethod] = useState('cod')

  const { navigate } = useContext(ShopContext)

  return (
    <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw] bg-gray-100 flex flex-col sm:flex-row justify-between gap-4 pt sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Recipients name'/>
        </div>
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="email" placeholder='Email Address'/>
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Address'/>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='State'/>
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1 px-3 w-full' type="text" placeholder='Phone Number'/>
      </div>

      {/* Right side */}
      <div className="mt-8 ml-12">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>

        {/* payment method */}
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHODS'}/>



          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('apple')} className="flex item-center gap-3 border p-2 px-3 rounded-full cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'apple' ? 'bg-green-500' : '' }`}></p>
                <img
                  className=" h-5 flex-shrink-0 items-center transform hover:scale-110 transition-all duration:500 relative"
                  src='src\assets\Images\apple_pay-removebg-preview.png'
                  alt=""/>
            </div>
            <div onClick={()=>setMethod('inter')} className="flex item-center gap-3 border p-2 px-3 rounded-full cursor-pointer">        
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'inter' ? 'bg-green-500' : '' }`}></p>
                <img
                  className="h-8  flex-shrink-0 items-center transform hover:scale-110 transition-all duration:500 relative"
                  src='src\assets\Images\interswitch-removebg-preview.png'
                  alt=""/>
            </div>
            <div onClick={()=>setMethod('master')} className="flex item-center gap-3 border p-2 px-3 rounded-full cursor-pointer">          
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'master' ? 'bg-green-500' : '' }`}></p>
                <img
                  className=" h-5 flex-shrink-0 items-center  transform hover:scale-110 transition-all duration:500 relative"
                  src='src\assets\Images\master_card-removebg-preview.png'
                  alt=""/>
            </div>
            <div onClick={()=>setMethod('paypal')} className="flex item-center gap-3 border p-2 px-3 rounded-full cursor-pointer">              
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-500' : '' }`}></p>
                <img
                  className=" h-5 flex-shrink-0 items-center  transform hover:scale-110 transition-all duration:500 relative"
                  src='src\assets\Images\paypal-removebg-preview.png'
                  alt=""/>  
            </div>
            <div onClick={()=>setMethod('cod')} className="flex item-center gap-3 border p-2 px-3 rounded-full cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-500' : '' }`}></p>
              <p className='text-gray-500 text-xs font-medium mx-2'>CASH ON DELIVERY</p>  
            </div>

          </div>

          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className='bg-black hover:bg-gray-700 rounded-full text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceOrder