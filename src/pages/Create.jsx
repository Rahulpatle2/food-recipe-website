import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'


const Create = () => {

  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset

  } = useForm()

  const SubmitHandler = (recipe) => { 
    recipe.id = nanoid(); 
    const copyData = [...data];
    copyData.push(recipe);
    setdata(copyData)
    toast.success('new recipe created successfully')
    reset();
    navigate('/recipes');
  }

  // console.log(SubmitHandler);
  // console.log(data);
  return (
    <div className='w-screen flex items-center justify-center'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col  gap-7 border p-12 lg:w-1/3 rounded shadow mt-5'>
        <h1 className='text-center text-3xl font-black pb-5'>Create Your Recipe</h1>

        <input type="text"
          placeholder='image url '
          {...register('image')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' />

        <input type="text"
          placeholder='tittle '
          {...register('tittle')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

        <input type="text"
          placeholder='chef'
          {...register('chef')}
          className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' />

        <textarea name="inst" placeholder='recipe instructions' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600'{...register('inst')}  ></textarea>
        <textarea name="ing" placeholder='recipe ingredients' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('ing')} ></textarea>
        <textarea name="desc" placeholder='description' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('desc')} ></textarea>

        <select name="category" className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' {...register('category')} >
          <option value="1st meal">breakfast</option>
          <option value="2nd meal">Lunch</option>
          <option value="3rd meal">Dinner</option>
        </select>


        <button className='px-3 py-1 bg-green-500 text-white rounded text-center hover:outline hover:outline-green-500 hover:text-green-500 hover:bg-white cursor-pointer'>create</button>

      </form>
    </div>
  )
}

export default Create