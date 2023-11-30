import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './gallery.css'
import Newborn from '../components/NewbornSlider'
import NewbornRates from '../components/NewbornRates'

const NewbornPage = ({isOpen, toggle}) => {

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar id="reMargin" toggle={toggle}/>
    <div className="slider-container">
    <Newborn />
    </div>
    <NewbornRates />
    <Footer />
    </>
  )
}

export default NewbornPage