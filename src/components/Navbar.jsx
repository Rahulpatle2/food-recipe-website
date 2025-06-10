import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    
      <div className='flex lg:flex-row flex-col  absolute top-10 lg:bg-white lg:relative lg:top-0 lg:left-0  lg:gap-10  p-5 rounded bg-[#ebebeb] right-5 gap-5 lg:items-center lg:w-full z-50'>
        <NavLink to='/' className={(e) => e.isActive ? 'text-red-500' : ""} >Home</NavLink>
        <NavLink to='/about' className={(e) => e.isActive ? 'text-red-500' : ""} >About</NavLink>
        <NavLink to='/favorite' className={(e) => e.isActive ? 'text-red-500' : ""}>Favorite</NavLink>
        <NavLink to='/recipes' className={(e) => e.isActive ? 'text-red-500' : ""}>Recipes</NavLink>
      </div>
   
  )
}

export default Navbar