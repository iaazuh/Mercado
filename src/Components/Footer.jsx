import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 p-3 text-sm">
            <div>
                <img className='w-32 mb-5 pl-10' src="src\assets\Images\logo2-removebg-preview.png" alt="" />
                <div className="grid grid-cols-3 gap-15 w-full md:w-2/3">
                
                <ul className='flex flex-col gap-2 text-gray-600'>
                <h4 className='text-l bold font-medium text-gray-800'>NEED HELP?</h4>
                  <li>Contact Center</li>
                  <li>Chat With us</li>
                  <li>Service Center</li>
                  <li>How to shop with Mercado</li>
                  <li>Delivery and return policies</li>
                  <li>Returns or Refunds processes</li>
                  <li>Report a Product</li> 
                  <li>Discount Policies</li> 
                </ul>

                <ul className='flex flex-col gap-1 text-gray-600'>
                <h4 className='text-l bold font-medium text-gray-800'>COLLABORATE WITH US</h4>
                  <li>Paid partnerships</li>
                  <li>Mercado Careers</li>
                  <li>Corporate or Bulk purchases</li>
                </ul>

                <ul className='flex flex-col gap-1 text-gray-600 pl-8 m-0'>
                <h4 className='text-l bold font-medium text-gray-800'>MERCADO INTERNATIONAL</h4>
                <p className='text-gray-600'>Our International locations are </p>
                  <li>Accra</li>
                  <li>Benin us</li>
                  <li>Cairo</li>
                  <li>Canada</li>
                  <li>Uk</li>
                </ul>
                </div>
            </div>

            <div>
              <p className="text-xl font-medium mb-5">
                COMPANY
              </p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>

            <div>
              <p className='text-xl font-medium mb-5'> GET IN TOUCH </p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+555-5555</li>
                <li>info@mercado.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr />
          <p className='text-center text-sm py-5'>
            Copyright &copy; mercado 2024 All Rights Reserved
          </p>
        </div>   
    </div>
  )
}

export default Footer