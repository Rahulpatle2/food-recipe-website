import React, { createContext, useState } from 'react'
import { set } from 'react-hook-form';


export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data,setdata,fav,setfav] = useState(JSON.parse(localStorage.getItem("recipe")) || []);
    const [toggle, setToggle] = useState(false)
  
  return (
    <recipecontext.Provider value={{data,setdata,fav,setfav,toggle,setToggle}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext