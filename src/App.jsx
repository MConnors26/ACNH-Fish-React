import { useState } from 'react'
import './css/App.css'
import Home from "./pages/Home"
import FreshHome from "./pages/Freshwater.jsx"
import SaltHome from "./pages/Saltwater.jsx"
import Favorites from "./pages/Favorites.jsx"
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar.jsx'


function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Freshwater" element={<FreshHome />}></Route>
          <Route path="/Saltwater" element={<SaltHome />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
    
    
  )
}

export default App
