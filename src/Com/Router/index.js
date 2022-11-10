import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../Pages/Home/index'
import Girls from '../../Pages/Girls/index'
import Roster from '../../Pages/Roster/index'
import Employment from '../../Pages/Employment/index'
import Contact from '../../Pages/Contact/index'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="girls" element={<Girls/>} />
        <Route path="roster" element={<Roster/>} />
        <Route path="employment" element={<Employment/>} />
        <Route path="contact" element={<Contact/>} />
    </Routes>
  )
}

export default Router