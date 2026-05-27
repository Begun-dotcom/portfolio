import React from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Lashes from './pages/Lashes'
import Shop from './pages/Shop'
import SushiLandingPage from './pages/SushiLandingPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects/shop" element={<Shop/>} />
            <Route path="/projects/lashes" element={<Lashes/>} />
            <Route path="/projects/sushi" element={<SushiLandingPage/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers
