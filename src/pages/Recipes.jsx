import React, { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'
import RecipeTemplate from '../components/RecipeTemplate';
import { Link } from 'react-router-dom';


const Recipes = () => {
  const {data, setdata} = useContext(recipecontext);
  // console.log(data)
 
  const recipeRender = data.map((recipe) => 
    <RecipeTemplate key={recipe.id} recipe={recipe} />
  )

  // console.log(recipeRender);
  return (
    <div className='flex flex-wrap mx-3 gap-5' >
      
        {data.length > 0 ? recipeRender : <h1 className='text-2xl text-center mt-10'>No Recipes Found</h1>}
    
    </div>
  )
}

export default Recipes