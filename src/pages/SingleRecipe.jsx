import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const SingleRecipe = () => {
  const { data, setdata, fav, setfav } = useContext(recipecontext);
  const navigate = useNavigate();

  const { id } = useParams()
  const recipe = data.find((r) => r.id == id);

  // if (!recipe) {
  //   navigate('/recipes');
  // }

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


  const SubmitHandler = (updateRecipe) => {
    const index = data.findIndex((r) => r.id === id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updateRecipe };
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));

    toast.success("recipe updated!");


  }

  
  

  

  

  // if(recipe.id !== id){
  //   const newData = fav.filter((r) =>
  //     r.id !== id
  //   );

  //   setfav(newData);

  // }

  const FavHandler = () => {
    const copyFav = [...fav];
    copyFav.push(recipe);
    setfav(copyFav);
    localStorage.setItem("fav", JSON.stringify(copyFav));
    toast.success("Added to Favorite!");
  }

  const UnFavHandler = () => {
    const favfilter = fav.filter((f) => f.id !== id);
    setfav(favfilter);
    localStorage.setItem("fav", JSON.stringify(favfilter));

    toast.error("Removed from Favroite!");
  };

  // const favDeleteHandler = () =>{
  //       const filteredFav = fav.filter((f) =>
  //           f.id !== id;
  //       )

  //       setfav(filteredFav);
  //        localStorage.setItem('fav',JSON.stringify(filteredFav));

  //   }

  const DeleteHandler = () => {

    const filteredData = data.filter((r) => r.id !== id);
    const filteredFav = fav.filter((f) => f.id !== id);

    setdata(filteredData);
    setfav(filteredFav);

    localStorage.setItem("recipe", JSON.stringify(filteredData));
    localStorage.setItem("fav", JSON.stringify(filteredFav));


    reset();
    toast.success('Recipe deleted successfully');
    navigate('/recipes');
};

  console.log(fav)

 
// const checkFav = fav.find((f) => (
//   f.id === id
// ))

// if(!checkFav){
//   console.log('sorry error hai');
// }




  console.log(data)
  return recipe ? (<div className='flex flex-col lg:flex-row justify-center lg:gap-72 mt-5'>
    {/* details about the recipe */}
    <div className='flex flex-col  lg:w-1/3 ml-5 gap-5 shadow p-5 relative'>
      {fav.find((f) =>
        f.id === id
      ) ? (
         <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={UnFavHandler}
      viewBox="0 0 24 24"
      className={'w-6 h-6 transition-all duration-300 text-red-500 scale-110'}
      fill={"none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
      ) : (
         <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={FavHandler}
      viewBox="0 0 24 24"
      className={'w-6 h-6 transition-all duration-300  text-gray-400 hover:text-red-300'}
      fill= "currentColor" 
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
      )}
      <img src={recipe.image} className='h-72 object-cover' />
      <p className='text-5xl font-black '>{recipe.tittle}</p>
      <p className='text-2xl font-bold text-red-500'>{recipe.chef}</p>

      <p>ingredients</p>
      <p>{recipe.ing}</p>
    </div>

    {/* form to update the recipe or delete also */}

    <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col m-8  gap-7 border p-12 lg:w-1/3 rounded shadow '>
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

      <textarea placeholder='recipe instructions' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600'{...register('inst')}  ></textarea>
      <textarea placeholder='recipe ingredients' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('ing')} ></textarea>
      <textarea placeholder='description' className='outline-none  rounded border border-blue-500  px-1 py-1.5 focus:shadow focus:shadow-orange-600 ' {...register('desc')} ></textarea>

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