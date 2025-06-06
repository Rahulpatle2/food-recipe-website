import React from 'react'
import { recipecontext } from '../context/RecipeContext'
import hamburger from '../assets/hamburger.png'
import close from '../assets/close.png'
import { useContext } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import logo from './logo'

const NavForSmall = () => {
  const { toggle, setToggle } = useContext(recipecontext);
  console.log(toggle)
  return (
    <div className='relative w-full lg:flex '>
      <div className='text-2xl text-green-500 font-bold font-serif text-shadow-2xs p-5'>
        FoodMountain
      </div>
      <div className='w-1/2 mx-auto flex collapse lg:visible text-lg items-center justify-end'>{<Navbar />}</div>
      {toggle ? (<img src={close} onClick={() => setToggle(!toggle)} alt="Menu" className='w-5 absolute top-[23px] right-3 lg:collapse ' />) : (<img src={hamburger} onClick={() => setToggle(!toggle)} alt="Menu" className='w-5 absolute top-[23px] right-3 lg:collapse'  ></img>)}
      {toggle ? (<Navbar className='w-28 absolute top-5 right-3 lg:collapse' />) : ""}
      
      <Link to={'/recipes/create-recipe'}  className=' absolute top-5 right-5 collapse lg:visible'>
              <button className='bg-blue-500 hover:outline hover:outline-blue-500 hover:text-blue-500 cursor-pointer hover:bg-white text-white mx-2 px-2 py-1 rounded'
            >Create</button>
            </Link>
    </div>
  )
}

export default NavForSmall