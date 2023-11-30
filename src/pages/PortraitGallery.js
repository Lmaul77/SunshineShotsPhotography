import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Portrait from '../components/PortraitSlider'
import './gallery.css'
import PortraitRates from '../components/PortraitRates'

const PortraitPage = ({isOpen, toggle}) => {

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar id="reMargin" toggle={toggle}/>
    <div className="slider-container">
    <Portrait />
    </div>
    <PortraitRates />
    <Footer />
    </>
  )
}

export default PortraitPage