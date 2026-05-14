import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home.jsx"
import RecipeDetails from "./pages/RecipeDetails.jsx"

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
      </Routes>
    </>
  )
}

export default App
