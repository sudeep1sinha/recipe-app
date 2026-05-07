import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navBar from './components/Navbar'
import NavBar from './components/Navbar'
import SearchBar from './components/SearchBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {

  
  

  return (
    <>
    
  <Routes>
   
    <Route path="/recipe/:id" element={<RecipeDetailPage />} />
  </Routes>

     <NavBar />
      <SearchBar />
      </>
  )
}

export default App
