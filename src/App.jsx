import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Componeats/Hero'
import About from './Componeats/About'
import Project from './Componeats/Project'
import Certificate from './Componeats/Certificate'
import ContactUs from './Componeats/ContactUs'
import Navbar2 from './Componeats/Navbar2'
import Footer from './Componeats/Footer'
function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <Routes>

        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<ContactUs />} />

       
        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App

