import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Wedding from '../components/WeddingSlider'
import './gallery.css'
import WeddingRates from '../components/WeddingRates'

const WeddingPage = ({isOpen, toggle}) => {

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar id="reMargin" toggle={toggle}/>
    <div className="slider-container">
    <Wedding />
    </div>
    <WeddingRates />
    <Footer />
    </>
  )
}

export default WeddingPage