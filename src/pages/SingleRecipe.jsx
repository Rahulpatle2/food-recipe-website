import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);

 const navigate = useNavigate();

  const { id } = useParams()
  const recipe = data.find((r) => r.id === id);

  if(!recipe){
    navigate('/recipes');
  }

  // console.log(recipe);
  const {
    register,
    handleSubmit,
    reset

  } = useForm({
    defaultValues: {
      image: recipe.image,
      tittle: recipe.tittle,
      chef: recipe.chef,
      desc: recipe.desc,
      ing: recipe.ing,
      inst: recipe.inst,
      category: recipe.category,
    }
  })


  const SubmitHandler = (updateRecipe) =>{
    const index = data.findIndex((r) => r.id === id);
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...updateRecipe };
        setdata(copydata);
        localStorage.setItem("recipe", JSON.stringify(copydata));

        toast.success("recipe updated!");
     

  }

  const DeleteHandler = () =>{
    const filteredData = data.filter((recipe) =>
      recipe.id !== id
    );

    setdata(filteredData);
    localStorage.setItem("recipe", JSON.stringify(filteredData));
    reset()
    toast.success('recipe deleted successfully');

    navigate(-1);
 
  }

  console.log(data)
  return recipe ? (<div className='flex justify-center gap-72 mt-5'>
      {/* details about the recipe */}
      <div className='flex flex-col  w-1/3 ml-5 gap-5 shadow p-5 '>
        <img src={recipe.image} className='h-72 object-cover' />
        <p className='text-5xl font-black '>{recipe.tittle}</p>
        <p className='text-2xl font-bold text-red-500'>{recipe.chef}</p>

        <p>ingredients</p>
        <p>{recipe.ing}</p>
      </div>

      {/* form to update the recipe or delete also */}

      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col  gap-7 border p-12 w-1/3 rounded shadow '>
        <h1 className='text-center text-3xl font-black pb-5'>Update Your Recipe</h1>

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

        <textarea  placeholder='recipe instructions' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600'{...register('inst')}  ></textarea>
        <textarea  placeholder='recipe ingredients' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('ing')} ></textarea>
        <textarea  placeholder='description' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('desc')} ></textarea>

        <select name="category" className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600' {...register('category')} >
          <option value="1st meal">breakfast</option>
          <option value="2nd meal">Lunch</option>
          <option value="3rd meal">Dinner</option>
        </select>

       <div className='flex items-center justify-center gap-12'>
         <button className='px-3 py-1.5 text-lg cursor-pointer text-center text-white bg-green-500 rounded  hover:outline hover:text-green-500 hover:bg-white'>Update</button>
         <button onClick={DeleteHandler} className='px-3 py-1.5 text-lg cursor-pointer text-center text-white bg-red-500 rounded  hover:outline hover:text-red-500 hover:bg-white'>Delete</button>

       </div>
      </form>
    </div>) : ('...........Loading')
}

export default SingleRecipe