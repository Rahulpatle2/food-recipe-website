import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Recipes from '../pages/Recipes'
import Update from '../pages/Update'
import Favroite from '../pages/Favroite'
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound';
import SingleRecipe from '../pages/SingleRecipe'



const MainRoutes = () => {
  return (

    <>
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/recipes' element={<Recipes />} ></Route>
        <Route path='/recipes/create-recipe' element={<Create/>} ></Route>
        <Route path='/recipes/update-recipe/:id' element={<Update/>} ></Route>
         <Route path='/recipes/details/:id' element ={<SingleRecipe/>}></Route>
        <Route path='/favorite' element={<Favroite/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='*' element={<PageNotFound/>} ></Route>
    </Routes>
    </>
  )
}

export default MainRoutes