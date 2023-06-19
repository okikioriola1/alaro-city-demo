import { useState } from 'react'
import Navbar from "./scenes/navbar";
import Home from './scenes/home'

import {  Route, Routes } from 'react-router-dom'
import Electricity from './scenes/electricity';
import Water from './scenes/water';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");


  return (
    <>
  
       <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
       <Routes>
       <Route path="/" element={<Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}/>
      
       
       <Route path="/electricity" element ={<Electricity/>}/>
       <Route path="/water" element ={<Water/>}/>
       </Routes>

       
    </>
  )
}

export default App
