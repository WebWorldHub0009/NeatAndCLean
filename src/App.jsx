import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ModernNavbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import FloatingButtons from './components/FloatingButtons'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <ModernNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App