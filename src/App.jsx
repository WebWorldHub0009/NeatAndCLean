import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ModernNavbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'
import About from './pages/About'
import Contact from './pages/Contact'
import WaterTank from './pages/WaterTank'
import WaterDetail from './pages/WaterDetail'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Product from './pages/Product'
import Certificate from './pages/Certificate'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <ModernNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
        <Route path='/certificates' element={<Certificate/>}/>
      <Route path='/watertank' element={<WaterTank/>}/>
      <Route path='/watertank/:slug' element={<WaterDetail/>}/>
        <Route path='/services' element={<Services/>}/>
         <Route path='/services/:slug' element={<ServiceDetail/>}/>
          <Route path='/product' element={<Product/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App