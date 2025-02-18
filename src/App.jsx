import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import TeamSection from './components/TeamSection'
import OfferSection from './components/OfferSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><TeamSection /></div>
      <div id='offer'><OfferSection /></div>
      <div id='contact'><ContactSection /></div>
      <Footer/>
      {/* Add other sections with ids */}
    </div>
  )
}

export default App