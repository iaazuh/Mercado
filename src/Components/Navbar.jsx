import React, {useContext, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext)

  return (
    <div className='flex item-center justify-between py-3 px-20 font-medium'>
      
      <Link to='/'><img src="src\assets\Images\logo2-removebg-preview.png" className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-500 '>
        <NavLink className='flex flex-col items-center gap-1 px-1 hover:text-black' to="/">
          <p>Home</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1 px-1 hover:text-black' to="/collection">
          <p>Collection</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1 px-1 hover:text-black' to="/about">
          <p>About</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink className='flex flex-col items-center gap-1 hover:text-black' to="/contact">
          <p>Contact</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex item-center gap-6'>
        <img onClick={()=>setShowSearch(true)} className='w-auto h-5 pl-2 cursor-pointer' src="src\assets\Images\searcher-removebg-preview.png" alt="" />        
        <div className='group relative'>
          <Link to={'/login'}><img className='w-auto h-5 cursor-pointer' src="src\assets\Images\user-removebg-preview.png" alt="" /></Link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 z-50 pt-4' >
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Sign Out</p>
            </div>
          </div>
        </div>
        <NavLink to='/cart' className='relative  pr-5'>
          <img className='w-8 min-w-8' src="src\assets\Images\cart-removebg-preview.png" alt="" />
          <p className='absolute bottom-[1px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </NavLink>

        <img onClick={()=>setVisible(true)} className='w-auto h-6 cursor-pointer sm:hidden pr-5' src="src\assets\Images\menu-removebg-preview.png" alt="" />
      </div>
      {/* sidebar */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'} `}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=> setVisible(false)} className='flex item-center gap-4 p-3 cursor-pointer '>
            <img className='h-4 pt-1' src="src\assets\Images\back-removebg-preview.png" alt="" />
            <p className='text-black'>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-black' to="/">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-black' to="/collection">Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-black' to="/about">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border hover:text-black' to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar