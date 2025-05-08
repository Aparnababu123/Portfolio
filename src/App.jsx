import React, { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Project from './components/sections/Project'
import Contact from './components/sections/Contact'
import './index.css'
const App = () => {
  const [isloaded,setisloaded]=useState(false)
  const [menuOpen,setMenuOpen]=useState(false)
  return (
   
    <div>
      {!isloaded &&<LoadingScreen onComplete={()=>setisloaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 
        ${isloaded?'opacity-100':'opacity-0'}
        bg-black text-gray-100`} >
          {/*The main div transitions from opacity-0 to opacity-100 over 700ms (fade-in effect). */}

          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home/>
          <About/>
          <Project/>
          <Contact/>

        </div>
    </div>
  )
}

export default App
