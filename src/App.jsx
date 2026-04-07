import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import BlogDescription from './Pages/Blog-desc'
import Crops from './Pages/Crops'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ScrollToTop from './Components/Scroll'
import Testimonials from './Pages/Testimonials'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about-us' element={<About/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contact-us' element={<Contact/>}></Route>
          <Route path='/blogs' element={<Blog/>}></Route>
          <Route path='/blog/1' element={<BlogDescription/>}></Route>
          <Route path='/crops' element={<Crops/>}></Route>
          <Route path='/testimonials' element={<Testimonials/>}></Route>
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </Router>
    </div>
  )
}

export default App