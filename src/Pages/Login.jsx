import React, { useState } from 'react'

const Login = () => {

  const [currentState,setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async (event) => {
      event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col item-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 pb-10'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className='font-prata-regular text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input className='w-full px-3 py-2 border-b border-gray-800 bg-white' type="text" placeholder='Name' required/>}
      <input className='w-full px-3 py-2 border-b border-gray-800 bg-white' type="email" placeholder='Email Address' required/>
      <input className='w-full px-3 py-2 border-b border-gray-800 bg-white' type="password" placeholder='Password' required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className='cursor-pointer pt-4'>Forgot Password?</p>
        {
          currentState === 'Login' 
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer  pt-4'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer  pt-4'>Already have an Account?</p>
        }
      </div>
      <button className='bg-black hover:bg-gray-600 text-white font-light px-8 py-2 mt-4 rounded-full'>{currentState === 'Login' ? 'Sign In' : 'Sign Up' }</button>
    </form>
  )
}

export default Login