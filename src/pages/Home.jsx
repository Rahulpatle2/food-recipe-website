import React, { useContext } from 'react'
import RecipeTemplate from '../components/RecipeTemplate'
import { recipecontext } from '../context/RecipeContext'
import HomePageImage1 from '../assets/home-page-img1.avif'
import { Link } from 'react-router-dom'


const Home = () => {
  const {data} = useContext(recipecontext);

  
  return (
    <div className='flex items-center justify-center flex-col p-12 gap-7 '>
      <h1 className='text-5xl font-bold'>Your Daily Dish A <span className='text-red-500'>Food</span> Journey </h1>
      <p className='text-xl font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt hic tempore, dolor, quasi quae similique vel atque illo tempora, totam quia ducimus aut saepe sunt.</p>

      <div className='flex items-center gap-7'>
        <button className='bg-[#ebebeb] px-3 py-1.5 rounded  hover:outline-1 hover:bg-white'>Log in</button>
        <button className='bg-green-400 text-white px-3 py-1.5 rounded hover:outline-1 hover:bg-white hover:text-green-500'>Sign up</button>
      </div>

      <div className='w-96  object-fit object-cover rounded shadow '>
        <img src={HomePageImage1} alt="image1" className='rounded' />
      </div>

      <div className='flex items-center justify-center flex-col p-5 gap-7 text-center'>
        <h3 className='text-3xl font-black text-center '>Share Your recipes</h3>
        <p className='text-md text-thin  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo maiores atque corporis eum, officia quasi rem alias perspiciatis, quo harum, ea dolores? Hic.</p>
        <Link to={'/recipes/create-recipe'}>
          <button className='bg-green-400 text-white px-3 py-1.5 rounded hover:outline-1 hover:bg-white hover:text-green-500'>Create Recipe</button>
        </Link>
      </div>
    </div>
  )
}

export default Home